import React, { useState, useEffect, useRef, useCallback } from 'react';
import { GoogleGenAI, Modality } from '@google/genai';
import type { LiveSession, LiveServerMessage, Blob } from '@google/genai';
import { InterviewSession, InterviewMode } from '../types';
import { CameraIcon } from './icons/CameraIcon';
import { MicIcon } from './icons/MicIcon';
import { AiInterviewerIcon } from './icons/AiInterviewerIcon';

function encode(bytes: Uint8Array): string {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

const useTextToSpeech = (text: string, options: { shouldSpeak: boolean }) => {
    const [isSpeaking, setIsSpeaking] = useState(false);
    
    useEffect(() => {
        const synth = window.speechSynthesis;
        if (!text || !options.shouldSpeak || !synth) return;

        const speak = () => {
            if (synth.speaking) {
                synth.cancel();
            }

            const utterance = new SpeechSynthesisUtterance(text);
            const voices = synth.getVoices();
            const googleVoice = voices.find(v => v.name === "Google US English") || voices.find(v => v.lang.startsWith('en-US'));
            if(googleVoice) utterance.voice = googleVoice;

            utterance.onstart = () => setIsSpeaking(true);
            utterance.onend = () => setIsSpeaking(false);
            utterance.onerror = (e) => {
                console.error("SpeechSynthesisUtterance.onerror", e);
                setIsSpeaking(false);
            };
            
            setTimeout(() => {
                synth.speak(utterance);
            }, 750); // Natural pause before speaking
        };
        
        if (synth.getVoices().length > 0) {
            speak();
        } else {
            synth.onvoiceschanged = speak;
        }

        return () => {
            if (synth.speaking) {
                synth.cancel();
            }
        };
    }, [text, options.shouldSpeak]);

    return { isSpeaking };
};

interface InterviewRoomProps {
  session: InterviewSession;
  onFinish: (session: InterviewSession, answers: Map<string, string>) => void;
}

export const InterviewRoom: React.FC<InterviewRoomProps> = ({ session, onFinish }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [currentTranscript, setCurrentTranscript] = useState('');
  const [answers, setAnswers] = useState<Map<string, string>>(new Map());
  const [interviewerStatus, setInterviewerStatus] = useState('Waiting to start...');
  const [isFinishing, setIsFinishing] = useState(false);
  
  const [cameraPermissionState, setCameraPermissionState] = useState<'prompt' | 'granted' | 'denied' | 'error'>('prompt');
  const [cameraErrorMessage, setCameraErrorMessage] = useState<string>('');

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const sessionPromiseRef = useRef<Promise<LiveSession> | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const inputAudioContextRef = useRef<AudioContext | null>(null);
  const scriptProcessorRef = useRef<ScriptProcessorNode | null>(null);
  const sourceNodeRef = useRef<MediaStreamAudioSourceNode | null>(null);
  
  const currentQuestion = session.questions[currentQuestionIndex];
  const { isSpeaking } = useTextToSpeech(currentQuestion?.text, { shouldSpeak: session.mode === InterviewMode.VOICE });

  const setupCamera = useCallback(async () => {
    if (videoStreamRef.current) {
        videoStreamRef.current.getTracks().forEach(track => track.stop());
    }

    try {
        if (navigator.permissions) {
            const permissionStatus = await navigator.permissions.query({ name: 'camera' as PermissionName });
            
            if (permissionStatus.state === 'denied') {
                setCameraPermissionState('denied');
                setCameraErrorMessage("Camera access is blocked in your browser settings. Please enable it, then click 'Try Again'.");
                return;
            }
        }

        const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
        videoStreamRef.current = stream;
        if (videoRef.current) {
            videoRef.current.srcObject = stream;
        }
        setCameraPermissionState('granted');
        setCameraErrorMessage('');
    } catch (err: any) {
        console.error("Could not access camera", err);
        if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
            setCameraPermissionState('denied');
            setCameraErrorMessage("You denied camera access. To proceed, please enable it in your browser settings and click 'Try Again'.");
        } else {
            setCameraPermissionState('error');
            setCameraErrorMessage("Could not access camera. Is it being used by another app?");
        }
    }
  }, []);

  useEffect(() => {
    setInterviewerStatus(isSpeaking ? 'Speaking...' : isRecording ? 'Listening...' : 'Ready for your answer.');
  }, [isSpeaking, isRecording]);

  useEffect(() => {
    setupCamera();
    
    return () => {
      videoStreamRef.current?.getTracks().forEach(track => track.stop());
      mediaStreamRef.current?.getTracks().forEach(track => track.stop());
      inputAudioContextRef.current?.close().catch(() => {});
    };
  }, [setupCamera]);

  const stopAudioProcessing = useCallback(() => {
    mediaStreamRef.current?.getTracks().forEach(track => track.stop());
    mediaStreamRef.current = null;
    scriptProcessorRef.current?.disconnect();
    sourceNodeRef.current?.disconnect();
    scriptProcessorRef.current = null;
    sourceNodeRef.current = null;
    inputAudioContextRef.current?.close().catch(() => {});
    inputAudioContextRef.current = null;
  }, []);

  const startVoiceRecording = useCallback(async () => {
    if (isRecording) return;
    setIsRecording(true);
    setCurrentTranscript('');

    try {
        mediaStreamRef.current = await navigator.mediaDevices.getUserMedia({ audio: true });
        inputAudioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
        
        const source = inputAudioContextRef.current.createMediaStreamSource(mediaStreamRef.current);
        sourceNodeRef.current = source;
        scriptProcessorRef.current = inputAudioContextRef.current.createScriptProcessor(4096, 1, 1);

        sessionPromiseRef.current = ai.live.connect({
            model: 'gemini-2.5-flash-native-audio-preview-09-2025',
            callbacks: {
                onopen: () => console.debug('Live session opened'),
                onmessage: (message: LiveServerMessage) => {
                    if (message.serverContent?.inputTranscription) {
                        const text = message.serverContent.inputTranscription.text;
                        setCurrentTranscript(prev => prev + text);
                    }
                },
                onerror: (e: ErrorEvent) => console.error('Live session error', e),
                onclose: (e: CloseEvent) => console.debug('Live session closed'),
            },
            config: {
                inputAudioTranscription: {},
                responseModalities: [Modality.AUDIO],
            },
        });

        scriptProcessorRef.current.onaudioprocess = (audioProcessingEvent) => {
            const inputData = audioProcessingEvent.inputBuffer.getChannelData(0);
            const l = inputData.length;
            const int16 = new Int16Array(l);
            for (let i = 0; i < l; i++) { int16[i] = inputData[i] * 32768; }
            const pcmBlob: Blob = { data: encode(new Uint8Array(int16.buffer)), mimeType: 'audio/pcm;rate=16000' };
            sessionPromiseRef.current?.then((session) => { session.sendRealtimeInput({ media: pcmBlob }); });
        };

        source.connect(scriptProcessorRef.current);
        scriptProcessorRef.current.connect(inputAudioContextRef.current.destination);

    } catch (error) {
        console.error("Failed to start voice recording:", error);
        setInterviewerStatus('Mic setup failed. Please check permissions.');
        setIsRecording(false);
    }
  }, [isRecording]);

  const stopVoiceRecording = useCallback(async () => {
    if (!isRecording) return;
    setIsRecording(false);
    
    stopAudioProcessing();

    if (sessionPromiseRef.current) {
        try {
            const session = await sessionPromiseRef.current;
            session.close();
        } catch (error) {
            console.error("Error closing live session:", error);
        } finally {
            sessionPromiseRef.current = null;
        }
    }

    setAnswers(prev => new Map(prev).set(currentQuestion.id, currentTranscript));
  }, [isRecording, stopAudioProcessing, currentQuestion.id, currentTranscript]);


  const handleNextQuestion = () => {
    if (isRecording) stopVoiceRecording();
    if (session.mode !== InterviewMode.VOICE) {
        setAnswers(prev => new Map(prev).set(currentQuestion.id, currentTranscript));
    }

    if (currentQuestionIndex < session.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setCurrentTranscript(answers.get(session.questions[currentQuestionIndex + 1].id) || '');
    } else {
      handleFinishInterview();
    }
  };

  const handleFinishInterview = async () => {
    if (isFinishing) return;
    setIsFinishing(true);

    let finalAnswers = answers;
    if (isRecording) {
      await stopVoiceRecording();
      // Use the final transcript directly as state update might not be immediate
      finalAnswers = new Map(answers).set(currentQuestion.id, currentTranscript);
    } else if (session.mode !== InterviewMode.VOICE) {
      finalAnswers = new Map(answers).set(currentQuestion.id, currentTranscript);
    }
    
    onFinish(session, finalAnswers);
  };

  const handleTextAnswerChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentTranscript(e.target.value);
  }

  const renderAnswerArea = () => {
    if (session.mode === InterviewMode.VOICE) {
      return (
        <div className="flex-grow flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg">
          <p className="text-gray-400 text-sm mb-4 text-center">
            {isRecording ? "Your answer is being transcribed live..." : "Click the mic to start answering."}
          </p>
          <div className="w-full h-32 p-3 bg-gray-700 border border-gray-600 rounded-md overflow-y-auto">
            {currentTranscript || <span className="text-gray-500">...</span>}
          </div>
          <button 
            onClick={isRecording ? stopVoiceRecording : startVoiceRecording} 
            disabled={isSpeaking}
            className={`mt-4 p-4 rounded-full transition-all duration-200 ${isRecording ? 'bg-red-500 text-white animate-pulse' : 'bg-cyan-500 text-white hover:bg-cyan-600'} disabled:bg-gray-500 disabled:cursor-not-allowed`}
          >
            <MicIcon className="w-8 h-8" />
          </button>
        </div>
      );
    }
    
    return (
        <div className="flex-grow flex flex-col p-4 bg-gray-800 rounded-lg">
             <textarea
                className="w-full flex-grow p-3 border rounded-md focus:ring-2 focus:ring-cyan-400 bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                placeholder={session.mode === InterviewMode.CODING ? "Write your code here..." : "Type your answer here..."}
                value={currentTranscript}
                onChange={handleTextAnswerChange}
            />
        </div>
    );
  };
  
  const renderCameraView = () => {
    if (cameraPermissionState === 'granted') {
      return <video ref={videoRef} autoPlay playsInline muted className="w-full h-full object-cover transform scale-x-[-1]"></video>;
    }

    return (
      <div className="p-4 text-red-400 flex flex-col items-center justify-center h-full text-center">
        <CameraIcon className="w-12 h-12 mx-auto mb-2 text-red-500" />
        <p className="font-semibold">Camera Access Required</p>
        {cameraErrorMessage && <p className="text-sm mb-4">{cameraErrorMessage}</p>}
        {(cameraPermissionState === 'denied' || cameraPermissionState === 'error') && (
          <button 
            onClick={setupCamera}
            className="px-4 py-2 bg-cyan-600 text-white rounded-md text-sm hover:bg-cyan-700"
          >
            Try Again
          </button>
        )}
        {cameraPermissionState === 'prompt' && (
          <p className="text-sm text-yellow-400 animate-pulse">Waiting for camera permission...</p>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-800 text-white flex flex-col p-4 sm:p-6 lg:p-8 font-sans">
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="flex flex-col bg-gray-900 rounded-2xl p-6 border border-gray-700">
          <div className="flex items-center space-x-4 mb-4">
            <AiInterviewerIcon className="w-12 h-12" isSpeaking={isSpeaking} />
            <div>
              <h2 className="text-xl font-bold">Alex, your AI Interviewer</h2>
              <p className={`text-sm transition-colors ${isRecording ? 'text-green-400' : 'text-yellow-400'}`}>{interviewerStatus}</p>
            </div>
          </div>
          <div className="flex-grow p-6 bg-gray-800 rounded-lg flex flex-col justify-center">
            <p className="text-gray-400 mb-2">Question {currentQuestionIndex + 1} of {session.questions.length}</p>
            <p className="text-2xl font-semibold leading-relaxed">{currentQuestion?.text || "Loading question..."}</p>
          </div>
        </div>
        
        <div className="flex flex-col bg-gray-900 rounded-2xl p-6 border border-gray-700">
            <div className="relative aspect-video bg-black rounded-lg mb-4 overflow-hidden flex items-center justify-center">
                {renderCameraView()}
                 {cameraPermissionState === 'granted' && (
                    <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full">
                        <CameraIcon className="w-6 h-6" />
                    </div>
                 )}
            </div>
            {renderAnswerArea()}
        </div>
      </div>
      
      <div className="mt-6 flex items-center justify-between bg-gray-900 p-4 rounded-2xl border border-gray-700">
        <div>
          <p className="text-sm text-gray-400 hidden sm:block">
            {session.template.company} - {session.template.name} ({session.difficulty})
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={handleNextQuestion} 
            disabled={isRecording || isFinishing || isSpeaking}
            className="px-6 py-3 bg-cyan-600 rounded-full font-semibold hover:bg-cyan-700 disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            {currentQuestionIndex < session.questions.length - 1 ? 'Next Question' : 'Finish Interview'}
          </button>
        </div>
      </div>
    </div>
  );
};