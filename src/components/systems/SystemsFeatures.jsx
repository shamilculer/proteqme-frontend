"use client";

import {
  Bot,
  Database,
  Fingerprint,
  Globe2,
  Layers,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "@/components/ui/scroll-reveal";

const features = [
  { title: "Vendor-Neutral RFP", icon: ShieldCheck },
  { title: "False Positive Tuning", icon: LineChart },
  { title: "Workflow Design", icon: Workflow },
  { title: "API & Integration Review", icon: Layers },
  { title: "Multi-Jurisdiction Coverage", icon: Globe2 },
  { title: "Data Model Assessment", icon: Database },
  { title: "Biometric & Identity Stack", icon: Fingerprint },
  { title: "AI-Augmented Monitoring", icon: Bot },
];

export default function SystemsFeatures() {
  return (
    <section
      className="w-full border-t border-zinc-200/70 bg-white py-18 md:py-24"
      aria-labelledby="systems-features-heading"
    >
      <div className="container">
        <ScrollReveal className="mb-10 text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Our Capabilities
          </p>
          <h2
            id="systems-features-heading"
            className="mt-3 text-3xl font-semibold text-[#231143] md:text-[40px]"
          >
            RegTech Advisory Made Simpler
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            Help compliance teams choose the right systems, reduce manual work,
            and stay audit-ready — from screening evaluation to monitoring
            optimisation and implementation support.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          staggerChildren={0.05}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.title}>
                <article className="group flex h-full flex-col items-center rounded-2xl border border-zinc-200/80 bg-[#fbfafd] px-5 py-7 text-center transition duration-300 hover:-translate-y-1 hover:border-primary/25 hover:bg-white hover:shadow-[0_20px_50px_rgba(35,17,67,0.08)]">
                  <span className="mb-4 flex size-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-[#231143] shadow-[0_8px_24px_rgba(35,17,67,0.06)] transition duration-300 group-hover:border-primary/30 group-hover:bg-primary group-hover:text-white">
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-sm font-semibold text-[#061525]">
                    {feature.title}
                  </h3>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
