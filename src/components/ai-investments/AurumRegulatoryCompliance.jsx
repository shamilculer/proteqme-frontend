"use client";

import { itemKey, listKey } from "@/lib/listKey";
import { BadgeCheck, Building2, Scale, ShieldCheck } from "lucide-react";
import {
  ScrollReveal,
  StaggerContainer,
  StaggerItem,
} from "../ui/scroll-reveal";

const compliancePoints = [
  {
    icon: Scale,
    title: "SEC-Aligned Framework",
    description:
      "Operates within a regulatory framework designed to align with US SEC requirements for digital asset investment platforms. Documentation available during due diligence.",
  },
  {
    icon: ShieldCheck,
    title: "Bank-Grade Security Standards",
    description:
      "Encrypted data at rest and in transit, role-based access controls, continuous monitoring, and incident response aligned with financial services best practice.",
  },
  {
    icon: Building2,
    title: "Independent Audit Trail",
    description:
      "All transactions, allocations, and withdrawals recorded on an immutable audit trail. Third-party audit reports provided to institutional investors on request.",
  },
  {
    icon: BadgeCheck,
    title: "Jurisdiction & Licensing",
    description:
      "Operates across defined jurisdictions with appropriate licensing. Entity structure and regulatory status disclosed during investor onboarding.",
  },
];

export default function AurumRegulatoryCompliance() {
  return (
    <section className="section-aurum-alt w-full py-16 md:py-20">
      <div className="container relative z-10">
        <ScrollReveal className="mb-12 max-w-2xl md:mb-14">
          <p className="aurum-section-label">Compliance</p>
          <h2 className="text-section-heading text-white">
            Regulatory &amp; Security Framework
          </h2>
          <p className="aurum-text-muted mt-4 text-base leading-relaxed">
            Compliance claims reflect documented controls and governance — full
            substantiation is provided during investor due diligence.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid grid-cols-1 gap-px border border-[rgba(201,168,76,0.22)] bg-[rgba(201,168,76,0.22)] md:grid-cols-2"
          staggerChildren={0.06}
        >
          {compliancePoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <StaggerItem key={itemKey(point, index)}>
                <article className="flex h-full flex-col bg-[var(--aurum-panel-elevated-alt)] p-7">
                  <div className="mb-4 flex size-9 items-center justify-center border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.08)]">
                    <Icon
                      className="size-4 text-[var(--aurum-gold-on-dark)]"
                      strokeWidth={1.75}
                    />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {point.title}
                  </h3>
                  <p className="aurum-text-muted text-sm leading-relaxed">
                    {point.description}
                  </p>
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
