import { GoogleGenAI, Type } from '@google/genai';
// FIX: Add InterviewSession and InterviewFeedback to imports
import { InterviewQuestion, InterviewDifficulty, InterviewSession, InterviewFeedback } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });

export const generateAiQuestions = async (
  techStack: string,
  difficulty: InterviewDifficulty,
  numberOfQuestions: number,
  companyContext: string
): Promise<InterviewQuestion[]> => {
  const model = 'gemini-2.5-flash';

  const prompt = `Act as an expert technical interviewer for ${companyContext || 'a top tech company'}. 
  Generate ${numberOfQuestions} unique and challenging interview questions for a candidate specializing in: "${techStack}".
  The difficulty level for these questions should be "${difficulty}".
  Each question should be a simple string. Do not add any conversational text or introductions.
  Ensure the questions are relevant and practical for the specified role and skills.
  Return the questions in a structured JSON object.`;
  
  const responseSchema = {
      type: Type.OBJECT,
      properties: {
          questions: {
              type: Type.ARRAY,
              description: `An array of ${numberOfQuestions} interview questions.`,
              items: {
                  type: Type.OBJECT,
                  properties: {
                      id: {
                          type: Type.STRING,
                          description: 'A unique identifier for the question, can be a random string.'
                      },
                      text: {
                          type: Type.STRING,
                          description: 'The full text of the interview question.'
                      }
                  },
                  required: ['id', 'text']
              }
          }
      },
      required: ['questions']
  };

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonResponseText = response.text.trim();
    const parsedResponse = JSON.parse(jsonResponseText);
    
    if (parsedResponse.questions && Array.isArray(parsedResponse.questions)) {
      // The AI might not generate an ID. Let's add one if it's missing.
      return parsedResponse.questions.map((q: any, index: number) => ({
          id: q.id || `ai-q-${Date.now()}-${index}`,
          text: q.text
      }));
    } else {
        throw new Error("AI response did not contain a 'questions' array.");
    }
  } catch (error) {
    console.error("Error generating questions from AI:", error);
    // Fallback to a simple error message question
    return [{
        id: 'error-q-1',
        text: 'There was an error generating AI questions. Please check your API key and try again. For now, can you tell me about a recent project you enjoyed working on?'
    }];
  }
};

// FIX: Add missing generateAiFeedback function
export const generateAiFeedback = async (
  session: InterviewSession,
  answers: Map<string, string>
): Promise<InterviewFeedback> => {
  const model = 'gemini-2.5-flash';

  const questionsAndAnswers = session.questions.map(q => `
    Question ${session.questions.indexOf(q) + 1} (ID: ${q.id}): ${q.text}
    Candidate's Answer: ${answers.get(q.id) || 'No answer provided.'}
  `).join('\n\n');

  const prompt = `
    Act as a senior technical interviewer and career coach. You have just completed an interview with a candidate.
    
    Interview Context:
    - Role/Skills: ${session.techStack}
    - Difficulty: ${session.difficulty}
    - Company Context: ${session.template.company}

    Here is the transcript of the interview:
    ${questionsAndAnswers}

    Please provide a comprehensive feedback report for the candidate. Evaluate their responses based on technical accuracy, problem-solving skills, communication, and clarity of thought.
    For the per-question feedback, you MUST use the provided question IDs.
    For the scores, you MUST provide an integer between 0 and 100.
    Be constructive and provide actionable advice.

    Return the feedback in a structured JSON object.
  `;

  const feedbackResponseSchema = {
      type: Type.OBJECT,
      properties: {
          sessionId: { type: Type.STRING, description: `The session ID: ${session.id}` },
          overallScore: { type: Type.INTEGER, description: 'Overall score for the candidate from 0 to 100.' },
          summary: { type: Type.STRING, description: 'A brief 2-3 sentence summary of the candidate\'s performance.' },
          strengths: { type: Type.STRING, description: 'A paragraph detailing the candidate\'s key strengths.' },
          areasForImprovement: { type: Type.STRING, description: 'A paragraph detailing the areas where the candidate can improve, with actionable advice.' },
          scores: {
              type: Type.OBJECT,
              properties: {
                  technicalKnowledge: { type: Type.INTEGER, description: 'Score for technical knowledge from 0 to 100.' },
                  problemSolving: { type: Type.INTEGER, description: 'Score for problem-solving skills from 0 to 100.' },
                  communication: { type: Type.INTEGER, description: 'Score for communication skills from 0 to 100.' },
                  clarity: { type: Type.INTEGER, description: 'Score for clarity of thought from 0 to 100.' },
              },
              required: ['technicalKnowledge', 'problemSolving', 'communication', 'clarity']
          },
          perQuestionFeedback: {
              type: Type.ARRAY,
              description: `Feedback for each of the ${session.questions.length} questions.`,
              items: {
                  type: Type.OBJECT,
                  properties: {
                      questionId: { type: Type.STRING, description: 'The original ID of the question.' },
                      questionText: { type: Type.STRING, description: 'The original text of the question.' },
                      feedback: { type: Type.STRING, description: 'Specific, constructive feedback for this question.' },
                      score: { type: Type.INTEGER, description: 'Score for this specific question from 0 to 100.' }
                  },
                  required: ['questionId', 'questionText', 'feedback', 'score']
              }
          }
      },
      required: ['sessionId', 'overallScore', 'summary', 'strengths', 'areasForImprovement', 'scores', 'perQuestionFeedback']
  };

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: feedbackResponseSchema,
      },
    });

    const jsonResponseText = response.text.trim();
    const parsedResponse = JSON.parse(jsonResponseText);

    if (!parsedResponse.sessionId) {
      parsedResponse.sessionId = session.id;
    }

    return parsedResponse as InterviewFeedback;

  } catch (error) {
    console.error("Error generating feedback from AI:", error);
    throw new Error('Failed to generate AI feedback.');
  }
};
