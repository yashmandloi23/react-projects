import React from 'react';

export const AuthIllustration: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="512" height="512" rx="20" fill="url(#paint0_linear_1_2)" />
    <path d="M128 384V256H192V384H128Z" fill="white" fillOpacity="0.8" />
    <path d="M224 384V192H288V384H224Z" fill="white" fillOpacity="0.8" />
    <path d="M320 384V128H384V384H320Z" fill="white" fillOpacity="0.8" />
    <circle cx="160" cy="224" r="16" fill="#F59E0B"/>
    <circle cx="256" cy="160" r="16" fill="#F59E0B"/>
    <circle cx="352" cy="96" r="16" fill="#F59E0B"/>
    <defs>
      <linearGradient id="paint0_linear_1_2" x1="0" y1="0" x2="512" y2="512" gradientUnits="userSpaceOnUse">
        <stop stopColor="#06B6D4" />
        <stop offset="1" stopColor="#67E8F9" />
      </linearGradient>
    </defs>
  </svg>
);