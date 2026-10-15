'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface Artwork {
  id: number;
  category: string;
  title: string;
  artist: string;
  medium: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    category: 'PAINTING',
    title: 'Ethereal Luminescence No. 4',
    artist: 'Christy Black',
    medium: 'Oil & Gold Leaf on Linen • 2026',
    price: 'GH¢ 85,000',
    rating: 5,
    reviews: 2711,
    image: '/images/art-1.png',
  },
  {
    id: 2,
    category: 'SCULPTURE',
    title: 'Vessel of Quiet Memory',
    artist: 'Christy Black',
    medium: 'Polished Bronze • 2025',
    price: 'GH¢ 142,500',
    rating: 5,
    reviews: 1984,
    image: '/images/art-2.png',
  },
  {
    id: 3,
    category: 'MIXED MEDIA',
    title: 'Crimson Reverie',
    artist: 'Christy Black',
    medium: 'Collage & Gold on Canvas • 2026',
    price: 'GH¢ 68,000',
    rating: 5,
    reviews: 1532,
    image: '/images/art-3.png',
  },
  {
    id: 4,
    category: 'PAINTING',
    title: 'Emerald Whispers',
    artist: 'Christy Black',
    medium: 'Oil on Belgian Linen • 2025',
    price: 'GH¢ 96,500',
    rating: 5,
    reviews: 2103,
    image: '/images/art-4.png',
  },
  {
    id: 5,
    category: 'WATERCOLOR',
    title: 'Botanical Sonata',
    artist: 'Christy Black',
    medium: 'Ink & Watercolor on Linen • 2026',
    price: 'GH¢ 52,000',
    rating: 5,
    reviews: 1287,
    image: '/images/art-5.png',
  },
];

function StarRating({ rating, reviews }: { rating: number; reviews: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          fill={i < rating ? '#f5b800' : 'rgba(255,255,255,0.25)'}
          className="h-3.5 w-3.5"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
      <span className="ml-1 text-[10px] text-white/80">({reviews.toLocaleString()})</span>
    </div>
  );
}

function ArtworkCard({ artwork, liked, onToggleLike }: { artwork: Artwork; liked: boolean; onToggleLike: (id: number, e: React.MouseEvent) => void }) {
  return (
    <div
      data-reveal
      className="reveal-card group relative aspect-3/4 w-full cursor-pointer overflow-hidden rounded-[36px] transition-all duration-700 shadow-2xl flex flex-col bg-slate-900 border border-black/10"
    >
      <div className="relative h-full w-full overflow-hidden">
        {/* Full Image Display */}
        <Image
          src={artwork.image}
          alt={artwork.title}
          width={1400}
          height={1400}
          className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />

        {/* Category Badge */}
        <div className="absolute left-4 top-4 z-10">
          <span className="rounded-full bg-black/75 px-4 py-1.5 text-[10px] font-bold tracking-[0.2em] text-white backdrop-blur-xl border border-white/30 shadow-md">
            {artwork.category}
          </span>
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => onToggleLike(artwork.id, e)}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/75 backdrop-blur-xl border border-white/30 shadow-md transition-all hover:scale-110"
        >
          <svg
            viewBox="0 0 24 24"
            fill={liked ? '#ff4d6d' : 'none'}
            stroke={liked ? '#ff4d6d' : 'white'}
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
          </svg>
        </button>

        {/* Bottom Shading Overlay for Text Contrast */}
        <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/95 via-black/75 to-transparent px-6 pb-6 pt-28 space-y-1.5">
          <h3 className="text-center text-xl font-semibold leading-tight text-white drop-shadow-md">
            {artwork.title}
          </h3>
          <p className="text-center text-sm font-medium text-white/90">{artwork.artist}</p>
          <p className="text-center text-xs leading-relaxed text-white/70">
            {artwork.medium}
          </p>

          {/* Price & Rating */}
          <div className="flex items-center justify-between pt-3 border-t border-white/25 mt-2">
            <span className="rounded-full bg-white/20 px-4 py-1.5 text-xs font-bold text-white backdrop-blur-md border border-white/30 shadow-sm">
              {artwork.price}
            </span>
            <StarRating rating={artwork.rating} reviews={artwork.reviews} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ArtworkGrid() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likedMap, setLikedMap] = useState<Record<number, boolean>>({});

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % artworks.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const toggleLike = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const firstArtwork = artworks[currentIndex];
  const secondArtwork = artworks[(currentIndex + 1) % artworks.length];

  return (
    <section id="artworks" data-reveal className="reveal-section mb-16 md:mb-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-slate-700 bg-white border border-black/10 shadow-xs">
          CURATED COLLECTION
        </span>
        <h2 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-5xl">
          Featured Masterworks
        </h2>
        <p className="mt-3 max-w-md text-sm text-slate-600">
          Explore premier contemporary pieces for the discerning collector.
        </p>
      </div>

      {/* Category tabs */}
      <div className="mb-8 flex justify-center">
        <div className="inline-flex items-center gap-1 rounded-full p-1.5 bg-white/80 border border-black/10 shadow-sm">
          {[
            { icon: 'home', label: 'Gallery Living' },
            { icon: 'briefcase', label: 'Studio Works' },
          ].map((tab, i) => (
            <button
              key={i}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-xs font-semibold transition-all ${
                i === 0
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.icon === 'home' ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-3.5 w-3.5">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
                </svg>
              )}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Carousel Container */}
      <div className="mx-auto max-w-4xl px-4">
        <div className="block md:hidden">
          <ArtworkCard artwork={firstArtwork} liked={!!likedMap[firstArtwork.id]} onToggleLike={toggleLike} />
        </div>
        <div className="hidden md:grid md:grid-cols-2 md:gap-6">
          <ArtworkCard artwork={firstArtwork} liked={!!likedMap[firstArtwork.id]} onToggleLike={toggleLike} />
          <ArtworkCard artwork={secondArtwork} liked={!!likedMap[secondArtwork.id]} onToggleLike={toggleLike} />
        </div>

        <div className="mt-6 flex justify-center items-center gap-2">
          {artworks.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-slate-900' : 'w-2 bg-black/20 hover:bg-black/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}