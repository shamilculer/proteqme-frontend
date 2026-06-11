"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import HeroLeadPopup from "@/components/forms/HeroLeadPopup";
import HeroVisual from "@/components/home/HeroVisual";
import { Button } from "@/components/ui/button";
import {
  pageEnterHidden,
  pageEnterTransition,
  pageEnterVisible,
} from "@/lib/motion-presets";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const trustSignals = [
  { value: "200+", label: "Professionals Trained" },
  { value: "15+", label: "Years Experience" },
  { value: "40+", label: "Institutions Served" },
];

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const [leadPopupOpen, setLeadPopupOpen] = useState(false);
  const manualOpenRef = useRef(false);

  const openLeadPopup = () => {
    manualOpenRef.current = true;
    setLeadPopupOpen(true);
  };

  return (
    <section className="section-light-white relative isolate w-full overflow-hidden border-b border-zinc-200/70">
      <ParticleNetwork variant="light" id="hero-particles" />

      <HeroLeadPopup
        open={leadPopupOpen}
        onOpenChange={setLeadPopupOpen}
        manualOpenRef={manualOpenRef}
      />

      <div className="container relative z-10 grid items-center gap-10 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 lg:py-16">
        <motion.div
          initial={reduceMotion ? false : pageEnterHidden}
          animate={pageEnterVisible}
          transition={pageEnterTransition(0.15)}
          className="relative flex flex-col items-start lg:pr-4"
        >
          <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-zinc-50 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600 sm:text-xs">
              Advisory · Learning · Systems
            </span>
          </div>

          <h1 className="mb-7 max-w-5xl text-[1.85rem] font-bold leading-[1.18] tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl">
            Compliance Expertise. Intelligent Learning. Systems That Work.
          </h1>

          <p className="mb-9 max-w-lg text-sm! leading-[1.8] text-zinc-600 sm:text-base md:mb-10 md:text-lg lg:max-w-xl">
            From AML framework design to RegTech implementation — Proteq gives
            regulated organisations the expertise, training, and systems they
            need to operate with confidence.
          </p>

          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
            <Button
              type="button"
              onClick={openLeadPopup}
              glowingDot
              showArrow
              className="h-13 w-full px-8 text-base font-semibold shadow-[0_8px_30px_rgba(232,24,90,0.25)] sm:w-auto"
            >
              Book a Free Consultation
            </Button>
            <Button
              href="#services"
              variant="white"
              showArrow
              className="hidden h-13 border border-zinc-300 px-8 text-base font-semibold sm:inline-flex sm:w-auto"
            >
              Explore Our Services
            </Button>
          </div>

          <ul className="mt-8 flex flex-row flex-wrap items-center gap-x-3 gap-y-2 text-[11px] leading-snug text-zinc-600 sm:gap-x-0 sm:text-sm md:text-base">
            {trustSignals.map((signal, index) => (
              <li
                key={signal.label}
                className={`flex shrink-0 items-center whitespace-nowrap ${
                  index > 0
                    ? "border-l border-zinc-300 pl-3 sm:pl-8 md:pl-10"
                    : ""
                }`}
              >
                <span className="font-semibold text-foreground">
                  {signal.value}
                </span>
                <span className="ml-1">{signal.label}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
};

export default Hero;
