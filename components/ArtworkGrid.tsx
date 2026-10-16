'use client';

import { useState, useEffect } from 'react';

interface Artwork {
  id: number;
  category: string;
  title: string;
  artist: string;
  medium: string;
  image: string;
  slug: string;
}

const categories = [
  { name: 'Portraits', slug: 'portraits' },
  { name: 'Landscapes', slug: 'landscapes' },
  { name: 'Abstracts', slug: 'abstracts' },
  { name: 'Village scenes', slug: 'village-scenes' },
  { name: 'Commission Works', slug: 'commission-works' },
];

const artworks: Artwork[] = [
  // Portraits
  {
    id: 1,
    category: 'Portraits',
    title: 'Ethereal Luminescence No. 4',
    artist: 'Christy Black',
    medium: 'Oil & Gold Leaf on Linen • 2026',
    image: '/images/art-1.png',
    slug: 'portraits',
  },
  {
    id: 2,
    category: 'Portraits',
    title: 'Gaze of Resilience',
    artist: 'Christy Black',
    medium: 'Oil on Canvas • 2026',
    image: '/images/art-1.png',
    slug: 'portraits',
  },
  {
    id: 3,
    category: 'Portraits',
    title: 'Crown of Heritage',
    artist: 'Christy Black',
    medium: 'Mixed Media on Linen • 2025',
    image: '/images/art-1.png',
    slug: 'portraits',
  },

  // Landscapes
  {
    id: 4,
    category: 'Landscapes',
    title: 'Vessel of Quiet Memory',
    artist: 'Christy Black',
    medium: 'Polished Bronze & Mixed • 2025',
    image: '/images/art-2.png',
    slug: 'landscapes',
  },
  {
    id: 5,
    category: 'Landscapes',
    title: 'Golden Savannah Horizon',
    artist: 'Christy Black',
    medium: 'Acrylic & Gold Leaf • 2026',
    image: '/images/art-2.png',
    slug: 'landscapes',
  },
  {
    id: 6,
    category: 'Landscapes',
    title: 'Dusk Over Volta',
    artist: 'Christy Black',
    medium: 'Oil on Belgian Linen • 2026',
    image: '/images/art-2.png',
    slug: 'landscapes',
  },

  // Abstracts
  {
    id: 7,
    category: 'Abstracts',
    title: 'Crimson Reverie',
    artist: 'Christy Black',
    medium: 'Collage & Gold on Canvas • 2026',
    image: '/images/art-3.png',
    slug: 'abstracts',
  },
  {
    id: 8,
    category: 'Abstracts',
    title: 'Midnight Resonance',
    artist: 'Christy Black',
    medium: 'Acrylic & Resin • 2025',
    image: '/images/art-3.png',
    slug: 'abstracts',
  },
  {
    id: 9,
    category: 'Abstracts',
    title: 'Subterranean Echo',
    artist: 'Christy Black',
    medium: 'Mixed Media on Board • 2026',
    image: '/images/art-3.png',
    slug: 'abstracts',
  },

  // Village scenes
  {
    id: 10,
    category: 'Village scenes',
    title: 'Emerald Whispers of Katamanso',
    artist: 'Christy Black',
    medium: 'Oil on Belgian Linen • 2025',
    image: '/images/art-4.png',
    slug: 'village-scenes',
  },
  {
    id: 11,
    category: 'Village scenes',
    title: 'Morning Market Gathering',
    artist: 'Christy Black',
    medium: 'Mixed Media on Canvas • 2025',
    image: '/images/art-4.png',
    slug: 'village-scenes',
  },
  {
    id: 12,
    category: 'Village scenes',
    title: 'Harmattan Sunlight',
    artist: 'Christy Black',
    medium: 'Oil on Canvas • 2026',
    image: '/images/art-4.png',
    slug: 'village-scenes',
  },

  // Commission Works
  {
    id: 13,
    category: 'Commission Works',
    title: 'Botanical Sonata Commission',
    artist: 'Christy Black',
    medium: 'Ink & Watercolor on Linen • 2026',
    image: '/images/art-5.png',
    slug: 'commission-works',
  },
  {
    id: 14,
    category: 'Commission Works',
    title: 'Architectural Harmony',
    artist: 'Christy Black',
    medium: 'Mixed Media Installation • 2025',
    image: '/images/art-5.png',
    slug: 'commission-works',
  },
  {
    id: 15,
    category: 'Commission Works',
    title: 'Private Estate Diptych',
    artist: 'Christy Black',
    medium: 'Oil & Gold Leaf on Canvas • 2026',
    image: '/images/art-5.png',
    slug: 'commission-works',
  },
];

