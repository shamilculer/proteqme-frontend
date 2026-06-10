"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import HeroOverlays from "@/components/global/HeroOverlays";
import { cn } from "@/lib/utils";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const PageTitle = ({
  title,
  bgImage = "/hero-bg.webp",
  enableParticles = true,
  particleId = "page-title-particles",
  animatedPattern = true,
}) => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "6%"]);

  return (
    <section
      ref={heroRef}
      className="relative w-full overflow-hidden px-2 sm:px-3 lg:px-0"
    >
      <div
        className={cn(
          "hero-home-pattern container relative isolate min-h-[220px] overflow-hidden rounded-[12px] bg-proteq-dark !px-0 shadow-[0_24px_70px_rgba(17,24,39,0.18)] sm:min-h-[260px] md:min-h-[320px]",
          animatedPattern && "hero-home-pattern-animated"
        )}
      >
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: imageY }}
        >
          <Image
            src={bgImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            aria-hidden
          />
        </motion.div>

        <HeroOverlays />

        {enableParticles ? <ParticleNetwork id={particleId} /> : null}

        <div
          className="hero-home-content-scrim pointer-events-none absolute -inset-x-4 -inset-y-6 z-[1] rounded-2xl sm:-inset-x-6 lg:-inset-x-8 lg:-inset-y-8"
          aria-hidden
        />

        <motion.div
          className="relative z-20 flex min-h-[220px] items-center justify-center px-6 py-12 sm:min-h-[260px] sm:px-10 md:min-h-[320px] md:py-16"
          style={reduceMotion ? undefined : { y: contentY }}
        >
          <motion.h1
            className="text-center text-3xl font-bold text-white sm:text-4xl md:text-5xl lg:text-6xl"
            initial={reduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 1.02, 0.43, 1.01] }}
          >
            {title}
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default PageTitle;
