'use client';

import { useEffect, useState } from 'react';

export default function ScrollToTop({
  threshold = 160,      // px from top before showing the button
  bottom = '1.5rem',   // CSS spacing (e.g., '1rem', '24px')
  right = '1.5rem',
  footerSelector = 'footer', // CSS selector for FooterTwo component
}) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const checkVisibility = () => {
      // Check scroll position
      const y = window.scrollY || document.documentElement.scrollTop;
      const scrolledEnough = y > threshold;

      // Check if footer is 50% visible
      const footer = document.querySelector(footerSelector);
      let footerVisible = false;

      if (footer) {
        const rect = footer.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const footerHeight = rect.height;
        
        // Calculate how much of the footer is visible
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        
        // Check if 50% or more of footer is visible
        footerVisible = visibleHeight >= footerHeight * 0.5;
      }

      // Show button only if scrolled enough AND footer is NOT 50% visible
      setVisible(scrolledEnough && !footerVisible);
    };

    // Initial check + listener
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });
    window.addEventListener('resize', checkVisibility, { passive: true });

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      window.removeEventListener('resize', checkVisibility);
    };
  }, [threshold, footerSelector]);

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