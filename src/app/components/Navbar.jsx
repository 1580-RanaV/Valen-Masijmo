'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ isAtTop, onBrandClick, onShopClick }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);

  // close menu on ESC and click outside
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setCountryDropdownOpen(false);
      }
    };
    
    const onClick = (e) => {
      if (countryDropdownOpen && !e.target.closest('.country-dropdown')) {
        setCountryDropdownOpen(false);
      }
    };
    
    window.addEventListener('keydown', onKey);
    document.addEventListener('click', onClick);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.removeEventListener('click', onClick);
    };
  }, [countryDropdownOpen]);

  const textColor = isAtTop ? 'text-black' : 'text-black';
  const bgColor = isAtTop ? 'bg-transparent' : '';

  const countries = [
    { code: 'IND', currency: 'INR', flag: '🇮🇳', disabled: false },
    { code: 'UAE', currency: 'AED', flag: '🇦🇪', disabled: true },
    { code: 'UK', currency: 'GBP', flag: '🇬🇧', disabled: true },
    { code: 'USA', currency: 'USD', flag: '🇺🇸', disabled: true },
  ];

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

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
          className={`absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 ${textColor} text-base font-bold tracking-[0.2em] cursor-pointer transition-colors duration-500`}
        >
          VALEN MASIJMO
        </button>

        {/* Desktop menu */}
        <ul className={`hidden md:flex gap-8 text-xs font-bold uppercase tracking-wide ${textColor} transition-colors duration-500`}>
          <li className="relative country-dropdown">
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="tracking-widest hover:opacity-70 transition-opacity text-xs flex items-center gap-1.5"
            >
              <span className="w-5 h-5 overflow-hidden flex items-center justify-center text-sm">
                {selectedCountry.flag}
              </span>
              <span>{selectedCountry.code} | {selectedCountry.currency}</span>
              <ChevronDown size={14} className={`transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {/* Dropdown */}
            {countryDropdownOpen && (
              <div className="absolute top-full mt-2 left-0 bg-white shadow-lg rounded-sm py-2 min-w-[150px] z-50">
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
                        : 'hover:bg-gray-100 cursor-pointer'
                    } ${selectedCountry.code === country.code ? 'bg-gray-50' : ''}`}
                  >
                    <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-sm border border-gray-200">
                      {country.flag}
                    </span>
                    <span>{country.code} | {country.currency}</span>
                  </button>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link href="#" className="tracking-widest hover:opacity-70 transition-opacity text-xs">
              The Masijmo Story
            </Link>
          </li>
          <li>
            <button
              onClick={onShopClick}
              className="uppercase font-bold tracking-widest hover:opacity-70 transition-opacity text-xs"
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
          <div className="flex flex-col items-center gap-3 country-dropdown">
            <button
              onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
              className="font-thin text-black tracking-wide hover:opacity-70 transition-opacity text-xs flex items-center gap-1.5"
            >
              <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-sm border border-gray-200">
                {selectedCountry.flag}
              </span>
              <span>{selectedCountry.code} | {selectedCountry.currency}</span>
              <ChevronDown size={14} className={`transition-transform ${countryDropdownOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {countryDropdownOpen && (
              <div className="bg-white shadow-lg rounded-sm py-2 px-4">
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
                      country.disabled
                        ? 'text-gray-400 cursor-not-allowed'
                        : 'hover:opacity-70 cursor-pointer'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full overflow-hidden flex items-center justify-center text-sm border border-gray-200">
                      {country.flag}
                    </span>
                    <span>{country.code} | {country.currency}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <Link
            href="#"
            className="font-thin text-black tracking-wide hover:opacity-70 transition-opacity text-xs"
            onClick={() => handleMobileLink()}
          >
            THE MASIJMO STORY
          </Link>
          <button
            onClick={() => handleMobileLink(onShopClick)}
            className="font-thin text-black tracking-wide hover:opacity-70 transition-opacity text-xs"
          >
            SHOP
          </button>
        </div>
      </div>
    </>
  );
}