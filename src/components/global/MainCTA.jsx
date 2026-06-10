"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { Button } from "../ui/button";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);
import { ScrollReveal } from "../ui/scroll-reveal";
import { cn } from "@/lib/utils";

const defaultButtons = [
  {
    label: "Book a Free Demo",
    href: "/contact",
    variant: "white",
    glowingDot: true,
    showArrow: true,
  },
  {
    label: "Contact Our Experts",
    href: "/contact",
    variant: "outline",
    className: "",
  },
];

const MainCTA = ({
  bgImage = "/hero-3.webp",
  eyebrow = "Ready to Begin?",
  heading = "Secure Your Compliance. Elevate Your Trust.",
  description = "Partner with Proteq to implement intelligent anti-fraud systems, strategic regulatory advisory, and professional compliance learning frameworks designed for modern risk environments.",
  buttons = defaultButtons,
  className,
}) => {
  return (
    <section
      className={cn(
        "section-dark section-particles-animated relative isolate flex w-full flex-col items-center justify-center overflow-hidden py-20 text-center md:py-20",
        className
      )}
    >
      {/* Full-bleed image reserved for CTA sections only */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none select-none">
        <Image
          src={bgImage || "/hero-3.webp"}
          alt="CTA background"
          fill
          className="object-cover opacity-45"
          sizes="100vw"
          priority
        />

        <div className="absolute inset-0 bg-[rgba(13,13,18,0.65)]" />
      </div>

      <ParticleNetwork id="main-cta-particles" />

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        <ScrollReveal className="flex flex-col items-center" yOffset={24}>
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 shadow-xs">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>

            <span className="text-xs text-zinc-300 uppercase font-semibold tracking-wider">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-white tracking-tight leading-[1.12] mb-6 max-w-3xl text-4xl! lg:text-6xl!">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-zinc-300 text-body max-w-2xl mb-10">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            {buttons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                variant={button.variant || "white"}
                glowingDot={button.glowingDot}
                showArrow={button.showArrow}
                arrowDirection={button.arrowDirection}
                icon={button.icon}
                iconPosition={button.iconPosition}
                target={button.target}
                rel={button.rel}
                className={cn("w-full sm:w-auto", button.className)}
                style={button.style}
              >
                {button.label}
              </Button>
            ))}
          </div>

        </ScrollReveal>
      </div>
    </section>
  );
};

export default MainCTA;
