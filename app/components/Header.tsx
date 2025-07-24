"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-between w-full">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-8 h-8 relative">
            <svg width="32" height="32" viewBox="0 0 32 32" className="w-full h-full">
              <defs>
                <radialGradient id="earthGradient" cx="0.5" cy="0.3" r="0.8">
                  <stop offset="0%" stopColor="#4FC3F7"/>
                  <stop offset="40%" stopColor="#29B6F6"/>
                  <stop offset="70%" stopColor="#0288D1"/>
                  <stop offset="100%" stopColor="#01579B"/>
                </radialGradient>
                <radialGradient id="spaceGradient" cx="0.5" cy="0.5" r="1">
                  <stop offset="0%" stopColor="#1A237E"/>
                  <stop offset="50%" stopColor="#0D47A1"/>
                  <stop offset="100%" stopColor="#000051"/>
                </radialGradient>
                <linearGradient id="aiGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#E91E63"/>
                  <stop offset="50%" stopColor="#9C27B0"/>
                  <stop offset="100%" stopColor="#673AB7"/>
                </linearGradient>
              </defs>
              <rect width="32" height="32" rx="6" fill="url(#spaceGradient)"/>
              <circle cx="6" cy="8" r="0.5" fill="white" opacity="0.8"/>
              <circle cx="26" cy="6" r="0.3" fill="white" opacity="0.6"/>
              <circle cx="28" cy="14" r="0.4" fill="white" opacity="0.7"/>
              <circle cx="4" cy="24" r="0.3" fill="white" opacity="0.5"/>
              <circle cx="24" cy="28" r="0.5" fill="white" opacity="0.8"/>
              <circle cx="16" cy="16" r="8" fill="url(#earthGradient)"/>
              <path d="M12 12 Q14 10 16 12 Q18 11 20 13 L18 15 Q16 14 14 15 L12 14 Z" fill="#2E7D32" opacity="0.8"/>
              <path d="M10 18 Q12 17 14 19 Q16 18 18 20 L16 22 Q14 21 12 22 L10 20 Z" fill="#388E3C" opacity="0.7"/>
              <ellipse cx="20" cy="18" rx="2" ry="1.5" fill="#4CAF50" opacity="0.6"/>
              <circle cx="16" cy="16" r="10" fill="none" stroke="url(#aiGradient)" strokeWidth="1" opacity="0.6"/>
              <circle cx="16" cy="16" r="12" fill="none" stroke="url(#aiGradient)" strokeWidth="0.8" opacity="0.4"/>
              <circle cx="8" cy="16" r="1" fill="url(#aiGradient)" opacity="0.8"/>
              <circle cx="24" cy="16" r="1" fill="url(#aiGradient)" opacity="0.8"/>
              <circle cx="16" cy="8" r="1" fill="url(#aiGradient)" opacity="0.8"/>
              <circle cx="16" cy="24" r="1" fill="url(#aiGradient)" opacity="0.8"/>
            </svg>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Earth Zoom Out AI
          </h1>
        </Link>

        {/* Navigation Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition-colors font-medium"
          >
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Link
            href="/blog"
            className="text-gray-300 hover:text-white transition-colors text-sm"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}
