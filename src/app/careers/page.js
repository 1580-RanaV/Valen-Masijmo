'use client'
import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Careers() {
  const [visible, setVisible] = useState(new Set())
  const [openId, setOpenId] = useState(null)
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

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id))

  const roles = [
    {
      id: 'smm',
      title: 'Social media manager',
      location: 'Remote',
      experience: '1–2 years',
      tags: ['Storytelling', 'Content creation', 'Community'],
      description:
        'Shape our voice across platforms. Translate brand values into memorable moments.',
      responsibilities: [
        'Develop and execute weekly content strategy across Instagram, TikTok, and YouTube Shorts.',
        'Craft compelling captions that reflect brand philosophy and aesthetic.',
        'Engage with the community authentically and build meaningful connections.',
        'Track performance metrics such as reach, engagement, saves, and conversions.',
        'Collaborate with the creative team to maintain visual and tonal consistency.',
      ],
      bonus: [
        'Basic video editing skills.',
        'Understanding of Reels pacing and trends.',
        'Experience with quiet luxury or minimalist brands.',
      ],
      apply:
        "Share your portfolio: 2–3 accounts you've managed, plus a brief note on why minimalist aesthetics resonate with you.",
    },
    {
      id: 'hsd',
      title: 'Hand sketch designer',
      location: 'Remote',
      experience: '1–2 years',
      tags: ['Illustration', 'Apparel', 'Craftsmanship'],
      description:
        'Bring ideas to life through hand-drawn illustrations. Merge traditional techniques with modern apparel.',
      responsibilities: [
        'Create original hand sketches for t-shirts, hoodies, and accessories.',
        'Master proportion, negative space, and compositional balance.',
        'Prepare sketches for production: scanning and basic digital cleanup.',
        'Work closely with print vendors on placement, scale, and line weight.',
        'Understand fabric constraints and print techniques.',
      ],
      bonus: [
        'Familiarity with puff, discharge, and water-based printing.',
        'Knowledge of garment construction.',
        'Experience with screen printing limitations.',
      ],
      apply:
        'Submit your work: 6–10 sketches (PDF or portfolio link) and a short note about your favorite drawing tools.',
    },
  ]

  return (
    <section className="relative">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-24">
        {/* Hero Section */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1
            data-index="0"
            className={`text-xs font-bold tracking-[0.3em] text-neutral-900 mb-6 transition-all duration-1000 ease-out ${
              visible.has('0')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            Join our team
          </h1>

          <p
            data-index="1"
            className={`text-xs font-bold text-neutral-600 leading-relaxed mb-10 transition-all duration-1000 ease-out delay-150 ${
              visible.has('1')
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
          >
            We build for those who value quiet confidence over loud statements.
            If you share this philosophy and bring dedication to your craft, we
            want to hear from you.
          </p>
        </div>

        {/* Roles Section */}
        <div
          data-index="3"
          className={`mb-16 transition-all duration-1000 ease-out delay-500 ${
            visible.has('3')
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-900 mb-8 text-center">
            Open positions
          </h2>

          <div className="space-y-5">
            {roles.map((role) => (
              <div key={role.id} className="border border-neutral-200 bg-gray-50">
                {/* Role Header */}
                <button
                  aria-expanded={openId === role.id}
                  onClick={() => toggle(role.id)}
                  className="w-full px-6 py-5 text-left hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2.5">
                        <h3 className="text-xs font-bold tracking-widest text-neutral-900">
                          {role.title}
                        </h3>
                        <span className="text-xs font-bold tracking-widest text-neutral-500">
                          · {role.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-2.5">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-50 border border-neutral-300 px-3 py-1 text-xs font-bold tracking-wider text-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-bold text-neutral-600 leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                    <span
                      className={`text-neutral-900 transition-transform duration-300 ${
                        openId === role.id ? 'rotate-90' : ''
                      }`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path
                          d="M6 3L11 8L6 13"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="square"
                        />
                      </svg>
                    </span>
                  </div>
                </button>

                {/* Role Details */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openId === role.id
                      ? 'max-h-[2000px] opacity-100'
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 space-y-7">
                    <div className="h-px bg-neutral-200" />

                    {/* Experience */}
                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-neutral-900 mb-2.5">
                        Experience level
                      </h4>
                      <p className="text-xs font-bold text-neutral-600">
                        {role.experience} · Remote position
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-neutral-900 mb-3">
                        Responsibilities
                      </h4>
                      <ul className="space-y-2.5">
                        {role.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-neutral-400 mt-0.5">—</span>
                            <span className="text-xs font-bold text-neutral-600 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus Skills */}
                    <div>
                      <h4 className="text-xs font-bold tracking-widest text-neutral-900 mb-3">
                        Bonus skills
                      </h4>
                      <ul className="space-y-2.5">
                        {role.bonus.map((item, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-neutral-400 mt-0.5">+</span>
                            <span className="text-xs font-bold text-neutral-600 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* How to Apply */}
                    <div className="bg-gray-50 border border-neutral-200 p-5">
                      <h4 className="text-xs font-bold tracking-widest text-neutral-900 mb-2.5">
                        How to apply
                      </h4>
                      <p className="text-xs font-bold text-neutral-600 leading-relaxed">
                        {role.apply}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </section>
  )
}
