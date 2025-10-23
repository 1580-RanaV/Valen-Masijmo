'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePassword } from '../components/PasswordProtection'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'

export default function HeroSection() {
  const [isAtTop, setIsAtTop] = useState(true)
  const [currentIndex, setCurrentIndex] = useState(0)
  const { requestAccess } = usePassword()
  const router = useRouter()

  // Array of your hero images
  const heroImages = [
    '/hero-7.png',
    '/hero-6.png', // Replace with your second image path
    '/hero-5.png'  // Replace with your third image path
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight * 0.8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [heroImages.length])

  const handleShopClick = (e) => {
    e?.preventDefault?.()
    requestAccess(() => {
      router.push('/shop')
    })
  }

  return (
    <>
      <Navbar isAtTop={isAtTop} />
      <section className="w-full">
        <div className="relative w-full aspect-[2/3] sm:aspect-[16/9] overflow-hidden">
          {/* Image carousel */}
          <div 
            className="flex transition-transform duration-1000 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {heroImages.map((src, index) => (
              <div key={index} className="relative min-w-full h-full">
                <Image
                  src={src}
                  alt={`Hero Background ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover brightness-95"
                />
              </div>
            ))}
          </div>

          {/* Text overlay at bottom center */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
            <p className="text-white font-regular text-sm tracking-widest uppercase mb-2">
              JOIN VALEN CLUB
            </p>
            <h1 className="text-white font-regular text-sm font-light tracking-wide mb-4 text-center">
              Valen Masijmo's Valen Club is Here
            </h1>
            <div className="flex gap-6">
              <button 
                onClick={handleShopClick}
                className="text-white font-regular text-sm hover:underline underline-offset-4 transition-all"
              >
                Join Waitlist
              </button>
            </div>
          </div>

          {/* Optional: Carousel indicators */}
          {/* <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white w-6' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </section>
    </>
  )
}