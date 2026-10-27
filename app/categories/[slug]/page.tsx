import Link from 'next/link';
import Portraits from '@/components/Portraits';
import Landscapes from '@/components/Landscapes';
import Abstracts from '@/components/Abstracts';
import VillageScenes from '@/components/VillageScenes';
import CommissionWorks from '@/components/CommissionWorks';
import { WhatsAppIcon } from '@/components/icons';

export const instant = false;

export function generateStaticParams() {
  return [
    { slug: 'portraits' },
    { slug: 'landscapes' },
    { slug: 'abstracts' },
    { slug: 'village-scenes' },
    { slug: 'commission-works' },
  ];
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const renderComponent = () => {
    switch (slug) {
      case 'portraits':
        return <Portraits />;
      case 'landscapes':
        return <Landscapes />;
      case 'abstracts':
        return <Abstracts />;
      case 'village-scenes':
        return <VillageScenes />;
      case 'commission-works':
        return <CommissionWorks />;
      default:
        return <Portraits />;
    }
  };

  const formattedTitle = slug.replace('-', ' ').toUpperCase();

  return (
    <div className="min-h-screen bg-[#fafafc] text-slate-900 pb-24">
      {/* Header Bar - Single row layout across mobile and desktop */}
      <header className="sticky top-0 z-50 glass-nav px-4 sm:px-6 py-3.5 flex items-center justify-between border-b border-black/10 bg-white/90 backdrop-blur-md">
        
        {/* Back Link */}
        <Link 
          href="/" 
          className="flex items-center gap-1.5 text-xs font-bold tracking-widest text-slate-900 hover:opacity-75 transition-opacity uppercase shrink-0"
        >
          <span className="sm:hidden flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-sm">←</span>
          <span className="hidden sm:inline">← Back to Gallery</span>
        </Link>

        {/* Gallery Title */}
        <div className="text-[10px] sm:text-xs font-semibold tracking-wider text-slate-600 uppercase truncate px-2 text-center">
          The Christy Black Art Gallery
        </div>

        {/* WhatsApp Icon CTA (Green on all views) */}
        <a
          href="https://wa.me/233548648357?text=Hello,%20I%20would%20like%20to%20make%20an%20inquiry%20regarding%20the%20gallery."
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 flex items-center justify-center rounded-full bg-[#25D366] text-white shadow-md hover:scale-105 transition-all p-2.5 sm:px-4 sm:py-2.5 sm:gap-2"
        >
          <WhatsAppIcon size={18} className="text-white shrink-0" />
          <span className="hidden sm:inline text-[10px] font-bold tracking-wider uppercase">
            WhatsApp
          </span>
        </a>

      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 sm:px-6 pt-10 sm:pt-12">
        <div className="mb-10 sm:mb-12 flex flex-col items-center text-center">
          <span className="mb-3 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-slate-700 bg-white border border-black/10 shadow-xs uppercase">
            Collection View
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-slate-900 capitalize">
            {formattedTitle}
          </h1>
          <p className="mt-3 max-w-md text-xs sm:text-sm text-slate-600">
            Comprehensive view of masterworks curated in Katamanso, Accra.
          </p>
        </div>

        {/* Dynamic Category Component */}
        {renderComponent()}
      </main>
    </div>
  );
}