"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import HeroLeadForm from "@/components/forms/HeroLeadForm";
import HeroOverlays from "@/components/global/HeroOverlays";
import { Button } from "@/components/ui/button";

const trustSignals = [
  { value: "200+", label: "Professionals Trained" },
  { value: "15+", label: "Years Experience" },
  { value: "UK", label: "Based Team" },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="hero-home-pattern container relative min-h-[580px] overflow-hidden rounded-[12px] bg-proteq-dark shadow-[0_24px_70px_rgba(17,24,39,0.22)] md:min-h-[640px] lg:min-h-[680px]">
        <Image
          src="/hero-2-new.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] sm:object-center"
          aria-hidden
        />

        <HeroOverlays />

        <div
          className="hero-home-content-scrim pointer-events-none absolute -inset-x-4 -inset-y-6 -z-10 rounded-2xl sm:-inset-x-6 lg:-inset-x-8 lg:-inset-y-8"
          aria-hidden
        />

        <div className="relative z-10 grid items-center gap-12 px-5 py-14 sm:px-6 sm:py-16 md:py-20 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)] lg:gap-14 lg:px-10 lg:py-20 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 1.02, 0.43, 1.01] }}
            className="relative flex flex-col items-start lg:pr-4 xl:pr-8"
          >
            <div className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-black/35 px-3.5 py-2 md:mb-7 md:px-4">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/60 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-white/90" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white sm:text-xs">
                Advisory · Learning · Systems
              </span>
            </div>

            <h1 className="mb-7 max-w-5xl font-bold leading-[1.18] text-white ">
              Compliance Expertise.
              Intelligent Learning.
              Systems That Work.
            </h1>

            <p className="mb-9 max-w-lg text-sm! leading-[1.8] text-white/90 sm:text-base md:mb-10 md:text-lg lg:max-w-xl">
              From AML framework design to RegTech implementation — Proteq gives
              regulated organisations the expertise, training, and systems they
              need to operate with confidence.
            </p>

            <ul className="mb-10 flex flex-col gap-3 text-sm leading-relaxed text-white/80 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-0 sm:gap-y-2 md:mb-11 md:text-base">
              {trustSignals.map((signal, index) => (
                <li
                  key={signal.label}
                  className={`flex items-center ${
                    index > 0
                      ? "sm:border-l sm:border-white/20 sm:pl-8 md:pl-10"
                      : ""
                  }`}
                >
                  <span className="font-semibold text-white">{signal.value}</span>
                  <span className="ml-1.5">{signal.label}</span>
                </li>
              ))}
            </ul>

            <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center">
              <Button
                href="/contact"
                glowingDot
                showArrow
                className="h-13 w-full px-8 text-base font-semibold shadow-[0_8px_30px_rgba(232,24,90,0.35)] sm:w-auto"
              >
                Book a Free Consultation
              </Button>
              <Button
                href="#services"
                variant="white"
                showArrow
                className="h-13 w-full px-8 text-base font-semibold sm:w-auto"
              >
                Explore Our Services
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.21, 1.02, 0.43, 1.01],
            }}
            className="w-full lg:max-w-[520px] lg:justify-self-end"
          >
            <HeroLeadForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
