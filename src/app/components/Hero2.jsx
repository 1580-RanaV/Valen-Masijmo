import Image from 'next/image'

export default function Hero2() {
  return (
    <section className="w-full">
      <div className="relative w-full aspect-[2/3] sm:aspect-[16/9]">
        <Image
          src="/hero-2.png"
          alt="Hero section"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
