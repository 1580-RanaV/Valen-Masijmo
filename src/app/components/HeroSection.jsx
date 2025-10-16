'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { usePassword } from '../components/PasswordProtection';
import { useRouter } from 'next/navigation';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const { requestAccess } = usePassword();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  // Handle Shop button click with password protection
  const handleShopClick = (e) => {
    e.preventDefault();
    setMobileMenuOpen(false); // Close mobile menu if open
    requestAccess(() => {
      // This runs only after correct password
      router.push('/shop'); // Change '/shop' to your actual shop page route
      // Or use: window.location.href = '/shop';
    });
  };

  const textColor = isAtTop ? 'text-white' : 'text-black';
  const bgColor = isAtTop ? 'bg-transparent' : 'bg-white/80 backdrop-blur-md';

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <Image
        src="/wallpaper-no-name.png"
        alt="Hero Background"
        fill
        priority
        className="object-cover object-center brightness-80"
      />

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-white/5" /> */}

      {/* Fixed Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 flex justify-between items-center px-6 md:px-12 py-6 z-50 transition-all duration-500 ${bgColor}`}
      >
        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`md:hidden z-50 transition-colors ${textColor}`}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Brand name (scrolls to top) */}
        <button
          onClick={scrollToTop}
          className={`absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 ${textColor} text-xl md:text-2xl font-bold tracking-[0.2em] cursor-pointer transition-colors duration-500`}
        >
          VALEN MASIJMO
        </button>

        {/* Desktop menu */}
        <ul className={`hidden md:flex gap-8 text-sm font-bold tracking-wide ${textColor} transition-colors duration-500`}>
          <li>
            <Link href="#" className="relative inline-block group">
              <span className="relative z-10">Apply</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isAtTop ? 'bg-white' : 'bg-black'}`}></span>
            </Link>
          </li>
          <li>
            <Link href="#" className="relative inline-block group">
              <span className="relative z-10">The Masijmo Story</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isAtTop ? 'bg-white' : 'bg-black'}`}></span>
            </Link>
          </li>
          <li>
            <button onClick={handleShopClick} className="relative inline-block group">
              <span className="relative z-10">Shop</span>
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${isAtTop ? 'bg-white' : 'bg-black'}`}></span>
            </button>
          </li>
        </ul>

        <div className="md:hidden w-7" />
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="#"
            className="text-2xl font-bold text-black tracking-wide hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            Apply
          </Link>
          <Link
            href="#"
            className="text-2xl font-bold text-black tracking-wide hover:opacity-70 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          >
            The Masijmo Story
          </Link>
          <button
            onClick={handleShopClick}
            className="text-2xl font-bold text-black tracking-wide hover:opacity-70 transition-opacity"
          >
            Shop
          </button>
        </div>
      </div>

      {/* Hero Center Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-wider">
          THE BLACK CHAPTER ONE
        </h1>
        <p className="text-lg md:text-2xl font-bold mb-10 tracking-wide">Luxury in black, and only black</p>
        <button
          onClick={handleShopClick}
          className="relative border-2 border-white px-10 py-3 rounded-full text-sm font-bold tracking-widest overflow-hidden group"
        >
          <span className="absolute inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
          <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-black">SHOP</span>
        </button>
      </div>
    </section>
  );
}