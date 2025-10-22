'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePassword } from '../components/PasswordProtection'
import { useRouter } from 'next/navigation'
import Navbar from '../components/Navbar'

export default function HeroSection() {
  const [isAtTop, setIsAtTop] = useState(true)
  const { requestAccess } = usePassword()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < window.innerHeight * 0.8)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <div className="relative w-full aspect-[2/3] sm:aspect-[16/9]">
          <Image
            src="/hero-7.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover brightness-95"
          />

          {/* Text overlay at bottom center */}
          <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end pb-8 sm:pb-12 md:pb-16 lg:pb-20">
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
    </>
  )
}
