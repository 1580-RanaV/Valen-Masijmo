'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop({
  threshold = 160,      // px from top before showing the button
  bottom = '1.5rem',   // CSS spacing (e.g., '1rem', '24px')
  right = '1.5rem',
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
      document.documentElement.scrollTop = 0;
    }
  };

  if (!mounted) return null;

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      style={{
        bottom,
        right,
      }}
      className={[
        // position
        'fixed z-50',

        // background + border + padding
        'px-4 py-2 border-2 border-black bg-white',

        // text
        'text-sm font-semibold text-black uppercase tracking-wide',

        // shadow + hover/tap
        'shadow-md hover:shadow-lg active:scale-95 transition-[opacity,transform,box-shadow] duration-300',

        // fade/slide in-out
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none',
      ].join(' ')}
    >
      Scroll to Top ↑
    </button>
  );
}
