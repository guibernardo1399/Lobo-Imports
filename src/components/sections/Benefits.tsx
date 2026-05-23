import React, { useEffect, useRef } from 'react';
import { Shield, Sparkles, CreditCard, Clock } from 'lucide-react';
import { gsap } from '../../lib/gsap-setup';

export const Benefits: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray<HTMLElement>('.benefit-card-reveal');
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

  const benefits = [
    {
      num: '01',
      icon: <CreditCard className="text-gold" size={24} />,
      title: 'Parcelamento Inteligente',
      subtitle: 'Facilidades sem burocracia.',
      desc: 'Adquira seu novo eletrônico de forma inteligente dividindo o valor em até 18x no cartão de crédito. Uma forma acessível de conquistar o aparelho desejado sem pesar no planejamento financeiro mensal.',
      highlight: 'Parcelas em até 18x no cartão' // 1 Number
    },
    {
      num: '02',
      icon: <Shield className="text-gold" size={24} />,
      title: 'Garantia e Procedência',
      subtitle: 'Compre com tranquilidade total.',
      desc: 'Na Lobos Imports todos os produtos são novos e possuem garantia. No caso dos aparelhos Apple, o cliente conta com a Garantia Oficial Apple de 1 ano, válida globalmente a partir da data de ativação.',
      highlight: 'Garantia Oficial Apple de 1 ano' // 1 Nome Próprio
    },
    {
      num: '03',
      icon: <Sparkles className="text-gold" size={24} />,
      title: 'Teste Presencial VIP',
      subtitle: 'Compromisso com sua satisfação.',
      desc: 'Não compre às cegas. Entregamos seu eletrônico em mãos em Belém. Você abre o produto no ato da entrega e testa pessoalmente a câmera, o som, o chip e o sistema antes de realizar o pagamento final.',
      highlight: 'Sacola reforçada perfumada da loja' // 1 Detalhe Sensorial
    },
    {
      num: '04',
      icon: <Clock className="text-gold" size={24} />,
      title: 'Atendimento Rápido',
      subtitle: 'Sem e-mails frios ou secretárias.',
      desc: 'Você conversa diretamente com consultores dedicados no WhatsApp. Esclareça suas dúvidas técnicas, escolha o modelo perfeito e feche o seu orçamento com resposta média em até 15 minutos úteis.',
      highlight: 'Retorno garantido em até 15 min' // 1 Detalhe Sensorial / Número
    }
  ];

  return (
    <section 
      id="benefits" 
      ref={containerRef}
      className="relative w-full bg-dark-deep py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Decorative Light Glow */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[35vw] h-[35vw] rounded-full bg-gold/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        
        {/* Asymmetric Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-end">
          <div className="lg:col-span-8 text-left">
            <span className="benefit-card-reveal block text-[10px] tracking-[0.3em] font-display font-extrabold text-gold uppercase mb-3">
              Por que escolher a Lobos?
            </span>
            <h2 className="benefit-card-reveal font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-premium-white tracking-tighter leading-none select-none">
              Segurança e Exclusividade <br className="hidden md:inline" />
              em Cada Etapa
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <div className="benefit-card-reveal inline-flex items-center gap-2 px-3.5 py-1.5 glass-card-gold text-gold text-[10px] font-bold tracking-[0.25em] uppercase">
              Sem dor de cabeça ou desconfiança
            </div>
          </div>
        </div>

        {/* Benefits Grid (Asymmetric layout, not standard cards!) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {benefits.map((b, i) => {
            // Alternating top offset for asymmetric grid rhythm
            const offsetStyle = i % 2 === 1 ? 'md:mt-8' : '';

            return (
              <div
                key={b.num}
                className={`benefit-card-reveal will-change-transform-opacity relative bg-dark-card border border-white/5 p-8 md:p-10 flex flex-col justify-between group transition-all duration-500 hover:border-gold/30 hover:gold-glow ${offsetStyle}`}
              >
                {/* Massive Decorative Number behind content */}
                <span className="absolute top-2 right-4 font-display text-7xl md:text-8xl font-black text-white/[0.02] group-hover:text-gold/[0.04] transition-colors duration-500 select-none">
                  {b.num}
                </span>

                <div>
                  {/* Icon & Title row */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gold/5 border border-gold/15 rounded-none">
                      {b.icon}
                    </div>
                    <div className="text-left">
                      <span className="block text-[9px] tracking-widest font-body text-gold uppercase font-bold">
                        {b.subtitle}
                      </span>
                      <h3 className="font-display text-xl font-bold uppercase text-premium-white mt-1 group-hover:text-gold transition-colors duration-300">
                        {b.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body description */}
                  <p className="font-body text-xs md:text-sm text-premium-gray font-light leading-relaxed mb-8 text-left">
                    {b.desc}
                  </p>
                </div>

                {/* Highlight banner (Concreteness visual anchor) */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                  <span className="font-display text-[9px] tracking-[0.2em] font-extrabold uppercase text-gold">
                    {b.highlight}
                  </span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
