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
      {/* Navbar always black text */}
      <Navbar
        isAtTop={false}
        onBrandClick={scrollToTop}
        onShopClick={handleShopClick}
      />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero-desktop-4.png"
          alt="Hero Background"
          fill
          priority
          className="object-cover md:object-contain object-center brightness-100"
        />
      </section>
    </>
  );
}
