import React from 'react';

export const AiInterviewerIcon: React.FC<{ className?: string; isSpeaking?: boolean }> = ({ className, isSpeaking }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`relative ${className}`}
  >
    <defs>
        <style>
            {`
                @keyframes rotate {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .speaking-ring {
                    animation: rotate 2s linear infinite;
                    transform-origin: center;
                }
            `}
        </style>
    </defs>
    {/* Outer ring for animation */}
    <circle cx="12" cy="12" r="11" 
        className={`transition-opacity duration-300 ${isSpeaking ? 'stroke-cyan-500 speaking-ring opacity-100' : 'opacity-0'}`}
    />
    {/* Base circle */}
    <circle cx="12" cy="12" r="10" className="stroke-gray-600" />
    {/* "Eyes" */}
    <circle cx="9.5" cy="10.5" r="1" fill="currentColor" className="stroke-none" />
    <circle cx="14.5" cy="10.5" r="1" fill="currentColor" className="stroke-none" />
    {/* "Mouth" */}
    <path d="M9 15 Q12 16 15 15" className="stroke-current" />
  </svg>
);