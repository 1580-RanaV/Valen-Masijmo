import Image from 'next/image'

export default function People() {
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
      </div>

      {/* Desktop version (16:9 ratio, regular image) */}
      <div className="relative w-full hidden sm:block aspect-[16/9]">
        <Image
          src="/break-photo.png"
          alt="People section desktop"
          fill
          className="object-cover"
          priority
        />
      </div>
    </section>
  )
}
