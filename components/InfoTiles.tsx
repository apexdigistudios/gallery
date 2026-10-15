'use client';

import Image from 'next/image';

export default function InfoTiles() {
  return (
    <section id="contact" data-reveal className="reveal-section mb-16 md:mb-24">
      <div className="mb-10 flex flex-col items-center text-center">
        <span className="mb-4 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-slate-700 bg-white border border-black/10 shadow-xs">
          VISIT & SERVICES
        </span>
        <h2 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-5xl">
          Plan Your Experience
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Virtual Gallery Tour */}
        <div
          data-reveal
          className="reveal-card group relative cursor-pointer overflow-hidden rounded-4xl transition-all hover:scale-[1.03] flex flex-col justify-between border border-black/10 bg-white shadow-xl"
          style={{ ['--delay' as string]: '0ms' }}
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-900">
            <Image
              src="/tour.png"
              alt="Virtual Gallery Tour"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute left-4 top-3">
              <span className="rounded-full bg-black/75 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md border border-white/30">
                TOUR
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-lg font-semibold text-white">Virtual Gallery Tour</h3>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between flex-1 bg-white">
            <p className="text-xs leading-relaxed text-slate-600">
              Step into the gallery from anywhere in the world with our immersive 360° experience.
            </p>
            <div className="mt-5">
              <span className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold tracking-wider text-white bg-slate-900 shadow-md w-full">
                START TOUR
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Purchase Consultation */}
        <div
          data-reveal
          className="reveal-card group relative cursor-pointer overflow-hidden rounded-4xl transition-all hover:scale-[1.03] flex flex-col justify-between border border-black/10 bg-white shadow-xl"
          style={{ ['--delay' as string]: '120ms' }}
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-900">
            <Image
              src="/consult.png"
              alt="Purchase Consultation"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute left-4 top-3">
              <span className="rounded-full bg-black/75 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md border border-white/30">
                ADVISORY
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-lg font-semibold text-white">Purchase Consultation</h3>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between flex-1 bg-white">
            <p className="text-xs leading-relaxed text-slate-600">
              Speak with a curator about acquisitions, commissions, and private showings.
            </p>
            <div className="mt-5">
              <span className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-[10px] font-bold tracking-wider text-white bg-slate-900 shadow-md w-full">
                BOOK NOW
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        {/* Opening Hours */}
        <div
          data-reveal
          className="reveal-card group relative overflow-hidden rounded-4xl flex flex-col justify-between border border-black/10 bg-white shadow-xl"
          style={{ ['--delay' as string]: '240ms' }}
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-900">
            <Image
              src="/hours.png"
              alt="Opening Hours"
              width={600}
              height={600}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-75"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute left-4 top-3">
              <span className="rounded-full bg-black/75 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white backdrop-blur-md border border-white/30">
                TIMINGS
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="font-display text-lg font-semibold text-white">Opening Hours</h3>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between flex-1 bg-white">
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="flex items-center justify-between">
                <span>Mon — Sat</span>
                <span className="font-semibold text-slate-900">7:00 AM — 7:00 PM</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Sunday</span>
                <span className="font-semibold text-rose-600">Closed</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-black/10 text-[10px] text-slate-500 text-center">
              Private Viewings Available Upon Request
            </div>
          </div>
        </div>

        {/* Find Us (Live Map View) */}
        <div
          data-reveal
          className="reveal-card group relative overflow-hidden rounded-4xl flex flex-col justify-between border border-black/10 bg-white shadow-xl"
          style={{ ['--delay' as string]: '360ms' }}
        >
          <div className="relative h-48 w-full overflow-hidden bg-slate-100">
            <iframe
              title="The Christy Black Art Gallery Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1643.7190839187683!2d-0.0562082!3d5.7509985!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf7928def4e51b%3A0xe96d5676b289db37!2sChristy%20Black%20Art%20Gallery!5e1!3m2!1sen!2sgh!4v1791980600102!5m2!1sen!2sgh"
              width="600"
              height="450"
              style={{ border: 0 }}
              className="h-full w-full"
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
            <div className="absolute left-4 top-3 z-10 pointer-events-none">
              <span className="rounded-full bg-slate-900 px-3.5 py-1 text-[9px] font-bold tracking-[0.2em] text-white border border-white/20 shadow-md">
                FIND US
              </span>
            </div>
          </div>

          <div className="p-5 flex flex-col justify-between flex-1 bg-white">
            <div>
              <h3 className="font-display text-sm font-semibold text-slate-900">Visit The Gallery</h3>
              <p className="mt-1 text-xs leading-relaxed text-slate-600">
                Katamanso Teacher&apos;s Land, Accra
              </p>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Katamanso+Teachers+Land+Accra"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full rounded-full py-2 text-center text-[10px] font-bold tracking-[0.2em] text-white bg-slate-900 transition-all hover:scale-[1.02] shadow-md block"
            >
              GET DIRECTIONS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}