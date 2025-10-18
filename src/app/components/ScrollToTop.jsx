'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ScrollToTop({
  threshold = 160,      // px from top before showing the button
  bottom = '1.5rem',   // tailwind-like spacing but as CSS (e.g., '1rem', '24px')
  right = '1.5rem',
  size = 100,            // diameter in px
}) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setVisible(y > threshold);
    };
    // init + listener
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);

  const scrollToTop = () => {
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      // fallback
      document.documentElement.scrollTop = 0;
    }
  };

  // Avoid SSR hydration mismatch
  if (!mounted) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      style={{
        width: size,
        height: size,
        bottom,
        right,
      }}
      className={[
        // position
        'fixed z-50',

        // circle + border + background
        'rounded-full border-2 border-black bg-white overflow-hidden',

        // shadow + hover/tap micro-interactions
        'shadow-md hover:shadow-lg active:scale-95 transition-[opacity,transform,box-shadow] duration-300',

        // fade/slide in-out
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',

        // center content
        'flex items-center justify-center',
      ].join(' ')}
    >
      {/* Image perfectly fills the circle */}
      <Image
        src="/scroll.png"
        alt="Scroll to top"
        width={size}
        height={size}
        className="w-full h-full object-contain"
        priority={false}
      />
    </button>
  );
}
