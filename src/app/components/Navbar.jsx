'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ isAtTop, onBrandClick, onShopClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // close menu on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const textColor = isAtTop ? 'text-gray-50' : 'text-black';
  const bgColor = isAtTop ? 'bg-transparent' : 'bg-gray-50/50 backdrop-blur-md';

  const handleMobileLink = (cb) => {
    setMobileMenuOpen(false);
    cb?.();
  };

  return (
    <>
      {/* Fixed Navbar */}
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          transform: 'none',
          willChange: 'auto'
        }}
        className={`flex justify-between font-bold items-center px-6 md:px-12 py-6 z-50 transition-all duration-500 ${bgColor}`}
      >
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen((s) => !s)}
          className={`md:hidden z-50 transition-colors ${textColor}`}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Brand */}
        <button
          onClick={() => {
            setMobileMenuOpen(false);
            onBrandClick?.();
          }}
          className={`absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 ${textColor} text-xl md:text-2xl font-bold tracking-[0.2em] cursor-pointer transition-colors duration-500`}
        >
          VALEN MASIJMO
        </button>

        {/* Desktop menu (no underline hover) */}
        <ul className={`hidden md:flex gap-8 text-sm font-bold uppercase tracking-wide ${textColor} transition-colors duration-500`}>
          <li>
            <Link href="#" className="tracking-widest hover:opacity-70 transition-opacity">
              Apply
            </Link>
          </li>
          <li>
            <Link href="#" className="tracking-widest hover:opacity-70 transition-opacity">
              The Masijmo Story
            </Link>
          </li>
          <li>
            <button
              onClick={onShopClick}
              className="uppercase font-bold tracking-widest hover:opacity-70 transition-opacity"
            >
              Shop
            </button>
          </li>
        </ul>

        <div className="md:hidden w-7" />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{
          position: 'fixed',
          transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)'
        }}
        className={`inset-0 bg-gray-50 z-40 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 uppercase">
          <Link
            href="#"
            className="text-2xl font-thin text-black tracking-wide hover:opacity-70 transition-opacity"
            onClick={() => handleMobileLink()}
          >
            APPLY
          </Link>
          <Link
            href="#"
            className="text-2xl font-thin text-black tracking-wide hover:opacity-70 transition-opacity"
            onClick={() => handleMobileLink()}
          >
            THE MASIJMO STORY
          </Link>
          <button
            onClick={() => handleMobileLink(onShopClick)}
            className="text-2xl font-thin text-black tracking-wide hover:opacity-70 transition-opacity"
          >
            SHOP
          </button>
        </div>
      </div>
    </>
  );
}
