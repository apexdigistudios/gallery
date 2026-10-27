'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CategoryItem {
  name: string;
  slug: string;
  icon: React.ReactNode;
}

const categories: CategoryItem[] = [
  {
    name: 'Portraits',
    slug: 'portraits',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-700">
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: 'Landscapes',
    slug: 'landscapes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-700">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Abstracts',
    slug: 'abstracts',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-700">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <line x1="2" y1="12" x2="22" y2="12" />
      </svg>
    ),
  },
  {
    name: 'Village Scenes',
    slug: 'village-scenes',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-700">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    name: 'Commission Works',
    slug: 'commission-works',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-700">
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
];

export const HeaderNav: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileArtworksOpen, setMobileArtworksOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-nav border-b border-black/10 shadow-lg backdrop-blur-2xl bg-white/90'
            : 'bg-linear-to-b from-white/95 via-white/60 to-transparent border-b border-transparent'
        }`}
      >
        <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between">
          {/* Brand / Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center shrink-0">
              <Image
                src="/logo.png"
                alt="The Christy Black Art Gallery Logo"
                width={40}
                height={40}
                className="h-10 w-10 sm:h-12 sm:w-12 object-contain drop-shadow-xs transition-transform group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-wide text-slate-900 leading-tight">Christy Black Art</span>
              <span className="text-[9px] sm:text-[10px] text-slate-500 tracking-widest uppercase">Accra • Katamanso</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wider uppercase text-slate-700">
            {/* Artworks Dropdown Menu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1.5 hover:text-slate-900 transition-colors py-2 focus:outline-none cursor-pointer"
              >
                Artworks
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {/* Nested Menu Dropdown */}
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-60 rounded-2xl bg-white/95 border border-black/10 shadow-xl py-2 z-50 backdrop-blur-xl">
                  <div className="px-4 py-2 border-b border-black/5 mb-1">
                    <span className="text-[9px] font-bold tracking-[0.2em] text-slate-400 uppercase">
                      Curated Collections
                    </span>
                  </div>
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-100/70 hover:text-slate-900 transition-colors tracking-normal normal-case"
                    >
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 border border-black/5 shrink-0">
                        {cat.icon}
                      </div>
                      <span className="font-semibold text-slate-800">{cat.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href="#exhibitions" className="hover:text-slate-900 transition-colors">Exhibitions</a>
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#contact" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>

          {/* Desktop Action CTA & Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="#contact"
              className="hidden md:inline-flex px-5 py-2.5 text-xs font-semibold tracking-wide rounded-full text-white bg-slate-900 transition-all hover:scale-105 shadow-sm"
            >
              Private Viewing
            </a>

            {/* Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center p-2 rounded-xl text-slate-800 hover:bg-slate-100 transition-colors focus:outline-none cursor-pointer"
              aria-label="Open mobile menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Slide-Over Menu from Right */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 md:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop Overlay */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-xs"
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Sliding Panel */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out transform ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/10">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo.png"
                alt="Logo"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="text-xs font-bold uppercase tracking-widest text-slate-900">Menu</span>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close menu"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4">
            {/* Artworks Accordion */}
            <div>
              <button
                type="button"
                onClick={() => setMobileArtworksOpen(!mobileArtworksOpen)}
                className="flex items-center justify-between w-full py-2 text-xs font-bold tracking-wider uppercase text-slate-900 cursor-pointer"
              >
                <span>Artworks</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className={`h-4 w-4 transition-transform duration-200 ${mobileArtworksOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              {mobileArtworksOpen && (
                <div className="mt-2 pl-3 space-y-2 border-l-2 border-slate-200">
                  {categories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/categories/${cat.slug}`}
                      onClick={() => {
                        setMobileArtworksOpen(false);
                        setMobileMenuOpen(false);
                      }}
                      className="flex items-center gap-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
                    >
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-100 shrink-0">
                        {cat.icon}
                      </div>
                      <span>{cat.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#exhibitions"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs font-bold tracking-wider uppercase text-slate-900 hover:text-slate-950 transition-colors"
            >
              Exhibitions
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs font-bold tracking-wider uppercase text-slate-900 hover:text-slate-950 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-xs font-bold tracking-wider uppercase text-slate-900 hover:text-slate-950 transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Footer CTA */}
          <div className="p-5 border-t border-black/10 bg-slate-50">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full py-3 text-center text-xs font-semibold tracking-wider uppercase rounded-full text-white bg-slate-900 shadow-md transition-transform hover:scale-[1.02]"
            >
              Private Viewing
            </a>
          </div>
        </div>
      </div>
    </>
  );
};