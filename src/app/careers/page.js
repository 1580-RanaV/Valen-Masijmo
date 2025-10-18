"use client";
import React, { useEffect, useRef, useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Careers() {
  const [visible, setVisible] = useState(new Set());
  const [openId, setOpenId] = useState(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.dataset.index;
            if (idx) setVisible((prev) => new Set([...prev, idx]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const els = document.querySelectorAll("[data-index]");
    els.forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current && observerRef.current.disconnect();
  }, []);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  const roles = [
    {
      id: "smm",
      title: "SOCIAL MEDIA MANAGER",
      location: "REMOTE",
      experience: "1–2 YEARS",
      tags: ["STORYTELLING", "CONTENT CREATION", "COMMUNITY"],
      description: "SHAPE OUR VOICE ACROSS PLATFORMS. TRANSLATE BRAND VALUES INTO MEMORABLE MOMENTS.",
      responsibilities: [
        "DEVELOP AND EXECUTE WEEKLY CONTENT STRATEGY ACROSS INSTAGRAM, TIKTOK, AND YOUTUBE SHORTS",
        "CRAFT COMPELLING CAPTIONS THAT REFLECT BRAND PHILOSOPHY AND AESTHETIC",
        "ENGAGE WITH COMMUNITY AUTHENTICALLY AND BUILD MEANINGFUL CONNECTIONS",
        "TRACK PERFORMANCE METRICS: REACH, ENGAGEMENT, SAVES, AND CONVERSION SIGNALS",
        "COLLABORATE WITH CREATIVE TEAM TO MAINTAIN VISUAL AND TONAL CONSISTENCY"
      ],
      bonus: ["BASIC VIDEO EDITING SKILLS", "UNDERSTANDING OF REELS PACING AND TRENDS", "EXPERIENCE WITH QUIET LUXURY OR MINIMALIST BRANDS"],
      apply: "SHARE YOUR PORTFOLIO: 2–3 ACCOUNTS YOU'VE MANAGED + A BRIEF NOTE ON WHY MINIMALIST AESTHETICS RESONATE WITH YOU."
    },
    {
      id: "hsd",
      title: "HAND SKETCH DESIGNER",
      location: "REMOTE",
      experience: "1–2 YEARS",
      tags: ["ILLUSTRATION", "APPAREL", "CRAFTSMANSHIP"],
      description: "BRING IDEAS TO LIFE THROUGH HAND-DRAWN ILLUSTRATIONS. MERGE TRADITIONAL TECHNIQUES WITH MODERN APPAREL.",
      responsibilities: [
        "CREATE ORIGINAL HAND SKETCHES FOR T-SHIRTS, HOODIES, AND ACCESSORIES",
        "MASTER PROPORTION, NEGATIVE SPACE, AND COMPOSITIONAL BALANCE",
        "PREPARE SKETCHES FOR PRODUCTION: SCANNING, BASIC DIGITAL CLEANUP",
        "WORK CLOSELY WITH PRINT VENDORS ON PLACEMENT, SCALE, AND LINE WEIGHT",
        "UNDERSTAND FABRIC CONSTRAINTS AND PRINT TECHNIQUES"
      ],
      bonus: ["FAMILIARITY WITH PUFF, DISCHARGE, AND WATER-BASED PRINTING", "KNOWLEDGE OF GARMENT CONSTRUCTION", "EXPERIENCE WITH SCREEN PRINTING LIMITATIONS"],
      apply: "SUBMIT YOUR WORK: 6–10 SKETCHES (PDF OR PORTFOLIO LINK) + A SHORT NOTE ABOUT YOUR FAVORITE DRAWING TOOLS."
    }
  ];

  return (
    <section className="min-h-screen bg-gray-50 relative">
      <Navbar />

      <div className="max-w-5xl mx-auto px-6 pt-32 pb-24">
        {/* HERO SECTION */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h1
            data-index="0"
            className={`text-xs font-bold tracking-[0.3em] text-neutral-900 mb-8 uppercase transition-all duration-1000 ease-out ${
              visible.has("0") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            JOIN OUR TEAM
          </h1>

          <p
            data-index="1"
            className={`text-xs font-bold uppercase text-neutral-600 leading-relaxed mb-12 transition-all duration-1000 ease-out delay-150 ${
              visible.has("1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            WE BUILD FOR THOSE WHO VALUE QUIET CONFIDENCE OVER LOUD STATEMENTS. 
            IF YOU SHARE THIS PHILOSOPHY AND BRING DEDICATION TO YOUR CRAFT, 
            WE WANT TO HEAR FROM YOU.
          </p>

          <div
            data-index="2"
            className={`flex flex-wrap justify-center gap-3 transition-all duration-1000 ease-out delay-300 ${
              visible.has("2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="border border-neutral-300 px-4 py-2 text-xs font-bold tracking-widest uppercase text-neutral-900">
              REMOTE FIRST
            </span>
            <span className="border border-neutral-300 px-4 py-2 text-xs font-bold tracking-widest uppercase text-neutral-900">
              1–2 YEARS EXPERIENCE
            </span>
            <span className="border border-neutral-300 px-4 py-2 text-xs font-bold tracking-widest uppercase text-neutral-900">
              PASSION REQUIRED
            </span>
          </div>
        </div>

        {/* ROLES SECTION */}
        <div
          data-index="3"
          className={`mb-24 transition-all duration-1000 ease-out delay-500 ${
            visible.has("3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-xs font-bold tracking-[0.3em] text-neutral-900 mb-12 uppercase text-center">
            OPEN POSITIONS
          </h2>

          <div className="space-y-6">
            {roles.map((role) => (
              <div key={role.id} className="border border-neutral-200 bg-gray-50">
                {/* ROLE HEADER */}
                <button
                  aria-expanded={openId === role.id}
                  onClick={() => toggle(role.id)}
                  className="w-full px-6 py-6 text-left hover:bg-neutral-100 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="text-xs font-bold tracking-widest uppercase text-neutral-900">
                          {role.title}
                        </h3>
                        <span className="text-xs font-bold tracking-widest uppercase text-neutral-500">
                          · {role.location}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {role.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-50 border border-neutral-300 px-3 py-1 text-xs font-bold tracking-wider uppercase text-neutral-700"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs font-bold uppercase text-neutral-600 leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                    <span
                      className={`text-neutral-900 transition-transform duration-300 ${
                        openId === role.id ? "rotate-90" : ""
                      }`}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                        <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="square"/>
                      </svg>
                    </span>
                  </div>
                </button>

                {/* ROLE DETAILS */}
                <div
                  className={`overflow-hidden transition-all duration-500 ${
                    openId === role.id
                      ? "max-h-[2000px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6 space-y-8">
                    <div className="h-px bg-neutral-200" />

                    {/* EXPERIENCE */}
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-900 mb-3">
                        EXPERIENCE LEVEL
                      </h4>
                      <p className="text-xs font-bold uppercase text-neutral-600">
                        {role.experience} · REMOTE POSITION
                      </p>
                    </div>

                    {/* RESPONSIBILITIES */}
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-900 mb-4">
                        RESPONSIBILITIES
                      </h4>
                      <ul className="space-y-3">
                        {role.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-neutral-400 mt-0.5">—</span>
                            <span className="text-xs font-bold uppercase text-neutral-600 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* BONUS SKILLS */}
                    <div>
                      <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-900 mb-4">
                        BONUS SKILLS
                      </h4>
                      <ul className="space-y-3">
                        {role.bonus.map((item, idx) => (
                          <li key={idx} className="flex gap-3">
                            <span className="text-neutral-400 mt-0.5">+</span>
                            <span className="text-xs font-bold uppercase text-neutral-600 leading-relaxed">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* HOW TO APPLY */}
                    <div className="bg-gray-50 border border-neutral-200 p-6">
                      <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-900 mb-3">
                        HOW TO APPLY
                      </h4>
                      <p className="text-xs font-bold uppercase text-neutral-600 leading-relaxed">
                        {role.apply}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION INSTRUCTIONS */}
        <div
          data-index="4"
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ease-out delay-700 ${
            visible.has("4") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="border border-neutral-900 bg-neutral-900 text-white p-8">
            <h3 className="text-xs font-bold tracking-[0.3em] uppercase mb-6">
              READY TO APPLY?
            </h3>
            <p className="text-xs font-bold uppercase mb-4 tracking-wider">
              EMAIL US AT: CAREERS@VALENMASIJMO.COM
            </p>
            <p className="text-xs font-bold uppercase text-neutral-300 leading-relaxed">
              SUBJECT LINE: [ROLE] — [YOUR NAME]
            </p>
            <div className="h-px bg-neutral-700 my-6" />
            <p className="text-xs font-bold uppercase text-neutral-300 leading-relaxed">
              INCLUDE: YOUR PORTFOLIO OR WORK SAMPLES · THREE KEY POINTS ABOUT YOUR EXPERIENCE · EARLIEST START DATE
            </p>
          </div>

          <p className="mt-12 text-xs font-bold uppercase text-neutral-500 leading-relaxed">
            WE REVIEW ALL APPLICATIONS CAREFULLY. 
            EXPECT A RESPONSE WITHIN 5–7 BUSINESS DAYS.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}