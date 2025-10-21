"use client";
import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Story() {
  return (
    <section className="min-h-screen relative">
      <Navbar />

      {/* Leave space for navbar */}
      <div className="max-w-3xl mx-auto px-4 pt-28 pb-16 text-center">
        <h1 className="text-xs font-bold tracking-widest text-neutral-900 mb-10">
          OUR STORY
        </h1>

        <div className="space-y-8 text-xs font-bold text-justify text-neutral-700 leading-relaxed uppercase">
          {/* First paragraph (V drop cap) */}
          <p className="first-letter:float-left first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.8] first-letter:mr-2 first-letter:mt-[2px]">
            Valen exists to restore patience to clothing. I design for those who
            recognise restraint as a form of precision. Each T-shirt begins only
            after acceptance — not before — and is built one at a time, to hold a
            certain presence without spectacle. No stock. No rush. Only
            decisions made slowly: proportion, balance, fall, and the quiet way a
            neckline meets the collarbone. Rarity is not a tactic here; it is a
            result of attention.
          </p>

          {/* Centered photo (50% width) */}
          <div className="w-1/2 mx-auto my-6">
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
          <p className="first-letter:float-left first-letter:text-5xl first-letter:font-bold first-letter:leading-[0.8] first-letter:mr-2 first-letter:mt-[2px]">
            Made to order and made to last, every piece is approved privately and
            produced in single-digit numbers. There are no drops, no countdowns,
            no public carts. You reach out; we consider; we craft. Fabric is
            chosen for weight and hand, cuts are measured to read as quiet
            confidence, graphics are restrained to let the wearer speak first.
            This is not commerce performed — it is correspondence with intent.
          </p>

          {/* Single-man practice and process */}
          <p>
            This house remains a focused practice: years of drawing, testing,
            adjusting, and removing. From knit densities and wash behaviour to
            print methods learned and then reduced, the rule is simple — do less,
            but mean it. When a request is accepted, the garment is built for one
            person only, numbered, and released without noise. If luxury has a
            place here, it is in time, discretion, and the decision to remain
            rare.
          </p>

          {/* Second image at 50% width */}
          {/* <div className="w-1/2 mx-auto my-6">
            <Image
              src="/story-pic-2.png"
              alt="Valen Masijmo — Process & Practice"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div> */}

          {/* Closing paragraph */}
          <p>
            Today, the intention stays unchanged: create for the few who value
            subtlety over display and accept that the most familiar form can carry
            real gravity when built with care. If you understand this pace, you
            already know how to find us — and we will know when to say yes.
          </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
