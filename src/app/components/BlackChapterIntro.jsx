'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function People() {
  return (
    <section className="relative w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left side - Image with border */}
          <div className="relative h-[80vh] overflow-hidden">
            <Image
              src="/chair shot.png"
              alt="Valen Masijmo — Silent Luxury"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Right side - Text Content */}
          <div className="flex flex-col items-center justify-center px-4 uppercase">
            <div className="max-w-lg text-center">
              <p className="text-xs font-bold text-gray-500 tracking-widest mb-6">
                VALEN MASIJMO
              </p>
              
              <h1 className="text-xs font-bold text-gray-900 mb-8 tracking-tight">
                Made to Exist, Not to Be Seen
              </h1>
              
              <p className="text-xs font-bold text-gray-600 leading-relaxed mb-10">
                Valen Masijmo is not a label for the masses. Each piece begins only after acceptance — crafted individually, never stocked, never repeated. We believe in stillness over spectacle, precision over noise. Our work lives quietly, in single-digit editions, for those who understand what cannot be advertised.
              </p>

              <p className="text-xs font-bold text-gray-600 leading-relaxed mb-10">
                To own a Valen Masijmo garment is to be part of a dialogue, not a transaction. You reach us; we decide. Every order is an exchange of intent — a moment where design meets patience, and luxury returns to its purest form: time, restraint, and rarity.
              </p>

              <Link
                href="#"
                className="inline-block text-xs font-bold tracking-normal text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                <button className="border border-neutral-900 uppercase px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-xs font-bold">
                  Request Access
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
