'use client';

import { useState } from 'react';

const abstractsData = [
  { id: 1, title: 'Crimson Reverie', artist: 'Christy Black', medium: 'Collage & Gold on Canvas', year: '2026', price: 'GH¢ 68,000', image: '/images/art-3.png', tag: 'Texture & Gold' },
  { id: 2, title: 'Midnight Resonance', artist: 'Christy Black', medium: 'Acrylic & Resin', year: '2025', price: 'GH¢ 75,000', image: '/images/art-3.png', tag: 'Deep Resin' },
  { id: 3, title: 'Subterranean Echo', artist: 'Christy Black', medium: 'Mixed Media on Board', year: '2026', price: 'GH¢ 82,000', image: '/images/art-3.png', tag: 'Geometric' },
  { id: 4, title: 'Ephemeral Waves', artist: 'Christy Black', medium: 'Oil & Sand on Linen', year: '2025', price: 'GH¢ 64,000', image: '/images/art-3.png', tag: 'Texture & Gold' },
  { id: 5, title: 'Chroma Symphony', artist: 'Christy Black', medium: 'Acrylic on Belgian Canvas', year: '2026', price: 'GH¢ 91,000', image: '/images/art-3.png', tag: 'Vibrant' },
  { id: 6, title: 'Silence in Gold', artist: 'Christy Black', medium: 'Gold Leaf & Mixed Media', year: '2026', price: 'GH¢ 115,000', image: '/images/art-3.png', tag: 'Texture & Gold' },
];

export default function Abstracts() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'Texture & Gold', 'Deep Resin', 'Geometric', 'Vibrant'];

  const filtered = abstractsData.filter((art) => {
    const matchesSearch = art.title.toLowerCase().includes(searchQuery.toLowerCase()) || art.medium.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = selectedTag === 'All' || art.tag === selectedTag;
    return matchesSearch && matchesTag;
  });

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-4 rounded-3xl border border-black/10 shadow-sm">
        <input
          type="text"
          placeholder="Search abstracts by title or medium..."
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