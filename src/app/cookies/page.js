"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CookiesPolicy() {
  const [visible, setVisible] = useState(new Set());
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

  return (
    <section className="min-h-screen bg-gray-50 relative">
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16 text-center font-bold uppercase">
        <h1
          data-index="0"
          className={`text-xs font-bold tracking-widest text-neutral-900 mb-10 uppercase transition-all duration-1000 ease-out ${
            visible.has("0") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          COOKIES POLICY
        </h1>

        <div className="space-y-8 text-xs uppercase text-neutral-700 leading-relaxed text-justify">
          <p
            data-index="1"
            className={`transition-all duration-1000 ease-out delay-200 ${
              visible.has("1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            COOKIES ARE SMALL TEXT FILES STORED ON YOUR DEVICE. WE USE THEM TO
            ENABLE CORE FUNCTIONALITY, REMEMBER PREFERENCES, AND ANALYZE HOW
            THE SITE IS USED TO IMPROVE PERFORMANCE.
          </p>

          <p
            data-index="2"
            className={`transition-all duration-1000 ease-out delay-300 ${
              visible.has("2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            TYPES OF COOKIES: STRICTLY NECESSARY, FUNCTIONAL, PERFORMANCE, AND
            ANALYTICS. SOME COOKIES ARE SESSION-BASED AND EXPIRE WHEN YOU CLOSE
            THE BROWSER; OTHERS MAY PERSIST FOR A LIMITED PERIOD.
          </p>

          <p
            data-index="3"
            className={`transition-all duration-1000 ease-out delay-400 ${
              visible.has("3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            CONTROL: YOU CAN MANAGE COOKIES VIA BROWSER SETTINGS OR THROUGH ANY
            CONSENT BANNER WE PROVIDE. DISABLING CERTAIN COOKIES MAY IMPACT
            SITE FUNCTIONALITY.
          </p>

          <p
            data-index="4"
            className={`transition-all duration-1000 ease-out delay-500 ${
              visible.has("4") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            THIRD-PARTY SERVICES: SELECT PARTNERS MAY SET COOKIES TO DELIVER
            ANALYTICS OR EMBEDDED FEATURES. THESE PARTIES OPERATE UNDER THEIR
            OWN POLICIES.
          </p>

          <p
            data-index="5"
            className={`transition-all duration-1000 ease-out delay-600 ${
              visible.has("5") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            UPDATES: WE MAY MODIFY THIS COOKIES POLICY TO REFLECT CHANGES IN
            TECHNOLOGY OR REGULATION. CHECK THIS PAGE FOR THE LATEST VERSION.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
