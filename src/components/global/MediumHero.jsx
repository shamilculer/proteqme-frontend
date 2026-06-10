import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

import HeroOverlays from "@/components/global/HeroOverlays";
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
        "relative w-full overflow-hidden px-2 sm:px-3 lg:px-0",
        className
      )}
    >
      <div
        className={cn(
          "hero-home-pattern container relative min-h-[570px] overflow-hidden rounded-[12px] bg-secondary-dark !px-0 shadow-[0_24px_70px_rgba(17,24,39,0.18)] md:min-h-175",
        )}
      >
        <Image
          src={bgImage}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-[1.04] contrast-[1.04] saturate-[1.02]"
        />

        <HeroOverlays />

        <div className="relative z-10 flex min-h-[570px] w-full flex-col items-start justify-end px-4 py-10 sm:px-8 sm:py-12 md:min-h-175 md:justify-center md:px-10 md:py-16">
          <div className="w-full md:max-w-[58%] lg:max-w-[62%]">
            {eyebrow ? (
              <div className="mb-2 inline-flex max-w-full items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-sm md:mb-4 md:px-4">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/90 sm:text-xs">
                  {eyebrow}
                </span>
              </div>
            ) : null}

            <h1 className="mb-2 max-w-none text-[40px] font-bold tracking-tight text-white !leading-[1.2] md:mb-4 md:max-w-4xl md:text-5xl md:leading-[1.12] lg:text-[62px]">
              {heading}
            </h1>

            {description ? (
              <p className="mb-6 max-w-xl text-sm leading-relaxed text-white/95 sm:mb-8 sm:text-base md:text-lg">
                {description}
              </p>
            ) : null}

            {buttons?.length ? (
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 md:gap-4">
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
                    target={button.target}
                    rel={button.rel}
                    className={button.className}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </div>

          {highlights?.length ? (
            <div className="mt-5 flex w-full flex-wrap gap-2 sm:mt-6 md:max-w-[90%] md:gap-3">
              {highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex max-w-full items-center gap-2 rounded-full border border-white/15 bg-black/15 px-2.5 py-1.5 text-[11px] font-medium text-white shadow-xs backdrop-blur-md sm:gap-2.5 sm:px-3.5 sm:py-2 sm:text-xs md:text-sm"
                >
                  <CheckCircle2 className="size-3 shrink-0 text-primary sm:size-3.5" />
                  <span className="leading-snug">{highlight}</span>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default MediumHero;
