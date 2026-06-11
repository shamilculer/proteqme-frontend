"use client";

import dynamic from "next/dynamic";
import { motion, useReducedMotion } from "motion/react";

import { cn } from "@/lib/utils";
import {
  pageEnterHidden,
  pageEnterTransition,
  pageEnterVisible,
} from "@/lib/motion-presets";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const PageTitle = ({
  title,
  eyebrow,
  enableParticles = true,
  particleId = "page-title-particles",
  // Kept for prop compatibility; the light layout no longer uses a background image
  bgImage,
  animatedPattern,
  className,
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className={cn(
        "section-light-white relative isolate w-full overflow-hidden border-b border-zinc-200/70",
        className
      )}
    >
      {enableParticles ? (
        <ParticleNetwork variant="light" id={particleId} />
      ) : null}

      <div className="container relative z-10 flex min-h-[180px] flex-col items-center justify-center py-14 sm:min-h-[220px] md:py-20">
        {eyebrow ? (
          <motion.div
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-zinc-50 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
            initial={reduceMotion ? false : { ...pageEnterHidden, y: 28 }}
            animate={pageEnterVisible}
            transition={pageEnterTransition(0.2)}
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-zinc-600 sm:text-xs">
              {eyebrow}
            </span>
          </motion.div>
        ) : null}

        <motion.h1
          className="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl"
          initial={reduceMotion ? false : pageEnterHidden}
          animate={pageEnterVisible}
          transition={pageEnterTransition(0.4)}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
};

export default PageTitle;