export default function ArtworkGrid() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [mobileItemIndex, setMobileItemIndex] = useState(0);

  const currentCategoryObj = categories[activeCategoryIndex];
  const currentArtworks = artworks.filter(
    (art) => art.category === currentCategoryObj.name
  );

  // Auto-switch tabs: 5s on desktop (>=768px), 7s on mobile (<768px)
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const scheduleNextSwitch = () => {
      const isMobile = window.innerWidth < 768;
      const delay = isMobile ? 7000 : 5000;

      timeoutId = setTimeout(() => {
        setActiveCategoryIndex((prev) => (prev + 1) % categories.length);
        setMobileItemIndex(0);
        scheduleNextSwitch();
      }, delay);
    };

    scheduleNextSwitch();

    return () => clearTimeout(timeoutId);
  }, []);

  // Auto-switch mobile spotlight item every 4 seconds
  useEffect(() => {
    const mobileTimer = setInterval(() => {
      setMobileItemIndex((prev) => (prev + 1) % currentArtworks.length);
    }, 4000);

    return () => clearInterval(mobileTimer);
  }, [currentArtworks.length]);

  return (
    <section id="artworks" className="mb-16 md:mb-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-slate-700 bg-white border border-black/10 shadow-xs uppercase">
          Art Categories
        </span>
        <h2 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-5xl">
          Curated Collection
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          Explore premier contemporary pieces categorized for the discerning collector.
        </p>
      </div>

      {/* Category Navigation Tabs */}
      <div className="mb-10 flex justify-center overflow-x-auto no-scrollbar px-4">
        <div className="inline-flex items-center gap-1.5 rounded-full p-1.5 bg-white/90 border border-black/10 shadow-md">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => {
                setActiveCategoryIndex(idx);
                setMobileItemIndex(0);
              }}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition-all whitespace-nowrap ${
                activeCategoryIndex === idx
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-black/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* Artworks Preview Display */}
      <div className="mx-auto max-w-7xl px-4">
        {currentArtworks.length > 0 ? (
          <>
            {/* DESKTOP VIEW */}
            <div className="hidden md:grid grid-cols-3 gap-6">
              {currentArtworks.map((artwork) => (
                <div
                  key={artwork.id}
                  className="group relative aspect-4/5 w-full overflow-hidden rounded-4xl shadow-xl flex flex-col bg-slate-900 border border-black/10"
                >
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 z-10">
                    <span 
                      className="rounded-full bg-black/75 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] backdrop-blur-xl border border-white/30 shadow-md uppercase"
                      style={{ color: '#ffffff' }}
                    >
                      {artwork.category}
                    </span>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/95 via-black/80 to-transparent px-6 pb-6 pt-24 space-y-1.5">
                    <h3
                      className="text-center text-lg font-semibold leading-tight drop-shadow-md"
                      style={{ color: '#ffffff' }}
                    >
                      {artwork.title}
                    </h3>
                    <p
                      className="text-center text-xs font-medium"
                      style={{ color: '#ffffff' }}
                    >
                      {artwork.artist}
                    </p>
                    <p
                      className="text-center text-[11px]"
                      style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                    >
                      {artwork.medium}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* MOBILE VIEW */}
            <div className="block md:hidden">
              <div className="relative aspect-4/5 w-full overflow-hidden rounded-4xl shadow-xl flex flex-col bg-slate-900 border border-black/10 transition-all duration-500">
                <img
                  src={currentArtworks[mobileItemIndex]?.image}
                  alt={currentArtworks[mobileItemIndex]?.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 z-10">
                  <span
                    className="rounded-full bg-black/75 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] backdrop-blur-xl border border-white/30 shadow-md uppercase"
                    style={{ color: '#ffffff' }}
                  >
                    {currentArtworks[mobileItemIndex]?.category}
                  </span>
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/95 via-black/80 to-transparent px-6 pb-6 pt-24 space-y-1.5">
                  <h3
                    className="text-center text-lg font-semibold leading-tight drop-shadow-md"
                    style={{ color: '#ffffff' }}
                  >
                    {currentArtworks[mobileItemIndex]?.title}
                  </h3>
                  <p
                    className="text-center text-xs font-medium"
                    style={{ color: '#ffffff' }}
                  >
                    {currentArtworks[mobileItemIndex]?.artist}
                  </p>
                  <p
                    className="text-center text-[11px]"
                    style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                  >
                    {currentArtworks[mobileItemIndex]?.medium}
                  </p>
                </div>
              </div>

              {/* Mobile Spotlight Indicators */}
              <div className="mt-4 flex justify-center gap-2">
                {currentArtworks.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMobileItemIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      mobileItemIndex === idx ? 'w-6 bg-slate-900' : 'w-2 bg-slate-300'
                    }`}
                    aria-label={`Slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Prominent Global Category CTA */}
            <div className="mt-10 flex flex-col items-center justify-center text-center">
              <a
                href={`/categories/${currentCategoryObj.slug}`}
                className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-xs font-bold tracking-widest text-white shadow-xl hover:bg-slate-800 hover:scale-105 transition-all uppercase"
              >
                <span>Explore Full {currentCategoryObj.name} Collection</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
              </a>
              <span className="mt-2.5 text-[11px] text-slate-500">
                Click to view all masterworks, details, and private acquisition inquiries for {currentCategoryObj.name.toLowerCase()}.
              </span>
            </div>
          </>
        ) : (
          <div className="py-16 text-center text-slate-500 text-sm">
            No masterworks currently listed under this category.
          </div>
        )}
      </div>
    </section>
  );
}