"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { Button } from "../ui/button";
import { ScrollReveal, StaggerContainer, StaggerItem } from "../ui/scroll-reveal";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const steps = [
  {
    number: "01",
    title: "Book Demo",
    description:
      "Schedule a free consultation to discuss your compliance priorities, regulatory exposure, and immediate operational context.",
    image: "/partner.webp",
    imageAlt: "Booking a compliance consultation",
  },
  {
    number: "02",
    title: "Assessment",
    description:
      "We review your frameworks, controls, and gaps — then define a prioritised, actionable roadmap your team can execute.",
    image: "/assesment.webp",
    imageAlt: "Compliance assessment and gap analysis",
  },
  {
    number: "03",
    title: "Implementation",
    description:
      "Deliver advisory, training, and systems support with hands-on guidance through rollout, testing, and regulatory readiness.",
    image: "/implementation.webp",
    imageAlt: "Compliance programme implementation",
  },
];

const HowItWorks = () => {
  return (
    <section
      className="section-light-white w-full border-t border-zinc-200/70 py-20 md:py-28"
      aria-label="How it works process"
    >
      <ParticleNetwork variant="light" id="how-it-works-particles" />
      <div className="container relative z-10">
        <div className="mb-8 flex flex-col gap-6 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Engagement Process
            </p>
            <h2 className="text-section-heading text-foreground">How It Works</h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              A clear, structured path from first conversation to delivered
              outcomes — scoped to your regulatory context, risk profile, and
              operational priorities.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="overflow-hidden rounded-xl border border-zinc-200/80 bg-white shadow-[0_24px_80px_rgba(13,13,20,0.06)]"
          staggerChildren={0.1}
          role="list"
        >
          <div className="grid divide-y divide-zinc-200/80 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {steps.map((step, index) => (
              <StaggerItem key={step.number} role="listitem">
                <ProcessStep step={step} isLast={index === steps.length - 1} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>

        <ScrollReveal className="mt-14 flex flex-col items-center gap-3 sm:flex-row sm:justify-center md:mt-16">
          <Button
            href="/contact"
            glowingDot
            showArrow
            className="h-14 w-full px-8 text-base font-semibold sm:w-auto"
          >
            Book a Free Consultation
          </Button>
          <Button
            href="#services"
            variant="white"
            showArrow
            className="h-14 w-full border border-zinc-300 px-8 text-base font-semibold sm:w-auto"
          >
            View Our Services
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

function ProcessStep({ step, isLast }) {
  return (
    <article className="group relative flex h-full flex-col">
      <div className="relative aspect-[5/4] overflow-hidden sm:aspect-[16/11] lg:aspect-[4/3]">
        <Image
          src={step.image}
          alt={step.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-linear-to-t from-proteq-dark/55 via-proteq-dark/10 to-transparent" />

        <span
          className="font-serif-quote absolute bottom-5 left-6 text-5xl leading-none text-white/25 md:text-6xl"
          aria-hidden
        >
          {step.number}
        </span>

        {!isLast && (
          <span
            className="pointer-events-none absolute -right-px top-1/2 z-10 hidden h-10 w-px -translate-y-1/2 bg-white/30 lg:block"
            aria-hidden
          />
        )}
      </div>

      <div className="flex flex-1 flex-col px-7 py-8 md:px-8 md:py-9">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-xs font-semibold tabular-nums tracking-[0.18em] text-zinc-400">
            {step.number}
          </span>
          <span className="h-px flex-1 bg-zinc-200" />
        </div>

        <h3 className="text-3xl mb-3 text-foreground">{step.title}</h3>
        <p className="text-body text-zinc-600">{step.description}</p>
      </div>
    </article>
  );
}

export default HowItWorks;
