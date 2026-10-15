'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" data-reveal className="reveal-section mb-12 md:mb-20">
      {/* Section header */}
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-slate-700 bg-white border border-black/10 shadow-xs">
          THE FOUNDER
        </span>
        <h2 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-5xl">
          A Little About Me
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          Christy Black — Artist, Entrepreneur, and Gallery Founder.
        </p>
      </div>

      {/* About layout using exact spotlight structure */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {/* Side info / action pills */}
        <div className="hidden flex-col items-center justify-center gap-4 md:flex">
          {[
            { icon: 'vision', label: 'VISION' },
            { icon: 'curator', label: 'CURATION' },
            { icon: 'heritage', label: 'HERITAGE' },
          ].map((action) => (
            <div
              key={action.label}
              className="group flex w-32 flex-col items-center gap-1.5 rounded-2xl py-3 text-center transition-all hover:scale-105 bg-white/90 border border-black/10 shadow-md"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5 text-slate-800">
                {action.icon === 'vision' && (
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8zM12 9a3 3 0 100 6 3 3 0 000-6z" />
                )}
                {action.icon === 'curator' && (
                  <path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                )}
                {action.icon === 'heritage' && (
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                )}
              </svg>
              <span className="text-[9px] font-bold tracking-[0.2em] text-slate-700">
                {action.label}
              </span>
            </div>
          ))}
        </div>

        {/* About Main Card */}
        <div className="md:col-span-2">
          <div className="overflow-hidden rounded-4xl p-8 md:p-10 bg-white/90 border border-black/10 shadow-xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
              {/* Circular Avatar Column */}
              <div className="md:col-span-5 flex flex-col items-center justify-center">
                <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden p-1.5 bg-white border border-black/10 shadow-2xl">
                  <Image
                    src="/about.png"
                    alt="Christiana Enyonam Attipoe (Christy Black)"
                    width={400}
                    height={400}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <span className="mt-4 text-xs font-bold tracking-[0.2em] text-amber-700 uppercase">
                  Christiana E. Attipoe
                </span>
              </div>

              {/* Content Preview Column */}
              <div className="md:col-span-7 flex flex-col justify-between space-y-4">
                <div>
                  <span className="rounded-full bg-slate-900 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] text-white">
                    ESTABLISHED APRIL 2023
                  </span>
                  <h3 className="font-display mt-3 text-2xl font-medium leading-tight text-slate-900 md:text-3xl">
                    Christy Black
                  </h3>
                  <p className="mt-1 text-xs text-slate-500">
                    Ghanaian Artist & Founder
                  </p>
                  
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">
                    &ldquo;Hi, I’m Christy Black, a Ghanaian artist and entrepreneur, and the founder of The Christy Black Art Gallery. For me, art has always been about more than what we see on a canvas. It’s about the stories we tell, the emotions we share, and the connections we create...&rdquo;
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 italic">
                    Katamanso, Tema • Accra
                  </span>
                  <button
                    onClick={() => alert("Full bio page preview coming soon!")}
                    className="flex items-center gap-2 rounded-full px-6 py-2.5 text-[10px] font-bold tracking-wider text-white bg-slate-900 transition-all hover:scale-105 shadow-md"
                  >
                    READ MORE
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}