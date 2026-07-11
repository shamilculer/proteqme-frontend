"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { Button } from "@/components/ui/button";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import SectionDescription from "@/components/ui/SectionDescription";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal";
import AurumVideoPlayer, { AURUM_VIDEO_IDS } from "./AurumVideoPlayer";

const DEFAULT_BUTTONS = [
  {
    label: "Explore Aurum Foundation",
    href: "https://aurum-foundation.com/",
    target: "_blank",
    rel: "noopener noreferrer",
    showArrow: true,
    glowingDot: true,
  },
];

const DEFAULTS = {
  eyebrow: "Aurum Introduction",
  heading: "A Comprehensive Financial Ecosystem",
  description:
    "Aurum Foundation is a comprehensive financial ecosystem that combines AI driven intelligence with blockchain powered security. Unlike traditional investment platforms, Aurum provides access to both fiat and crypto assets in a single secure environment, enabling users to manage wealth, execute payments, and optimise liquidity across asset classes.\n\nThe platform's core offerings include AI powered trading bots (EX-AI Bot), neural network investment tools (Neyro), gold (XAU) backed investment packages, and a neobank for Web3 financial services. Aurum operates at the intersection of decentralised finance and traditional wealth management.",
  videoId: AURUM_VIDEO_IDS.overview,
  buttons: DEFAULT_BUTTONS,
  image: null,
  sideCardEyebrow: null,
  sideCardBody: null,
  stats: [],
  sectionId: "aurum-intro",
  playLabel: "Play AURUM Foundation overview",
};

export default function AurumIntro({
  eyebrow = DEFAULTS.eyebrow,
  heading = DEFAULTS.heading,
  description = DEFAULTS.description,
  videoId = DEFAULTS.videoId,
  buttons = DEFAULTS.buttons,
  sectionId = DEFAULTS.sectionId,
  playLabel = DEFAULTS.playLabel,
}) {
  return (
    <SectionReveal
      id={sectionId}
      className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-12 md:py-16"
    >
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10 xl:gap-12">
          <ScrollReveal xOffset={-12} className="relative z-10 w-full">
            <SplitSectionMedia frame="soft" size="video">
              <AurumVideoPlayer
                videoId={videoId}
                playLabel={playLabel}
                className="aspect-auto h-full min-h-0 w-full rounded-none border-0 shadow-none"
              />
            </SplitSectionMedia>
          </ScrollReveal>

          <ScrollReveal className="relative z-10 lg:max-w-xl lg:py-4 xl:max-w-none" xOffset={12}>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                {eyebrow}
              </span>
            </div>

            <h2 className="max-w-xl text-3xl md:text-[42px] md:leading-[1.12] xl:text-[46px]">
              {heading}
            </h2>

            {description ? (
              <SectionDescription
                content={description}
                className="mt-6 text-sm leading-relaxed text-zinc-700 sm:text-base"
              />
            ) : null}

            {buttons?.length ? (
              <div className="mt-7">
                {buttons.map((button, index) => (
                  <Button
                    key={listKey(button.label ?? button.href, index, "button")}
                    href={button.href}
                    target={button.target}
                    rel={button.rel}
                    showArrow={button.showArrow}
                    glowingDot={button.glowingDot}
                    variant={button.variant}
                  >
                    {button.label}
                  </Button>
                ))}
              </div>
            ) : null}
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
