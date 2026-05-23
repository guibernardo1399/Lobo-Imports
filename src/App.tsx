import React, { useEffect, Suspense, lazy } from 'react';
const CustomCursor = lazy(() =>
  import('./components/effects/CustomCursor').then(m => ({ default: m.CustomCursor }))
);
import { NoiseOverlay } from './components/effects/NoiseOverlay';
import { Navbar } from './components/sections/Navbar';
import { Hero } from './components/sections/Hero';
import { Catalog } from './components/sections/Catalog';
import { Benefits } from './components/sections/Benefits';
import { SocialProof } from './components/sections/SocialProof';
import { HowItWorks } from './components/sections/HowItWorks';
import { FAQ } from './components/sections/FAQ';
import { Footer } from './components/sections/Footer';
import { MessageSquare } from 'lucide-react';
import { ScrollTrigger } from './lib/gsap-setup';

const App: React.FC = () => {
  useEffect(() => {
    if (window.matchMedia('(max-width: 767px)').matches) return;

    const refresh = () => ScrollTrigger.refresh();
    if ('requestIdleCallback' in window) {
      requestIdleCallback(refresh, { timeout: 1000 });
    } else {
      setTimeout(refresh, 800);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-dark-deep font-body selection:bg-gold selection:text-dark-deep">
      {/* Visual Effects layer */}
      <Suspense fallback={null}>
        <CustomCursor />
      </Suspense>
      <NoiseOverlay />

      {/* Floating Premium WhatsApp button (Gold pulse effect) */}
      <a
        href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+consultor+sobre+o+estoque+da+Lobos+Imports."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 p-4 bg-gold hover:bg-gold-light text-dark-deep rounded-full shadow-2xl transition-all duration-300 hover:scale-110 gold-glow hover:gold-glow-intense flex items-center justify-center md:animate-[float_6s_ease-in-out_infinite]"
        aria-label="Chamar no WhatsApp"
      >
        {/* Pulsing visual outer rings */}
        <div className="absolute inset-0 rounded-full bg-gold/30 md:animate-ping pointer-events-none" />
        <MessageSquare size={22} className="stroke-[2.5]" />
      </a>

      {/* Structured Sections */}
      <Navbar />
      <main>
        <Hero />
        <Catalog />
        <Benefits />
        <SocialProof />
        <HowItWorks />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default App;
