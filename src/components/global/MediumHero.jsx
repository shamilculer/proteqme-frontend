"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { pageEnterTransition } from "@/lib/motion-presets";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const defaultButtons = [
  {
    label: "Explore Services",
    href: "/services",
    variant: "default",
    showArrow: true,
  },
  {
    label: "Talk to an Expert",
    href: "/contact",
    variant: "white",
    showArrow: true,
  },
];

const defaultHighlights = [
  "Compliance advisory",
  "Professional learning",
  "RegTech systems",
];

/* Variants written for the old dark hero are remapped for the light layout */
const mapButtonForLightHero = (button) => {
  const variant = button.variant || "default";
  if (variant === "white" || variant === "outline") {
    return {
      ...button,
      variant: "white",
      className: cn("border border-zinc-300", button.className),
    };
  }
  return { ...button, variant };
};

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
  // Kept for prop compatibility with existing pages; no longer used in the light layout
  animatedPattern = false,
  className,
}) => {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const mappedButtons = buttons?.map(mapButtonForLightHero);

  return (
    <section
      ref={heroRef}
      className={cn(
        "section-light-white relative isolate w-full overflow-hidden border-b border-zinc-200/70",
        className
      )}
    >
      {enableParticles ? (
        <ParticleNetwork variant="light" id={particleId} />
      ) : null}

      <div className="container relative z-10 grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-20 xl:gap-16">
        <motion.div
          className="flex flex-col items-start"
          initial={reduceMotion ? false : { opacity: 0, y: 32, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={pageEnterTransition(0.05)}
        >
          {eyebrow ? (
            <div className="mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-zinc-200/80 bg-zinc-50 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)] md:mb-6">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 sm:text-xs">
                {eyebrow}
              </span>
            </div>
          ) : null}

          <h1 className="mb-4 max-w-none text-[1.75rem] font-bold leading-[1.18] tracking-tight text-foreground sm:text-[2.25rem] md:mb-5 md:text-5xl md:leading-[1.12] lg:text-[54px]">
            {heading}
          </h1>

          {description ? (
            <p className="mb-7 max-w-xl text-sm leading-relaxed text-zinc-600 sm:mb-8 sm:text-base md:text-lg">
              {description}
            </p>
          ) : null}

          {mappedButtons?.length ? (
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5 md:gap-4">
              {mappedButtons.map((button) => (
                <Button
                  key={button.label}
                  href={button.href}
                  variant={button.variant}
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

          {highlights?.length ? (
            <motion.div
              className="mt-7 flex w-full flex-wrap gap-2 sm:mt-8 md:gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 20, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={pageEnterTransition(0.35)}
            >
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-zinc-700 shadow-xs sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-xs md:text-sm"
                >
                  <CheckCircle2 className="size-3 shrink-0 text-primary sm:size-3.5" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </motion.div>
          ) : null}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 32, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={pageEnterTransition(reduceMotion ? 0 : 0.2)}
          className="relative w-full"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200/70 shadow-[0_24px_70px_rgba(13,13,20,0.1)] sm:aspect-[16/10] lg:aspect-[4/3]">
            <motion.div
              className="absolute -inset-y-[6%] inset-x-0"
              style={reduceMotion ? undefined : { y: imageY }}
            >
              <Image
                src={bgImage}
                alt={imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediumHero;
