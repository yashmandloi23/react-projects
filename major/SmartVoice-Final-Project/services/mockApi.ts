import {
  User,
  InterviewTemplate,
  InterviewQuestion,
} from '../types';

export const mockLogin = async (email: string, password: string): Promise<User> => {
  console.log(`Attempting login with ${email}`);
  await new Promise(resolve => setTimeout(resolve, 1000));

  if (email.toLowerCase() === 'test@example.com' && password === 'password') {
    return {
      id: 'user-123',
      name: 'Test User',
      email: 'test@example.com',
      avatarUrl: `https://i.pravatar.cc/150?u=${email}`,
    };
  }

  throw new Error('Invalid credentials');
};

const mockTemplates: InterviewTemplate[] = [
  { id: 't-google', name: 'Software Engineer', description: 'General software engineering loop.', type: 'company', company: 'Google', tags: ['React', 'Node.js', 'System Design'] },
  { id: 't-meta', name: 'Frontend Engineer', description: 'Focus on frontend technologies.', type: 'company', company: 'Meta', tags: ['React', 'JavaScript', 'CSS'] },
  { id: 't-amazon', name: 'Backend Engineer', description: 'Backend and systems.', type: 'company', company: 'Amazon', tags: ['Java', 'Spring', 'Microservices'] },
  { id: 't-apple', name: 'iOS Engineer', description: 'Mobile development with Swift.', type: 'company', company: 'Apple', tags: ['Swift', 'UIKit', 'CoreData'] },
  { id: 't-react', name: 'React Specialist', description: 'Deep dive into React and its ecosystem.', type: 'technology', company: 'React', tags: ['React', 'Redux', 'Next.js'] },
  { id: 't-dsa', name: 'Data Structures & Algos', description: 'Classic DSA problems.', type: 'technology', company: 'DSA', tags: ['Algorithms', 'Data Structures'] },
];

export const getTemplates = async (): Promise<InterviewTemplate[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockTemplates;
};
