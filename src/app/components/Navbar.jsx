'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ isAtTop }) {
  const pathname = usePathname();
  const isHome = pathname === '/';

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const [isTop, setIsTop] = useState(true);
  useEffect(() => {
    const handleScroll = () => setIsTop(window.scrollY <= 2);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const THRESHOLD_PX = 150;
    const handleScroll = () => setIsCollapsed(window.scrollY > THRESHOLD_PX);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const atTop = typeof isAtTop === 'boolean' ? isAtTop : isTop;
  const transparentMode = isHome && atTop;

  const textColor = transparentMode ? 'text-white' : 'text-black';
  const bgClass = transparentMode ? '' : 'bg-white';
  const borderClass = transparentMode ? '' : 'border-b border-neutral-200';
  const shadowClass = transparentMode ? '' : 'shadow-sm';

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
      {/* Navbar */}
      <nav
        style={{ position: 'fixed', top: 0, left: 0, right: 0 }}
        className={`flex justify-between items-center font-bold px-6 md:px-12 py-6 z-50 transition-all duration-500 ${bgClass} ${borderClass} ${shadowClass}`}
      >
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden z-50 ${textColor}`}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link
          href="/"
          onClick={() => setMobileMenuOpen(false)}
          className={`${
            isCollapsed
              ? 'absolute left-1/2 -translate-x-1/2'
              : 'absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0'
          } ${textColor} text-xl font-bold tracking-[0.2em] cursor-pointer transition-all duration-700 ease-in-out whitespace-nowrap`}
        >
          VALEN MASIJMO
        </Link>

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
                      country.disabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'hover:bg-white/50 cursor-pointer'
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
            <Link href="/shop" className="uppercase font-bold tracking-widest hover:opacity-70 transition-opacity text-xs">
              Shop
            </Link>
          </li>
        </ul>

        <div className="md:hidden w-5" />
      </nav>
    </>
  );
}
