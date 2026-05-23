import React, { useEffect, useRef } from 'react';
import { MessageSquare, Instagram, MapPin, Phone, ShieldCheck, ArrowUp } from 'lucide-react';
import { Button } from '../ui/Button';
import { gsap } from '../../lib/gsap-setup';
import { IMAGES } from '../../config/images';

export const Footer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.footer-reveal',
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.footer-reveal',
              start: 'top 82%',
            },
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.15
          }
        );
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  return (
    <footer 
      ref={containerRef}
      className="relative w-full bg-black pt-24 pb-12 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Decorative ambient glowing lights */}
      <div className="hidden md:block absolute bottom-0 left-1/4 w-[40vw] h-[40vw] rounded-full bg-gold/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full z-10 relative">
        
        {/* UPPER BOLD CALL TO ACTION (CTA FINAL) */}
        <div className="footer-reveal max-w-5xl mx-auto text-center mb-24 pb-20 border-b border-white/5">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 border border-gold/20 text-gold text-[10px] font-bold tracking-[0.25em] uppercase mb-6 select-none">
            Últimas Unidades no Estoque
          </span>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase text-premium-white tracking-tighter leading-none mb-8 select-none">
            Sua Conquista <br className="hidden sm:inline" />
            Com Segurança Máxima
          </h2>
          <p className="font-body text-sm md:text-base text-premium-gray max-w-xl mx-auto mb-10 font-light leading-relaxed">
            Fale agora mesmo com nossos consultores de Belém. Esclareça suas dúvidas sobre parcelamento em 18x, garantia de fábrica ou combine a sua entrega expressa local hoje mesmo.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+garantir+meu+aparelho+no+melhor+pre%C3%A7o+de+Bel%C3%A9m."
              target="_blank"
              variant="primary"
              className="flex items-center gap-3 px-12 py-5 w-full sm:w-auto"
            >
              <MessageSquare size={16} />
              Garantir Meu Aparelho
            </Button>
            <Button
              href="https://www.instagram.com/lobos.imports/"
              target="_blank"
              variant="outline"
              className="flex items-center gap-3 px-10 py-5 w-full sm:w-auto hover:gold-glow"
            >
              <Instagram size={16} />
              Acompanhar Instagram
            </Button>
          </div>
        </div>

        {/* MIDDLE SECTION: Grid structure */}
        <div className="footer-reveal grid grid-cols-1 md:grid-cols-12 gap-12 items-start text-left mb-16">
          
          {/* Col 1: Brand presentation */}
          <div className="md:col-span-5 flex flex-col items-start gap-6">
            <a href="#" className="flex items-center gap-3 group">
              <img 
                src={IMAGES.logoSymbol} 
                alt="Lobos Imports" 
                className="h-12 w-auto object-contain"
                loading="lazy"
              />
              <div className="flex flex-col">
                <span className="font-display text-xl font-black tracking-[0.2em] text-gold text-glow-gold uppercase">
                  Lobos
                </span>
                <span className="text-[8px] tracking-[0.45em] uppercase text-premium-gray font-body">
                  Imports
                </span>
              </div>
            </a>
            <p className="font-body text-xs text-premium-gray font-light leading-relaxed max-w-sm">
              Distribuidora especializada em eletrônicos e importados de luxo. Garantimos aparelhos originais com entrega expressa local segura e o preço mais competitivo do Pará.
            </p>
            <div className="flex items-center gap-4 text-premium-gray pt-2">
              <a 
                href="https://www.instagram.com/lobos.imports/" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-white/5 border border-white/5 hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a 
                href="https://wa.me/5591981684652" 
                target="_blank" 
                rel="noreferrer"
                className="p-2.5 bg-white/5 border border-white/5 hover:border-gold hover:text-gold transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>

          {/* Col 2: Fast navigation */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <h4 className="font-display text-xs font-black tracking-widest text-gold uppercase mb-2">
              Navegação VIP
            </h4>
            <div className="flex flex-col gap-3">
              <a href="#catalog" className="font-body text-xs text-premium-gray hover:text-gold transition-colors">Coleção de Destaques</a>
              <a href="#benefits" className="font-body text-xs text-premium-gray hover:text-gold transition-colors">Nossos Diferenciais</a>
              <a href="#social-proof" className="font-body text-xs text-premium-gray hover:text-gold transition-colors">Clientes Reais</a>
              <a href="#how-it-works" className="font-body text-xs text-premium-gray hover:text-gold transition-colors">Como Funciona</a>
              <a href="#faq" className="font-body text-xs text-premium-gray hover:text-gold transition-colors">FAQ de Objeções</a>
            </div>
          </div>

          {/* Col 3: Direct contact details (1-1-1 sensory anchor) */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <h4 className="font-display text-xs font-black tracking-widest text-gold uppercase mb-2">
              Contatos Oficiais
            </h4>
            <div className="flex flex-col gap-4 text-premium-gray">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-gold flex-shrink-0 mt-0.5" />
                <span className="font-body text-xs leading-relaxed font-light text-left">
                  Entrega VIP expressa em Belém e Ananindeua. Ponto de retirada seguro em shoppings de Belém.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-gold flex-shrink-0" />
                <a href="tel:+5591981684652" className="font-body text-xs hover:text-gold transition-colors">
                  (91) 98168-4652
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ShieldCheck size={16} className="text-gold flex-shrink-0" />
                <span className="font-body text-xs font-semibold text-gold">
                  Autorizada Apple & Importadoras VIP
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Copyright & scroll back */}
        <div className="footer-reveal flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-premium-gray text-[10px] md:text-xs">
          <div className="text-center sm:text-left flex flex-col sm:flex-row sm:items-center gap-2">
            <span>© {new Date().getFullYear()} LOBOS IMPORTS. Todos os direitos reservados.</span>
            <span className="hidden sm:inline text-white/10">|</span>
            <span>CNPJ ativo para faturamento seguro e emissão de notas.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="mt-6 sm:mt-0 p-3 bg-white/5 border border-white/5 hover:border-gold hover:text-gold transition-all duration-300 flex items-center gap-2 font-display text-[9px] tracking-widest font-bold uppercase hover:gold-glow group"
            aria-label="Voltar ao topo"
          >
            Voltar ao Topo
            <ArrowUp size={12} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
