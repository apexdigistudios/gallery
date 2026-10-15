'use client';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const navItems = [
  { id: 'home', label: 'Home', icon: 'home' },
  { id: 'favorites', label: 'Favorites', icon: 'heart' },
  { id: 'search', label: 'Search', icon: 'search' },
  { id: 'consult', label: 'Consult', icon: 'headset' },
];

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <nav className="glass-nav glass-specular liquid-glass pointer-events-auto rounded-full px-3 py-2.5 shadow-2xl">
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`group relative flex flex-col items-center gap-0.5 rounded-full px-5 py-2 transition-all ${
                  isActive
                    ? 'bg-white/15 text-white shadow-inner'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={isActive ? '2.4' : '2'}
                  className="h-5 w-5"
                >
                  {item.icon === 'home' && (
                    <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10" />
                  )}
                  {item.icon === 'heart' && (
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                  )}
                  {item.icon === 'search' && (
                    <>
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </>
                  )}
                  {item.icon === 'headset' && (
                    <>
                      <path d="M3 14v-4a9 9 0 0118 0v4M21 14a2 2 0 01-2 2h-1v-6h1a2 2 0 012 2zM3 14a2 2 0 002 2h1v-6H5a2 2 0 00-2 2z" />
                      <path d="M17 16v2a4 4 0 01-4 4h-2" />
                    </>
                  )}
                </svg>
                <span className={`text-[9px] font-semibold tracking-wide ${isActive ? 'text-white' : 'text-white/70'}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}