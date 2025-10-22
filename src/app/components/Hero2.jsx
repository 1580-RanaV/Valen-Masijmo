'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Hero2() {
  const router = useRouter()

  const handleShopClick = (e) => {
    e.preventDefault()
    router.push('/shop')
  }

  return (
    <section className="w-full">
      <div className="relative w-full aspect-[2/3] sm:aspect-[16/9]">
        <Image
          src="/hero-2.png"
          alt="Hero section"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Text overlay at bottom center */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
          <p className="text-white font-regular text-sm tracking-widest uppercase mb-2">
            VALEN VINTERS '25
          </p>
          <h1 className="text-white font-regular text-sm font-light tracking-wide mb-4 text-center">
            Valen Masijmo Winter Drop Arriving
          </h1>
          <div className="flex gap-6">
            <button
              onClick={handleShopClick}
              className="text-white font-regular text-sm hover:underline underline-offset-4 transition-all"
            >
              Know more
            </button>
            {/* <button
              onClick={handleShopClick}
              className="text-white text-sm hover:underline underline-offset-4 transition-all"
            >
              For Him
            </button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
