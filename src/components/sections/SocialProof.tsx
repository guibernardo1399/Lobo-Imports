import React, { useEffect, useRef } from 'react';
import { ShieldCheck, ShieldAlert, MessageSquare, Check, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';
import { gsap } from '../../lib/gsap-setup';
import { IMAGES } from '../../config/images';

export const SocialProof: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray<HTMLElement>('.social-reveal');
        elements.forEach((el) => {
          gsap.fromTo(el,
            { y: 30, opacity: 0 },
            {
              scrollTrigger: {
                trigger: el,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out'
            }
          );
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const deliveries = [
    {
      imgUrl: IMAGES.delivery1,
      city: 'Belém / PA',
      product: 'iPhone 16 Lacrado',
    },
    {
      imgUrl: IMAGES.delivery3,
      city: 'Belém / PA',
      product: 'MacBook Air M4',
    },
    {
      imgUrl: IMAGES.delivery2,
      city: 'Ananindeua / PA',
      product: 'iPhone 16 Pro Max',
    },
    {
      imgUrl: IMAGES.delivery4,
      city: 'Belém / PA',
      product: 'PlayStation 5 Slim',
    }
  ];

  return (
    <section 
      id="social-proof" 
      ref={containerRef}
      className="relative w-full bg-dark-deep py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Dynamic Gold Radial Glows for premium framing */}
      <div className="hidden md:block absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Title Block */}
        <div className="flex flex-col items-start text-left mb-20">
          <span className="social-reveal block text-[10px] tracking-[0.3em] font-display font-extrabold text-gold uppercase mb-3">
            Entregas VIP em Belém
          </span>
          <h2 className="social-reveal font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-premium-white tracking-tighter leading-none select-none">
            Provas Reais de Entrega
          </h2>
          <p className="social-reveal font-body text-sm md:text-base text-premium-gray max-w-xl mt-6 font-light leading-relaxed">
            Aqui valorizamos a verdade. Conheça registros fotográficos reais de nossos aparelhos de elite entregues em mãos com segurança na nossa região.
          </p>
        </div>

        {/* Deliveries Gallery Grid (Luxurious physically framed cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {deliveries.map((d, index) => {
            // Asymmetric margin spacing to break standard grid alignment (IA look)
            const sideMargin = index % 2 === 1 ? 'lg:translate-y-8' : '';

            return (
              <div
                key={index}
                className={`social-reveal will-change-transform-opacity flex flex-col md:flex-row bg-dark-card border border-white/5 p-6 md:p-8 gap-6 md:gap-8 group transition-[border-color,box-shadow] duration-300 md:hover:border-gold/20 md:hover:gold-glow ${sideMargin}`}
              >
                {/* Visual Image container with thick premium drop-shadow and gold metallic line */}
                <div className="w-full aspect-[4/5] md:aspect-auto md:w-[220px] md:h-[260px] flex-shrink-0 overflow-hidden bg-black border border-white/10 relative shadow-2xl select-none group-hover:border-gold/30 transition-all duration-500">
                  <picture>
                    <img 
                      src={d.imgUrl} 
                      alt={`Entrega Lobos Imports`} 
                      className="w-full h-full object-cover md:grayscale-[20%] md:group-hover:grayscale-0 transition-transform duration-500 md:group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="800"
                    />
                  </picture>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Review Text content replaced with clean product verification labels */}
                <div className="flex flex-col justify-between text-left py-2">
                  <div className="flex flex-col items-start gap-4">
                    {/* Location Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gold/10 border border-gold/25 text-gold text-[10px] font-bold tracking-[0.2em] uppercase">
                      <MapPin size={10} />
                      {d.city}
                    </div>

                    {/* Clean authentic delivered product text */}
                    <div>
                      <span className="text-[10px] tracking-widest text-premium-gray font-display font-semibold uppercase block mb-1">
                        PRODUTO ENTREGUE
                      </span>
                      <h3 className="font-display text-lg md:text-xl font-extrabold text-premium-white uppercase tracking-tight group-hover:text-gold transition-colors duration-300">
                        {d.product}
                      </h3>
                    </div>
                  </div>

                  {/* Verification features checklist (True concrete operations) */}
                  <ul className="space-y-2.5 my-6 text-left">
                    <li className="flex items-center gap-2 text-[10px] text-premium-gray">
                      <Check size={12} className="text-gold flex-shrink-0" />
                      <span className="font-body tracking-wider">Ativação realizada na presença do cliente</span>
                    </li>
                    <li className="flex items-center gap-2 text-[10px] text-premium-gray">
                      <Check size={12} className="text-gold flex-shrink-0" />
                      <span className="font-body tracking-wider">Caixa lacrada e testada na hora</span>
                    </li>
                    <li className="flex items-center gap-2 text-[10px] text-premium-gray">
                      <ShieldCheck size={12} className="text-gold flex-shrink-0" />
                      <span className="font-body tracking-wider font-semibold text-gold">100% Homologado e Original</span>
                    </li>
                  </ul>

                  {/* Footer status label */}
                  <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-premium-gray">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 md:animate-ping" />
                    <span className="font-body text-[9px] tracking-wider uppercase font-semibold text-emerald-500">
                      Entrega Concluída
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Security / Anti-Fraud CTA Callout banner - Integrando John Anderson com luxo */}
        <div className="social-reveal will-change-transform-opacity max-w-4xl mx-auto glass-card-gold p-8 md:p-10 mt-16 text-left relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left side: Premium photo of John Anderson with luxury styling */}
            <div className="md:col-span-4 flex flex-col items-center text-center relative select-none">
              <div className="w-[160px] h-[190px] overflow-hidden bg-black border-2 border-gold/30 shadow-2xl relative">
                <picture>
                  <img 
                    src={IMAGES.johnAnderson} 
                    alt="John Anderson — Fundador" 
                    className="w-full h-full object-cover grayscale-[15%] hover:grayscale-0 transition-all duration-500"
                    loading="lazy"
                    decoding="async"
                    width="160"
                    height="190"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <span className="font-display text-[10px] font-extrabold tracking-widest text-gold uppercase mt-3">
                John Anderson
              </span>
              <span className="font-body text-[8px] tracking-widest text-premium-gray uppercase">
                Fundador & Consultor VIP
              </span>
            </div>

            {/* Right side: Security explanation and quote from founder */}
            <div className="md:col-span-8 flex flex-col justify-between items-start gap-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldAlert size={14} className="text-gold" />
                  <span className="font-display text-[9px] font-extrabold tracking-[0.25em] text-gold uppercase">Compromisso com Você</span>
                </div>
                <h3 className="font-display text-xl font-bold uppercase text-premium-white leading-snug mb-3">
                  Transparência e Segurança de Verdade
                </h3>
                <p className="font-body text-xs text-premium-gray italic leading-relaxed font-light mb-4 text-left">
                  "Criei a Lobos Imports com o objetivo de oferecer o melhor preço da região de forma transparente e segura. Eu mesmo participo e acompanho de perto a ativação e teste de cada aparelho entregue em mãos em Belém, para que você compre com total tranquilidade. Você só realiza o pagamento após ligar, testar o chip e conferir o aparelho em suas mãos."
                </p>
              </div>

              <Button
                href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+falar+com+o+John+Anderson+sobre+a+compra+segura+de+um+eletr%C3%B4nico."
                target="_blank"
                variant="primary"
                className="flex items-center gap-2.5 text-[10px] px-8"
              >
                <MessageSquare size={14} />
                Falar Direto no WhatsApp
              </Button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
