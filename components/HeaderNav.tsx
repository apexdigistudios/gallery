'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export const HeaderNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-nav border-b border-black/10 shadow-lg backdrop-blur-2xl bg-white/80'
          : 'bg-linear-to-b from-white/90 via-white/50 to-transparent border-b border-transparent'
      }`}
    >
      <nav className="w-full max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3.5">
          <div className="flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="The Christy Black Art Gallery Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain drop-shadow-xs"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-wide text-slate-900">Christy Black Art</span>
            <span className="text-[10px] text-slate-500 tracking-widest uppercase">Accra • Katamanso</span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-slate-700">
          <a href="#artworks" className="hover:text-slate-900 transition-colors">Artworks</a>
          <a href="#exhibitions" className="hover:text-slate-900 transition-colors">Exhibitions</a>
          <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
          <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
        </div>

        {/* Action CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="glass-pill-light px-5 py-2 text-xs font-semibold tracking-wide rounded-full text-slate-900 bg-slate-900 transition-all hover:scale-105 shadow-sm"
          >
            Private Viewing
          </a>
        </div>
      </nav>
    </header>
  );
};