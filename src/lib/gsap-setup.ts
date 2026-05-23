import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin once globally
gsap.registerPlugin(ScrollTrigger);

// Set default ease globally for premium smooth feeling
gsap.defaults({
  ease: 'power3.out',
  duration: 1.2
});

export { gsap, ScrollTrigger };
