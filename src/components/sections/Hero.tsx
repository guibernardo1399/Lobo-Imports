import React, { useEffect, useRef } from 'react';
import { MessageSquare, ShieldCheck, MapPin, Zap } from 'lucide-react';
import { Button } from '../ui/Button';
import { Canvas3D } from '../effects/Canvas3D';
import { gsap } from '../../lib/gsap-setup';
import { IMAGES } from '../../config/images';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(max-width: 767px)', () => {
      const pctEl = document.getElementById('hero-pct-counter');
      const hrsEl = document.getElementById('hero-hrs-counter');
      if (pctEl) pctEl.innerText = '100';
      if (hrsEl) hrsEl.innerText = '2';
    });

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

        tl.from('.hero-glow', {
          opacity: 0,
          scale: 0.6,
          duration: 2,
          stagger: 0.3
        });

        if (headlineRef.current) {
          const chars = headlineRef.current.querySelectorAll('.reveal-line');
          tl.from(chars, {
            y: '100%',
            opacity: 0,
            duration: 1.4,
            stagger: 0.1,
          }, '-=1.6');
        }

        tl.from('.hero-reveal', {
          y: 30,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15
        }, '-=1.0');

        if (rightColRef.current) {
          tl.from(rightColRef.current.querySelectorAll('.stack-item'), {
            x: 60,
            scale: 0.95,
            opacity: 0,
            duration: 1.6,
            stagger: 0.2
          }, '-=1.2');
        }

        const countTargets = { pct: 0, hrs: 0 };
        tl.to(countTargets, {
          pct: 100,
          hrs: 2,
          duration: 2.2,
          ease: 'power3.out',
          onUpdate: () => {
            const pctEl = document.getElementById('hero-pct-counter');
            const hrsEl = document.getElementById('hero-hrs-counter');
            if (pctEl) pctEl.innerText = Math.round(countTargets.pct).toString();
            if (hrsEl) hrsEl.innerText = Math.round(countTargets.hrs).toString();
          }
        }, '-=1.4');
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen w-full bg-dark-deep pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden"
    >
      {/* Dynamic Golden Ambient Lights */}
      <div className="hero-glow hidden md:block absolute top-1/4 left-1/4 w-[35vw] h-[35vw] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="hero-glow hidden md:block absolute bottom-10 right-1/4 w-[45vw] h-[45vw] rounded-full bg-gold/3 blur-[160px] pointer-events-none" />
      
      {/* Massive Floating 3D Brand Watermark in the background — hidden on mobile (794KB PNG) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] lg:w-[50vw] opacity-[0.03] blur-[1px] pointer-events-none select-none z-0">
        <img
          src={IMAGES.logoFull}
          alt=""
          className="w-full h-auto object-contain animate-[float_8s_ease-in-out_infinite]"
          loading="lazy"
          decoding="async"
          width="960"
          height="300"
        />
      </div>

      {/* Decorative vertical golden line */}
      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/15 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center z-10">
        
        {/* LEFT COLUMN: Asymmetric Content & Manifesto */}
        <div className="lg:col-span-7 flex flex-col items-start text-left relative pl-4 md:pl-8 z-10">
          
          {/* Subtle VIP Location Badge */}
          <div className="hero-reveal mb-6 inline-flex items-center gap-2 px-3 py-1.5 glass-card-gold rounded-full">
            <MapPin size={12} className="text-gold md:animate-pulse" />
            <span className="font-body text-[10px] md:text-xs font-bold tracking-[0.2em] text-gold uppercase">
              Belém & Região Metropolitana
            </span>
          </div>

          {/* Majestic Clamp Headline (Max 10 words, 100% concrete) */}
          <h1 
            ref={headlineRef}
            className="font-display text-[2.2rem] sm:text-[3.5rem] md:text-[4.2rem] lg:text-[4.4rem] xl:text-[5rem] leading-[1.1] font-black uppercase text-premium-white tracking-normal mb-8 select-none"
          >
            <span className="block reveal-mask py-1">
              <span className="reveal-line block">Os eletrônicos</span>
            </span>
            <span className="block reveal-mask py-1 text-glow-gold text-gold">
              <span className="reveal-line block">mais desejados</span>
            </span>
            <span className="block reveal-mask py-1">
              <span className="reveal-line block">em mãos no Pará</span>
            </span>
          </h1>

          {/* Persuasive Subheadline */}
          <p className="hero-reveal font-body text-base md:text-lg text-premium-gray max-w-xl mb-10 leading-relaxed font-light">
            Adquira iPhones, MacBooks, Garmins e PS5 originais com parcelamento inteligente em <strong className="text-premium-white font-semibold">até 18x no cartão</strong>. Teste e comprove tudo presencialmente no ato da entrega antes de pagar.
          </p>

          {/* Action Area (No standard side-by-side equal buttons!) */}
          <div className="hero-reveal flex flex-col sm:flex-row items-stretch sm:items-center gap-6 w-full sm:w-auto mb-16">
            <Button
              href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+consultar+a+disponibilidade+do+iPhone+e+outros+eletr%C3%B4nicos."
              target="_blank"
              variant="primary"
              className="flex items-center gap-3 px-10 py-5 justify-center"
            >
              <MessageSquare size={18} />
              Garantir Oferta Exclusiva
            </Button>
            
            <a 
              href="#catalog" 
              className="group flex items-center justify-center gap-3 text-xs tracking-[0.25em] font-display font-semibold uppercase text-premium-white hover:text-gold transition-colors py-3"
            >
              <Zap size={14} className="text-gold md:animate-bounce" />
              Explorar Coleção
              <span className="w-8 h-[1px] bg-gold/50 transition-all duration-300 group-hover:w-16" />
            </a>
          </div>

          {/* 1-1-1 Concrete Rule Banner (Numbers, Names, Sensory Details) */}
          <div 
            className="hero-reveal grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/5 w-full max-w-2xl text-left"
          >
            <div>
              <span className="block font-display text-3xl font-extrabold text-gold text-glow-gold">
                VIP
              </span>
              <span className="block text-[10px] tracking-widest font-body text-premium-gray uppercase mt-1 leading-normal">
                Atendimento Humano em até 15 min
              </span>
            </div>
            <div>
              <span className="block font-display text-3xl font-extrabold text-premium-white">
                <span id="hero-pct-counter">0</span>%
              </span>
              <span className="block text-[10px] tracking-widest font-body text-premium-gray uppercase mt-1 leading-normal">
                Procedência original e testado na hora
              </span>
            </div>
            <div>
              <span className="block font-display text-3xl font-extrabold text-gold text-glow-gold">
                <span id="hero-hrs-counter">0</span> Horas
              </span>
              <span className="block text-[10px] tracking-widest font-body text-premium-gray uppercase mt-1 leading-normal">
                Entrega VIP rápida local no Pará
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Asymmetric Premium Visual Stack */}
        <div ref={rightColRef} className="lg:col-span-5 relative flex justify-center items-center h-[500px] lg:h-[600px] w-full">
          {/* Background Gold Luxury Circle glow & 3D rotating canvas sphere */}
          <div className="stack-item absolute w-[90%] h-[90%] flex justify-center items-center pointer-events-none z-0">
            <div className="absolute w-[80%] h-[80%] rounded-full border border-gold/10 flex justify-center items-center md:animate-pulse-slow">
              <div className="w-[85%] h-[85%] rounded-full border border-gold/5" />
            </div>
            <div className="absolute w-[300px] h-[300px] flex items-center justify-center opacity-65">
              <Canvas3D />
            </div>
          </div>

          {/* Core Product stack displaying high-end luxury */}
          <div className="relative w-[320px] sm:w-[380px] h-[400px] flex items-center justify-center">
            
            {/* Main Product image - MacBook Air M5 (Premium layout) */}
            <div className="stack-item absolute top-0 left-0 sm:-left-6 z-10 w-[240px] sm:w-[280px] bg-dark-card border border-white/10 p-2.5 gold-glow transition-transform duration-500 hover:scale-105 select-none rounded-2xl">
              <div className="w-full h-[150px] sm:h-[180px] overflow-hidden rounded-xl bg-white p-3">
                <picture>
                  <img
                    src={IMAGES.macbookAirM5}
                    alt="MacBook Air M5"
                    className="w-full h-full object-contain scale-[1.06]"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width="500"
                    height="350"
                  />
                </picture>
              </div>
              <div className="mt-3 flex justify-between items-center px-1">
                <span className="font-display text-[10px] tracking-widest text-premium-white font-semibold uppercase">MacBook Air M5</span>
                <span className="font-body text-xs text-gold font-bold">Sob Consulta</span>
              </div>
            </div>

            {/* Accent Stack: iPhone 17 Pro Max actual photo representation */}
            <div className="stack-item absolute bottom-4 right-0 sm:-right-6 z-20 w-[180px] sm:w-[220px] bg-dark-card border border-gold/20 p-2 gold-glow transition-transform duration-500 hover:scale-105 select-none rounded-2xl">
              <div className="w-full h-[180px] sm:h-[220px] overflow-hidden rounded-xl bg-white p-3">
                <picture>
                  <img
                    src={IMAGES.iphone17ProMax}
                    alt="iPhone 17 Pro Max"
                    className="w-full h-full object-contain scale-[1.06]"
                    loading="eager"
                    decoding="async"
                    fetchPriority="high"
                    width="500"
                    height="600"
                  />
                </picture>
              </div>
              <div className="mt-2.5 flex justify-between items-center px-1">
                <span className="font-display text-[9px] tracking-widest text-premium-white font-semibold uppercase">iPhone 17 Pro Max</span>
                <span className="font-body text-xs text-gold font-bold">Sob Consulta</span>
              </div>
            </div>

            {/* Extra luxury badge float */}
            <div className="stack-item absolute -top-8 right-4 z-30 bg-dark-card border border-white/5 py-4 px-5 flex flex-col gap-1 items-start text-left max-w-[150px] shadow-2xl">
              <ShieldCheck size={18} className="text-gold mb-1" />
              <span className="font-display text-[9px] font-extrabold tracking-widest text-premium-white uppercase">GARANTIA LOBOS</span>
              <span className="font-body text-[8px] text-premium-gray leading-normal">Atendimento e suporte direto com especialista</span>
            </div>

            {/* Sutil Decorative Watermark Logo overlay at the background of stack */}
            <div className="stack-item hidden sm:block absolute -bottom-12 -left-12 z-0 opacity-10 select-none pointer-events-none">
              <img 
                src={IMAGES.logoSymbol} 
                alt="Lobos Imports emblem background" 
                className="w-48 h-auto object-contain"
                loading="lazy"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
