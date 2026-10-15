'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full mt-20 border-t border-black/10 bg-white/80 backdrop-blur-2xl relative z-10 text-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand info */}
          <div className="md:col-span-1 flex flex-col items-start space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.png"
                alt="The Christy Black Art Gallery Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-xs"
              />
              <div className="flex flex-col">
                <span className="text-sm font-semibold tracking-wide text-slate-900">Christy Black Art</span>
                <span className="text-[9px] text-slate-500 tracking-widest uppercase">Est. April 2023</span>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              A sanctuary where creativity finds a home, artists feel valued, and beautiful things begin in Katamanso, Accra.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              Navigation
            </span>
            <div className="flex flex-col space-y-2 text-xs text-slate-700">
              <a href="#exhibitions" className="hover:text-slate-900 transition-colors">Exhibitions</a>
              <a href="#artworks" className="hover:text-slate-900 transition-colors">Curated Collection</a>
              <a href="#about" className="hover:text-slate-900 transition-colors">About Founder</a>
              <a href="#contact" className="hover:text-slate-900 transition-colors">Private Viewing</a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              Sanctuary Location
            </span>
            <p className="text-xs text-slate-700 leading-relaxed">
              Katamanso Teacher&apos;s Land<br />
              Tema • Accra, Ghana
            </p>
            <p className="text-xs text-slate-500 pt-1">
              Phone: 056 164 0419
            </p>
          </div>

          {/* Private Viewing CTA */}
          <div className="flex flex-col space-y-3">
            <span className="text-[10px] font-bold tracking-[0.2em] text-amber-700 uppercase">
              Private Viewings
            </span>
            <p className="text-xs text-slate-600">
              Schedule an exclusive appointment or inquire about available masterworks.
            </p>
            <a
              href="#contact"
              className="glass-pill-light glass-specular inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold text-white bg-slate-900 transition-all hover:scale-105 mt-2 shadow-sm"
            >
              Inquire Now
            </a>
          </div>
        </div>

        {/* Bottom Copyright & Social Icons Bar */}
        <div className="mt-12 pt-8 border-t border-black/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-6">
          <p>&copy; 2026 The Christy Black Art Gallery. All rights reserved.</p>
          
          {/* Social & Contact Links with Icons */}
          <div className="flex items-center gap-4">
            {/* Facebook */}
            <a
              href="https://web.facebook.com/ChristyBlackArt"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:scale-110 shadow-xs"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:scale-110 shadow-xs"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* Pinterest */}
            <a
              href="https://www.pinterest.com/christyablack/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Pinterest"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:scale-110 shadow-xs"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M12 0a12 12 0 00-4.37 23.17c-.1-.94-.2-2.4.04-3.44l.82-3.5s-.21-.43-.21-1.07c0-1-.6-1.75-1.35-1.75-.64 0-1.15.48-1.15 1.08 0 .64.4 1.6.61 2.49.18.75-.1 1.36-.82 1.36-2.44 0-4.08-2.65-4.08-5.78 0-3.02 2.17-5.13 5.27-5.13 3.91 0 6.55 2.76 6.55 5.75 0 3.43-1.93 6.19-4.62 6.19-.9 0-1.75-.47-2.04-1.03l-.56 2.14c-.2.78-.75 1.76-1.12 2.36A12 12 0 1012 0z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:scale-110 shadow-xs"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/233505232320"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-slate-700 transition-all hover:bg-slate-900 hover:text-white hover:scale-110 shadow-xs"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}