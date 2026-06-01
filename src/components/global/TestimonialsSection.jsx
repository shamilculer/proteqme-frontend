"use client";

import Image from "next/image";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

/**
 * @typedef {Object} Testimonial
 * @property {string} quote
 * @property {string} name
 * @property {string} role
 * @property {string} company
 * @property {string} avatar
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
  testimonials,
  className,
  fadeFromClass = "from-zinc-50 via-zinc-50/80",
  id,
}) {
  const duplicatedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ];

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden border-t border-zinc-200/60 bg-zinc-50 py-14 md:py-18",
        className
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-140 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#E25C8F]/5 blur-[140px]" />

      <div className="relative z-10 w-full">
        <ScrollReveal className="mx-auto mb-8 max-w-3xl px-4 text-center">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              {eyebrow}
            </span>
          </div>

          <h2 className="mx-auto max-w-xl text-[32px] leading-tight font-bold tracking-tight text-[#231143] md:text-[42px]">
            {heading}
          </h2>
        </ScrollReveal>

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

          <div className="animate-marquee flex gap-6">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={`${testimonial.name}-${idx}`}
                className="group flex w-[380px] shrink-0 flex-col justify-between rounded-[24px] border border-zinc-200/60 bg-white p-6 shadow-xs transition-all duration-300 hover:scale-[1.01] hover:border-[#E25C8F]/40 hover:shadow-[0_12px_32px_rgba(226,92,143,0.06)] md:w-[420px] md:p-8"
              >
                <div className="mb-6">
                  <svg
                    className="h-10 w-10 text-[#E25C8F] opacity-20 transition-opacity duration-300 group-hover:opacity-40"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                <p className="mb-8 grow text-sm leading-relaxed text-zinc-600 md:text-[15px]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>

                <div className="flex items-center gap-4 border-t border-zinc-100 pt-4">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-zinc-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-tight text-[#231143] md:text-[15px]">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs font-medium text-zinc-500">
                      {testimonial.role} at{" "}
                      <span className="font-semibold text-[#E25C8F]">
                        {testimonial.company}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
