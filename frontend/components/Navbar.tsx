'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-glass' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold hover:text-[var(--accent)] transition-colors">
            Mitchell Rust
          </Link>

          <div className="flex space-x-8">
            <Link
              href="/"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/projects"
              className="hover:text-[var(--accent)] transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="hover:text-[var(--accent)] transition-colors"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
