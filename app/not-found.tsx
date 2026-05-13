'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div
        className="relative w-full max-w-md"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated background glow */}
        {isHovered && (
          <div
            className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-lg blur-xl opacity-30 transition-all duration-300"
            style={{
              left: `${mousePosition.x - 128}px`,
              top: `${mousePosition.y - 128}px`,
              width: '256px',
              height: '256px',
            }}
          />
        )}

        {/* Content card */}
        <div className="relative bg-slate-800/50 backdrop-blur-md border border-purple-500/20 rounded-lg p-8 shadow-2xl">
          {/* 404 Text */}
          <div className="text-center mb-8">
            <h1 className="text-8xl font-bold bg-linear-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              404
            </h1>
            <h2 className="text-2xl font-semibold text-white mt-4">
              Page Not Found
            </h2>
            <p className="text-purple-300 mt-2">
              The page you&apos;re looking for has wandered off into the void.
            </p>
          </div>

          {/* Interactive buttons */}
          <div className="space-y-4">
            <Link href="/">
              <button className="w-full relative group px-6 py-3 font-semibold text-white rounded-lg overflow-hidden bg-linear-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 active:scale-95">
                <span className="relative z-10">Back to Home</span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="w-full px-6 py-3 font-semibold text-purple-300 border-2 border-purple-500/50 rounded-lg hover:border-purple-400 hover:text-purple-200 transition-all duration-300 transform hover:scale-105 active:scale-95 bg-slate-900/30"
            >
              Go Back
            </button>
          </div>

          {/* Fun facts */}
          <div className="mt-8 pt-6 border-t border-purple-500/20">
            <p className="text-sm text-purple-300 text-center italic">
              💡 Tip: You can use the navigation menu to explore our site.
            </p>
          </div>
        </div>

        {/* Floating orbs animation */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-purple-500/20 rounded-full blur-2xl animate-bounce" />
        <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-pink-500/20 rounded-full blur-2xl animate-bounce animation-delay-2000" />
      </div>
    </div>
  );
}
