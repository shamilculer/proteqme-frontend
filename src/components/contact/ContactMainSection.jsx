"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useReducedMotion } from "motion/react";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";
import SectionAmbient from "@/components/ui/SectionAmbient";
const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);
import { SectionReveal, ScrollReveal, StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";
import {
  OFFICE_ADDRESS,
  OFFICE_MAP_URL,
  PHONE_PRIMARY,
  PHONE_PRIMARY_DISPLAY,
  PHONE_SECONDARY,
  PHONE_SECONDARY_DISPLAY,
  SITE_EMAIL,
} from "@/data/siteContact";

const contactInfo = [
  {
    id: "phone-primary",
    title: "Phone",
    info: PHONE_PRIMARY_DISPLAY,
    icon: Phone,
    link: `tel:${PHONE_PRIMARY}`,
  },
  {
    id: "phone-secondary",
    title: "Phone",
    info: PHONE_SECONDARY_DISPLAY,
    icon: Phone,
    link: `tel:${PHONE_SECONDARY}`,
  },
  {
    id: "email",
    title: "Email",
    info: SITE_EMAIL,
    icon: Mail,
    link: `mailto:${SITE_EMAIL}`,
  },
  {
    id: "location",
    title: "Location",
    info: OFFICE_ADDRESS,
    icon: MapPin,
    link: OFFICE_MAP_URL,
    external: true,
  },
];

export default function ContactMainSection() {
  const reduceMotion = useReducedMotion();

  return (
    <SectionReveal className="section-light-white relative isolate w-full overflow-hidden border-t border-zinc-200/70 py-20 md:py-28">
      <SectionAmbient variant="light" />
      <ParticleNetwork id="contact-main-particles" variant="light" />
      <div className="container relative z-10">
        <div className="mb-12 flex flex-col gap-6 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
              Let&apos;s Talk
            </p>
            <h2 className="section-heading-accent text-section-heading max-w-xl text-foreground">
              Speak With Our Compliance Experts
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-body text-zinc-600">
              Whether you need compliance guidance, want to explore training
              options, or are evaluating systems, we are here to help.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[2fr_3fr] lg:gap-12 xl:gap-16">
          <StaggerContainer className="flex min-w-0 flex-col gap-3 sm:gap-4">
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

              return (
                <StaggerItem key={item.id}>
                  <div
                    className={cn(
                      "rounded-2xl p-[1.5px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(232,24,90,0.15)]",
                      reduceMotion
                        ? "border-2 border-primary bg-transparent"
                        : "border-beam-card-light"
                    )}
                    style={
                      reduceMotion
                        ? undefined
                        : { animationDelay: `${index * 0.35}s` }
                    }
                  >
                    <Link
                      href={item.link}
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center justify-between gap-3 rounded-[calc(1rem-1.5px)] bg-white p-4 sm:gap-4 sm:p-5"
                    >
                      <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-5">
                        <div className="icon-stat-circle flex size-12 shrink-0 sm:size-14">
                          <Icon className="size-5 text-primary sm:size-6" />
                        </div>

                        <div className="min-w-0">
                          <h5 className="text-sm font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                            {item.title}
                          </h5>
                          <p className="mt-0.5 break-words text-sm font-medium leading-snug text-zinc-600 transition-colors duration-300 group-hover:text-zinc-800 sm:text-base">
                            {item.info}
                          </p>
                        </div>
                      </div>

                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-zinc-50 text-zinc-400 transition-all duration-300 sm:opacity-0 sm:group-hover:translate-x-0 sm:group-hover:opacity-100 sm:group-hover:bg-foreground/5 sm:group-hover:text-foreground">
                        <ChevronRight className="size-4" />
                      </div>
                    </Link>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <ScrollReveal
            yOffset={16}
            className="min-w-0 w-full lg:sticky lg:top-24 lg:self-start"
          >
            <ContactForm />
          </ScrollReveal>
        </div>
      </div>
    </SectionReveal>
  );
}
