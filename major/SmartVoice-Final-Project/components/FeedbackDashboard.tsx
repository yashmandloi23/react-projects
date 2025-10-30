import React, { useEffect, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { InterviewFeedback, InterviewSession } from '../types';
import { generateAiFeedback } from '../services/aiEngine';

interface FeedbackDashboardProps {
  session: InterviewSession;
  answers: Map<string, string>;
  onBack: () => void;
}

export const FeedbackDashboard: React.FC<FeedbackDashboardProps> = ({ session, answers, onBack }) => {
  const [feedback, setFeedback] = useState<InterviewFeedback | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedback = async () => {
      setLoading(true);
      try {
        const data = await generateAiFeedback(session, answers);
        setFeedback(data);
      } catch (error) {
        console.error("Failed to generate AI feedback:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchFeedback();
  }, [session, answers]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
        <div className="text-2xl font-semibold text-gray-600">Generating your personalized feedback report...</div>
        <p className="text-gray-500 mt-2">Our AI is analyzing your answers. This may take a moment.</p>
        <div className="mt-4 w-16 h-16 border-4 border-cyan-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!feedback) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center p-4">
        <div className="text-2xl font-semibold text-red-600">Could not load feedback.</div>
        <p className="text-gray-500 mt-2">There was an issue generating your report. Please try another session.</p>
        <button onClick={onBack} className="mt-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">Back to Dashboard</button>
      </div>
    );
  }

  const chartData = [
    { subject: 'Tech Knowledge', score: feedback.scores.technicalKnowledge, fullMark: 100 },
    { subject: 'Problem Solving', score: feedback.scores.problemSolving, fullMark: 100 },
    { subject: 'Communication', score: feedback.scores.communication, fullMark: 100 },
    { subject: 'Clarity', score: feedback.scores.clarity, fullMark: 100 },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <button 
            onClick={onBack} 
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-cyan-700 bg-cyan-100 hover:bg-cyan-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
          >
            &larr; Back to Dashboard
          </button>
          <h1 className="text-4xl font-bold text-gray-800 mt-4">Interview Feedback Report</h1>
          <p className="text-lg text-gray-500">Session ID: {session.id}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Overall Summary</h2>
              <p className="text-gray-600 leading-relaxed">{feedback.summary}</p>
            </div>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-semibold text-green-600 mb-4">Strengths</h2>
                    <p className="text-gray-600 leading-relaxed">{feedback.strengths}</p>
                </div>
                 <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <h2 className="text-2xl font-semibold text-amber-600 mb-4">Areas for Improvement</h2>
                    <p className="text-gray-600 leading-relaxed">{feedback.areasForImprovement}</p>
                </div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">Per-Question Breakdown</h2>
              <div className="space-y-4">
                {feedback.perQuestionFeedback.map((qf) => (
                   <details key={qf.questionId} className="bg-gray-50 p-4 rounded-lg">
                    <summary className="font-semibold cursor-pointer flex justify-between items-center">
                      <span>{qf.questionText}</span>
                      <span className={`font-bold text-lg ${qf.score > 75 ? 'text-green-600' : qf.score > 50 ? 'text-yellow-600' : 'text-red-600'}`}>{qf.score}/100</span>
                    </summary>
                    <p className="mt-2 text-gray-600 border-t border-gray-200 pt-2">{qf.feedback}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 text-center">
              <h2 className="text-2xl font-semibold text-gray-700">Overall Score</h2>
              <p className="text-7xl font-bold text-cyan-600 my-4">{Math.round(feedback.overallScore)}<span className="text-3xl text-gray-400">/100</span></p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Performance Metrics</h2>
              <div className="w-full h-80">
                <ResponsiveContainer>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Radar name="Your Score" dataKey="score" stroke="#0891B2" fill="#0891B2" fillOpacity={0.6} />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};