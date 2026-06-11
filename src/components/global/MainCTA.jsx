"use client";

import dynamic from "next/dynamic";
import Image from "next/image";

import { Button } from "../ui/button";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);
import SectionAmbient from "../ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal";
import { cn } from "@/lib/utils";

const defaultButtons = [
  {
    label: "Book a Free Demo",
    href: "/contact",
    variant: "default",
    glowingDot: true,
    showArrow: true,
  },
  {
    label: "Contact Our Experts",
    href: "/contact",
    variant: "secondary",
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
  const mappedButtons = buttons.map((button) => {
    let variant = button.variant || "default";
    if (variant === "white") variant = "default";
    if (variant === "outline") variant = "secondary";
    return { ...button, variant };
  });

  return (
    <SectionReveal
      className={cn(
        "section-light-white relative isolate flex w-full flex-col items-center justify-center overflow-hidden py-24 text-center md:py-28 border-t border-zinc-200/70",
        className
      )}
    >
      <SectionAmbient variant="light" />

      {/* Subtle watermark background image */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none select-none">
        <Image
          src={bgImage || "/hero-3.webp"}
          alt="CTA background"
          fill
          className="object-cover opacity-6 mix-blend-multiply"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-b from-white/95 via-white/80 to-white/95" />
      </div>

      <ParticleNetwork id="main-cta-particles" variant="light" />

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        <ScrollReveal className="flex flex-col items-center" yOffset={24}>
          
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 mb-6 bg-zinc-50 border border-zinc-200/80 rounded-full px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>

            <span className="text-xs text-zinc-600 uppercase font-semibold tracking-wider">
              {eyebrow}
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-foreground tracking-tight leading-[1.12] mb-6 max-w-3xl text-4xl! lg:text-6xl!">
            {heading}
          </h2>

          {/* Description */}
          <p className="text-zinc-600 text-body max-w-2xl mb-10">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 w-full sm:w-auto">
            {mappedButtons.map((button, index) => (
              <Button
                key={index}
                href={button.href}
                variant={button.variant}
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
    </SectionReveal>
  );
};

export default MainCTA;
