'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        setOffsetY(window.pageYOffset * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#1a1a2e] to-[#0a0a0a]"
        style={{ transform: `translateY(${offsetY}px)` }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(var(--accent) 1px, transparent 1px),
                           linear-gradient(90deg, var(--accent) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${offsetY}px)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Mitchell Rust
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-delay">
          Software Engineer, Forever Learner
        </p>

        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in-delay-2">
          I'm always building something, take a look at what I've been up to!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-delay-3">
          <Link
            href="/projects"
            className="btn px-8 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white rounded-lg font-semibold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            View Projects
          </Link>
          <a
            href="mailto:mitchellrust@gmail.com"
            className="btn px-8 py-4 glass hover:bg-white/10 rounded-lg font-semibold text-lg transition-all"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-400"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.2s backwards;
        }

        .animate-fade-in-delay-2 {
          animation: fade-in 1s ease-out 0.4s backwards;
        }

        .animate-fade-in-delay-3 {
          animation: fade-in 1s ease-out 0.6s backwards;
        }
      `}</style>
    </div>
  );
}
