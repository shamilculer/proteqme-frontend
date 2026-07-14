"use client";

import { listKey } from "@/lib/listKey";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

import ActionButton from "@/components/ui/ActionButton";
import { cn } from "@/lib/utils";
import { heroHeadingClass } from "@/lib/heroTypography";
import SectionDescription from "@/components/ui/SectionDescription";
import {
  pageEnterSpring,
  pageEnterVisible,
  popHidden,
} from "@/lib/motion-presets";
import { useSlideMetrics } from "@/lib/use-slide-metrics";

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

const headingClass = cn(
  heroHeadingClass,
  "text-zinc-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.55)]",
);

const MediumHero = ({
  eyebrow = "Service Expertise",
  heading = "Practical Compliance Support for Modern Risk Teams",
  description = "Specialist advisory, learning, and systems support for organisations navigating AML, anti-fraud, and regulatory complexity.",
  bgImage = "/systems.webp",
  mobileImage,
  imageAlt = "Proteq service background",
  buttons = defaultButtons,
  // Kept for prop compatibility with existing pages / CMS
  highlights: _highlights,
  enableParticles: _enableParticles,
  particleId: _particleId,
  animatedPattern: _animatedPattern,
  className,
}) => {
  const reduceMotion = useReducedMotion();
  const { x: slideX } = useSlideMetrics();
  const mappedButtons = buttons?.map(mapButtonForLightHero);
  const mobileSrc = mobileImage || bgImage;

  const childReveal = {
    hidden: popHidden(-slideX),
    visible: (delay = 0) => ({
      ...pageEnterVisible,
      transition: pageEnterSpring(delay),
    }),
  };

  return (
    <section
      className={cn(
        "relative isolate w-full overflow-hidden bg-zinc-100",
        className,
      )}
      aria-label={heading}
    >
      <div className="relative isolate min-h-[min(calc(100svh-5.5rem),720px)] w-full overflow-hidden sm:min-h-[min(calc(100svh-5.5rem),640px)] lg:min-h-[min(calc(100svh-5.5rem),680px)]">
        <div className="absolute inset-0">
          <Image
            src={mobileSrc}
            alt={imageAlt || heading}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center lg:hidden"
          />
          <Image
            src={bgImage}
            alt={imageAlt || heading}
            fill
            priority
            sizes="100vw"
            className="hidden object-cover object-[62%_center] lg:block"
          />
        </div>

        <div className="container relative z-10 flex min-h-[inherit] items-start pt-8 pb-16 sm:pt-12 sm:pb-20 lg:items-center lg:py-16 lg:pb-20">
          <div className="relative z-10 flex w-full max-w-xl flex-col items-start lg:max-w-2xl">
            {eyebrow ? (
              <motion.div
                custom={0.06}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? false : "visible"}
                variants={childReveal}
                className="mb-5 inline-flex max-w-full items-center gap-2.5 rounded-full border border-zinc-200/90 bg-white/90 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-700 sm:text-xs">
                  {eyebrow}
                </span>
              </motion.div>
            ) : null}

            <motion.div
              custom={0.12}
              initial={reduceMotion ? false : "hidden"}
              animate={reduceMotion ? false : "visible"}
              variants={childReveal}
            >
              <h1 className={headingClass}>{heading}</h1>
            </motion.div>

            {description ? (
              <motion.div
                custom={0.2}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? false : "visible"}
                variants={childReveal}
                className="mt-5 max-w-lg sm:mt-6"
              >
                <SectionDescription
                  content={description}
                  className="text-sm leading-relaxed text-zinc-700 sm:text-base md:text-[1.05rem] md:leading-relaxed"
                />
              </motion.div>
            ) : null}

            {mappedButtons?.length ? (
              <motion.div
                custom={0.28}
                initial={reduceMotion ? false : "hidden"}
                animate={reduceMotion ? false : "visible"}
                variants={childReveal}
                className="mt-6 flex w-full flex-col gap-3 sm:mt-8 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5 md:gap-4"
              >
                {mappedButtons.map((button, index) => (
                  <ActionButton
                    key={listKey(
                      button.label ?? button.href ?? button.popupSlug,
                      index,
                      "button",
                    )}
                    {...button}
                    className={cn(
                      "w-full shadow-[0_8px_30px_rgba(232,24,90,0.28)] sm:w-auto",
                      button.variant !== "default" && "shadow-none",
                      button.className,
                    )}
                  />
                ))}
              </motion.div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediumHero;
