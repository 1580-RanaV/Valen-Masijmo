import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full mt-16">
      <div className="relative w-full aspect-[2/3] sm:aspect-[16/9]">
        {/* Background Image */}
        <Image
          src="/footer-two.png"
          alt="Footer background"
          fill
          className="object-cover object-top"
          priority
        />
        
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Content positioned at bottom left */}
        <div className="absolute bottom-0 left-0 w-full px-6 pb-6 sm:px-8 sm:pb-8 md:px-12 md:pb-12 text-white">
          <div className="flex flex-col space-y-5 sm:space-y-7 md:space-y-10 max-w-2xl">
            {/* Brand Text - Increased by 25% */}
            <h2 className="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold tracking-wider leading-none">
              <Link href="/" className="hover:opacity-80 transition-opacity">
                VALEN MASIJMO
              </Link>
            </h2>

            {/* Navigation Links - Increased by 25% */}
            <div className="flex flex-wrap gap-5 sm:gap-7 md:gap-10">
              <Link
                href="/story"
                className="text-sm uppercase font-bold tracking-widest hover:opacity-70 transition-opacity"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm uppercase font-bold tracking-widest hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>
              <Link
                href="/shop"
                className="text-sm uppercase font-bold tracking-widest hover:opacity-70 transition-opacity"
              >
                Shop
              </Link>
              <Link
                href="/careers"
                className="text-sm uppercase font-bold tracking-widest hover:opacity-70 transition-opacity"
              >
                Careers
              </Link>
            </div>

            {/* Bottom Section - Increased by 25% */}
            <div className="flex flex-col space-y-3 sm:space-y-4">
              <p className="text-sm font-bold tracking-widest opacity-90">
                VALEN MASIJMO <span className="price">© 2025 </span>
              </p>

              <div className="flex flex-wrap gap-5 sm:gap-7 md:gap-10">
                <Link
                  href="/privacy"
                  className="text-sm uppercase font-bold tracking-wide opacity-80 hover:opacity-100 transition-opacity"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/services"
                  className="text-sm uppercase font-bold tracking-wide opacity-80 hover:opacity-100 transition-opacity"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/cookies"
                  className="text-sm uppercase font-bold tracking-wide opacity-80 hover:opacity-100 transition-opacity"
                >
                  Cookies Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}