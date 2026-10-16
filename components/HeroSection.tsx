'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative mb-16 mt-2 flex flex-col items-center md:mb-24 overflow-hidden">
      
      {/* Full-Section Background Splash: Palettes, Vertical/Horizontal Brushes & Spray Cans */}
      <div className="absolute inset-0 pointer-events-none opacity-20 overflow-hidden z-0">
        {/* Color Palettes */}
        <svg className="absolute top-6 left-[3%] h-10 w-10 text-amber-600 -rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.49 2 2 6.49 2 12c0 5.51 4.49 10 10 10 1.15 0 2.09-.94 2.09-2.09 0-.52-.2-.99-.54-1.35-.34-.36-.55-.85-.55-1.4 0-1.11.89-2.01 2-2.01h2.36C19.82 15.15 22 12.97 22 10.35 22 5.74 17.51 2 12 2zm-5.5 8c-.83 0-1.5-.67-1.5-1.5S5.67 7 6.5 7s1.5.67 1.5 1.5S7.33 10 6.5 10zm3-3C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 3c-.83 0-1.5-.67-1.5-1.5S16.67 8.5 17.5 8.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
        <svg className="absolute top-[45%] left-[1%] h-9 w-9 text-amber-700 rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.49 2 2 6.49 2 12c0 5.51 4.49 10 10 10 1.15 0 2.09-.94 2.09-2.09 0-.52-.2-.99-.54-1.35-.34-.36-.55-.85-.55-1.4 0-1.11.89-2.01 2-2.01h2.36C19.82 15.15 22 12.97 22 10.35 22 5.74 17.51 2 12 2zm-5.5 8c-.83 0-1.5-.67-1.5-1.5S5.67 7 6.5 7s1.5.67 1.5 1.5S7.33 10 6.5 10zm3-3C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 3c-.83 0-1.5-.67-1.5-1.5S16.67 8.5 17.5 8.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>
        <svg className="absolute bottom-10 right-[4%] h-10 w-10 text-amber-600 -rotate-30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.49 2 2 6.49 2 12c0 5.51 4.49 10 10 10 1.15 0 2.09-.94 2.09-2.09 0-.52-.2-.99-.54-1.35-.34-.36-.55-.85-.55-1.4 0-1.11.89-2.01 2-2.01h2.36C19.82 15.15 22 12.97 22 10.35 22 5.74 17.51 2 12 2zm-5.5 8c-.83 0-1.5-.67-1.5-1.5S5.67 7 6.5 7s1.5.67 1.5 1.5S7.33 10 6.5 10zm3-3C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 3c-.83 0-1.5-.67-1.5-1.5S16.67 8.5 17.5 8.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
        </svg>

        {/* Paint Brushes (Horizontal & Vertical) */}
        <svg className="absolute top-12 right-[8%] h-9 w-9 text-indigo-600 rotate-45" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
        </svg>
        <svg className="absolute top-[35%] left-[6%] h-10 w-10 text-indigo-700 rotate-90" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
        </svg>
        <svg className="absolute bottom-[20%] left-[12%] h-8 w-8 text-purple-600 -rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
        </svg>
        <svg className="absolute top-[60%][right:15%] right-[15%] h-9 w-9 text-blue-600 rotate-120" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34a.996.996 0 00-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z" />
        </svg>

        {/* Aerosol Spray Cans */}
        <svg className="absolute top-4 left-[28%] h-8 w-8 text-rose-600 rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 4h-2V2H8v2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0-2-.9-2-2V6c0-1.1-.9-2-2-2zm0 16H6V6h12v14zM9 8h6v2H9zm0 4h6v2H9z" />
        </svg>
        <svg className="absolute top-[50%] right-[22%] h-8 w-8 text-teal-600 -rotate-12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18 4h-2V2H8v2H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0-2-.9-2-2V6c0-1.1-.9-2-2-2zm0 16H6V6h12v14zM9 8h6v2H9zm0 4h6v2H9z" />
        </svg>
      </div>

      {/* Top Section: Logo & Bouncing Hero Text Image */}
      <div className="relative z-10 flex flex-col items-center pt-6 pb-8">
        <Image
          src="/logo.png"
          alt="The Christy Black Art Gallery Logo"
          width={84}
          height={84}
          className="h-20 w-20 object-contain drop-shadow-md"
        />
        <div className="mt-3 w-56 md:w-72 animate-slow-bounce">
          <Image
            src="/hero-text.png"
            alt="The Christy Black Art Gallery"
            width={500}
            height={180}
            className="h-auto w-full object-contain drop-shadow-xs"
          />
        </div>
      </div>

      {/* Split Hero Section: Left Text / Right Tour Image (Brought closer to logo) */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center w-full mb-12">
        {/* Left Side */}
        <div className="flex flex-col items-start text-left space-y-5">
          <h1 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-5xl lg:text-6xl leading-[1.1]">
            Where Contemporary Art Finds Its Home
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-slate-600">
            Showcasing marvelous contemporary masterworks in a curated sanctuary. Experience timeless art and exclusive exhibitions in Katamanso, Tema.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#artworks"
              className="rounded-full bg-slate-900 px-6 py-3 text-xs font-semibold tracking-wider text-white transition-all hover:scale-105 shadow-md uppercase"
            >
              Explore Collection
            </a>
            <a
              href="#contact"
              className="rounded-full bg-white px-6 py-3 text-xs font-semibold tracking-wider text-slate-900 border border-black/15 transition-all hover:scale-105 shadow-xs uppercase"
            >
              Plan Visit
            </a>
          </div>
        </div>

        {/* Right Side: Virtual Gallery Tour Card */}
        <div className="relative group overflow-hidden rounded-4xl bg-white border border-black/10 shadow-2xl">
          <div className="relative h-72 md:h-88 w-full overflow-hidden">
            <Image
              src="/tour.png"
              alt="Virtual Gallery Tour"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent" />
            <div className="absolute left-6 top-6 z-10">
              <span className="rounded-full bg-white/90 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] text-slate-900 backdrop-blur-md border border-black/10 shadow-md">
                IMMERSIVE EXPERIENCE
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 z-10">
              <h3 
                className="font-display text-2xl font-medium drop-shadow-md"
                style={{ color: '#ffffff' }}
              >
                Virtual Gallery Tour
              </h3>
              <p 
                className="mt-1 text-xs"
                style={{ color: 'rgba(255, 255, 255, 0.85)' }}
              >
                Step into the gallery from anywhere in the world.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Info Glass Card */}
      <div className="relative z-10 glass-card-strong glass-specular liquid-glass flex w-full max-w-3xl flex-col items-stretch overflow-hidden rounded-[28px] md:flex-row bg-white/85 border border-black/10 shadow-xl">
        {/* Rating */}
        <div className="flex flex-1 items-center justify-center gap-3 px-6 py-5 md:py-7">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="#d99b00" className="h-5 w-5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span className="text-2xl font-bold text-slate-900">5.0</span>
            </div>
            <span className="mt-1 text-xs text-slate-500">(2,711 Reviews)</span>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block md:w-px md:bg-black/10" />

        {/* Address */}
        <div className="flex flex-1 items-center justify-center gap-3 border-y border-black/10 px-6 py-5 md:border-y-0 md:py-7">
          <div className="flex flex-col items-center gap-1.5">
            <span className="rounded-full bg-slate-900 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white">
              ART GALLERY
            </span>
            <div className="flex items-center gap-1.5 text-xs text-slate-700">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5 text-slate-500">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span>Katamanso Teacher&apos;s Land, Accra</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="hidden md:block md:w-px md:bg-black/10" />

        {/* Phone */}
        <div className="flex flex-1 items-center justify-center gap-3 px-6 py-5 md:py-7">
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4 text-slate-500">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            <span className="text-sm font-semibold text-slate-900">056 164 0419</span>
          </div>
        </div>
      </div>
    </section>
  );
}