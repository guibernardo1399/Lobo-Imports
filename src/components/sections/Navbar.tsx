import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '../ui/Button';
import { IMAGES } from '../../config/images';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let raf = 0;
    let lastState = false;

    const handleScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const next = window.scrollY > 20;
        if (next !== lastState) {
          lastState = next;
          setIsScrolled(next);
        }
        raf = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const navLinks = [
    { label: 'Coleção', href: '#catalog' },
    { label: 'Exclusividade', href: '#benefits' },
    { label: 'Entregas Reais', href: '#social-proof' },
    { label: 'Como Comprar', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 ${
          isScrolled ? 'top-2 max-w-6xl mx-auto' : 'top-0 w-full'
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div
          className={`flex items-center justify-between px-6 py-3 transition-[background-color,border-color,border-radius,box-shadow] duration-300 ${
            isScrolled
              ? 'glass-card-gold rounded-full shadow-2xl py-2 px-6'
              : 'glass-nav rounded-none py-4 px-6 border-transparent'
          }`}
        >
          {/* Logo Brand */}
          <a href="#" className="flex items-center gap-3 group select-none">
            <img
              src={IMAGES.logoSymbol}
              alt="Lobo"
              className="h-8 md:h-10 w-auto object-contain transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
              loading="eager"
              width="40"
              height="40"
            />
            <div className="flex flex-col">
              <span className="font-display text-base md:text-lg font-extrabold tracking-[0.25em] text-glow-gold text-gold select-none uppercase">
                Lobos
              </span>
              <span className="text-[7px] tracking-[0.45em] uppercase text-premium-gray font-body select-none">
                Imports
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-xs font-semibold tracking-widest text-premium-gray hover:text-gold uppercase transition-colors duration-300 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Right Button */}
          <div className="hidden md:block">
            <Button
              href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+consultar+a+disponibilidade+de+um+eletr%C3%B4nico."
              target="_blank"
              variant="outline"
              className="py-2.5 px-6 text-[10px] tracking-widest"
            >
              Consultar Ofertas
            </Button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-premium-white hover:text-gold transition-colors p-1"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-dark-deep/95 backdrop-blur-xl flex flex-col justify-center px-8 md:hidden"
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-display text-2xl font-bold tracking-widest text-premium-white hover:text-gold uppercase transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.4 }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Button
                  href="https://wa.me/5591981684652?text=Ol%C3%A1%21+Gostaria+de+consultar+a+disponibilidade+de+um+eletr%C3%B4nico."
                  target="_blank"
                  variant="primary"
                  className="w-full max-w-xs flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} />
                  Chamar no WhatsApp
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
