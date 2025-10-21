import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full text-black mt-16">
      <div className="px-6 md:px-12 flex flex-col items-center text-center space-y-12 md:space-y-16">
        {/* Brand Text */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-neutral-900 leading-none">
          <Link href="/">VALEN MASIJMO</Link>
        </h2>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 text-gray-600">
          <Link
            href="/story"
            className="text-xs uppercase font-bold tracking-widest hover:text-neutral-300 transition-colors"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="text-xs uppercase font-bold tracking-widest hover:text-neutral-300 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/shop"
            className="text-xs uppercase font-bold tracking-widest hover:text-neutral-300 transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/careers"
            className="text-xs uppercase font-bold tracking-widest hover:text-neutral-300 transition-colors"
          >
            Careers
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xs md:text-sm font-bold tracking-widest text-gray-600">
            © 2025 VALEN MASIJMO
          </p>

          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            <Link
              href="/privacy"
              className="text-xs uppercase font-bold tracking-wide text-gray-500 hover:text-gray-700 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/services"
              className="text-xs uppercase font-bold tracking-wide text-gray-500 hover:text-gray-700 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-xs uppercase font-bold tracking-wide text-gray-500 hover:text-gray-700 transition-colors"
            >
              Cookies Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
