'use client'
import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function Contact() {
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

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-24 text-center">
        {/* Heading */}
        <h1
          data-index="0"
          className={`text-xs font-bold tracking-widest text-neutral-900 mb-10 transition-all duration-1000 ease-out ${
            visible.has('0')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          Contact us
        </h1>

        {/* Intro */}
        <p
          data-index="1"
          className={`text-xs font-bold text-neutral-700 leading-relaxed max-w-md mx-auto mb-16 transition-all duration-1000 ease-out delay-200 ${
            visible.has('1')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          We value connections built on simplicity and clarity. Reach out to our
          team for any questions, collaborations, or press inquiries. Every
          message is read with care.
        </p>

        {/* Contact grid */}
        <div
          data-index="2"
          className={`grid grid-cols-1 sm:grid-cols-2 gap-10 text-xs font-bold text-neutral-900 transition-all duration-1000 ease-out delay-300 ${
            visible.has('2')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div>
            <p className="mb-2 tracking-widest text-neutral-500">
              General inquiries
            </p>
            <p>info@valenmasijmo.com</p>
          </div>

          <div>
            <p className="mb-2 tracking-widest text-neutral-500">Press & media</p>
            <p>press@valenmasijmo.com</p>
          </div>

          <div>
            <p className="mb-2 tracking-widest text-neutral-500">Customer care</p>
            <p>support@valenmasijmo.com</p>
          </div>

          <div>
            <p className="mb-2 tracking-widest text-neutral-500">Studio address</p>
            <p>
              Dubai Design District
              <br />
              Unit 21 — Destiny City
            </p>
          </div>
        </div>

        {/* Contact form */}
        <div
          data-index="3"
          className={`mt-20 transition-all duration-1000 ease-out delay-500 ${
            visible.has('3')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="Your name"
              className="w-full border-b border-neutral-400 bg-transparent py-3 text-xs font-bold text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full border-b border-neutral-400 bg-transparent py-3 text-xs font-bold text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="Your message"
              className="w-full border-b border-neutral-400 bg-transparent py-3 text-xs font-bold text-neutral-900 placeholder-neutral-400 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full border border-neutral-900 py-3 text-xs font-bold tracking-widest text-neutral-900 hover:bg-neutral-900 hover:text-gray-50 transition-all duration-300"
            >
              Send message
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  )
}
