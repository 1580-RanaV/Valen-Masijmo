'use client';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">
      {/* Main footer content */}
      <div className="px-6 md:px-12 py-12 md:py-16">
        {/* Large brand text - centered */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-widest text-neutral-700 mb-8 md:mb-12 text-center">
          VALEN MASIJMO
        </h2>

        {/* Navigation links - centered */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-8 md:mb-12">
          <Link href="#" className="text-sm md:text-base font-bold tracking-wide hover:opacity-70 transition-opacity">
            About Us
          </Link>
          <Link href="#" className="text-sm md:text-base font-bold tracking-wide hover:opacity-70 transition-opacity">
            Contact
          </Link>
          <Link href="#" className="text-sm md:text-base font-bold tracking-wide hover:opacity-70 transition-opacity">
            Shop
          </Link>
          <Link href="#" className="text-sm md:text-base font-bold tracking-wide text-red-800 hover:opacity-70 transition-opacity">
            Join Valen Club
          </Link>
        </div>

        {/* Bottom section - centered */}
        <div className="flex flex-col items-center gap-4 pt-8 border-t border-white/10">
          <p className="text-xs md:text-sm font-bold tracking-wider text-center">
            ©2025 VALEN MASIJMO
          </p>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <Link href="#" className="text-xs md:text-sm font-bold tracking-wide hover:opacity-70 transition-opacity">
              Terms of Services
            </Link>
            <Link href="#" className="text-xs md:text-sm font-bold tracking-wide hover:opacity-70 transition-opacity">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs md:text-sm font-bold tracking-wide hover:opacity-70 transition-opacity">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}