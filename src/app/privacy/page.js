"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
          PRIVACY POLICY
        </h1>

        <div className="space-y-8 text-xs uppercase text-neutral-700 leading-relaxed text-justify">
          <p
            data-index="1"
            className={`transition-all duration-1000 ease-out delay-200 ${
              visible.has("1") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            THIS POLICY EXPLAINS HOW WE COLLECT, USE, AND PROTECT PERSONAL
            INFORMATION WHEN YOU INTERACT WITH OUR WEBSITE AND SERVICES. BY
            USING OUR SITE, YOU CONSENT TO THE PRACTICES DESCRIBED HERE.
          </p>

          <p
            data-index="2"
            className={`transition-all duration-1000 ease-out delay-300 ${
              visible.has("2") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            INFORMATION WE COLLECT: ACCOUNT DETAILS YOU PROVIDE, ORDER AND
            TRANSACTION DATA, BASIC DEVICE AND USAGE DATA, AND COMMUNICATION
            PREFERENCES. WE COLLECT ONLY WHAT IS NECESSARY TO OPERATE, IMPROVE,
            AND SUPPORT OUR SERVICES.
          </p>

          <p
            data-index="3"
            className={`transition-all duration-1000 ease-out delay-400 ${
              visible.has("3") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            HOW WE USE DATA: TO PROCESS ORDERS, PROVIDE SUPPORT, MAINTAIN
            SECURITY, IMPROVE USER EXPERIENCE, AND SEND SERVICE MESSAGES. WE DO
            NOT SELL PERSONAL DATA. WE MAY SHARE LIMITED DATA WITH TRUSTED
            PROVIDERS WHO ACT ON OUR INSTRUCTIONS.
          </p>

          <p
            data-index="4"
            className={`transition-all duration-1000 ease-out delay-500 ${
              visible.has("4") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            YOUR RIGHTS: YOU MAY REQUEST ACCESS, CORRECTION, DELETION, OR
            PORTABILITY OF YOUR PERSONAL DATA SUBJECT TO APPLICABLE LAW. YOU
            CAN WITHDRAW CONSENT WHERE PROCESSING IS BASED ON CONSENT.
          </p>

          <p
            data-index="5"
            className={`transition-all duration-1000 ease-out delay-600 ${
              visible.has("5") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            DATA SECURITY: WE APPLY TECHNICAL AND ORGANIZATIONAL MEASURES TO
            SAFEGUARD INFORMATION. NO METHOD IS PERFECT, BUT WE WORK TO
            MAINTAIN INTEGRITY AND AVAILABILITY OF DATA.
          </p>

          <p
            data-index="6"
            className={`transition-all duration-1000 ease-out delay-700 ${
              visible.has("6") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            CONTACT: FOR PRIVACY REQUESTS OR QUESTIONS, CONTACT OUR SUPPORT
            TEAM VIA THE CONTACT PAGE. WE WILL RESPOND WITHIN A REASONABLE TIME.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
