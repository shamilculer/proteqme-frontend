"use client";

import Image from "next/image";
import {
  Award,
  BookOpenCheck,
  Globe2,
  LayoutGrid,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const reasons = [
  {
    text: "Holistic learning solutions tailored to your industry",
    icon: Globe2,
    iconBg: "bg-cyan-100",
    iconColor: "text-cyan-700",
  },
  {
    text: "Standardised and customised programmes under one roof",
    icon: LayoutGrid,
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
  },
  {
    text: "Stimulating, challenging and interactive activities",
    icon: Sparkles,
    iconBg: "bg-amber-100",
    iconColor: "text-amber-700",
  },
  {
    text: "Leading-edge content from industry experts",
    icon: BookOpenCheck,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
  },
  {
    text: "Practical solutions that drive real performance",
    icon: TrendingUp,
    iconBg: "bg-orange-100",
    iconColor: "text-orange-700",
  },
  {
    text: "Proven impact across diverse industries",
    icon: Award,
    iconBg: "bg-[#f3e8f0]",
    iconColor: "text-[#E25C8F]",
  },
];

const LearningWhyChoose = () => {
  return (
    <section className="relative w-full overflow-hidden bg-linear-to-br from-secondary via-primary/80 to-secondary-dark from-20% to-80% py-18 text-white md:py-24">
      <Image
        src="/learning-3.webp"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-10"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[#231143]/88" />

      <div className="container relative">
        <ScrollReveal className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
              Why PROTEQme
            </span>
          </div>

          <h2 className="text-3xl leading-tight md:text-[44px]">
            The trusted partner for{" "}
            <span className="text-[#E25C8F]">learning excellence</span>
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            Interactive activities combined with leading-edge content, supported
            by practical learning solutions.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2"
          staggerChildren={0.05}
        >
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <StaggerItem key={reason.text}>
                <article className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white px-5 py-4 transition hover:border-white/25 md:px-6 md:py-5">
                  <span
                    className={`flex size-10 shrink-0 items-center justify-center rounded-xl ${reason.iconBg} ${reason.iconColor}`}
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <p className="text-sm font-medium leading-snug text-[#061525] md:text-[15px]">
                    {reason.text}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default LearningWhyChoose;
