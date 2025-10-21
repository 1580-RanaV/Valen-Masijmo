'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ isAtTop }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  // If not passed from parent, detect top state ourselves
  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY <= 2);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Center logo after scrolling past 150px
  useEffect(() => {
    const THRESHOLD_PX = 150;
    const handleScroll = () => setIsCollapsed(window.scrollY > THRESHOLD_PX);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const atTop = typeof isAtTop === 'boolean' ? isAtTop : isTop;

  // Style logic - completely transparent when at top
  const textColor = atTop ? 'text-white' : 'text-black';
  const bgClass = atTop ? '' : 'bg-white';
  const borderClass = atTop ? '' : 'border-b border-neutral-200';
  const shadowClass = atTop ? '' : 'shadow-sm';

  const countries = [
    { code: 'IND', currency: 'INR', flag: '🇮🇳', disabled: false },
    { code: 'UAE', currency: 'AED', flag: '🇦🇪', disabled: true },
    { code: 'UK', currency: 'GBP', flag: '🇬🇧', disabled: true },
    { code: 'USA', currency: 'USD', flag: '🇺🇸', disabled: true },
  ];
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleMobileLink = () => setMobileMenuOpen(false);

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
          willChange: 'auto',
        }}
        className={`flex justify-between items-center font-bold px-6 md:px-12 py-6 z-50 transition-all duration-500 
          ${bgClass} ${borderClass} ${shadowClass}`}
      >
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen((s) => !s)}
          className={`md:hidden z-50 transition-colors ${textColor}`}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Brand */}
        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className={`${
            isCollapsed
              ? 'absolute left-1/2 -translate-x-1/2'
              : 'absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0'
          } ${textColor} text-xs font-bold tracking-[0.2em] cursor-pointer transition-all duration-700 ease-in-out whitespace-nowrap`}
        >
          VALEN MASIJMO
        </Link>

        {/* Desktop Menu */}
        <ul
          className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-wide ${textColor} transition-all duration-700 ${
            isCollapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
        >
          <li className="relative country-dropdown">
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="tracking-widest hover:opacity-70 transition-opacity text-xs flex items-center gap-1.5"
            >
              <span className="w-5 h-5 overflow-hidden flex items-center justify-center text-sm">
                {selectedCountry.flag}
              </span>
              <span>
                {selectedCountry.code} | {selectedCountry.currency}
              </span>
              <ChevronDown
                size={14}
                className={`transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown */}
            {countryDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white/90 backdrop-blur-md shadow-lg rounded-sm py-2 min-w-[150px] z-50 border border-white/20">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      if (!country.disabled) {
                        setSelectedCountry(country);
                        setCountryDropdownOpen(false);
                      }
                    }}
                    disabled={country.disabled}
                    className={`w-full text-left px-4 py-2 text-xs tracking-wide flex items-center gap-2 ${
                      country.disabled ? 'text-gray-400 cursor-not-allowed' : 'hover:bg-white/50 cursor-pointer'
                    } ${selectedCountry.code === country.code ? 'bg-white/30' : ''}`}
                  >
                    <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-sm border border-gray-200">
                      {country.flag}
                    </span>
                    <span>
                      {country.code} | {country.currency}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </li>

          <li>
            <Link href="/story" className="tracking-widest hover:opacity-70 transition-opacity text-xs">
              The Masijmo Story
            </Link>
          </li>

          <li>
            <Link
              href="/shop"
              className="uppercase font-bold tracking-widest hover:opacity-70 transition-opacity text-xs"
            >
              Shop
            </Link>
          </li>
        </ul>

        <div className="md:hidden w-5" />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        style={{ position: 'fixed', transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)' }}
        className="inset-0 bg-white/30 backdrop-blur-md z-40 transition-transform duration-300 ease-in-out md:hidden"
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 uppercase">
          <div className="flex flex-col items-center gap-3 country-dropdown">
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="font-bold text-black tracking-wide hover:opacity-70 transition-opacity text-xs flex items-center gap-1.5"
            >
              <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-sm border border-gray-200">
                {selectedCountry.flag}
              </span>
              <span>
                {selectedCountry.code} | {selectedCountry.currency}
              </span>
              <ChevronDown size={14} className={`transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {countryDropdownOpen && (
              <div className="bg-white/90 backdrop-blur-md shadow-lg rounded-sm py-2 px-4 border border-white/20">
                {countries.map((country) => (
                  <button
                    key={country.code}
                    onClick={() => {
                      if (!country.disabled) {
                        setSelectedCountry(country);
                        setCountryDropdownOpen(false);
                      }
                    }}
                    disabled={country.disabled}
                    className={`w-full text-center py-2 text-xs tracking-wide flex items-center justify-center gap-2 ${
                      country.disabled ? 'text-gray-400 cursor-not-allowed' : 'hover:opacity-70 cursor-pointer'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-sm border border-gray-200">
                      {country.flag}
                    </span>
                    <span>
                      {country.code} | {country.currency}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/story"
            className="font-bold text-black tracking-wide hover:opacity-70 transition-opacity text-xs"
            onClick={handleMobileLink}
          >
            THE MASIJMO STORY
          </Link>

          <Link
            href="/shop"
            className="font-bold text-black tracking-wide hover:opacity-70 transition-opacity text-xs"
            onClick={handleMobileLink}
          >
            SHOP
          </Link>

          <Link
            href="/"
            className="font-bold text-black tracking-wide hover:opacity-70 transition-opacity text-xs"
            onClick={handleMobileLink}
          >
            HOME
          </Link>
        </div>
      </div>
    </>
  );
}