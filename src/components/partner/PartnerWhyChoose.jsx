"use client";

import Image from "next/image";
import { useReducedMotion } from "motion/react";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Globe,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const points = [
  {
    title: "Global Reach & Visibility",
    description:
      "Tap into our network of financial institutions, regulators, and compliance professionals across 30+ markets.",
    icon: Globe,
  },
  {
    title: "Co-Branded Opportunities",
    description:
      "Deliver joint programmes, advisory engagements, and technology solutions under a trusted, recognised brand.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Expert Community Access",
    description:
      "Collaborate with practitioners, trainers, and technologists at the forefront of compliance and RegTech.",
    icon: Users,
  },
  {
    title: "Structured Support",
    description:
      "From onboarding to go-to-market, hands-on support so every partnership delivers measurable results.",
    icon: BadgeCheck,
  },
];

function WhyCard({ point, index }) {
  const Icon = point.icon;

  return (
    <article className="group relative flex min-h-[260px] h-full flex-col overflow-hidden rounded-[calc(1rem-3px)] bg-[#fbfafd] p-6 transition duration-300 hover:bg-white">
      <div className="absolute right-6 top-6 text-[64px] font-medium leading-none text-proteq-dark/5 transition group-hover:text-primary/10">
        {String(index + 1).padStart(2, "0")}
      </div>

      <div className="relative flex h-full flex-col">
        <span className="flex size-20 items-center justify-center rounded-full border border-zinc-200 bg-white text-proteq-dark shadow-[0_14px_35px_rgba(35,17,67,0.08)] transition group-hover:border-primary/35 group-hover:bg-primary group-hover:text-white">
          <Icon className="size-10" strokeWidth={1.5} />
        </span>

        <div className="mt-auto pt-8">
          <div className="mb-4 h-px w-12 bg-zinc-300 transition group-hover:w-20 group-hover:bg-primary" />
          <h3 className="text-xl leading-tight text-foreground">{point.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            {point.description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function PartnerWhyChoose() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="partner-why-heading"
    >
      <SectionAmbient variant="light" />
      <div className="container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-stretch lg:gap-14">
          <ScrollReveal className="flex flex-col items-start">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                Why Partner With Us
              </span>
            </div>

            <h2
              id="partner-why-heading"
              className="section-heading-accent text-section-heading max-w-xl"
            >
              A Platform Built for Lasting Impact
            </h2>

            <p className="text-body mt-5 max-w-xl text-zinc-600">
              Meaningful collaboration with structured support — not a logo on a
              website, but a partnership that creates real industry value across
              advisory, training, and RegTech.
            </p>

            <div className="relative mt-9 w-full overflow-hidden rounded-2xl bg-proteq-dark shadow-[0_28px_80px_rgba(35,17,67,0.14)]">
              <div className="relative min-h-[400px] sm:min-h-[440px] md:min-h-[520px]">
                <Image
                  src="/who-we-are.webp"
                  alt="Business partnership and professional collaboration"
                  fill
                  sizes="(min-width: 1024px) 42vw, 100vw"
                  className="object-cover"
                />
                <div className="overlay-consultancy-why absolute inset-0" />

                <div className="relative z-10 flex min-h-[400px] flex-col justify-between gap-6 p-5 sm:min-h-[440px] sm:p-7 md:min-h-[520px]">
                  <div className="flex items-start justify-between gap-4 border-t border-white/35 pt-4 text-white">
                    <p className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Partnership Standard
                    </p>
                    <p className="text-right text-xs text-white/70">
                      Advisory / Training / RegTech
                    </p>
                  </div>

                  <div className="consultancy-why-card w-full rounded-xl p-4 sm:max-w-md sm:p-5">
                    <p className="text-lg font-medium leading-snug text-white sm:text-2xl sm:leading-tight">
                      Grow your reach through partnerships that matter — with
                      co-branded programmes and structured go-to-market support.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4 border-t border-white/15 pt-4 sm:mt-5 sm:pt-5">
                      <div>
                        <p className="text-xl font-medium leading-none text-white sm:text-2xl">
                          30+
                        </p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/55 sm:text-xs">
                          Global Markets
                        </p>
                      </div>
                      <div>
                        <p className="text-xl font-medium leading-none text-white sm:text-2xl">
                          360°
                        </p>
                        <p className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-white/55 sm:text-xs">
                          Collaboration Model
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer
            className="grid gap-4 sm:grid-cols-2"
            staggerChildren={0.08}
          >
            {points.map((point, index) => (
              <StaggerItem key={point.title}>
                <div
                  className={cn(
                    "h-full rounded-2xl p-[3px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(232,24,90,0.2)]",
                    reduceMotion
                      ? "border-2 border-primary bg-transparent"
                      : "border-beam-card"
                  )}
                  style={
                    reduceMotion
                      ? undefined
                      : { animationDelay: `${index * 0.35}s` }
                  }
                >
                  <WhyCard point={point} index={index} />
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
