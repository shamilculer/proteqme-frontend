"use client";

import { itemKey, listKey } from "@/lib/listKey";
import Image from "next/image";
import Link from "next/link";
import { Headphones, ShieldCheck, Users } from "lucide-react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Security First",
    body: "Multi-signature vault custody, audited smart contracts, and bank-grade infrastructure protect investor capital at every stage.",
    href: "https://aurum-foundation.com/",
  },
  {
    icon: Users,
    title: "User Friendly",
    body: "Manage fiat and crypto in one hub — intuitive dashboards, global debit cards, and seamless Apple Pay / Google Pay integration.",
    href: "https://aurum-foundation.com/",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    body: "Autonomous AI agents and dedicated support channels guide users through portfolio decisions, risk assessment, and onboarding.",
    href: "/contact",
    internal: true,
  },
];

const partners = [
  { name: "OSL", src: "/partners/osl.png" },
  { name: "Chainalysis", src: "/partners/chainalysis.png" },
  { name: "Sumsub", src: "/partners/sumsub (1).png" },
  { name: "Elliptic", src: "/partners/elliptinc.png" },
];

export default function AurumWhyChoose() {
  return (
    <section className="section-aurum-light w-full py-16 md:py-20">
      <div className="container">
        <ScrollReveal className="mx-auto mb-12 max-w-2xl text-center md:mb-14">
          <h2 className="aurum-heading">Why Choose AURUM?</h2>
          <p className="aurum-body mt-4">
            A trusted platform combining AI-powered trading, gold-backed assets,
            and Web3 banking — built for investors who demand security,
            simplicity, and scale.
          </p>
        </ScrollReveal>

        <StaggerContainer
          className="grid gap-6 md:grid-cols-3"
          staggerChildren={0.07}
        >
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={itemKey(item, index)}>
                <article className="flex h-full flex-col rounded-2xl border border-zinc-200/80 bg-white p-7 shadow-sm">
                  <div className="mb-5 flex size-12 items-center justify-center rounded-full bg-[#eef3f6] text-[#003b49]">
                    <Icon className="size-6" strokeWidth={1.75} />
                  </div>
                  <h3 className="aurum-subheading text-lg">{item.title}</h3>
                  <p className="aurum-body mt-3 flex-1 text-sm">{item.body}</p>
                  {item.internal ? (
                    <Link href={item.href} className="btn-aurum-outline-dark mt-6 inline-flex w-fit">
                      Learn More
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-aurum-outline-dark mt-6 inline-flex w-fit"
                    >
                      Learn More
                    </Link>
                  )}
                </article>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <ScrollReveal>
            <h3 className="aurum-subheading">Global Community</h3>
            <p className="aurum-body mt-3">
              With 18,000+ active partners worldwide, AURUM fosters a growing
              network of investors, institutions, and technology partners united
              by a shared vision for the future of digital finance.
            </p>
          </ScrollReveal>
          <ScrollReveal xOffset={12}>
            <h3 className="aurum-subheading">Official Partners</h3>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {partners.map((partner, index) => (
                <div
                  key={itemKey(partner, index, ["name", "title"])}
                  className="flex h-16 items-center justify-center rounded-xl border border-zinc-200 bg-zinc-50 px-3"
                >
                  <Image
                    src={partner.src}
                    alt={partner.name}
                    width={100}
                    height={40}
                    className="max-h-8 w-auto object-contain opacity-80 grayscale"
                  />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

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
