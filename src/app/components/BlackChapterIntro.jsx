'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function People() {
  const router = useRouter()

  const handleShopClick = (e) => {
    e.preventDefault()
    router.push('/shop')
  }

  return (
    <section className="w-full">
      {/* Mobile version (2:3 ratio, solo image) */}
      <div className="relative w-full aspect-[2/3] sm:hidden">
        <Image
          src="/break-photo-solo.png"
          alt="People section mobile"
          fill
          className="object-cover"
          priority
        />

        {/* Text overlay for mobile */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-8">
          <p className="text-white text-sm tracking-widest uppercase mb-2">
            GIFTS
          </p>
          <h1 className="text-white text-sm font-light tracking-wide mb-4 text-center">
            Festive Gifting Ideas
          </h1>
          <div className="flex gap-6">
            <button
              onClick={handleShopClick}
              className="text-white text-sm hover:underline underline-offset-4 transition-all"
            >
              For Her
            </button>
            <button
              onClick={handleShopClick}
              className="text-white text-sm hover:underline underline-offset-4 transition-all"
            >
              For Him
            </button>
          </div>
        </div>
      </div>

      {/* Desktop version (16:9 ratio, regular image) */}
      <div className="relative w-full hidden sm:block aspect-[16/9]">
        <Image
          src="/break-photo.png"
          alt="People section desktop"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Text overlay for desktop */}
        <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-12 md:pb-16 lg:pb-20">
          <p className="text-white text-sm tracking-widest uppercase mb-2">
            GIFTS
          </p>
          <h1 className="text-white text-sm font-light tracking-wide mb-4 text-center">
            Couple Gifting Ideas Releasing Soon
          </h1>
          <div className="flex gap-6">
            <button
              onClick={handleShopClick}
              className="text-white text-sm hover:underline underline-offset-4 transition-all"
            >
              Know More
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
