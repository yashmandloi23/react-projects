import React, { useState, useEffect } from 'react';
import { User, InterviewTemplate, InterviewMode, InterviewDifficulty, InterviewSession } from './types';
import { GooeyButton } from './components/GooeyButton';
import { getTemplates } from './services/mockApi';
import { generateAiQuestions } from './services/aiEngine';
import { InterviewRoom } from './components/InterviewRoom';
import { FeedbackDashboard } from './components/FeedbackDashboard';
import { AuthPage } from './components/AuthPage';
import { CheckCircleIcon } from './components/icons/CheckCircleIcon';
import { BarChartIcon } from './components/icons/BarChartIcon';
import { SparklesIcon } from './components/icons/SparklesIcon';
import { TwitterIcon } from './components/icons/TwitterIcon';
import { GithubIcon } from './components/icons/GithubIcon';
import { LinkedInIcon } from './components/icons/LinkedInIcon';

// A new component that combines the dashboard and setup
const InterviewEngine: React.FC<{ 
    templates: InterviewTemplate[]; 
    onStart: (templateId: string, mode: InterviewMode, difficulty: InterviewDifficulty, techStack: string, numberOfQuestions: number) => void;
    isGenerating: boolean;
}> = ({ templates, onStart, isGenerating }) => {
    const [selectedMode, setSelectedMode] = useState<InterviewMode>(InterviewMode.VOICE);
    const [selectedDifficulty, setSelectedDifficulty] = useState<InterviewDifficulty>(InterviewDifficulty.MEDIUM);
    const [techStack, setTechStack] = useState('');
    const [numberOfQuestions, setNumberOfQuestions] = useState(5);
    const [companyContext, setCompanyContext] = useState('');

    const companyTemplates = templates.filter(t => t.type === 'company');
    const techTemplates = templates.filter(t => t.type === 'technology');

    const handlePrebuiltClick = (template: InterviewTemplate) => {
        setTechStack(template.tags.join(', '));
        if (template.type === 'company') {
            setCompanyContext(template.company);
        } else {
            setCompanyContext('');
        }
    };
    
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (isGenerating) return;
        const templateForContext = templates.find(t => t.company.toLowerCase() === companyContext.toLowerCase());
        onStart(templateForContext?.id || '', selectedMode, selectedDifficulty, techStack, numberOfQuestions);
    };

    return (
        <div className="min-h-screen bg-gray-50 pt-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-800">AI Interview Engine</h1>
                    <p className="mt-2 text-lg text-gray-600">Start with a pre-built session or create your own fully customized mock interview.</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Start with a Template</h2>
                    <p className="text-sm text-gray-500 mb-4">Click a template to pre-fill the custom form below.</p>
                    <h3 className="font-semibold text-gray-600 mb-2">By Company</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-4">
                        {companyTemplates.map(t => (
                            <button key={t.id} onClick={() => handlePrebuiltClick(t)} className="p-4 border rounded-lg text-left hover:bg-gray-100 hover:shadow-md transition-all disabled:opacity-50" disabled={isGenerating}>
                                <p className="font-bold">{t.company}</p>
                                <p className="text-sm text-gray-600">{t.name}</p>
                            </button>
                        ))}
                    </div>
                     <h3 className="font-semibold text-gray-600 mb-2">By Technology</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                         {techTemplates.map(t => (
                            <button key={t.id} onClick={() => handlePrebuiltClick(t)} className="p-4 border rounded-lg text-left hover:bg-gray-100 hover:shadow-md transition-all disabled:opacity-50" disabled={isGenerating}>
                                <p className="font-bold">{t.company}</p>
                                <p className="text-sm text-gray-600">{t.description}</p>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
                    <div className="flex items-center mb-4">
                        <div className="w-8 h-0.5 bg-gray-300"></div>
                        <h2 className="text-2xl font-semibold text-gray-700 mx-4">Create a Custom Interview</h2>
                        <div className="flex-grow h-0.5 bg-gray-300"></div>
                    </div>
                     <form onSubmit={handleSubmit} className="space-y-6">
                        <fieldset disabled={isGenerating} className="space-y-6">
                            <div>
                                <label htmlFor="companyContext" className="block text-sm font-medium text-gray-700">Company Context (Optional)</label>
                                <input type="text" id="companyContext" value={companyContext} onChange={e => setCompanyContext(e.target.value)} placeholder="e.g., Google, Amazon" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                            </div>
                            <div>
                                <label htmlFor="techStack" className="block text-sm font-medium text-gray-700">Technical Skills / Role</label>
                                <input type="text" id="techStack" value={techStack} onChange={e => setTechStack(e.target.value)} required placeholder="e.g., React, DSA, Node.js" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"/>
                                <p className="mt-1 text-xs text-gray-500">Separate skills with commas for best results.</p>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Number of Questions</label>
                                <div className="mt-2 flex flex-wrap gap-2">{[3, 5, 7, 10, 15].map(num => (<button type="button" key={num} onClick={() => setNumberOfQuestions(num)} className={`px-4 py-2 rounded-full text-sm font-medium ${numberOfQuestions === num ? 'bg-cyan-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{num}</button>))}</div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Interview Mode</label>
                                <div className="mt-2 flex space-x-4">{Object.values(InterviewMode).map(mode => (<button type="button" key={mode} onClick={() => setSelectedMode(mode)} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedMode === mode ? 'bg-teal-600 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{mode}</button>))}</div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Difficulty</label>
                                <div className="mt-2 flex space-x-4">{Object.values(InterviewDifficulty).map(diff => (<button type="button" key={diff} onClick={() => setSelectedDifficulty(diff)} className={`px-4 py-2 rounded-full text-sm font-medium ${selectedDifficulty === diff ? 'bg-amber-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}>{diff}</button>))}</div>
                            </div>
                        </fieldset>
                        <div className="pt-4"><GooeyButton type="submit" disabled={isGenerating} className="w-full">{isGenerating ? 'Generating Your Interview...' : 'Start Custom Interview'}</GooeyButton></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

type Page = 'home' | 'login' | 'interview_engine' | 'interview_active' | 'feedback';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [page, setPage] = useState<Page>('home');
  const [templates, setTemplates] = useState<InterviewTemplate[]>([]);
  const [activeSession, setActiveSession] = useState<InterviewSession | null>(null);
  const [completedSession, setCompletedSession] = useState<InterviewSession | null>(null);
  const [interviewAnswers, setInterviewAnswers] = useState<Map<string, string>>(new Map());
  const [isGenerating, setIsGenerating] = useState(false);

  useEffect(() => {
    getTemplates().then(setTemplates);
  }, []);
  
  const handleStartInterview = async (templateId: string, mode: InterviewMode, difficulty: InterviewDifficulty, techStack: string, numberOfQuestions: number) => {
    setIsGenerating(true);
    try {
      const companyContext = templates.find(t => t.id === templateId)?.company || '';
      const aiQuestions = await generateAiQuestions(techStack, difficulty, numberOfQuestions, companyContext);

      const template = templates.find(t => t.id === templateId) || templates.find(t => t.company.toLowerCase() === techStack.toLowerCase()) || templates[0];
      
      const session: InterviewSession = {
        id: `session-${Date.now()}`,
        template,
        mode,
        difficulty,
        techStack,
        questions: aiQuestions,
      };

      setActiveSession(session);
      setPage('interview_active');
    } catch (error) {
      console.error("Failed to start AI interview:", error);
      alert("Failed to generate AI interview questions. Please check your API key and network connection.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleFinishInterview = (session: InterviewSession, answers: Map<string, string>) => {
    setCompletedSession(session);
    setInterviewAnswers(answers);
    setActiveSession(null);
    setPage('feedback');
  }

  const handleAuthSuccess = (authedUser: User) => {
    setUser(authedUser);
    setPage('interview_engine');
  }
  
  const handleLogout = () => {
      setUser(null);
      setPage('home');
  }

  const handleGetStarted = () => {
      if (user) {
          setPage('interview_engine');
      } else {
          setPage('login');
      }
  };

  const renderPage = () => {
    if (!user) {
        switch (page) {
            case 'login':
                return <AuthPage onAuthSuccess={handleAuthSuccess} />;
            case 'home':
            default:
                return <HomePage onGetStarted={handleGetStarted} templates={templates}/>;
        }
    }

    switch (page) {
      case 'interview_active':
        return activeSession ? <InterviewRoom session={activeSession} onFinish={handleFinishInterview} /> : <div>Error: No active session.</div>;
      case 'feedback':
        return completedSession ? <FeedbackDashboard session={completedSession} answers={interviewAnswers} onBack={() => setPage('interview_engine')} /> : <div>Error: No feedback session found.</div>
      case 'interview_engine':
        return <InterviewEngine templates={templates} onStart={handleStartInterview} isGenerating={isGenerating} />;
      case 'home':
        return <HomePage onGetStarted={handleGetStarted} templates={templates}/>;
      default:
        setPage('interview_engine');
        return <InterviewEngine templates={templates} onStart={handleStartInterview} isGenerating={isGenerating} />;
    }
  };

  return (
    <main>
      {page !== 'interview_active' && page !== 'login' && <Navbar user={user} onLogin={() => setPage('login')} onLogout={handleLogout} onGoHome={() => setPage('home')} />}
      {renderPage()}
    </main>
  );
};

const Navbar: React.FC<{ user: User | null; onLogin: () => void; onLogout: () => void; onGoHome: () => void; }> = ({ user, onLogin, onLogout, onGoHome }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLogoutClick = () => {
        setIsProfileOpen(false);
        onLogout();
    }

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 shadow-md backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <button onClick={onGoHome} className="text-2xl font-bold text-gray-800">SmartVoice</button>
                    </div>
                    <div className="flex items-center space-x-4">
                        {user ? (
                           <button onClick={() => setIsProfileOpen(true)} className="flex items-center space-x-2 p-1 rounded-full hover:bg-gray-200/50 transition-colors">
                                <span className={`hidden sm:block text-gray-700 font-medium`}>{user.name}</span>
                                <img src={user.avatarUrl} alt="avatar" className="h-8 w-8 rounded-full" />
                            </button>
                        ) : (
                            <button onClick={onLogin} className="px-4 py-2 text-sm font-medium text-white bg-cyan-600 rounded-md hover:bg-cyan-700">
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {user && (
                <div className={`fixed inset-0 z-50 transition-opacity duration-300 ${isProfileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                    <div className="absolute inset-0 bg-black/30" onClick={() => setIsProfileOpen(false)}></div>
                    <div className={`
                        absolute top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-lg rounded-b-2xl
                        transition-transform duration-300 ease-in-out
                        ${isProfileOpen ? 'translate-y-0' : '-translate-y-full'}
                    `}>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                            <div className="text-center">
                                <img src={user.avatarUrl} alt="avatar" className="h-20 w-20 rounded-full mx-auto mb-4 border-4 border-cyan-500" />
                                <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
                                <p className="text-gray-500">{user.email}</p>
                                <div className="mt-6">
                                    <button onClick={handleLogoutClick} className="w-full max-w-xs mx-auto px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

const HomePage: React.FC<{ onGetStarted: () => void, templates: InterviewTemplate[] }> = ({ onGetStarted, templates }) => {
    const imageMap: { [key: string]: string } = {
        't-google': 'https://images.unsplash.com/photo-1612873346068-1d4b76372235?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=435',
        't-meta': 'https://images.unsplash.com/photo-1689439518156-3659596b5c6c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
        't-amazon': 'https://images.unsplash.com/photo-1602359337719-a8bcbd1f7b51?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=299',
        't-react': 'https://images.unsplash.com/photo-1581276879432-15e50529f34b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fFJlYWN0fGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        't-apple': 'https://images.unsplash.com/photo-1563203369-26f2e4a5ccf7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEFQUGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500',
        't-dsa': 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80'
    };

    return (
        <div className="bg-[#FAFBFC] text-gray-800">
            {/* Hero Section */}
            <div 
              className="relative h-screen flex items-center justify-center text-center text-gray-800 bg-cover bg-center"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1664447972779-316251bd8bd7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032')" }}
            >
                <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
                <div className="relative z-10 p-4">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                        Ace Your Tech Interview
                    </h1>
                    <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto text-gray-600">
                        Harness the power of AI to simulate real-world interviews. Get instant, detailed feedback on your technical skills, communication, and confidence.
                    </p>
                    <div className="mt-10">
                        <GooeyButton onClick={onGetStarted}>
                            Start Your Free Session
                        </GooeyButton>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <section className="py-20 bg-gradient-to-br from-white to-cyan-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Why Choose SmartVoice?</h2>
                        <p className="mt-2 text-lg text-gray-600">The ultimate toolkit to land your dream job.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <SparklesIcon className="w-12 h-12 mx-auto text-cyan-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Realistic AI Interviews</h3>
                            <p className="text-gray-600">Engage in dynamic conversations with an AI that adapts to your responses.</p>
                        </div>
                        <div className="p-6">
                            <BarChartIcon className="w-12 h-12 mx-auto text-cyan-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Instant, Detailed Feedback</h3>
                            <p className="text-gray-600">Receive a comprehensive report on your performance, from technical accuracy to delivery.</p>
                        </div>
                        <div className="p-6">
                            <CheckCircleIcon className="w-12 h-12 mx-auto text-cyan-600 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Customized Practice Sessions</h3>
                            <p className="text-gray-600">Tailor your interviews to specific roles, companies, and technologies.</p>
                        </div>
                    </div>
                </div>
            </section>

             {/* Pre-built Interview Cards Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Practice for Top Companies & Roles</h2>
                        <p className="mt-2 text-lg text-gray-600">Jump right into a targeted session with our pre-built interview templates.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {templates.map(template => (
                             <div key={template.id} className="relative aspect-[4/5] bg-gray-900 rounded-2xl shadow-lg overflow-hidden group transform hover:-translate-y-2 transition-transform duration-300">
                                <img src={imageMap[template.id]} alt={template.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                <div className="relative h-full flex flex-col justify-end p-6 text-white">
                                    <h3 className="font-bold text-xl mb-1">{template.type === 'company' ? template.company : template.name}</h3>
                                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">{template.description}</p>
                                    <button 
                                        onClick={onGetStarted} 
                                        className="w-full text-center px-4 py-2 bg-white text-gray-800 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                                    >
                                        Practice Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Achievements Section */}
            <section className="py-20 bg-gradient-to-br from-white to-cyan-100 text-gray-800">
                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <p className="text-5xl font-bold">10,000+</p>
                            <p className="mt-2 text-lg">Interviews Completed</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">98%</p>
                            <p className="mt-2 text-lg">User Satisfaction</p>
                        </div>
                        <div>
                            <p className="text-5xl font-bold">4.9/5</p>
                            <p className="mt-2 text-lg">Average Rating</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gradient-to-br from-white to-cyan-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-800">Loved by Thousands of Aspiring Engineers</h2>
                        <div className="mt-8 space-y-8">
                            <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                                <p className="text-gray-600 italic">"SmartVoice was a game-changer. The AI feedback was brutally honest but incredibly helpful. I nailed my interview with Google!"</p>
                                <p className="mt-4 font-semibold text-gray-800">- Sarah J, Software Engineer at Google</p>
                            </div>
                             <div className="p-6 bg-white/70 backdrop-blur-sm rounded-xl border border-gray-200 shadow-sm">
                                <p className="text-gray-600 italic">"The ability to practice React-specific questions was amazing. I felt so much more confident walking into my final round."</p>
                                <p className="mt-4 font-semibold text-gray-800">- Michael B, Frontend Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Footer */}
            <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8 xl:col-span-1">
                             <span className="text-2xl font-bold">SmartVoice</span>
                            <p className="text-gray-400 text-base">Your personal AI-powered interview coach.</p>
                            <div className="flex space-x-6">
                                <a href="#" className="text-gray-400 hover:text-white"><TwitterIcon className="h-6 w-6" /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><GithubIcon className="h-6 w-6" /></a>
                                <a href="#" className="text-gray-400 hover:text-white"><LinkedInIcon className="h-6 w-6" /></a>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                                    <ul className="mt-4 space-y-4">
                                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Mock Interviews</a></li>
                                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Feedback Analysis</a></li>
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                    <ul className="mt-4 space-y-4">
                                         <li><a href="#" className="text-base text-gray-300 hover:text-white">Pricing</a></li>
                                         <li><a href="#" className="text-base text-gray-300 hover:text-white">FAQ</a></li>
                                    </ul>
                                </div>
                            </div>
                             <div className="md:grid md:grid-cols-2 md:gap-8">
                                <div>
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                    <ul className="mt-4 space-y-4">
                                        <li><a href="#" className="text-base text-gray-300 hover:text-white">About</a></li>
                                        <li><a href="#" className="text-base text-gray-300 hover:text-white">Blog</a></li>
                                    </ul>
                                </div>
                                <div className="mt-12 md:mt-0">
                                    <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                    <ul className="mt-4 space-y-4">
                                         <li><a href="#" className="text-base text-gray-300 hover:text-white">Privacy</a></li>
                                         <li><a href="#" className="text-base text-gray-300 hover:text-white">Terms</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 border-t border-gray-700 pt-8">
                        <p className="text-base text-gray-400 xl:text-center">&copy; 2024 SmartVoice, Inc. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;