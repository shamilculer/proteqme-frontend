"use client";

import Image from "next/image";
import {
  BadgeCheck,
  BriefcaseBusiness,
  Cpu,
  GraduationCap,
  Globe,
  Shield,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const focusAreas = [
  { label: "AML compliance", icon: Shield },
  { label: "Expert training", icon: GraduationCap },
  { label: "Strategic partnerships", icon: BriefcaseBusiness },
  { label: "Compliance technology", icon: Cpu },
  { label: "Global network", icon: Globe },
  { label: "Industry experts", icon: Users },
  { label: "Trusted collaboration", icon: BadgeCheck },
];

export default function PartnerOverview() {
  return (
    <section className="w-full overflow-x-hidden py-18 md:py-22">
      <div className="container">
        <div className="mb-8 md:mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-zinc-100 px-4 py-1.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E25C8F] opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E25C8F]"></span>
            </span>
            <span className="text-xs font-semibold uppercase tracking-wider text-zinc-700">
              Partnership & Collaboration
            </span>
          </div>
          <h2 className="max-w-4xl text-3xl leading-tight md:text-[44px]">
            Build the Future of Compliance, Training & Regulatory Technology
            With Us
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-end lg:gap-12 xl:gap-16">
          <div className="order-2 min-w-0 lg:order-1">
            <div className="flex max-w-full flex-wrap gap-2.5 sm:gap-3">
              {[
                {
                  bg: "bg-pink-100",
                  color: "text-pink-600",
                  Icon: Shield,
                  label: "AML Compliance",
                },
                {
                  bg: "bg-violet-100",
                  color: "text-violet-600",
                  Icon: GraduationCap,
                  label: "Expert Training",
                },
                {
                  bg: "bg-blue-100",
                  color: "text-blue-600",
                  Icon: BriefcaseBusiness,
                  label: "Strategic Partnerships",
                },
                {
                  bg: "bg-emerald-100",
                  color: "text-emerald-600",
                  Icon: Cpu,
                  label: "Compliance Technology",
                },
                {
                  bg: "bg-orange-100",
                  color: "text-orange-600",
                  Icon: Globe,
                  label: "Global Network",
                },
                {
                  bg: "bg-cyan-100",
                  color: "text-cyan-600",
                  Icon: Users,
                  label: "Industry Experts",
                },
                {
                  bg: "bg-amber-100",
                  color: "text-amber-600",
                  Icon: BadgeCheck,
                  label: "Trusted Collaboration",
                },
              ].map(({ bg, color, Icon, label }) => (
                <div
                  key={label}
                  className="flex max-w-full items-center gap-2 rounded-full border border-zinc-300 bg-white p-1 pr-3"
                >
                  <div
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full ${bg}`}
                  >
                    <Icon className={`size-4 ${color}`} />
                  </div>
                  <span className="text-sm font-medium leading-snug">{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <p className="mb-6 text-sm leading-relaxed text-zinc-700 sm:text-base">
              We collaborate with industry experts, compliance professionals,
              technology providers, and forward thinking organisations to
              create impactful advisory, learning, and systems driven
              solutions. Whether you deliver specialised expertise, innovative
              compliance technology, or training capabilities, we provide a
              platform to grow together, expand your reach, and create
              meaningful industry impact.
            </p>
            <p className="mb-6 text-sm leading-relaxed text-zinc-700 sm:text-base">
              Join a growing network of experts, trainers, and technology
              providers shaping the future of compliance, advisory, and
              regulatory innovation.
            </p>
            <Button href="#partner-form" showArrow className="w-full sm:w-auto">
              Become a Partner
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
