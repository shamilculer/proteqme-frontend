"use client";

import dynamic from "next/dynamic";

import ActionButton from "@/components/ui/ActionButton";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);
import SectionAmbient from "../ui/SectionAmbient";
import { SectionReveal, ScrollReveal } from "../ui/scroll-reveal";
import { cn } from "@/lib/utils"
import SectionDescription from "@/components/ui/SectionDescription";

const defaultButtons = [
  {
    label: "Book a Free Demo",
    href: "/contact",
    variant: "default",
    glowingDot: true,
    showArrow: true,
  },
];

/** Outline is authored for dark heroes; on light CTA sections use outline-light. */
function mapButtonForLightCta(button) {
  const variant = button.variant || "default";

  if (variant === "outline") {
    return { ...button, variant: "outline-light" };
  }

  return { ...button, variant };
}

const MainCTA = ({
  eyebrow = "Ready to Begin?",
  heading = "Secure Your Compliance. Elevate Your Trust.",
  description = "Partner with Proteq to implement intelligent anti-fraud systems, strategic regulatory advisory, and professional compliance learning frameworks designed for modern risk environments.",
  buttons = defaultButtons,
  className,
}) => {
  // The Main CTA renders a single (primary) button only — any secondary CTA is ignored.
  const mappedButtons = buttons.slice(0, 1).map(mapButtonForLightCta);

  return (
    <SectionReveal
      className={cn(
        "section-light-white relative isolate flex w-full flex-col items-center justify-center overflow-hidden py-24 text-center md:py-28 border-t border-zinc-200/70",
        className
      )}
    >
      <SectionAmbient variant="light" />

      <ParticleNetwork id="main-cta-particles" variant="light" />

      {/* Content */}
      <div className="container relative z-10 mx-auto max-w-4xl px-4">
        <ScrollReveal className="flex flex-col items-center" direction="left">
          
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
          <SectionDescription content={description} className="text-zinc-600 text-body max-w-2xl mb-10" />

          {/* Buttons */}
          <div className="mx-auto flex w-full max-w-md flex-col items-stretch gap-4">
            {mappedButtons.map((button, index) => (
              <ActionButton
                key={index}
                {...button}
                className={cn(
                  "h-14 w-full px-8 text-xl font-medium",
                  button.className,
                )}
              />
            ))}
          </div>

        </ScrollReveal>
      </div>
    </SectionReveal>
  );
};

export default MainCTA;
