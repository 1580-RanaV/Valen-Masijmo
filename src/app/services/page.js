"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsOfService() {
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
          TERMS OF SERVICE
        </h1>

        <div className="space-y-8 text-xs uppercase text-neutral-700 leading-relaxed text-justify">
          <p
            data-index="1"
            className={`transition-all duration-1000 ease-out delay-200 ${
              visible.has("1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            BY ACCESSING OR USING OUR WEBSITE, YOU AGREE TO THESE TERMS. IF YOU
            DO NOT AGREE, DO NOT USE THE SERVICE. WE MAY UPDATE TERMS TO
            REFLECT OPERATIONAL OR LEGAL CHANGES.
          </p>

          <p
            data-index="2"
            className={`transition-all duration-1000 ease-out delay-300 ${
              visible.has("2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            ELIGIBILITY AND ACCOUNT: YOU ARE RESPONSIBLE FOR YOUR ACCOUNT
            CREDENTIALS AND FOR ALL ACTIVITY UNDER YOUR ACCOUNT. PROVIDE
            ACCURATE INFORMATION AND KEEP IT CURRENT.
          </p>

          <p
            data-index="3"
            className={`transition-all duration-1000 ease-out delay-400 ${
              visible.has("3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            ACCEPTABLE USE: DO NOT MISUSE THE SERVICE, INTERFERE WITH
            SECURITY, INFRINGE INTELLECTUAL PROPERTY, OR VIOLATE LAWS. WE MAY
            SUSPEND OR TERMINATE ACCESS FOR BREACH.
          </p>

          <p
            data-index="4"
            className={`transition-all duration-1000 ease-out delay-500 ${
              visible.has("4") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            INTELLECTUAL PROPERTY: CONTENT, DESIGN, AND MARKS ON THE SITE ARE
            OWNED BY US OR OUR LICENSORS AND ARE PROTECTED BY LAW. LIMITED,
            REVOCABLE, NON-TRANSFERABLE ACCESS IS GRANTED TO USE THE SITE.
          </p>

          <p
            data-index="5"
            className={`transition-all duration-1000 ease-out delay-600 ${
              visible.has("5") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            DISCLAIMER AND LIABILITY: THE SERVICE IS PROVIDED &quot;AS IS&quot;.
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM WARRANTIES AND
            LIMIT LIABILITY FOR INDIRECT OR CONSEQUENTIAL DAMAGES.
          </p>

          <p
            data-index="6"
            className={`transition-all duration-1000 ease-out delay-700 ${
              visible.has("6") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            GOVERNING LAW AND DISPUTES: THESE TERMS ARE GOVERNED BY THE LAWS OF
            THE RELEVANT JURISDICTION DISCLOSED ON OUR CONTACT PAGE. DISPUTES
            WILL BE HANDLED THROUGH THE SPECIFIED FORUM OR ARBITRATION PROCESS.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
