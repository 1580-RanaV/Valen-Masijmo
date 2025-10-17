"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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

  return (
    <section className="min-h-screen bg-gray-50 relative">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-24 text-center">
        {/* HEADING */}
        <h1
          data-index="0"
          className={`text-xs font-bold tracking-widest text-neutral-900 mb-6 uppercase transition-all duration-1000 ease-out ${
            visible.has("0") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          CAREERS
        </h1>

        {/* REMOTE + EXPERIENCE BANNER */}
        <div
          data-index="1"
          className={`text-xs font-bold uppercase text-neutral-900 transition-all duration-1000 ease-out delay-150 ${
            visible.has("1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-3">
            <span className="border border-neutral-900 px-3 py-1 tracking-widest">
              REMOTE POSITIONS
            </span>
            <span className="border border-neutral-900 px-3 py-1 tracking-widest">
              1–2 YEARS EXPERIENCE
            </span>
            <span className="border border-neutral-900 px-3 py-1 tracking-widest">
              STRONG INTEREST REQUIRED
            </span>
          </div>
        </div>

        {/* INTRO COPY */}
        <p
          data-index="2"
          className={`mt-8 text-xs font-bold uppercase text-neutral-700 leading-relaxed max-w-xl mx-auto transition-all duration-1000 ease-out delay-300 ${
            visible.has("2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          WE HIRE FOR CURIOSITY, CARE, AND CONSISTENCY. IF YOU ARE EARLY IN YOUR
          JOURNEY BUT COMMITTED TO CRAFT, WE WOULD LIKE TO HEAR FROM YOU.
        </p>

        {/* POSITIONS LIST */}
        <div
          data-index="3"
          className={`mt-16 text-left transition-all duration-1000 ease-out delay-500 ${
            visible.has("3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <ul className="space-y-4">
            {/* ROLE 1: SOCIAL MEDIA MANAGER */}
            <li className="border border-neutral-300">
              <button
                aria-expanded={openId === "smm"}
                onClick={() => toggle("smm")}
                className="w-full flex items-center justify-between px-4 py-4 text-xs font-bold uppercase tracking-widest text-neutral-900"
              >
                <span>SOCIAL MEDIA MANAGER — REMOTE</span>
                <span className={`transition-transform ${openId === "smm" ? "rotate-90" : ""}`}>
                  ▶
                </span>
              </button>

              <div
                className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ${
                  openId === "smm" ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"
                }`}
              >
                <div className="px-4 pb-4 text-xs font-bold uppercase text-neutral-700 leading-relaxed space-y-3">
                  <p className="text-neutral-900">
                    HIGHLIGHTS: 1–2 YEARS EXPERIENCE • STRONG INTEREST IN BRAND STORYTELLING • REMOTE
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>PLAN AND EXECUTE WEEKLY CONTENT ACROSS IG / TIKTOK / YT SHORTS.</li>
                    <li>WRITE CLEAN CAPTIONS, SCHEDULE POSTS, AND RESPOND TO COMMUNITY.</li>
                    <li>REPORT BASIC METRICS: REACH, SAVES, CTR, CONVERSION HINTS.</li>
                    <li>COORDINATE WITH DESIGN FOR ASSET NEEDS AND BRAND CONSISTENCY.</li>
                  </ul>
                  <p>PLUS: BASIC VIDEO EDITING, REELS RHYTHM, AND SOUND CURATION.</p>
                  <p>
                    APPLY: SEND LINKS TO 2–3 HANDLED PAGES + A SHORT NOTE ON WHY YOU LIKE QUIET LUXURY.
                  </p>
                </div>
              </div>
            </li>

            {/* ROLE 2: HAND SKETCH DESIGN — NAME CHOSEN FOR CLARITY */}
            <li className="border border-neutral-300">
              <button
                aria-expanded={openId === "hsd"}
                onClick={() => toggle("hsd")}
                className="w-full flex items-center justify-between px-4 py-4 text-xs font-bold uppercase tracking-widest text-neutral-900"
              >
                <span>HAND SKETCH DESIGNER (APPAREL) — REMOTE</span>
                <span className={`transition-transform ${openId === "hsd" ? "rotate-90" : ""}`}>
                  ▶
                </span>
              </button>

              <div
                className={`overflow-hidden transition-[max-height,opacity,transform] duration-300 ${
                  openId === "hsd" ? "max-h-96 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1"
                }`}
              >
                <div className="px-4 pb-4 text-xs font-bold uppercase text-neutral-700 leading-relaxed space-y-3">
                  <p className="text-neutral-900">
                    HIGHLIGHTS: 1–2 YEARS EXPERIENCE • STRONG INTEREST IN HAND DRAWING • REMOTE
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>CREATE CLEAN HAND SKETCHES FOR TEES, HOODIES, AND MINIMAL GRAPHICS.</li>
                    <li>UNDERSTAND PROPORTION, NEGATIVE SPACE, AND SILHOUETTE BALANCE.</li>
                    <li>SCAN OR PHOTOGRAPH SKETCHES; PREP SIMPLE CLEANUPS (BASIC DIGITAL).</li>
                    <li>COLLABORATE WITH PRINT VENDORS: SCALE, PLACEMENT, AND LINE WEIGHT.</li>
                  </ul>
                  <p>PLUS: FAMILIARITY WITH PUFF / DISCHARGE / WATER-BASED PRINT CONSTRAINTS.</p>
                  <p>
                    APPLY: SEND 6–10 SKETCHES (PDF OR LINK) + A NOTE ON YOUR FAVOURITE PAPER/PENCIL.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>

        {/* HOW TO APPLY */}
        <div
          data-index="4"
          className={`mt-16 transition-all duration-1000 ease-out delay-700 ${
            visible.has("4") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-xs font-bold uppercase text-neutral-900 tracking-widest">
            EMAIL: CAREERS@VALENMASIJMO.COM — SUBJECT: ROLE / YOUR NAME
          </p>
          <p className="mt-4 text-xs font-bold uppercase text-neutral-700">
            INCLUDE YOUR LINKS, 3 BULLETS ON EXPERIENCE, AND EARLIEST START DATE.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
