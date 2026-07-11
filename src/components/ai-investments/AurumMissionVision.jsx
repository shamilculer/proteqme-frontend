"use client";

import { itemKey, listKey } from "@/lib/listKey";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const cards = [
  {
    title: "Our Mission",
    body: "To democratize access to intelligent financial tools by combining AI, blockchain, and gold-backed investments — empowering individuals and businesses to build, manage, and grow wealth securely on a global scale.",
  },
  {
    title: "Our Vision",
    body: "A world where financial services are transparent, borderless, and powered by technology that puts users in control — bridging traditional finance and decentralised finance without compromising security or compliance.",
  },
  {
    title: "Our Values",
    body: "Integrity, innovation, and investor protection sit at the core of AURUM. Every product is built on audited infrastructure, disciplined risk frameworks, and a commitment to long-term sustainable growth.",
  },
];

export default function AurumMissionVision() {
  return (
    <section className="section-aurum-muted w-full py-16 md:py-20">
      <div className="container">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <h2 className="aurum-heading">Our Mission &amp; Vision</h2>
          <p className="aurum-body mt-4">
            AURUM Foundation is guided by a clear purpose — to make intelligent
            finance accessible, secure, and scalable for a global digital economy.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-6 md:grid-cols-3"
          staggerChildren={0.08}
        >
          {cards.map((card, index) => (
            <StaggerItem key={itemKey(card, index)}>
              <article className="h-full rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm md:p-8">
                <h3 className="aurum-subheading">{card.title}</h3>
                <p className="aurum-body mt-4 text-sm md:text-base">{card.body}</p>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="aurum-section-cta" delay={0.1}>
          <Link
            href="https://aurum-foundation.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-aurum"
          >
            Learn More
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
