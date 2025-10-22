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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleShopClick = (e) => {
    e?.preventDefault?.()
    requestAccess(() => {
      router.push('/shop')
    })
  }

  return (
    <><Navbar isAtTop={isAtTop} />
      {/* Responsive aspect ratio like Hero2 */}
      <section className="w-full">
        <div className="relative w-full aspect-[2/3] sm:aspect-[16/9]">
          <Image
            src="/hero-7.png"
            alt="Hero Background"
            fill
            priority
            className="object-cover brightness-95"
          />
        </div>
      </section>
    </>
  )
}
