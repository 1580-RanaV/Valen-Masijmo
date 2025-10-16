'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function People() {
  return (
    <section className="relative w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image with border */}
          <div className="relative h-[80vh] lg:h-[85vh] overflow-hidden">
            <Image
              src="/chair shot.png"
              alt="Valen Masijmo — Black Chapter One"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
            <div className="max-w-lg text-center">
              <p className="text-sm text-gray-500 tracking-widest font-thin mb-6">
                VALEN MASIJMO — THE BLACK CHAPTER ONE
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                The Beginning of Subtle Luxury
              </h1>
              
              <p className="text-base md:text-lg font-thin text-gray-600 leading-relaxed mb-10">
                The first collection of pure black luxury T-shirts — crafted in stillness, defined by form, and reserved for the few. Each piece marks the opening of The Black Chapter: a quiet celebration of timeless restraint.
                Available soon through <span className="font-bold text-red-800">Valen Club</span>.
              </p>
              
              <Link
                href="#"
                className="inline-block border-b-2 border-black text-sm font-bold tracking-widest text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                Coming Soon
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
