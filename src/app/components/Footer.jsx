export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 text-black">
      {/* Main footer content */}
      <div className="px-6 md:px-12 py-24 md:py-16">
        {/* Large brand text - centered */}
        <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-neutral-900 mb-12 md:mb-16 text-center leading-none">
          Valen Masijmo
        </h2>
        
        {/* Navigation links - centered */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-12 md:mb-16 text-neutral-900">
          <a href="#" className="text-xs md:text-sm font-thin tracking-widest uppercase hover:text-neutral-300 transition-colors">
            About
          </a>
          <a href="#" className="text-xs md:text-sm font-thin tracking-widest uppercase hover:text-neutral-300 transition-colors">
            Contact
          </a>
          <a href="#" className="text-xs md:text-sm font-thin tracking-widest uppercase hover:text-neutral-300 transition-colors">
            Shop
          </a>
          <a href="#" className="text-xs md:text-sm font-thin tracking-widest uppercase hover:text-neutral-300 transition-colors">
            Careers
          </a>
        </div>
        
        {/* Bottom section - centered */}
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs font-thin md:text-sm tracking-widest text-gray-600 text-center">
            © 2025 VALEN MASIJMO
          </p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <a href="#" className="text-xs font-thin tracking-wide text-gray-500 hover:text-gray-700 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs font-thin tracking-wide text-gray-500 hover:text-gray-700 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs font-thin tracking-wide text-gray-500 hover:text-gray-700 transition-colors">
              Cookies Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}