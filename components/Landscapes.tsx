'use client';

import { useState } from 'react';

const landscapesData = [
  { id: 1, title: 'Vessel of Quiet Memory', artist: 'Christy Black', medium: 'Polished Bronze & Mixed', year: '2025', price: 'GH¢ 142,500', image: '/images/art-2.png', tag: 'Topography' },
  { id: 2, title: 'Golden Savannah Horizon', artist: 'Christy Black', medium: 'Acrylic & Gold Leaf', year: '2026', price: 'GH¢ 89,000', image: '/images/art-2.png', tag: 'Savannah' },
  { id: 3, title: 'Dusk Over Volta', artist: 'Christy Black', medium: 'Oil on Belgian Linen', year: '2026', price: 'GH¢ 98,000', image: '/images/art-2.png', tag: 'Waterways' },
  { id: 4, title: 'Harmattan Mist', artist: 'Christy Black', medium: 'Oil on Canvas', year: '2025', price: 'GH¢ 76,000', image: '/images/art-2.png', tag: 'Atmospheric' },
  { id: 5, title: 'Akosombo Escarpment', artist: 'Christy Black', medium: 'Mixed Media on Board', year: '2026', price: 'GH¢ 105,000', image: '/images/art-2.png', tag: 'Topography' },
  { id: 6, title: 'Katamanso Sunset', artist: 'Christy Black', medium: 'Acrylic on Linen', year: '2026', price: 'GH¢ 88,500', image: '/images/art-2.png', tag: 'Savannah' },
];

export default function Landscapes() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Savannah', 'Topography', 'Waterways', 'Atmospheric'];

  const filtered = landscapesData.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.medium.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || art.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-black/10 shadow-sm">
        <input
          type="text"
          placeholder="Search landscapes by title or medium..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full md:w-96 px-5 py-3 rounded-full bg-slate-50 border border-black/10 text-xs text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedTag === tag ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((art) => (
          <div key={art.id} className="group relative aspect-4/5 w-full overflow-hidden rounded-[36px] shadow-xl bg-slate-900 border border-black/10 flex flex-col">
            <img src={art.image} alt={art.title} className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105" />
            <div className="absolute left-4 top-4 z-10">
              <span className="rounded-full bg-black/75 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] text-white uppercase backdrop-blur-md border border-white/20">
                {art.tag}
              </span>
            </div>
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end bg-linear-to-t from-black/95 via-black/80 to-transparent px-6 pb-6 pt-28 space-y-2">
              <h3 className="text-center text-xl font-semibold leading-tight text-white drop-shadow-md" style={{ color: '#ffffff' }}>
                {art.title}
              </h3>
              <p className="text-center text-sm font-medium text-white" style={{ color: '#ffffff' }}>{art.artist} • {art.year}</p>
              <p className="text-center text-xs text-white/80" style={{ color: 'rgba(255,255,255,0.8)' }}>{art.medium}</p>
              <div className="flex items-center justify-between pt-3 border-t border-white/25 mt-1">
                <span className="rounded-full bg-white/20 px-3.5 py-1 text-xs font-bold text-white backdrop-blur-md">
                  {art.price}
                </span>
                <a
                  href={`https://wa.me/233505232320?text=Hello,%20I%20am%20interested%20in%20acquiring%20'${art.title}'.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-white px-4 py-1.5 text-[10px] font-bold tracking-wider text-slate-900 uppercase shadow-sm hover:scale-105 transition-all"
                >
                  Inquire Now →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}