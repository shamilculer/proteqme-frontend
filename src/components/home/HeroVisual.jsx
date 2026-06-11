"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { pageEnterTransition, revealEase } from "@/lib/motion-presets";

const pillars = [
  {
    tag: "01",
    title: "Advisory",
    description: "AML frameworks & regulatory readiness",
    href: "/consultancy-advisory",
    icon: ShieldCheck,
    className: "top-[6%] right-0 sm:right-1",
    delay: 0.28,
  },
  {
    tag: "02",
    title: "Learning",
    description: "Webinars, courses & certification prep",
    href: "/learning",
    icon: GraduationCap,
    className: "bottom-[24%] left-0 sm:left-1",
    delay: 0.42,
  },
  {
    tag: "03",
    title: "Systems",
    description: "RegTech evaluation & implementation",
    href: "/systems",
    icon: Layers,
    className: "bottom-[4%] right-0 sm:right-2",
    delay: 0.56,
  },
];

function PillarCard({ pillar, reduceMotion }) {
  const Icon = pillar.icon;

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 20, scale: 0.97, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      transition={{
        duration: 0.75,
        delay: pillar.delay,
        ease: revealEase,
      }}
      className={cn(
        "absolute z-20 hidden max-w-[188px] lg:block lg:max-w-[200px]",
        pillar.className
      )}
    >
      <Link
        href={pillar.href}
        className="group block rounded-xl border border-zinc-200/90 bg-white/95 p-3 shadow-[0_12px_32px_rgba(13,13,20,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_16px_40px_rgba(232,24,90,0.1)]"
      >
        <div className="mb-2.5 flex items-center justify-between gap-2">
          <div className="icon-stat-circle size-9">
            <Icon className="size-4 text-primary" strokeWidth={1.75} />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
            {pillar.tag}
          </span>
        </div>
        <p className="text-sm font-semibold text-foreground transition-colors group-hover:text-primary">
          {pillar.title}
        </p>
        <p className="mt-0.5 text-[11px] leading-snug text-zinc-500 sm:text-xs">
          {pillar.description}
        </p>
        <ArrowUpRight className="mt-2 size-3.5 text-zinc-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
      </Link>
    </motion.div>
  );
}

export default function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, x: 28, filter: "blur(8px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={pageEnterTransition(0.12)}
      className="relative mx-auto w-full max-w-xl lg:max-w-none lg:justify-self-end"
    >
      <div className="relative w-full h-[280px] sm:h-[320px] lg:h-[550px]">
        <div
          className={cn(
            "absolute inset-0 rounded-2xl p-[1.5px]",
            reduceMotion
              ? "border-2 border-primary/30"
              : "border-beam-card-light"
          )}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[calc(1rem-1.5px)] bg-zinc-100">
            <Image
              src="/hero-2-new.webp"
              alt="Compliance professionals collaborating"
              fill
              priority
              sizes="(min-width: 1024px) 44vw, 100vw"
              className="object-cover object-center"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-linear-to-t from-white/30 via-transparent to-white/10"
              aria-hidden
            />
          </div>
        </div>

      </div>

      <div className="mt-4 grid grid-cols-3 gap-2 lg:hidden">
        {pillars.map((pillar) => {
          const Icon = pillar.icon;
          return (
            <Link
              key={pillar.href}
              href={pillar.href}
              className="flex flex-col items-center rounded-xl border border-zinc-200/90 bg-white p-3 text-center shadow-xs transition-colors hover:border-primary/25"
            >
              <div className="icon-stat-circle mb-2 size-9">
                <Icon className="size-4 text-primary" strokeWidth={1.75} />
              </div>
              <span className="text-xs font-semibold text-foreground">
                {pillar.title}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.div>
  );
}
