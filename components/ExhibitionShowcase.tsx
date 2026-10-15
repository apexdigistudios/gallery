'use client';

import Image from 'next/image';

interface Exhibition {
  id: number;
  title: string;
  floor: string;
  image: string;
}

const exhibitions: Exhibition[] = [
  {
    id: 1,
    title: 'Vivid Park Painting',
    floor: 'NATURE',
    image: '/images/exhibition-1.png',
  },
  {
    id: 2,
    title: 'Red Tree Canvas',
    floor: 'ABSTRACT',
    image: '/images/exhibition-2.png',
  },
  {
    id: 3,
    title: 'Nautical Gallery',
    floor: 'VINTAGE',
    image: '/images/exhibition-3.png',
  },
];

export default function ExhibitionShowcase() {
  return (
    <section id="exhibitions" data-reveal className="reveal-section mb-12 md:mb-20">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-slate-700 bg-white border border-black/10 shadow-xs">
          EXPLORE THE SPACE
        </span>
        <h2 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-5xl">
          Inside the Gallery
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          Discover our curated exhibition spaces across three distinct floors.
        </p>
      </div>

      {/* Horizontal scroll gallery */}
      <div className="no-scrollbar -mx-6 flex gap-5 overflow-x-auto px-6 pb-4 md:gap-6">
        {exhibitions.map((ex, index) => (
          <div
            key={ex.id}
            data-reveal
            className="reveal-card group relative shrink-0 cursor-pointer overflow-hidden rounded-4xl transition-all duration-500 hover:scale-[1.02] md:w-105 shadow-xl bg-slate-900 border border-black/10"
            style={{ ['--delay' as string]: `${index * 90}ms` }}
          >
            {/* Full Image Display */}
            <div className="relative h-96 w-full overflow-hidden md:h-104">
              <Image
                src={ex.image}
                alt={ex.title}
                width={1200}
                height={1400}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Bottom Shading Overlay for Text */}
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

              {/* OPEN NOW badge */}
              <div className="absolute right-4 top-4 z-10">
                <div className="flex items-center gap-2 rounded-full px-3.5 py-1.5 bg-black/75 border border-white/20 shadow-md backdrop-blur-md">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                  <span className="text-[10px] font-bold tracking-wider text-white">
                    OPEN NOW
                  </span>
                </div>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.3em] text-amber-300 uppercase">
                  {ex.floor}
                </span>
                <h3 className="font-display mt-1.5 text-2xl font-medium leading-tight text-white md:text-3xl drop-shadow-md">
                  {ex.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}