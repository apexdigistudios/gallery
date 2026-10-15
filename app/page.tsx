'use client';

import { useEffect } from 'react';
import { HeaderNav } from "../components/HeaderNav";
import HeroSection from "../components/HeroSection";
import ArtworkGrid from "../components/ArtworkGrid";
import ExhibitionShowcase from "../components/ExhibitionShowcase";
import AboutSection from "../components/AboutSection";
import InfoTiles from "../components/InfoTiles";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]');

    if (!revealItems.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative min-h-screen text-foreground">
      <HeaderNav />
      <main className="space-y-[clamp(3rem,6vw,5rem)] pb-16 pt-24">
        <div data-reveal className="reveal-section">
          <HeroSection />
        </div>
        <div id="artworks" data-reveal className="reveal-section">
          <ArtworkGrid />
        </div>
        <div id="exhibitions" data-reveal className="reveal-section">
          <ExhibitionShowcase />
        </div>
        <div id="about" data-reveal className="reveal-section">
          <AboutSection />
        </div>
        <div id="contact" data-reveal className="reveal-section">
          <InfoTiles />
        </div>
      </main>
      <Footer />
    </div>
  );
}