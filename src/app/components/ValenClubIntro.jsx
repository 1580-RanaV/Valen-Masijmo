'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SectionThree() {
  return (
    <section className="relative w-full flex justify-center px-4">
      <div className="w-full max-w-8xl flex flex-col lg:flex-row overflow-hidden bg-white">
        
        {/* Left (on lg) / Top (on mobile) — Image */}
        <div className="relative w-full lg:w-2/3 h-72 sm:h-96 md:h-[60vh] lg:h-[80vh] border-b lg:border-b-0 lg:border-r border-gray-300">
          <Image
            src="/break-photo-3.png"
            alt="Valen Masijmo — Silent Luxury"
            fill
            priority
            className="object-cover object-center"
            sizes="(min-width: 1024px) 66vw, 100vw"
          />
        </div>

        {/* Right (on lg) / Bottom (on mobile) — Text */}
        <div className="w-full lg:w-1/3 flex items-center justify-center p-8 sm:p-10 lg:p-12">
          <div className="max-w-md text-center flex flex-col justify-center">
            <p className="text-xs font-medium text-gray-500 tracking-wide mb-6">
              Valen Masijmo
            </p>

            <h1 className="text-sm font-semibold text-gray-900 mb-8 tracking-tight">
              The <span className="text-red-800 font-semibold">Valen Club</span>
            </h1>

            <p className="text-sm text-gray-600 leading-relaxed mb-10">
              The <span className="text-red-800 font-semibold">Valen Club</span> is not a community — it’s a gate. An inner circle built quietly around belief, taste, and patience. Entry is never requested; it is noticed. Within, pieces are not announced or displayed — they are offered, one to one, when the moment feels right.
            </p>

            <p className="text-sm text-gray-600 leading-relaxed mb-10">
              To be part of Valen Masijmo is to exist away from the ordinary rhythm of commerce. There are no drops, no deadlines — only presence. Each creation is made after acceptance, by hand, in silence. Fewer than ten in the world, meant to be worn, not owned.
            </p>

            <Link
              href="#"
              className="inline-block text-sm tracking-wide text-gray-900 hover:text-gray-600 transition-colors duration-300"
            >
              <button className="border border-neutral-900 px-6 py-3 hover:bg-gray-900 hover:text-white transition-colors duration-300 text-sm font-medium">
                Join the waitlist
              </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
