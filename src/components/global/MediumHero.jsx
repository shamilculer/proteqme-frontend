import Image from "next/image";
import { CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const defaultButtons = [
  {
    label: "Explore Services",
    href: "/services",
    variant: "white",
    showArrow: true,
  },
  {
    label: "Talk to an Expert",
    href: "/contact",
    variant: "outline",
    showArrow: true,
  },
];

const defaultHighlights = [
  "Compliance advisory",
  "Professional learning",
  "RegTech systems",
];

const MediumHero = ({
  eyebrow = "Service Expertise",
  heading = "Practical Compliance Support for Modern Risk Teams",
  description = "Specialist advisory, learning, and systems support for organisations navigating AML, anti-fraud, and regulatory complexity.",
  bgImage = "/systems.webp",
  imageAlt = "Proteq service background",
  buttons = defaultButtons,
  highlights = defaultHighlights,
  className,
}) => {
  return (
    <section
      className={cn(
        "w-full relative overflow-hidden",
        className
      )}
    >
      <div className="container relative min-h-[560px] overflow-hidden rounded-[18px] border border-white/60 bg-secondary-dark shadow-[0_24px_70px_rgba(17,24,39,0.18)] md:min-h-[640px] md:rounded-3xl">
        <Image
          src={bgImage}
          alt={imageAlt}
          fill
          priority
          sizes="(min-width: 1460px) 1460px, calc(100vw - 24px)"
          className="object-cover object-center brightness-[1.04] contrast-[1.04] saturate-[1.02]"
        />

        <div className="absolute inset-0 bg-linear-to-r from-[#100A1D]/90 via-[#100A1D]/54 to-[#100A1D]/5" />
        <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-white/10" />
        <div className="absolute inset-y-0 left-0 w-full bg-[radial-gradient(circle_at_22%_42%,rgba(226,92,143,0.24),transparent_34%)]" />
        <div className="absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-white/55 to-transparent" />

        <div className="relative z-10 flex min-h-[560px] items-end px-6 py-10 md:min-h-[640px] lg:px-10 lg:py-20">
          <div className="max-w-3xl">
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {eyebrow ? (
                <div className="inline-flex items-center gap-2 bg-zinc-100 border border-zinc-200 rounded-full px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E25C8F] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E25C8F]"></span>
                  </span>
                  <span className="text-xs text-zinc-700 uppercase font-semibold tracking-wider">
                    {eyebrow}
                  </span>
                </div>
              ) : null}
            </div>

            <h1 className="max-w-4xl text-[40px] font-medium! leading-[1.02] text-white sm:text-5xl md:text-[58px] lg:text-[68px]">
              {heading}
            </h1>

            {description ? (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/82">
                {description}
              </p>
            ) : null}

            {buttons?.length ? (
              <div className="mt-9 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                {buttons.map((button) => (
                  <Button
                    key={button.label}
                    href={button.href}
                    variant={button.variant || "white"}
                    glowingDot={button.glowingDot}
                    showArrow={button.showArrow}
                    arrowDirection={button.arrowDirection}
                    icon={button.icon}
                    iconPosition={button.iconPosition}
                    className={cn("w-full sm:w-auto", button.className)}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            {highlights?.length ? (
              <div className="mt-7 flex flex-wrap max-w-2xl gap-3">
                {highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="flex items-center gap-2.5 rounded-full border border-white/15 bg-black/10 px-3.5 py-2.5 text-sm font-medium text-white shadow-xs backdrop-blur-md"
                  >
                    <CheckCircle2 className="size-4 shrink-0 text-[#E25C8F]" />
                    <span className="leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediumHero;
