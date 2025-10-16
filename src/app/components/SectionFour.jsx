'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function SectionThree() {
  return (
    <section className="relative w-full bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

          {/* Right side - Image (shown first on mobile) */}
          <div className="relative h-[80vh] lg:h-[85vh] overflow-hidden lg:order-2">
            <Image
              src="/chair-red-2.png"
              alt="Valen Masijmo — Black Chapter One"
              fill
              priority
              className="object-contain"
            />
          </div>

          {/* Left side - Text Content (shown second on mobile) */}
          <div className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 lg:order-1">
            <div className="max-w-lg text-center">
              <p className="text-sm text-gray-500 tracking-widest font-thin mb-6">
                VALEN MASIJMO
              </p>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
                The <span className="text-red-800">Valen Club</span>
              </h1>

              <p className="text-base md:text-lg font-thin text-gray-600 leading-relaxed mb-10">
                Formed in silence and built on invitation alone, <span className='text-red-800'>Valen Club</span> is a private circle for those who value rarity over noise. Membership grants early access to every Valen Masijmo collection — pieces released quietly, known only to those within. It is not a program, but a privilege — an entry into the brand’s most silent conversations.
              </p>


              <Link
                href="#"
                className="inline-block border-b-2 border-black text-sm font-bold tracking-widest text-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors duration-300"
              >
                Join the Waitlist
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}