'use client'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function PrivacyPolicy() {
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
    <section className="min-h-screen relative">
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
          Privacy policy
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
            This policy explains how we collect, use, and protect personal
            information when you interact with our website and services. By
            using our site, you consent to the practices described here.
          </p>

          <p
            data-index="2"
            className={`transition-all duration-1000 ease-out delay-300 ${
              visible.has('2')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Information we collect: account details you provide, order and
            transaction data, basic device and usage data, and communication
            preferences. We collect only what is necessary to operate, improve,
            and support our services.
          </p>

          <p
            data-index="3"
            className={`transition-all duration-1000 ease-out delay-400 ${
              visible.has('3')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            How we use data: to process orders, provide support, maintain
            security, improve user experience, and send service messages. We do
            not sell personal data. We may share limited data with trusted
            providers who act on our instructions.
          </p>

          <p
            data-index="4"
            className={`transition-all duration-1000 ease-out delay-500 ${
              visible.has('4')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Your rights: you may request access, correction, deletion, or
            portability of your personal data, subject to applicable law. You
            can withdraw consent where processing is based on consent.
          </p>

          <p
            data-index="5"
            className={`transition-all duration-1000 ease-out delay-600 ${
              visible.has('5')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Data security: we apply technical and organizational measures to
            safeguard information. No method is perfect, but we work to maintain
            the integrity and availability of data.
          </p>

          <p
            data-index="6"
            className={`transition-all duration-1000 ease-out delay-700 ${
              visible.has('6')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Contact: for privacy requests or questions, contact our support team
            via the contact page. We will respond within a reasonable time.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  )
}
