import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-black mt-16">
      <div className="px-6 md:px-12 py-20 flex flex-col items-center text-center space-y-12 md:space-y-16">
        
        {/* Brand Text */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-neutral-900 leading-none">
          <Link href="/">VALEN MASIJMO</Link>
        </h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-600">
          <a href="/story" className="text-xs uppercase md:text-xs font-bold tracking-widest hover:text-neutral-300 transition-colors">
            About
          </a>
          <a href="/contact" className="text-xs uppercase md:text-xs font-bold tracking-widest hover:text-neutral-300 transition-colors">
            Contact
          </a>
          <a href="/shop" className="text-xs uppercase md:text-xs font-bold tracking-widest hover:text-neutral-300 transition-colors">
            Shop
          </a>
          <a href="/careers" className="text-xs uppercase md:text-xs font-bold tracking-widest hover:text-neutral-300 transition-colors">
            Careers
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xs md:text-sm font-bold tracking-widest text-gray-600">
            © 2025 VALEN MASIJMO
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <a href="/privacy" className="text-xs uppercase font-bold tracking-wide text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
            <a href="/services" className="text-xs uppercase font-bold tracking-wide text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
            <a href="/cookies" className="text-xs uppercase font-bold tracking-wide text-gray-500 hover:text-gray-700 transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
