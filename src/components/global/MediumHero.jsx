"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import ActionButton from "@/components/ui/ActionButton";
import { cn } from "@/lib/utils"
import { heroHeadingClass } from "@/lib/heroTypography";
import SectionDescription from "@/components/ui/SectionDescription";
import {
  pageEnterHidden,
  pageEnterHiddenX,
  pageEnterSpring,
  pageEnterVisible,
  popHidden,
} from "@/lib/motion-presets";
import { useSlideMetrics } from "@/lib/use-slide-metrics";

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

const highlightPillClass =
  "flex max-w-full items-center gap-2 rounded-full border border-zinc-200 bg-white px-2.5 py-1.5 text-[11px] font-medium text-zinc-700 shadow-xs sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-xs md:text-sm";

function HeroHighlightPill({ highlight }) {
  const text = typeof highlight === "string" ? highlight : highlight?.text;
  const href = typeof highlight === "string" ? null : highlight?.href;

  if (!text) return null;

  const content = (
    <>
      <CheckCircle2 className="size-3 shrink-0 text-primary sm:size-3.5" />
      <span className="leading-snug">{text}</span>
    </>
  );

  if (href) {
    const isExternal = /^https?:\/\//i.test(href);

    return (
      <Link
        href={href}
        className={cn(
          highlightPillClass,
          "transition hover:border-primary/40 hover:bg-zinc-50 hover:shadow-sm",
        )}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </Link>
    );
  }

  return <div className={highlightPillClass}>{content}</div>;
}

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
  const { x: slideX } = useSlideMetrics();
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

      <div className="container relative z-10 grid items-center gap-8 py-10 sm:py-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:py-14 xl:gap-12">
        <motion.div
          className="flex flex-col items-start"
          initial={reduceMotion ? false : pageEnterHidden(slideX)}
          animate={pageEnterVisible}
          transition={pageEnterSpring(0.08)}
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

          <h1 className={cn("mb-4 md:mb-5", heroHeadingClass)}>
            {heading}
          </h1>

          {description ? (
            <SectionDescription content={description} className="mb-7 max-w-xl text-sm leading-relaxed text-zinc-600 sm:mb-8 sm:text-sm md:text-base" />
          ) : null}

          {mappedButtons?.length ? (
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-2.5 md:gap-4">
              {mappedButtons.map((button, index) => (
                <ActionButton
                  key={listKey(button.label ?? button.href ?? button.popupSlug, index, "button")}
                  {...button}
                  className={cn("w-full sm:w-auto", button.className)}
                />
              ))}
            </div>
          ) : null}

          {highlights?.length ? (
            <motion.div
              className="mt-7 flex w-full flex-wrap gap-2 sm:mt-8 md:gap-3"
              initial={reduceMotion ? false : popHidden(-slideX * 0.55)}
              animate={pageEnterVisible}
              transition={pageEnterSpring(0.42)}
            >
              {highlights.map((highlight, index) => (
                <HeroHighlightPill
                  key={listKey(
                    typeof highlight === "string" ? highlight : highlight?.text,
                    index,
                  )}
                  highlight={highlight}
                />
              ))}
            </motion.div>
          ) : null}
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : pageEnterHiddenX(slideX)}
          animate={pageEnterVisible}
          transition={pageEnterSpring(reduceMotion ? 0 : 0.22)}
          className="relative w-full"
        >
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200/70 shadow-[0_24px_70px_rgba(13,13,20,0.1)] sm:aspect-[16/10] lg:aspect-[4/3]">
            <motion.div
              className="absolute -inset-y-[10%] inset-x-0"
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
