import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { gsap } from '../../lib/gsap-setup';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      const ctx = gsap.context(() => {
        const elements = gsap.utils.toArray<HTMLElement>('.faq-reveal');
        elements.forEach((el) => {
          gsap.fromTo(el,
            { y: 20, opacity: 0 },
            {
              scrollTrigger: {
                trigger: el,
                start: 'top 82%',
                toggleActions: 'play none none none',
              },
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: 'power3.out'
            }
          );
        });
      }, containerRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const faqs: FAQItem[] = [
    {
      question: 'Como funciona a entrega local em Belém e região?',
      answer: 'Entregamos em mãos de forma ultra rápida em até 2 horas úteis para Belém e Ananindeua. Você pode agendar a entrega no conforto da sua residência, no seu escritório comercial ou, para total segurança física, em shoppings movimentados como o Boulevard ou Bosque Grão-Pará.',
    },
    {
      question: 'Como posso testar o aparelho antes de realizar o pagamento?',
      answer: 'Essa é a nossa regra máxima de segurança. O consultor da Lobos Imports entrega o aparelho em mãos na sacola premium perfumada da loja. Você abre a caixa lacrada, insere seu chip de operadora, testa a câmera, confere o som, faz chamadas e confere todo o sistema operacional pessoalmente. Você só transfere o Pix ou passa o cartão de crédito após aprovar 100% o aparelho.',
    },
    {
      question: 'Os aparelhos possuem garantia oficial?',
      answer: 'Sim, procedência absoluta. No caso de dispositivos da Apple (iPhones, MacBooks, Apple Watches, iPads e AirPods), todos contam com a Garantia Oficial Apple de 1 ano, válida globalmente em qualquer assistência autorizada Apple a partir do momento em que você liga e ativa o aparelho.',
    },
    {
      question: 'Quais são as formas de pagamento e parcelamento?',
      answer: 'Aceitamos pagamentos à vista via Pix com desconto exclusivo da distribuidora. Para parcelamentos, oferecemos opções inteligentes nos cartões de crédito em até 18x com taxas extremamente competitivas (muito abaixo dos juros de grandes magazines). Aceitamos múltiplos cartões para compor o pagamento.',
    },
    {
      question: 'De onde vêm os aparelhos e são originais?',
      answer: 'Todos os nossos aparelhos são 100% originais, novos e lacrados de fábrica. Nós importamos diretamente de distribuidores oficiais autorizados nos EUA e Europa, eliminando intermediários logísticos para garantir o preço final mais acessível que as grandes redes varejistas do Brasil.',
    }
  ];

  return (
    <section 
      id="faq" 
      ref={containerRef}
      className="relative w-full bg-dark-deep py-24 px-6 md:px-12 overflow-hidden border-t border-white/5"
    >
      {/* Decorative ambient glow */}
      <div className="hidden md:block absolute top-10 left-0 w-[40vw] h-[40vw] rounded-full bg-gold/2 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full">
        
        {/* Title Area */}
        <div className="flex flex-col items-center text-center mb-20">
          <span className="faq-reveal block text-[10px] tracking-[0.3em] font-display font-extrabold text-gold uppercase mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="faq-reveal font-display text-4xl sm:text-5xl md:text-6xl font-black uppercase text-premium-white tracking-tighter leading-none select-none">
            Objeções Respondidas
          </h2>
          <p className="faq-reveal font-body text-sm md:text-base text-premium-gray max-w-lg mt-6 font-light leading-relaxed">
            Transparência absoluta. Se você tem qualquer dúvida sobre garantia, segurança, entregas em Belém ou formas de pagamento, confira abaixo.
          </p>
        </div>

        {/* Accordion List (Frosted glass minimal cards) */}
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = activeIndex === i;

            return (
              <div
                key={i}
                className="faq-reveal will-change-transform-opacity bg-dark-card border border-white/5 hover:border-gold/15 transition-all duration-300 overflow-hidden"
              >
                {/* Accordion Header row */}
                <button
                  onClick={() => setActiveIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-colors duration-300"
                >
                  <div className="flex items-center gap-4">
                    <HelpCircle size={16} className={`text-gold transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                    <span className="font-display text-xs md:text-sm font-bold uppercase tracking-widest text-premium-white">
                      {faq.question}
                    </span>
                  </div>
                  
                  {/* Indicator Toggle Icon */}
                  <div className="p-1 bg-white/5 border border-white/5 rounded-none flex items-center justify-center text-premium-gray group-hover:text-gold transition-colors">
                    {isOpen ? <Minus size={12} className="text-gold" /> : <Plus size={12} />}
                  </div>
                </button>

                {/* Animated expandable content using Framer Motion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-0 text-left">
                        <div className="w-full h-[1px] bg-white/5 mb-6" />
                        <p className="font-body text-xs md:text-sm text-premium-gray font-light leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
