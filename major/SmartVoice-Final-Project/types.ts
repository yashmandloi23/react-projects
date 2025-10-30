export interface User {
  id: string;
  name: string;
  email: string;
  avatarUrl: string;
}

export enum InterviewMode {
  VOICE = 'Voice',
  CODING = 'Coding',
  TEXT = 'Text',
}

export enum InterviewDifficulty {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard',
}

export interface InterviewTemplate {
  id: string;
  name: string;
  description: string;
  type: 'company' | 'technology';
  company: string;
  tags: string[];
}

export interface InterviewQuestion {
  id: string;
  text: string;
  category?: string;
  expectedKeyPoints?: string[];
  rubric?: string;
  followUpQuestion?: string;
}

export interface InterviewSession {
  id: string;
  template: InterviewTemplate;
  mode: InterviewMode;
  difficulty: InterviewDifficulty;
  techStack: string;
  questions: InterviewQuestion[];
}

export interface InterviewFeedback {
  sessionId: string;
  overallScore: number;
  summary: string;
  strengths: string;
  areasForImprovement: string;
  scores: {
    technicalKnowledge: number;
    problemSolving: number;
    communication: number;
    clarity: number;
  };
  perQuestionFeedback: Array<{
    questionId: string;
    questionText: string;
    feedback: string;
    score: number;
  }>;
}