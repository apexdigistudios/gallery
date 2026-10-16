'use client';

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
    <section id="exhibitions" className="mb-12 md:mb-20 overflow-hidden">
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="mb-10 flex flex-col items-center text-center px-4">
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

      {/* MOBILE VIEW: Infinite Slow Marquee Effect */}
      <div className="block md:hidden w-full overflow-hidden py-2">
        <div className="marquee-track gap-4 px-2">
          {/* Render exhibitions twice to create seamless loop effect */}
          {[...exhibitions, ...exhibitions].map((ex, index) => (
            <div
              key={`${ex.id}-${index}`}
              className="group relative shrink-0 cursor-pointer overflow-hidden rounded-4xl w-72 shadow-xl bg-slate-900 border border-black/10"
            >
              <div className="relative h-72 w-full overflow-hidden">
                <img
                  src={ex.image}
                  alt={ex.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                  <span className="text-[9px] font-bold tracking-[0.3em] text-amber-300 uppercase">
                    {ex.floor}
                  </span>
                  <h3 
                    className="font-display mt-1 text-xl font-medium leading-tight drop-shadow-md"
                    style={{ color: '#ffffff' }}
                  >
                    {ex.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP VIEW: Clean Interactive Row */}
      <div className="hidden md:flex justify-center gap-6 px-6">
        {exhibitions.map((ex) => (
          <div
            key={ex.id}
            className="group relative shrink-0 cursor-pointer overflow-hidden rounded-4xl transition-all duration-500 hover:scale-[1.02] w-92 shadow-xl bg-slate-900 border border-black/10"
          >
            <div className="relative h-92 w-full overflow-hidden">
              <img
                src={ex.image}
                alt={ex.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 z-10">
                <span className="text-[10px] font-bold tracking-[0.3em] text-amber-300 uppercase">
                  {ex.floor}
                </span>
                <h3 
                  className="font-display mt-1.5 text-2xl font-medium leading-tight drop-shadow-md"
                  style={{ color: '#ffffff' }}
                >
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