'use client'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function CookiesPolicy() {
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
          Cookies policy
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
            Cookies are small text files stored on your device. We use them to
            enable core functionality, remember preferences, and analyze how the
            site is used to improve performance.
          </p>

          <p
            data-index="2"
            className={`transition-all duration-1000 ease-out delay-300 ${
              visible.has('2')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Types of cookies include strictly necessary, functional, performance,
            and analytics. Some cookies are session-based and expire when you
            close the browser, while others may persist for a limited period.
          </p>

          <p
            data-index="3"
            className={`transition-all duration-1000 ease-out delay-400 ${
              visible.has('3')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Control: you can manage cookies via browser settings or through any
            consent banner we provide. Disabling certain cookies may impact site
            functionality.
          </p>

          <p
            data-index="4"
            className={`transition-all duration-1000 ease-out delay-500 ${
              visible.has('4')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Third-party services: select partners may set cookies to deliver
            analytics or embedded features. These parties operate under their
            own policies.
          </p>

          <p
            data-index="5"
            className={`transition-all duration-1000 ease-out delay-600 ${
              visible.has('5')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Updates: we may modify this cookies policy to reflect changes in
            technology or regulation. Check this page for the latest version.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  )
}
