'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePassword } from '../components/PasswordProtection';
import { useRouter } from 'next/navigation';
import Navbar from '../components/Navbar';

export default function HeroSection() {
  const [isAtTop, setIsAtTop] = useState(true);
  const { requestAccess } = usePassword();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight * 0.8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleShopClick = (e) => {
    e?.preventDefault?.();
    requestAccess(() => {
      router.push('/shop');
    });
  };

  return (
    <>
      {/* Navbar outside the section */}
      <Navbar
        isAtTop={isAtTop}
        onBrandClick={scrollToTop}
        onShopClick={handleShopClick}
      />

      <section className="relative w-full h-screen">
        {/* Background image */}
        <Image
          src="/wallapaper-2.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover object-center brightness-100"
        />

        {/* Hero Center Text */}
        {/* <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6 z-10">
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 tracking-widest">
            The Black Chapter One
          </h1>
          <p className="text-sm md:text-xl font-bold mb-10 tracking-wide">
            Luxury in black, and only black
          </p>
          <button
            onClick={handleShopClick}
            className="relative border border-white px-10 py-3 text-sm font-bold tracking-widest overflow-hidden group"
          >
            <span className="absolute pt-10 inset-0 bg-white transform -translate-x-full transition-transform duration-500 ease-out group-hover:translate-x-0"></span>
            <span className="relative z-10 text-white transition-colors duration-500 group-hover:text-black">
              OUT NOW
            </span>
          </button>
        </div> */}
      </section>
    </>
  );
}