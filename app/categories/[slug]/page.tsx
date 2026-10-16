import Link from 'next/link';
import Portraits from '@/components/Portraits';
import Landscapes from '@/components/Landscapes';
import Abstracts from '@/components/Abstracts';
import VillageScenes from '@/components/VillageScenes';
import CommissionWorks from '@/components/CommissionWorks';

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
      {/* Header Bar */}
      <header className="sticky top-0 z-50 glass-nav px-6 py-4 flex items-center justify-between border-b border-black/10 bg-white/80 backdrop-blur-md">
        <Link href="/" className="flex items-center gap-2 text-xs font-bold tracking-widest text-slate-900 hover:opacity-75 transition-opacity uppercase">
          ← Back to Gallery
        </Link>
        <div className="text-xs font-semibold tracking-wider text-slate-600 uppercase">
          The Christy Black Art Gallery
        </div>
        <a
          href="https://wa.me/233505232320"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-slate-900 px-4 py-2 text-[10px] font-bold tracking-wider text-white shadow-md hover:scale-105 transition-all"
        >
          Inquire via WhatsApp
        </a>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 pt-12">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="mb-3 rounded-full px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-slate-700 bg-white border border-black/10 shadow-xs uppercase">
            Collection View
          </span>
          <h1 className="font-display text-4xl font-medium tracking-tight text-slate-900 md:text-5xl capitalize">
            {formattedTitle}
          </h1>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Comprehensive view of masterworks curated in Katamanso, Accra.
          </p>
        </div>

        {/* Dynamic Category Component */}
        {renderComponent()}
      </main>
    </div>
  );
}