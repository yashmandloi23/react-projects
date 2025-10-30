import React, { useState } from 'react';
import { GooeyButton } from './GooeyButton';
import { AuthIllustration } from './icons/AuthIllustration';
import { User } from '../types';

interface AuthPageProps {
  onAuthSuccess: (user: User) => void;
}

export const AuthPage: React.FC<AuthPageProps> = ({ onAuthSuccess }) => {
  const [isLoginMode, setIsLoginMode] = useState(true);
  // Pre-fill with correct mock credentials for user convenience
  const [email, setEmail] = useState('test@example.com');
  const [password, setPassword] = useState('password');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (setter: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setter(e.target.value);
    if (error) {
      setError(null); // Clear error when user starts typing
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const user = await import('../services/mockApi').then(api => api.mockLogin(email, password));
      onAuthSuccess(user);
    } catch (err) {
      console.error("Authentication failed", err);
      setError("Invalid credentials. Please use 'test@example.com' and 'password'.");
    } finally {
      setIsLoading(false);
    }
  };

  const toggleMode = () => {
    setIsLoginMode(prev => !prev);
    setError(null);
  };

  return (
    <div className="min-h-screen bg-[#FAFBFC] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
        
        <div className="hidden md:flex items-center justify-center p-8 bg-gray-50">
           <AuthIllustration className="w-full h-auto max-w-sm" />
        </div>
        
        <div className="p-8 md:p-12 flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {isLoginMode ? 'Welcome Back!' : 'Create an Account'}
            </h1>
            <p className="text-gray-500 mb-8">
                {isLoginMode ? 'Log in to continue your journey.' : 'Get started with SmartVoice today.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
                {!isLoginMode && (
                     <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleInputChange(setName)}
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleInputChange(setEmail)}
                        required
                        autoComplete="email"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    />
                </div>
                 <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={handleInputChange(setPassword)}
                        required
                        autoComplete="current-password"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500 sm:text-sm"
                    />
                </div>

                {error && (
                    <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md text-sm">
                        {error}
                    </div>
                )}
                
                <div className="pt-4">
                    <GooeyButton type="submit" disabled={isLoading} className="w-full">
                        {isLoading ? 'Loading...' : (isLoginMode ? 'Login' : 'Create Account')}
                    </GooeyButton>
                </div>
            </form>

            <div className="mt-6 text-center">
                <button onClick={toggleMode} className="text-sm text-cyan-600 hover:underline">
                    {isLoginMode ? "Don't have an account? Sign up" : "Already have an account? Log in"}
                </button>
            </div>
        </div>
      </div>
    </div>
  );
};