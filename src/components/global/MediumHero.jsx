"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import HeroOverlays from "@/components/global/HeroOverlays";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const defaultButtons = [
  {
    label: "Explore Services",
    href: "/services",
    variant: "white",
    showArrow: true,
  },
  {
    label: "Talk to an Expert",
    href: "/contact",
    variant: "outline",
    showArrow: true,
  },
];

const defaultHighlights = [
  "Compliance advisory",
  "Professional learning",
  "RegTech systems",
];

const MediumHero = ({
  eyebrow = "Service Expertise",
  heading = "Practical Compliance Support for Modern Risk Teams",
  description = "Specialist advisory, learning, and systems support for organisations navigating AML, anti-fraud, and regulatory complexity.",
  bgImage = "/systems.webp",
  imageAlt = "Proteq service background",
  buttons = defaultButtons,
  highlights = defaultHighlights,
  enableParticles = false,
  particleId = "medium-hero-particles",
  animatedPattern = false,
  className,
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
      className={cn(
        "relative w-full overflow-hidden px-2 sm:px-3 lg:px-0",
        className
      )}
    >
      <div
        className={cn(
          "hero-home-pattern container relative isolate min-h-[min(88vh,640px)] overflow-hidden rounded-[12px] bg-secondary-dark !px-0 shadow-[0_24px_70px_rgba(17,24,39,0.18)] sm:min-h-[520px] md:min-h-155",
          animatedPattern && "hero-home-pattern-animated"
        )}
      >
        <motion.div
          className="absolute inset-0"
          style={reduceMotion ? undefined : { y: imageY }}
        >
          <Image
            src={bgImage}
            alt={imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center brightness-[1.04] contrast-[1.04] saturate-[1.02]"
          />
        </motion.div>

        <HeroOverlays />

        {enableParticles ? <ParticleNetwork id={particleId} /> : null}

        <div
          className="hero-home-content-scrim pointer-events-none absolute -inset-x-4 -inset-y-6 z-[1] rounded-2xl sm:-inset-x-6 lg:-inset-x-8 lg:-inset-y-8"
          aria-hidden
        />

        <motion.div
          className="relative z-20 flex min-h-[min(88vh,640px)] w-full flex-col items-start justify-end px-4 py-8 sm:min-h-[520px] sm:px-8 sm:py-12 md:min-h-155 md:justify-center md:px-10 md:py-16"
          style={reduceMotion ? undefined : { y: contentY }}
        >
          <motion.div
            className="w-full md:max-w-[58%] lg:max-w-[62%]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 1.02, 0.43, 1.01] }}
          >
            {eyebrow ? (
              <div className="mb-2 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm md:mb-4 md:px-4">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 sm:text-xs">
                  {eyebrow}
                </span>
              </div>
            ) : null}

            <h1 className="mb-2 max-w-none text-[1.75rem] font-bold leading-[1.18] tracking-tight text-white sm:text-[2.25rem] md:mb-4 md:max-w-4xl md:text-5xl md:leading-[1.12] lg:text-[62px]">
              {heading}
            </h1>

            {description ? (
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/95 sm:mb-8 sm:text-base md:text-lg">
                {description}
              </p>
            ) : null}

            {buttons?.length ? (
              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5 md:gap-4">
                {buttons.map((button) => (
                  <Button
                    key={button.label}
                    href={button.href}
                    variant={button.variant || "white"}
                    glowingDot={button.glowingDot}
                    showArrow={button.showArrow}
                    arrowDirection={button.arrowDirection}
                    icon={button.icon}
                    iconPosition={button.iconPosition}
                    target={button.target}
                    rel={button.rel}
                    className={cn("w-full sm:w-auto", button.className)}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </motion.div>

          {highlights?.length ? (
            <motion.div
              className="mt-5 flex w-full flex-wrap gap-2 sm:mt-6 md:max-w-[90%] md:gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.21, 1.02, 0.43, 1.01],
              }}
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-black/15 px-2.5 py-1.5 text-[11px] font-medium text-white shadow-xs backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-xs md:text-sm"
                >
                  <CheckCircle2 className="size-3 shrink-0 text-primary sm:size-3.5" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </motion.div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default MediumHero;
