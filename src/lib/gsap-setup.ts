import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const isDesktop = typeof window !== 'undefined' && window.matchMedia('(min-width: 768px)').matches;

if (isDesktop) {
  gsap.registerPlugin(ScrollTrigger);
}

gsap.defaults({
  ease: 'power3.out',
  duration: 1.2
});

export { gsap, ScrollTrigger };
