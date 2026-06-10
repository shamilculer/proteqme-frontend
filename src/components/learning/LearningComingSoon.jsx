"use client";

import { Bell, Clock, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const upcomingCourses = [
  {
    title: "Advanced SAR Writing Masterclass",
    duration: "4 hours",
    format: "Live webinar",
  },
  {
    title: "VARA Licensing Readiness Programme",
    duration: "6 weeks",
    format: "Blended learning",
  },
  {
    title: "Crypto Transaction Monitoring Deep Dive",
    duration: "3 hours",
    format: "Live webinar",
  },
  {
    title: "PEP & Sanctions Screening for Fintechs",
    duration: "2 days",
    format: "In-house workshop",
  },
];

export default function LearningComingSoon() {
  return (
    <section
      id="upcoming-courses"
      className="section-light-white w-full border-t border-zinc-200/70 py-20 md:py-28"
      aria-labelledby="learning-coming-soon-heading"
    >
      <div className="container">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Coming Soon
            </p>
            <h2
              id="learning-coming-soon-heading"
              className="text-section-heading max-w-xl text-foreground"
            >
              Upcoming Programmes on the Roadmap
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              New courses in development — register your interest and we will
              notify you when enrolment opens.
            </p>
          </ScrollReveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
          staggerChildren={0.06}
        >
          {upcomingCourses.map((course) => (
            <StaggerItem key={course.title}>
              <article className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-6 shadow-[0_16px_50px_rgba(13,13,20,0.05)]">
                <div className="mb-4 flex items-center justify-between">
                  <span className="icon-ghost-pink flex size-10 items-center justify-center rounded-xl">
                    <Lock className="size-4 text-primary" strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-500">
                    Coming Soon
                  </span>
                </div>

                <h3 className="mb-3 text-base font-semibold leading-snug text-foreground">
                  {course.title}
                </h3>

                <div className="mt-auto space-y-2 border-t border-zinc-100 pt-4">
                  <p className="flex items-center gap-2 text-sm text-zinc-500">
                    <Clock className="size-3.5 shrink-0" />
                    {course.duration}
                  </p>
                  <p className="text-xs text-zinc-400">{course.format}</p>
                </div>

                <Button
                  href="/contact"
                  variant="secondary"
                  className="mt-5 w-full"
                  icon={Bell}
                  iconPosition="left"
                >
                  Notify Me
                </Button>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
