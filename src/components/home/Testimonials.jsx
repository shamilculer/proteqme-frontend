"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "../ui/scroll-reveal";

const testimonialList = [
  {
    quote: "Amazing product—well-built, user-friendly, and just as advertised. The service team exceeded my expectations at every turn.",
    name: "Lincoln Stanton",
    role: "CEO & Co-Founder",
    company: "Gumroad",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces"
  },
  {
    quote: "Outstanding product—well-crafted, user-friendly, and exactly what I expected. The advisory support team went above and beyond.",
    name: "Skylar Lipshutz",
    role: "Product Manager",
    company: "Orbit",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=faces"
  },
  {
    quote: "Excellent compliance tools—durable, intuitive, and exactly what we needed. Their customer service is stellar and highly responsive.",
    name: "Paityn Lipshutz",
    role: "VP of Risk Operations",
    company: "Lemonsqueezy",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces"
  },
  {
    quote: "Impressive service—high quality, simple to integrate, and exactly as promised. The compliance gap analysis was incredibly thorough.",
    name: "Anika Franci",
    role: "Chief Compliance Officer",
    company: "Zendesk",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces"
  },
  {
    quote: "Great implementation—reliable, easy to set up, and just as described. The training webinars ensured a smooth onboarding experience.",
    name: "Chance Baptista",
    role: "Head of AML Auditing",
    company: "ABC Company",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces"
  },
  {
    quote: "Wonderful partnership—highly detailed, easy to operate, and exactly what we wanted. Technical support has been quick and proactive.",
    name: "Corey Franci",
    role: "Lead Developer",
    company: "Stripe",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=120&h=120&fit=crop&crop=faces"
  }
];

// Triplicating the list to guarantee seamless loop coverage on all viewport sizes
const duplicatedTestimonials = [
  ...testimonialList,
  ...testimonialList,
  ...testimonialList
];

const Testimonials = () => {
  return (
    <section className="w-full py-14 md:py-18 bg-zinc-50 relative overflow-hidden border-t border-zinc-200/60">
      {/* Brand Ambient Glow Background */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-140 h-140 bg-[#E25C8F]/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="w-full relative z-10">
        
        {/* Section Header */}
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-8 px-4">
          {/* Centered Pill Badge */}
          <div className="inline-flex items-center gap-2 mb-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
            </span>
            <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">Testimonial</span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[42px] font-bold text-[#231143] tracking-tight leading-tight max-w-xl mx-auto">
            Words of Praise From Others About Our Presence
          </h2>
        </ScrollReveal>

        {/* Testimonials Slider Container with Fade Gradient Masks */}
        <div className="relative w-full overflow-hidden py-4 pause-marquee">
          {/* Left and Right Fade Overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-zinc-50 via-zinc-50/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-zinc-50 via-zinc-50/80 to-transparent z-10" />

          {/* Moving Track */}
          <div className="animate-marquee gap-6 flex">
            {duplicatedTestimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="w-[380px] md:w-[420px] bg-white border border-zinc-200/60 rounded-[24px] p-6 md:p-8 flex flex-col justify-between shrink-0 shadow-xs hover:border-[#E25C8F]/40 hover:shadow-[0_12px_32px_rgba(226,92,143,0.06)] hover:scale-[1.01] transition-all duration-300 group"
              >
                {/* SVG Quote Icon in brand color */}
                <div className="mb-6">
                  <svg 
                    className="w-10 h-10 text-[#E25C8F] opacity-20 group-hover:opacity-40 transition-opacity duration-300" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote Text */}
                <p className="text-zinc-600 text-sm md:text-[15px] leading-relaxed mb-8 flex-grow">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* User Info Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-zinc-100">
                  <div className="relative w-11 h-11 shrink-0 rounded-full overflow-hidden border border-zinc-200">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#231143] text-sm md:text-[15px] tracking-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-zinc-500 font-medium">
                      {testimonial.role} at{" "}
                      <span className="text-[#E25C8F] font-semibold">
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
};

export default Testimonials;
