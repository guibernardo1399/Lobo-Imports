import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
  href?: string;
  target?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  className = '',
  href,
  target,
}) => {
  const baseStyle =
    'relative inline-flex items-center justify-center px-8 py-4 font-display text-sm font-semibold tracking-wider uppercase transition-all duration-300 rounded-none overflow-hidden select-none';

  const variants = {
    primary:
      'bg-gold text-dark-deep hover:bg-gold-light gold-glow hover:gold-glow-intense border border-gold',
    outline:
      'bg-transparent text-premium-white border border-gold/40 hover:border-gold hover:text-gold hover:gold-glow',
    secondary:
      'bg-dark-card text-premium-white border border-white/5 hover:border-white/20 hover:bg-dark-hover',
  };

  const content = (
    <motion.span
      className="relative z-10 flex items-center gap-2"
      whileHover={{ y: -2 }}
      transition={{ type: 'spring', stiffness: 300, damping: 15 }}
    >
      {children}
    </motion.span>
  );

  const buttonStyle = `${baseStyle} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined} className={buttonStyle}>
        {/* Subtle metallic reflection line on hover */}
        <div className="absolute inset-0 z-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shine_1.5s_ease] pointer-events-none" />
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      <div className="absolute inset-0 z-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:animate-[shine_1.5s_ease] pointer-events-none" />
      {content}
    </button>
  );
};
