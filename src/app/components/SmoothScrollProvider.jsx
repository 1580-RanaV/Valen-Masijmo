'use client';
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScrollProvider({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6, // ⬅️ increase this for more glide (try 1.8 or even 2.0)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -12 * t)), // very soft ease-out
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.06, // ⬅️ smaller value = smoother interpolation
      direction: 'vertical',
      gestureDirection: 'vertical',
      touchMultiplier: 1.2, // gentle scroll speed
      wheelMultiplier: 0.9, // slightly slower wheel response = smoother
    });

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return children;
}
