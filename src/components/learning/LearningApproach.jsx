"use client";

import { Activity, Award, BookOpen, Lightbulb } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const approachSteps = [
  {
    title: "Discover",
    description:
      "We understand your organisation's objectives, culture and learning gaps.",
    icon: Lightbulb,
  },
  {
    title: "Design",
    description:
      "Curate experiential, stimulating modules with leading-edge content.",
    icon: Activity,
  },
  {
    title: "Deliver",
    description:
      "Interactive learning activities led by expert facilitators.",
    icon: BookOpen,
  },
  {
    title: "Transform",
    description:
      "Practical solutions that translate into measurable performance gains.",
    icon: Award,
  },
];

const LearningApproach = () => {
  return (
    <section className="relative w-full overflow-hidden bg-white py-18">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(35,17,67,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(35,17,67,0.03) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="container relative">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-50 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Our Approach
            </span>
          </div>

          <h2 className="text-3xl leading-tight text-[#231143] md:text-[44px]">
            Experiential learning that stimulates & challenges
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
            Interactive activities combined with leading-edge content, supported
            by practical learning solutions.
          </p>
        </ScrollReveal>

        <div className="relative hidden lg:block">
          <div className="absolute left-[12.5%] right-[12.5%] top-[3.25rem] h-px bg-zinc-200" />
          <div className="absolute left-[12.5%] right-[12.5%] top-[3.1rem] flex justify-between px-[10%]">
            {approachSteps.map((step) => (
              <span
                key={step.title}
                className="size-2 rounded-full bg-white ring-2 ring-zinc-200"
                aria-hidden
              />
            ))}
          </div>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          staggerChildren={0.08}
        >
          {approachSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <StaggerItem key={step.title}>
                <article className="group relative flex h-full flex-col rounded-[18px] border border-zinc-200/90 bg-white p-6 shadow-[0_14px_45px_rgba(35,17,67,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#E25C8F]/35 hover:shadow-[0_22px_60px_rgba(35,17,67,0.1)] md:p-7">
                  <span
                    className="pointer-events-none absolute right-5 top-4 text-5xl font-semibold leading-none text-[#231143]/[0.05] transition duration-300 group-hover:text-[#E25C8F]/10"
                    aria-hidden
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="relative z-10 mb-6 flex size-14 items-center justify-center rounded-full border border-[#231143]/10 bg-[#231143]/5 text-[#231143] transition duration-300 group-hover:border-[#E25C8F]/40 group-hover:bg-[#E25C8F] group-hover:text-white">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </span>

                  <div className="relative z-10 flex flex-1 flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#E25C8F]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-2 text-xl font-semibold text-[#061525]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                      {step.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-6 h-0.5 w-0 bg-[#E25C8F] transition-all duration-500 group-hover:w-full" />
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
};

export default LearningApproach;
