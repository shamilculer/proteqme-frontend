"use client";

import dynamic from "next/dynamic";
import TestimonialAvatar from "@/components/global/TestimonialAvatar";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

/**
 * @typedef {Object} Testimonial
 * @property {string} quote
 * @property {string} [name]
 * @property {string} [role]
 * @property {string} [company]
 * @property {string|null} [avatar]
 */

/**
 * @param {Object} props
 * @param {string} [props.eyebrow]
 * @param {string} props.heading
 * @param {Testimonial[]} props.testimonials
 * @param {string} [props.className]
 * @param {string} [props.fadeFromClass]
 * @param {string} [props.id]
 */
export default function TestimonialsSection({
  eyebrow = "Testimonial",
  heading,
  description,
  testimonials,
  className,
  fadeFromClass = "from-slate-white via-slate-white/80",
  id,
}) {
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <SectionReveal
      id={id}
      className={cn(
        "section-light relative isolate w-full overflow-hidden border-t border-zinc-200/60 py-14 md:py-18",
        className
      )}
    >
      <ParticleNetwork variant="light" id="testimonials-particles" />
      <div className="container relative z-10 mb-8 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              {eyebrow}
            </span>
          </div>

          <h2 className="mx-auto capitalize max-w-4xl text-section-heading text-foreground">
            {heading}
          </h2>
          {description && (
            <SectionDescription content={description} className="text-body mx-auto mt-4 max-w-2xl text-zinc-600" />
          )}
      </div>

      <ScrollReveal delay={0.12} direction="right" className="relative z-10 w-full">
        <div className="pause-marquee relative w-full overflow-hidden py-4">
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent md:w-32",
              fadeFromClass
            )}
          />
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l to-transparent md:w-32",
              fadeFromClass
            )}
          />

          <div className="animate-marquee flex gap-6 [animation-duration:38s]">
            {marqueeItems.map((testimonial, idx) => (
              <div
                key={`${testimonial.name ?? testimonial.role ?? "testimonial"}-${idx}`}
                className="group flex w-[380px] shrink-0 flex-col justify-between rounded-[24px] border border-zinc-200/60 bg-white p-6 shadow-xs transition-all duration-300 hover:scale-[1.01] hover:border-primary/40 hover:shadow-[0_12px_32px_rgba(232,24,90,0.06)] md:w-[420px] md:p-8"
              >
                <div className="mb-6">
                  <svg
                    className="h-10 w-10 text-primary opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="mb-8 grow text-body leading-relaxed text-zinc-600">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <TestimonialAvatar testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </SectionReveal>
  );
}
