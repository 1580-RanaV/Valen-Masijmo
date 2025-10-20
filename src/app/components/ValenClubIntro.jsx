'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SectionThree() {
  return (
    <section className="relative w-full py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

          {/* Right side - Image (shown first on mobile) */}
          <div className="relative h-[80vh] overflow-hidden lg:order-2">
            <Image
              src="/chair-red-2.png"
              alt="Valen Masijmo — Silent Luxury"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Left side - Text Content (shown second on mobile) */}
          <div className="flex flex-col items-center justify-center px-4 lg:px-12 lg:order-1 uppercase">
            <div className="max-w-lg text-center">
              <p className="text-xs font-bold text-gray-500 tracking-widest mb-6">
                VALEN MASIJMO
              </p>
              
              <h1 className="text-xs font-bold text-gray-900 mb-8 tracking-tight">
                The <span className="text-red-800 font-bold">Valen Club</span>
              </h1>

              <p className="text-xs font-bold text-gray-600 leading-relaxed mb-10">
                The <span className="text-red-800 font-bold">Valen Club</span> is not a community — it’s a gate. An inner circle built quietly around belief, taste, and patience. Entry is never requested; it is noticed. Within, pieces are not announced or displayed — they are offered, one to one, when the moment feels right.
              </p>

              <p className="text-xs font-bold text-gray-600 leading-relaxed mb-10">
                To be part of Valen Masijmo is to exist away from the ordinary rhythm of commerce. There are no drops, no deadlines — only presence. Each creation is made after acceptance, by hand, in silence. Fewer than ten in the world, meant to be worn, not owned.
              </p>

              <Link
                href="#"
                className="inline-block text-xs font-bold tracking-widest text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                <button className="border border-neutral-900 uppercase px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-xs font-bold">
                  Join the Waitlist
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
