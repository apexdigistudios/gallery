'use client';

import { useState } from 'react';

// SHOP URL WITH SEARCH QUERY PARAMETER
const SHOP_URL = 'https://shop-site-1.vercel.app/shop';

const villageScenesData = [
  { id: 1, title: 'Emerald Whispers of Katamanso', artist: 'Christy Black', medium: 'Oil on Belgian Linen', year: '2025', rawPrice: 96500, image: '/images/art-4.png', tag: 'Katamanso Life' },
  { id: 2, title: 'Morning Market Gathering', artist: 'Christy Black', medium: 'Mixed Media on Canvas', year: '2025', rawPrice: 115000, image: '/images/art-4.png', tag: 'Marketplace' },
  { id: 3, title: 'Harmattan Sunlight', artist: 'Christy Black', medium: 'Oil on Canvas', year: '2026', rawPrice: 84000, image: '/images/art-4.png', tag: 'Community' },
  { id: 4, title: 'Children of the Soil', artist: 'Christy Black', medium: 'Acrylic & Oil on Linen', year: '2025', rawPrice: 78000, image: '/images/art-4.png', tag: 'Community' },
  { id: 5, title: 'The Weaver’s Shed', artist: 'Christy Black', medium: 'Oil on Wood Panel', year: '2026', rawPrice: 89000, image: '/images/art-4.png', tag: 'Craft & Heritage' },
  { id: 6, title: 'Gathering Under the Baobab', artist: 'Christy Black', medium: 'Mixed Media on Canvas', year: '2026', rawPrice: 125000, image: '/images/art-4.png', tag: 'Katamanso Life' },
];

function formatCompactAmount(value: number): string {
  if (value >= 1_000_000_000) return 'GH₵' + (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  if (value >= 1_000_000) return 'GH₵' + (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (value >= 1_000) return 'GH₵' + (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  return 'GH₵' + value.toLocaleString();
}

export default function VillageScenes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Katamanso Life', 'Marketplace', 'Community', 'Craft & Heritage'];

  const filtered = villageScenesData.filter((art) => {
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.medium.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || art.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      {/* Search & Filter Sub-Navbar Bar */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-between bg-white p-3 sm:p-4 rounded-3xl border border-black/10 shadow-xs">
        <input
          type="text"
          placeholder="Search village scenes by title or medium..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full lg:w-96 px-4 sm:px-5 py-2.5 sm:py-3 rounded-full bg-slate-50 border border-black/10 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        
        {/* Horizontally scrollable filter tabs on mobile to prevent squeezing */}
        <div className="w-full lg:w-auto overflow-x-auto pb-1 lg:pb-0 no-scrollbar">
          <div className="flex items-center gap-2 min-w-max">
            {tags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all shrink-0 ${
                  selectedTag === tag ? 'bg-slate-900 text-white shadow-xs' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid Showcase */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filtered.map((art) => {
          const shopSearchUrl = `${SHOP_URL}?search=${encodeURIComponent(art.title)}`;

          return (
            <div
              key={art.id}
              className="group relative aspect-4/5 w-full overflow-hidden rounded-[36px] shadow-xl bg-slate-900 border border-black/10 flex flex-col"
            >
              <a href={shopSearchUrl} target="_blank" rel="noopener noreferrer" className="h-full w-full block">
                <img
                  src={art.image}
                  alt={art.title}
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </a>

              <div className="absolute left-4 top-4 z-10">
                <span className="rounded-full bg-black/75 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md border border-white/20 inline-block">
                  {art.tag}
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/95 via-black/80 to-transparent px-5 sm:px-6 pb-6 pt-28 space-y-2">
                <a href={shopSearchUrl} target="_blank" rel="noopener noreferrer" className="block text-center">
                  <h3 className="text-lg sm:text-xl font-semibold leading-tight text-white drop-shadow-md hover:underline">
                    {art.title}
                  </h3>
                </a>
                <p className="text-center text-xs sm:text-sm font-medium text-white">{art.artist} • {art.year}</p>
                <p className="text-center text-[11px] sm:text-xs text-white/80">{art.medium}</p>

                <div className="flex items-center justify-between pt-3 border-t border-white/25 mt-1">
                  <span className="rounded-full bg-white/20 px-3.5 py-1 text-[11px] sm:text-xs font-bold text-white backdrop-blur-md">
                    {formatCompactAmount(art.rawPrice)}
                  </span>
                  <a
                    href={shopSearchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-3.5 sm:px-4 py-1.5 text-[10px] font-bold tracking-wider text-slate-900 uppercase shadow-xs hover:scale-105 transition-all"
                  >
                    View in Shop →
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}