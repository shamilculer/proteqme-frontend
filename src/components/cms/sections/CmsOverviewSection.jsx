"use client";

import { itemKey, listKey } from "@/lib/listKey";
import dynamic from "next/dynamic";
import SplitSectionMedia from "@/components/ui/SplitSectionMedia";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionReveal, ScrollReveal } from "@/components/ui/scroll-reveal"
import SectionDescription from "@/components/ui/SectionDescription";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

/**
 * CMS-driven overview / intro section (split layout).
 * Used when variant is overviewSplit or cardGridIntro.
 */
export default function CmsOverviewSection({
  eyebrow,
  heading,
  description,
  body,
  image,
  items = [],
  sectionId,
  variant = "overviewSplit",
}) {
  return (
    <SectionReveal
      id={sectionId}
      className="relative w-full overflow-hidden bg-[#f6f4f8] py-18 md:py-20"
    >
      <ParticleNetwork variant="light" id={`${sectionId || "cms"}-particles`} />
      <div className="container">
        <div className="relative grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-18">
          {image && (
            <ScrollReveal xOffset={-16} delay={0.08} className="relative z-10">
              <SplitSectionMedia
                frame="wide"
                size="cms"
                src={image}
                alt={heading || ""}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </ScrollReveal>
          )}

          <ScrollReveal xOffset={16} className="relative z-10">
            {eyebrow && (
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
                <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
                  {eyebrow}
                </span>
              </div>
            )}
            {heading && (
              <h2 className="max-w-2xl text-3xl md:text-[46px]">{heading}</h2>
            )}
            {description && (
              <SectionDescription content={description} className="text-body mt-6 max-w-xl text-zinc-600" />
            )}
            {body && (
              <p className="text-body mt-4 max-w-xl text-zinc-600 whitespace-pre-line">
                {body}
              </p>
            )}
            {items?.length > 0 && (
              <ul className="mt-8 space-y-3">
                {items.map((item, index) => (
                  <li key={itemKey(item, index)} className="flex items-start gap-3 text-zinc-700">
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    <span>
                      <strong>{item.title}</strong>
                      {item.summary ? ` — ${item.summary}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            {variant === "cardGridIntro" && (
              <Button href="/contact" className="mt-8" showArrow>
                Talk to an Expert
              </Button>
            )}
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
