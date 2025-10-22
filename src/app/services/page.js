'use client'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function TermsOfService() {
  const [visible, setVisible] = useState(new Set())
  const observerRef = useRef(null)

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.dataset.index
            if (idx) setVisible((prev) => new Set([...prev, idx]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const els = document.querySelectorAll('[data-index]')
    els.forEach((el) => observerRef.current.observe(el))
    return () => observerRef.current && observerRef.current.disconnect()
  }, [])

  return (
    <section className="min-h-screen bg-gray-50 relative">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16 text-center font-bold">
        <h1
          data-index="0"
          className={`text-xs font-bold tracking-widest text-neutral-900 mb-10 transition-all duration-1000 ease-out ${
            visible.has('0')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Terms of service
        </h1>

        <div className="space-y-8 text-xs text-neutral-700 leading-relaxed text-justify">
          <p
            data-index="1"
            className={`transition-all duration-1000 ease-out delay-200 ${
              visible.has('1')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            By accessing or using our website, you agree to these terms. If you
            do not agree, do not use the service. We may update these terms to
            reflect operational or legal changes.
          </p>

          <p
            data-index="2"
            className={`transition-all duration-1000 ease-out delay-300 ${
              visible.has('2')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Eligibility and account: you are responsible for your account
            credentials and for all activity under your account. Please provide
            accurate information and keep it current.
          </p>

          <p
            data-index="3"
            className={`transition-all duration-1000 ease-out delay-400 ${
              visible.has('3')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Acceptable use: do not misuse the service, interfere with security,
            infringe intellectual property, or violate laws. We may suspend or
            terminate access for any breach of these terms.
          </p>

          <p
            data-index="4"
            className={`transition-all duration-1000 ease-out delay-500 ${
              visible.has('4')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Intellectual property: the content, design, and trademarks on this
            site are owned by us or our licensors and are protected by law.
            Limited, revocable, and non-transferable access is granted for
            personal use of the site.
          </p>

          <p
            data-index="5"
            className={`transition-all duration-1000 ease-out delay-600 ${
              visible.has('5')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Disclaimer and liability: the service is provided “as is.” To the
            maximum extent permitted by law, we disclaim warranties and limit
            liability for indirect or consequential damages.
          </p>

          <p
            data-index="6"
            className={`transition-all duration-1000 ease-out delay-700 ${
              visible.has('6')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Governing law and disputes: these terms are governed by the laws of
            the relevant jurisdiction disclosed on our contact page. Disputes
            will be handled through the specified forum or arbitration process.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  )
}
