import Image from 'next/image';

export default function Hero2() {
  return (
    <section className="w-full">
      <div className="relative w-full h-auto">
        <Image
          src="/hero-2.png"
          alt="Hero section"
          width={1920}
          height={1080}
          className="w-full h-auto"
          priority
        />
      </div>
    </section>
  );
}
