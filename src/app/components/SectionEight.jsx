'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Eight() {
  return (
    <section className="relative w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative h-[80vh] lg:h-[85vh] overflow-hidden">
            <Image
              src="/fruity.png"
              alt="Valen Masijmo — Fruity Collection"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12">
            <div className="max-w-lg text-center">
              <p className="text-sm text-gray-500 tracking-widest font-thin mb-6">
                VALEN MASIJMO — UPCOMING
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-yellow-400 mb-8 tracking-tight">
                The Fruity Collection
              </h1>
              
              <p className="text-base md:text-lg font-thin text-gray-600 leading-relaxed mb-10">
                A playful take on silent luxury — fresh tones, soft fabrics, and effortless form. 
                The <span className="">Fruity Collection</span> arrives next, 
                crafted exclusively for <span className="text-red-800">Valen Club</span> members. 
                Stay tuned for the drop — invitation only.
              </p>
              
              <Link
                href="#"
                className="inline-block text-sm font-bold tracking-widest text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                <button className='border border-neutral-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors duration-300'>
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
