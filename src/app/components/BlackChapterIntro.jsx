'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function People() {
  return (
    <section className="relative w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side - Image with border */}
          <div className="relative h-[80vh] overflow-hidden">
            <Image
              src="/chair shot.png"
              alt="Valen Masijmo — Black Chapter One"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="flex flex-col items-center justify-center px-4">
            <div className="max-w-lg text-center">
              <p className="text-xs font-bold text-gray-500 tracking-widest mb-6">
                VALEN MASIJMO — THE BLACK CHAPTER ONE
              </p>
              
              <h1 className="text-xs font-bold text-gray-900 mb-8 tracking-tight">
                The Beginning of Subtle Luxury
              </h1>
              
              <p className="text-xs font-bold text-gray-600 leading-relaxed mb-10">
                The first collection of pure black luxury T-shirts — crafted in stillness, defined by form, and reserved for the few. Each piece marks the opening of The Black Chapter: a quiet celebration of timeless restraint.
                Available soon through <span className="font-bold text-red-800">Valen Club</span>.
              </p>
              
              <Link
                href="#"
                className="inline-block text-xs font-bold tracking-normal text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                <button className="border border-neutral-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-xs font-bold">
                  Coming Soon
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
