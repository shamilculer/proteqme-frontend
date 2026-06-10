"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import HeroOverlays from "@/components/global/HeroOverlays";
import { Button } from "@/components/ui/button";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const trustSignals = [
  { value: "200+", label: "Professionals Trained" },
  { value: "15+", label: "Years Experience" },
  { value: "UK", label: "Based Team" },
];

const Hero = () => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);

  return (
    <section ref={heroRef} className="relative w-full overflow-hidden px-3 md:px-0">
      <div className="hero-home-pattern hero-home-pattern-animated container relative isolate min-h-[min(92vh,680px)] overflow-hidden rounded-[12px] bg-proteq-dark shadow-[0_24px_70px_rgba(17,24,39,0.22)] sm:min-h-[580px] md:min-h-[640px] lg:min-h-[680px]">
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: imageY }}
        >
          <Image
            src="/hero-2-new.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_30%] sm:object-center"
            aria-hidden
          />
        </motion.div>

        <HeroOverlays />

        <ParticleNetwork id="hero-particles" />

        <div
          className="hero-home-content-scrim pointer-events-none absolute -inset-x-4 -inset-y-6 z-[1] rounded-2xl sm:-inset-x-6 lg:-inset-x-8 lg:-inset-y-8"
          aria-hidden
        />

        <motion.div
          className="relative z-20 grid items-center gap-12 px-1 py-14 sm:px-6 sm:py-16 md:py-20 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-14 lg:px-10 lg:py-20 xl:gap-16"
          style={reduceMotion ? undefined : { y: contentY }}
        >
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.21, 1.02, 0.43, 1.01] }}
            className="relative flex flex-col items-start lg:pr-4 xl:pr-8"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 ">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white/90" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
                Advisory · Learning · Systems
              </span>
            </div>

            <h1 className="mb-7 max-w-5xl text-[1.85rem] font-bold leading-[1.18] text-white sm:text-4xl md:text-5xl lg:text-6xl">

                Compliance Expertise.
                Intelligent Learning.
                Systems That Work.
            </h1>

            <p className="mb-9 max-w-lg text-sm! leading-[1.8] text-white/90 sm:text-base md:mb-10 md:text-lg lg:max-w-xl">
              From AML framework design to RegTech implementation — Proteq gives
              regulated organisations the expertise, training, and systems they
              need to operate with confidence.
            </p>

            <div className="flex w-full flex-row items-stretch gap-2.5 sm:w-auto sm:items-center sm:gap-4">
              <Button
                href="/contact"
                glowingDot
                showArrow
                className="h-12 min-w-0 flex-1 px-3 text-xs font-semibold leading-tight shadow-[0_8px_30px_rgba(232,24,90,0.35)] sm:h-13 sm:flex-none sm:px-8 sm:text-base"
              >
                <span className="sm:hidden">Free Consultation</span>
                <span className="hidden sm:inline">Book a Free Consultation</span>
              </Button>
              <Button
                href="#services"
                variant="white"
                showArrow
                className="h-12 min-w-0 flex-1 px-3 text-xs font-semibold leading-tight sm:h-13 sm:flex-none sm:px-8 sm:text-base"
              >
                <span className="sm:hidden">Our Services</span>
                <span className="hidden sm:inline">Explore Our Services</span>
              </Button>
            </div>

            <ul className="mt-8 flex flex-row flex-wrap items-center gap-x-3 gap-y-2 text-[11px] leading-snug text-white/80 sm:gap-x-0 sm:text-sm md:mb-11 md:text-base">
              {trustSignals.map((signal, index) => (
                <li
                  key={signal.label}
                  className={`flex shrink-0 items-center whitespace-nowrap ${
                    index > 0
                      ? "border-l border-white/20 pl-3 sm:pl-8 md:pl-10"
                      : ""
                  }`}
                >
                  <span className="font-semibold text-white">{signal.value}</span>
                  <span className="ml-1">{signal.label}</span>
                </li>
              ))}
            </ul>

          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: reduceMotion ? 0 : 0.12,
              ease: [0.21, 1.02, 0.43, 1.01],
            }}
            className="w-full lg:max-w-[620px] lg:justify-self-end"
          >
            <HeroLeadForm />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
