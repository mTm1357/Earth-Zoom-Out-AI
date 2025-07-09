"use client";

import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex items-center justify-start">
        <Link
          href="/"
          className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">🌍</span>
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Earth Zoom Out AI
          </h1>
        </Link>
      </nav>
    </header>
  );
}
