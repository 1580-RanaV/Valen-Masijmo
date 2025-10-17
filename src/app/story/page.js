"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Story() {
  const [visibleElements, setVisibleElements] = useState(new Set());
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = entry.target.dataset.index;
            if (idx) {
              setVisibleElements((prev) => new Set([...prev, idx]));
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-index]");
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section className="min-h-screen bg-gray-50 relative">
      <Navbar />

      {/* Leave space for navbar */}
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16 text-center">
        <h1
          data-index="0"
          className={`text-xs font-bold tracking-widest text-neutral-900 mb-10 transition-all duration-1000 ease-out ${
            visibleElements.has("0")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          OUR STORY
        </h1>

        <div className="space-y-8 text-xs font-bold text-justify text-neutral-700 leading-relaxed uppercase">
          {/* First paragraph (V drop cap) */}
          <p
            data-index="1"
            className={`first-letter:float-left first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.8] first-letter:mr-2 first-letter:mt-[2px] transition-all duration-1000 ease-out delay-200 ${
              visibleElements.has("1")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Valen began as a designer&apos;s dream — to make the T-shirt feel
            unmistakably luxurious without shouting. The idea was to take the
            most familiar piece in a wardrobe and elevate it through balance,
            proportion, and silence — where every line, every edge, and every
            fold was deliberate. It was about turning simplicity into desire,
            and comfort into presence.
          </p>

          {/* Centered photo (50% width) */}
          <div
            data-index="2"
            className={`w-1/2 mx-auto my-6 transition-all duration-1000 ease-out delay-400 ${
              visibleElements.has("2")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <Image
              src="/story-pic.png"
              alt="Valen Masijmo Studio"
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Second paragraph (M drop cap) */}
          <p
            data-index="3"
            className={`first-letter:float-left first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.8] first-letter:mr-2 first-letter:mt-[2px] transition-all duration-1000 ease-out delay-600 ${
              visibleElements.has("3")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Made with the intent to redefine perception, every T-shirt is built
            to carry the weight of refinement without effort. The fabrics drape
            lightly, yet command attention; the cuts are sharp, yet
            understated. Each piece speaks of confidence that doesn&apos;t need
            to announce itself — the essence of modern quiet luxury.
            <br />
            <br />
            What began as an experiment in detail has become a symbol of
            precision. The Valen philosophy remains simple — to let design
            alone tell the story. Each creation stands as proof that even the
            most ordinary form can hold extraordinary emotion, when crafted
            with intent.
          </p>

          {/* New paragraph: single-man dream & 3-year practice */}
          <p
            data-index="4"
            className={`transition-all duration-1000 ease-out delay-700 ${
              visibleElements.has("4")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            This is, at its heart, a single man&apos;s dream — three steady
            years of practice, patience, and persistence. From hand-drawn
            sketches on paper to disciplined pattern blocks, from sampling
            mishaps to the quiet thrill of the first perfect drape, the journey
            has been joyfully exacting. Every step narrowed the focus: fewer
            distractions, better decisions, clearer intent.
          </p>

          {/* New paragraph: fabrics & printing learnings leading to subtle/silent luxury */}
          <p
            data-index="5"
            className={`transition-all duration-1000 ease-out delay-800 ${
              visibleElements.has("5")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Along the way came the studies that matter: understanding knit
            densities and hand feel; testing washes and finishes; exploring
            print methods — puff, discharge, plastisol, water-based — then
            choosing restraint. We settled on simple text and measured graphic
            work: compositions that breathe, statements that whisper, and a
            silhouette that lets the wearer speak first. Subtle. Silent.
            Luxury.
          </p>

          {/* Second image at 50% width and half intrinsic size */}
          <div
            data-index="6"
            className={`w-1/2 mx-auto my-6 transition-all duration-1000 ease-out delay-900 ${
              visibleElements.has("6")
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95"
            }`}
          >
            <Image
              src="/story-pic-2.png"
              alt="Valen Masijmo — Process & Practice"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Closing paragraph */}
          <p
            data-index="7"
            className={`transition-all duration-1000 ease-out delay-[1000ms] ${
              visibleElements.has("7")
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Today, Valen continues to evolve, but the core vision remains
            unchanged: to create pieces that resonate with those who value
            subtlety, quality, and timeless elegance. In a world that often
            celebrates excess, Valen is a reminder that true luxury lies in the
            details that are felt, not flaunted.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
