'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.06,
      direction: 'vertical',
      gestureDirection: 'vertical',
      touchMultiplier: 1.2,
      wheelMultiplier: 0.9,
      // This is key - don't apply transforms to the wrapper
      wrapper: window,
      content: document.documentElement,
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}