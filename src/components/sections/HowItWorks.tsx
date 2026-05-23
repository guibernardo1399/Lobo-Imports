import React, { useEffect, useRef } from 'react';
import { MessageSquare, HeartHandshake, Eye, Truck } from 'lucide-react';
import { Button } from '../ui/Button';
import { gsap } from '../../lib/gsap-setup';

export const HowItWorks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = gsap.utils.toArray('.step-card-reveal');
      elements.forEach((el: any) => {
        gsap.fromTo(el, 
          { y: 30, opacity: 0 },
          {
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
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
  }, []);

  const steps = [
    {
      num: '01',
      icon: <Eye className="text-gold" size={22} />,
      title: 'Selecione a Tecnologia',
      desc: 'Explore nosso catálogo premium ou nos diga qual o modelo exato de iPhone, MacBook, Garmin ou videogame que você deseja garantir.'
    },
    {
      num: '02',
      icon: <MessageSquare className="text-gold" size={22} />,
      title: 'Orçamento via WhatsApp',
      desc: 'Nossos consultores fazem um atendimento vip em até 15 minutos úteis. Você escolhe a cor, capacidade e confere o melhor preço do Pará.'
    },
    {
      num: '03',
      icon: <Truck className="text-gold" size={22} />,
      title: 'Entrega VIP em Mãos',
      desc: 'Marque o melhor horário e local de Belém ou Ananindeua (no conforto da sua casa, no escritório ou na segurança de um shopping movimentado).'
    },
    {
      num: '04',
      icon: <HeartHandshake className="text-gold" size={22} />,
      title: 'Verifique, Ligue e Pague',
      desc: 'Nossa regra máxima: você abre a caixa, liga o aparelho, testa a câmera, som e chip pessoalmente e só paga depois que estiver 100% satisfeito.'
    }
  ];

  return (
    <section 
      id="how-it-works" 
      ref={containerRef}
      className="relative w-full bg-dark-deep py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Decorative Radial Glow */}
      <div className="absolute top-1/2 right-1/4 w-[30vw] h-[30vw] rounded-full bg-gold/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-20 relative">
          <span className="step-card-reveal block text-[10px] tracking-[0.3em] font-display font-extrabold text-gold uppercase mb-3">
            Passo a Passo Simples
          </span>
          <h2 className="step-card-reveal font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-premium-white tracking-tighter leading-none select-none">
            Como Garantir o Seu
          </h2>
          <p className="step-card-reveal font-body text-sm md:text-base text-premium-gray max-w-lg mt-6 font-light leading-relaxed">
            Uma jornada de compra sem dor de cabeça, sem burocracias de e-commerce convencionais e com foco total na sua segurança.
          </p>
        </div>

        {/* Steps Flow (Connected geometric cards with numbers) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle connecting gold dotted line for desktop */}
          <div className="hidden lg:block absolute left-12 right-12 top-1/2 h-[1px] border-t border-dashed border-gold/15 z-0 pointer-events-none" />

          {steps.map((s) => (
            <div
              key={s.num}
              className="step-card-reveal relative z-10 bg-dark-card border border-white/5 p-8 flex flex-col justify-between group transition-all duration-500 hover:border-gold/20 hover:gold-glow text-left"
            >
              <div>
                {/* Number & Icon header */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-display text-xs font-black tracking-widest text-gold bg-gold/10 px-3 py-1 border border-gold/10 uppercase select-none">
                    Etapa {s.num}
                  </span>
                  <div className="p-2.5 bg-gold/5 border border-gold/15 rounded-none">
                    {s.icon}
                  </div>
                </div>

                {/* Step Title */}
                <h3 className="font-display text-lg font-bold uppercase text-premium-white tracking-tight mb-4 group-hover:text-gold transition-colors duration-300">
                  {s.title}
                </h3>

                {/* Step Description */}
                <p className="font-body text-xs text-premium-gray font-light leading-relaxed">
                  {s.desc}
                </p>
              </div>

              {/* Bullet spacer/connector for mobile */}
              <div className="w-1.5 h-1.5 rounded-full bg-gold/30 group-hover:bg-gold transition-colors duration-300 mt-8" />
            </div>
          ))}
        </div>

        {/* Simple inline call to action */}
        <div className="step-card-reveal flex flex-col items-center mt-20">
          <Button
            href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+falar+com+um+consultor+e+consultar+a+disponibilidade+de+aparelhos."
            target="_blank"
            variant="outline"
            className="px-12 py-4"
          >
            Chamar Consultor Agora
          </Button>
        </div>

      </div>
    </section>
  );
};
