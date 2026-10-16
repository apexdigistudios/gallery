'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" data-reveal className="reveal-section mb-16 md:mb-24 px-4">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-14">
        
        {/* Left Side: Circular Founder Image & Badge */}
        <div className="shrink-0 flex flex-col items-center">
          <div className="relative h-36 w-36 md:h-44 md:w-44 overflow-hidden rounded-full border-4 border-amber-600/20 shadow-lg">
            <Image
              src="/about.png"
              alt="Christy Black - Founder"
              width={300}
              height={300}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1 text-[10px] font-bold tracking-wider text-amber-800 border border-black/10 shadow-xs uppercase">
            <span>🎨</span> Founder &amp; CEO
          </span>
        </div>

        {/* Right Side: Centered Text & Paragraphs */}
        <div className="flex flex-col items-center md:items-center text-center flex-1 space-y-6">
          <div>
            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 uppercase">
              OUR STORY &amp; VISION
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mt-2">
              Why I Built The Christy Black Art Gallery
            </h2>
          </div>

          <div className="space-y-4 text-sm md:text-base leading-relaxed text-slate-700 max-w-xl">
            <p>
              In April 2023, the Christy Black Art Gallery was established in the heart of Katamanso Teacher&apos;s Land, Accra. It was envisioned as a sanctuary where creativity finds a true home, where artists feel deeply valued, and where magnificent masterworks come to life.
            </p>
            <p>
              Meeting art enthusiasts and collectors while building this space has been one of the most fulfilling journeys. It creates a unique environment that <strong className="text-slate-900 font-semibold">speeds up deep connections</strong> and preserves vibrant cultural legacies. Every exhibition is curated to make the process of discovering contemporary African art <strong className="text-slate-900 font-semibold">more efficient, inspiring, and immersive</strong>—so more people can experience the magic of art firsthand.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}