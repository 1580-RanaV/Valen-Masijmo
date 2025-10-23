'use client';
import { useEffect } from 'react';

export default function GlobalImageGuards() {
  useEffect(() => {
    const handleContextMenu = (e) => {
      const target = e.target;
      if (target && (target.tagName === 'IMG' || target.closest('img'))) {
        e.preventDefault();
      }
    };

    const handleDragStart = (e) => {
      const target = e.target;
      if (target && (target.tagName === 'IMG' || target.closest('img'))) {
        e.preventDefault();
      }
    };

    // Disable right-click and drag for all images
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('dragstart', handleDragStart, true);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('dragstart', handleDragStart, true);
    };
  }, []);

  return null;
}
