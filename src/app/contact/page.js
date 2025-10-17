"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
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

      <div className="max-w-3xl mx-auto px-4 pt-28 pb-24 text-center">
        {/* Heading */}
        <h1
          data-index="0"
          className={`text-xs font-bold tracking-widest text-neutral-900 mb-10 uppercase transition-all duration-1000 ease-out ${
            visible.has("0")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          CONTACT US
        </h1>

        {/* Intro */}
        <p
          data-index="1"
          className={`text-xs font-bold uppercase text-neutral-700 leading-relaxed max-w-md mx-auto mb-16 transition-all duration-1000 ease-out delay-200 ${
            visible.has("1")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          WE VALUE CONNECTIONS BUILT ON SIMPLICITY AND CLARITY.  
          REACH OUT TO OUR TEAM FOR ANY QUESTIONS, COLLABORATIONS,  
          OR PRESS INQUIRIES. EVERY MESSAGE IS READ WITH CARE.
        </p>

        {/* Contact grid */}
        <div
          data-index="2"
          className={`grid grid-cols-1 sm:grid-cols-2 gap-10 text-xs font-bold text-neutral-900 uppercase transition-all duration-1000 ease-out delay-300 ${
            visible.has("2")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="mb-2 tracking-widest text-neutral-500">GENERAL INQUIRIES</p>
            <p>INFO@VALENMASIJMO.COM</p>
          </div>

          <div>
            <p className="mb-2 tracking-widest text-neutral-500">PRESS & MEDIA</p>
            <p>PRESS@VALENMASIJMO.COM</p>
          </div>

          <div>
            <p className="mb-2 tracking-widest text-neutral-500">CUSTOMER CARE</p>
            <p>SUPPORT@VALENMASIJMO.COM</p>
          </div>

          <div>
            <p className="mb-2 tracking-widest text-neutral-500">STUDIO ADDRESS</p>
            <p>DUBAI DESIGN DISTRICT<br />UNIT 21 — DESTINY CITY</p>
          </div>
        </div>

        {/* Contact form (optional placeholder aesthetic only) */}
        <div
          data-index="3"
          className={`mt-20 transition-all duration-1000 ease-out delay-500 ${
            visible.has("3")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <form className="max-w-md mx-auto space-y-6">
            <input
              type="text"
              placeholder="YOUR NAME"
              className="w-full border-b border-neutral-400 bg-transparent py-3 text-xs font-bold uppercase text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="w-full border-b border-neutral-400 bg-transparent py-3 text-xs font-bold uppercase text-neutral-900 placeholder-neutral-400 focus:outline-none"
            />
            <textarea
              rows="4"
              placeholder="YOUR MESSAGE"
              className="w-full border-b border-neutral-400 bg-transparent py-3 text-xs font-bold uppercase text-neutral-900 placeholder-neutral-400 focus:outline-none resize-none"
            ></textarea>

            <button
              type="submit"
              className="mt-4 w-full border border-neutral-900 py-3 text-xs font-bold uppercase tracking-widest text-neutral-900 hover:bg-neutral-900 hover:text-gray-50 transition-all duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </section>
  );
}
