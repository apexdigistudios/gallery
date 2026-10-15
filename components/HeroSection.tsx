'use client';

import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative mb-16 mt-8 flex flex-col items-center md:mb-24">
      {/* Top Branding: Larger Logo followed by compact hero text image */}
      <div className="mb-10 flex flex-col items-center text-center animate-float-up">
        <Image
          src="/logo.png"
          alt="The Christy Black Art Gallery Logo"
          width={96}
          height={96}
          className="h-24 w-24 object-contain drop-shadow-md"
        />
        <div className="mt-2 w-36 md:w-44">
          <Image
            src="/hero-text.png"
            alt="The Christy Black Art Gallery"
            width={400}
            height={150}
            className="h-auto w-full object-contain drop-shadow-xs"
          />
        </div>
      </div>

      {/* Split Hero Section: Left Text / Right Tour Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center w-full mb-16">
        {/* Left Side: Header and Subtitle */}
        <div className="flex flex-col items-start text-left space-y-6">
          <span className="rounded-full bg-slate-900 px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-white shadow-xs">
            CURATED SANCTUARY
          </span>
          <h1 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-6xl leading-[1.1]">
            Where Contemporary Art Finds Its Home
          </h1>
          <p className="text-sm md:text-base leading-relaxed text-slate-600">
            Showcasing marvelous contemporary masterworks in a curated sanctuary. Experience timeless art and exclusive exhibitions in Katamanso, Tema.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
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

        {/* Right Side: tour.png Card */}
        <div className="relative group overflow-hidden rounded-[36px] bg-white border border-black/10 shadow-2xl">
          <div className="relative h-80 md:h-96 w-full overflow-hidden">
            <Image
              src="/tour.png"
              alt="Virtual Gallery Tour"
              width={1000}
              height={1000}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute left-6 top-6 z-10">
              <span className="rounded-full bg-white/90 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] text-slate-900 backdrop-blur-md border border-black/10 shadow-md">
                IMMERSIVE EXPERIENCE
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-white">
              <h3 className="font-display text-2xl font-medium">Virtual Gallery Tour</h3>
              <p className="mt-1 text-xs text-white/80">Step into the gallery from anywhere in the world.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Info glass card */}
      <div className="glass-card-strong glass-specular liquid-glass flex w-full max-w-3xl flex-col items-stretch overflow-hidden rounded-[28px] md:flex-row bg-white/85 border border-black/10 shadow-xl">
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