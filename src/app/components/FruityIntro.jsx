'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function Eight() {
  return (
    <section className="relative w-full bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side - Image */}
          <div className="relative h-[80vh] overflow-hidden">
            <Image
              src="/fruity.png"
              alt="Valen Masijmo — Fruity Collection"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="flex flex-col items-center justify-center px-4 lg:px-12 uppercase">
            <div className="max-w-lg text-center">
              <p className="text-xs font-bold text-gray-500 tracking-widest mb-6">
                VALEN MASIJMO — UPCOMING
              </p>
              
              <h1 className="text-xs font-bold text-gray-900 mb-8 tracking-tight">
                The Fruity Collection
              </h1>
              
              <p className="text-xs font-bold text-gray-600 leading-relaxed mb-10">
                A playful take on silent luxury — fresh tones, soft fabrics, and effortless form. 
                The <span className="font-bold">Fruity Collection</span> arrives next, 
                crafted exclusively for <span className="font-bold text-red-800">Valen Club</span> members. 
                Stay tuned for the drop — invitation only.
              </p>
              
              <Link
                href="#"
                className="inline-block text-xs font-bold tracking-widest text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                <button className="border border-neutral-900 uppercase px-6 py-3 text-xs font-bold hover:bg-gray-900 hover:text-white transition-colors duration-300">
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
