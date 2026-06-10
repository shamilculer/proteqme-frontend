"use client";

import Image from "next/image";
import {
  BookOpen,
  ClipboardCheck,
  GraduationCap,
  Layers,
  MonitorPlay,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionAmbient from "@/components/ui/SectionAmbient";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const learningJourney = [
  {
    step: "01",
    title: "Diagnose the gap",
    description:
      "We map your regulatory context, team roles, and skill priorities before recommending a learning path.",
    icon: ClipboardCheck,
  },
  {
    step: "02",
    title: "Learn with practitioners",
    description:
      "Sessions led by compliance professionals—grounded in real cases, not abstract theory.",
    icon: MonitorPlay,
  },
  {
    step: "03",
    title: "Apply with confidence",
    description:
      "Workplace-ready frameworks, materials, and follow-through so training sticks after the session ends.",
    icon: BookOpen,
  },
];

const learningFormats = [
  { label: "Expert-Led Webinars", icon: MonitorPlay },
  { label: "CAFS Preparation", icon: GraduationCap },
  { label: "In-House Programmes", icon: Users },
  { label: "Certification Tracks", icon: Layers },
];

const LearningIntro = () => {
  return (
    <section className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28">
      <SectionAmbient variant="light" />
      <div className="pointer-events-none absolute -right-24 top-20 hidden text-[180px] font-semibold leading-none tracking-tighter text-proteq-dark/[0.03] lg:block">
        LEARN
      </div>

      <div className="container relative z-10">
        <ScrollReveal className="mb-12 max-w-3xl md:mb-16" yOffset={20}>
          <p className="text-lg font-medium leading-relaxed text-zinc-600 md:text-xl md:leading-relaxed">
            Training that turns regulatory knowledge into{" "}
            <span className="text-proteq-dark">day-to-day capability</span>—for
            compliance teams, risk professionals, and leaders who need more than
            slides on a screen.
          </p>
        </ScrollReveal>

        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 xl:gap-20">
          <ScrollReveal
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
            xOffset={-16}
            yOffset={0}
            scale={0.98}
            duration={0.75}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-proteq-dark shadow-[0_28px_80px_rgba(13,13,20,0.12)] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[800px]">
              <Image
                src="/learning-bg.webp"
                alt="Professional compliance training session"
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-t from-proteq-dark/90 via-proteq-dark/25 to-proteq-dark/10" />

              <div className="absolute inset-x-6 top-6 flex items-center justify-between border-t border-white/30 pt-5 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/75">
                  Live & On-Demand
                </span>
                <span className="text-xs text-white/50">PROTEQme Learning</span>
              </div>

              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div className="consultancy-why-card rounded-2xl p-5">
                  <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    200+
                  </p>
                  <p className="mt-1 max-w-[10rem] text-sm leading-snug text-white/70">
                    Professionals trained across compliance disciplines
                  </p>
                </div>

                <div className="hidden md:block relative h-28 w-40 shrink-0 overflow-hidden rounded-xl border-2 border-white/25 shadow-[0_16px_40px_rgba(0,0,0,0.25)] sm:h-32 sm:w-44">
                  <Image
                    src="/learning-4.webp"
                    alt="Learners in a compliance workshop"
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-1/2 hidden h-24 w-1 -translate-y-1/2 rounded-full bg-primary lg:block" />
          </ScrollReveal>

          <StaggerContainer
            className="flex flex-col"
            staggerChildren={0.07}
          >
            <StaggerItem>
              <div className="mb-2.5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  How We Teach
                </span>
              </div>
            </StaggerItem>

            <StaggerItem>
              <h2 className="section-heading-accent text-section-heading max-w-xl">
                Learning designed for regulated environments
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                From AML fundamentals to certification preparation, our programmes
                combine structured curricula with practitioner insight—so your team
                leaves every session ready to act, not just informed.
              </p>
            </StaggerItem>

            <div className="relative mt-5 space-y-0 px-3 md:px-0">
              <div className="absolute bottom-8 left-[1.65rem] top-8 hidden w-px bg-zinc-200 md:block" />

              {learningJourney.map((item) => {
                const Icon = item.icon;

                return (
                  <StaggerItem
                    key={item.step}
                    className="group relative grid gap-4 border-b border-zinc-150 py-6 last:border-b-0 md:grid-cols-[3.25rem_1fr] md:items-start md:gap-5"
                  >
                    <div className="icon-stat-circle relative z-10 size-13 transition duration-300 group-hover:border-primary/40 group-hover:bg-proteq-dark group-hover:text-white">
                      <Icon className="size-5" />
                    </div>

                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        Phase {item.step}
                      </span>
                      <h3 className="mt-1 text-lg font-semibold text-[#061525]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                        {item.description}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </div>

            <StaggerItem className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href="#training-programmes" showArrow>
                Browse Courses
              </Button>
              <Button href="#learning-webinars" variant="secondary" showArrow>
                View Webinars
              </Button>
            </StaggerItem>
          </StaggerContainer>
        </div>

        <StaggerContainer
          className="mt-14 grid grid-cols-2 gap-3 md:mt-18 md:grid-cols-4 md:gap-4"
          staggerChildren={0.06}
        >
          {learningFormats.map(({ label, icon: Icon }) => (
            <StaggerItem key={label}>
              <div className="flex h-full items-center gap-3 rounded-2xl border border-zinc-200/90 bg-white px-4 py-4 transition duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_14px_40px_rgba(13,13,20,0.08)]">
                <div className="icon-stat-circle size-10 shrink-0">
                  <Icon className="size-4 text-primary" strokeWidth={1.75} />
                </div>
                <span className="text-sm font-medium leading-snug text-foreground">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default LearningIntro;