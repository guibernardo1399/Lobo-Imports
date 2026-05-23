import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Check, Plus } from 'lucide-react';
import { Button } from '../ui/Button';
import { productsData } from '../../data/products';
import { gsap } from '../../lib/gsap-setup';
import { IMAGES } from '../../config/images';

type CategoryId = 'all' | 'apple' | 'garmin' | 'games' | 'xiaomi-realme';

export const Catalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>('all');
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

  const categories: { id: CategoryId; label: string }[] = [
    { id: 'all', label: 'Tudo' },
    { id: 'apple', label: 'Apple Pro' },
    { id: 'garmin', label: 'Garmin Sport' },
    { id: 'games', label: 'Games & Console' },
    { id: 'xiaomi-realme', label: 'Xiaomi & Realme' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? productsData 
    : productsData.filter(p => p.category === activeCategory);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        gsap.fromTo('.catalog-title-reveal',
          { y: 40, opacity: 0 },
          {
            scrollTrigger: {
              trigger: '.catalog-title-reveal',
              start: 'top 80%',
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
    <section 
      id="catalog" 
      ref={containerRef}
      className="relative min-h-screen w-full bg-dark-deep py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Absolute Decorative Ambient Glows */}
      <div className="hidden md:block absolute top-1/2 left-0 w-[40vw] h-[40vw] rounded-full bg-gold/3 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Title Area */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 relative">
          <div className="text-left">
            <span className="catalog-title-reveal block text-[10px] tracking-[0.3em] font-display font-extrabold text-gold uppercase mb-3">
              Seleção Premium
            </span>
            <h2 className="catalog-title-reveal font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-premium-white tracking-tighter leading-none select-none">
              Catálogo Exclusivo
            </h2>
          </div>
          <p className="catalog-title-reveal font-body text-sm md:text-base text-premium-gray max-w-md lg:text-right mt-6 lg:mt-0 font-light leading-relaxed">
            Catálogo atualizado em tempo real. Dispositivos novos com procedência e garantia total de fábrica, prontos para entrega imediata em Belém.
          </p>
        </div>

        {/* Categories Tab selector (luxurious glass design) */}
        <div className="flex flex-wrap gap-3 mb-16 justify-start pb-4 border-b border-white/5">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`relative px-6 py-3 font-display text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'text-dark-deep bg-gold border border-gold gold-glow'
                  : 'text-premium-gray hover:text-premium-white bg-dark-card/50 border border-white/5 hover:border-white/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Asymmetric Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product, index) => {
              const isEven = index % 2 === 0;
              const hoverEffect = isEven ? "hover:-translate-y-2" : "hover:translate-y-[-8px]";
              const cardClass = `group relative bg-dark-card border border-white/5 p-6 flex flex-col justify-between transition-[border-color,box-shadow] duration-300 overflow-hidden ${hoverEffect} hover:border-gold/30 hover:gold-glow`;

              return (
                <motion.div
                  key={product.id}
                  initial={isMobile ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={isMobile ? undefined : { opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className={cardClass}
                >
                  {/* Subtle Background wolf graphic on card hover */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none select-none">
                    <img src={IMAGES.logoSymbol} alt="" className="w-full h-full object-contain" />
                  </div>

                  <div>
                    {/* Tags List */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 text-[8px] font-bold tracking-widest text-gold bg-gold/10 border border-gold/10 uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Interactive Image Container */}
                    <div className="relative aspect-square w-full mb-6 overflow-hidden bg-white p-6 select-none border border-white/5 rounded-2xl">
                      <picture>
                        <img 
                          src={product.imageUrl} 
                          alt={product.name} 
                          className="w-full h-full object-contain scale-[1.06] transition-transform duration-700 group-hover:scale-[1.12]"
                          loading="lazy"
                          decoding="async"
                          width="640"
                          height="640"
                        />
                      </picture>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-display text-xl font-bold uppercase text-premium-white group-hover:text-gold transition-colors duration-300 mb-3 tracking-tight">
                      {product.name}
                    </h3>

                    {/* Product Description */}
                    <p className="font-body text-xs text-premium-gray mb-6 leading-relaxed font-light line-clamp-3">
                      {product.description}
                    </p>

                    {/* Specs Bullet Points */}
                    <ul className="space-y-2 mb-8 text-left border-t border-b border-white/5 py-4">
                      {product.specs.map((spec) => (
                        <li key={spec} className="flex items-center gap-2 text-[10px] text-premium-gray">
                          <Check size={10} className="text-gold flex-shrink-0" />
                          <span className="font-body tracking-wider">{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing and Action Area */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-body text-base font-bold text-gold text-glow-gold">
                        {product.price}
                      </span>
                      <span className="font-display text-[9px] tracking-wider text-gold font-bold uppercase py-1 px-2.5 bg-gold/10">
                        Pronta Entrega
                      </span>
                    </div>

                    <Button
                      href={`https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+consultar+a+disponibilidade+do+${encodeURIComponent(product.name)}`}
                      target="_blank"
                      variant="primary"
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 text-[10px]"
                    >
                      <ShoppingBag size={12} />
                      Consultar Disponibilidade
                    </Button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Elegant Custom '+ Card' displaying broad inventory scope */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="group relative bg-dark-card/30 border border-dashed border-gold/30 p-6 flex flex-col justify-between transition-all duration-500 hover:border-gold hover:gold-glow min-h-[480px] text-left"
          >
            {/* Gold watermark icon background */}
            <div className="absolute -bottom-8 -right-8 w-36 h-36 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-700 pointer-events-none select-none">
              <img src={IMAGES.logoSymbol} alt="" className="w-full h-full object-contain" />
            </div>

            <div>
              {/* Large visual Gold plus icon box */}
              <div className="w-full aspect-video mb-6 bg-gold/5 border border-dashed border-gold/15 flex items-center justify-center relative select-none">
                <div className="p-4 bg-gold/5 border border-gold/20 rounded-full group-hover:scale-110 group-hover:border-gold transition-all duration-500">
                  <Plus size={32} className="text-gold" />
                </div>
              </div>

              {/* Card Title */}
              <span className="px-2.5 py-0.5 text-[8px] font-bold tracking-widest text-gold bg-gold/10 border border-gold/15 uppercase inline-block mb-4">
                Importações Customizadas
              </span>
              <h3 className="font-display text-xl font-bold uppercase text-premium-white group-hover:text-gold transition-colors duration-300 mb-3 tracking-tight">
                E Mais de +150 Opções
              </h3>

              {/* Card Description */}
              <p className="font-body text-xs text-premium-gray mb-6 leading-relaxed font-light">
                Procura algum outro modelo, cor ou capacidade de iPhone, MacBook, Garmin, console de videogame, Xiaomi ou acessório específico? Nós importamos direto para você com faturamento seguro, prazos expressos e o melhor custo-benefício de Belém.
              </p>
            </div>

            {/* Action Button */}
            <div>
              <Button
                href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+consultar+se+voc%C3%AAs+t%C3%AAm+outros+modelos+espec%C3%ADficos+no+estoque."
                target="_blank"
                variant="outline"
                className="w-full flex items-center justify-center gap-2 py-3.5 text-[10px]"
              >
                Consultar Outros Modelos
              </Button>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
