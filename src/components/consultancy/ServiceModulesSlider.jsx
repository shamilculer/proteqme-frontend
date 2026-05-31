"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  FileCheck2,
  GraduationCap,
  Landmark,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const serviceModules = [
  {
    number: "01",
    title: "AML Compliance Programme Design",
    summary:
      "Build or restructure your AML/CFT programme from risk assessment through to reporting.",
    details: [
      "Customer due diligence (CDD)",
      "Enhanced due diligence (EDD)",
      "Suspicious activity reporting (SAR)",
      "Transaction monitoring frameworks",
    ],
    icon: ShieldCheck,
    image: "/consultancy-services/1.webp",
  },
  {
    number: "02",
    title: "Regulatory Gap Analysis",
    summary:
      "Comprehensive review of current compliance infrastructure against applicable regulations.",
    details: [
      "FATF recommendations",
      "Local regulatory requirements",
      "VARA obligations for VASPs",
      "EU Anti-Money Laundering Directives where relevant",
    ],
    icon: SearchCheck,
    image: "/consultancy-services/2.webp",
  },
  {
    number: "03",
    title: "Policy & Procedure Documentation",
    summary:
      "Drafting, reviewing, and updating compliance policies, standard operating procedures, and internal control documentation.",
    details: [
      "Compliance policies",
      "Standard operating procedures",
      "Internal control documentation",
      "Regulatory examination standards",
    ],
    icon: FileCheck2,
    image: "/consultancy-services/3.webp",
  },
  {
    number: "04",
    title: "Anti-Fraud Programme Advisory",
    summary:
      "Design and implementation of fraud risk management programmes, internal investigation protocols, and whistleblower frameworks.",
    details: [
      "Fraud risk management programmes",
      "Internal investigation protocols",
      "Whistleblower frameworks",
      "ACAMS and international anti-fraud standards",
    ],
    icon: CheckCircle2,
    image: "/consultancy-services/4.webp",
  },
  {
    number: "05",
    title: "VARA & Digital Asset Compliance",
    summary:
      "Specialised advisory for firms operating under the Dubai Virtual Assets Regulatory Authority framework.",
    details: [
      "Exchange traded derivatives (ETD) obligations",
      "Licensing requirements",
      "Suitability assessments",
      "Insurance fund design and recordkeeping architecture",
    ],
    icon: Landmark,
    image: "/consultancy-services/5.webp",
  },
  {
    number: "06",
    title: "Training & Capacity Building",
    summary:
      "In-house training programmes, compliance team upskilling, and certification preparation for ACAMS CAFS and related designations.",
    details: [
      "In-house team training",
      "Compliance team upskilling",
      "Certification preparation",
      "Cross-linked learning pathways",
    ],
    icon: GraduationCap,
    image: "/consultancy-services/6.webp",
  },
];

const btnClass =
  "static translate-y-0 size-11 shrink-0 rounded-full border border-zinc-200 bg-white text-[#061525] shadow-[0_12px_35px_rgba(6,21,37,0.12)] transition hover:-translate-y-0.5 hover:border-[#E25C8F]/45 disabled:translate-y-0 disabled:opacity-45";

const ServiceModulesSlider = () => {
  return (
    <div className="container">
      <Carousel
        opts={{ align: "start", dragFree: false }}
        className="w-full"
      >
        {/* Track row: prev button — slides — next button */}
        <div className="flex items-center gap-4">
          <CarouselPrevious className={btnClass}>
            <ArrowLeft className="size-5" />
          </CarouselPrevious>

          <CarouselContent className="-ml-6 items-stretch">
            {serviceModules.map((module) => {
              const Icon = module.icon;

              return (
                <CarouselItem
                  key={module.number}
                  className="pl-6 basis-full md:basis-1/2 xl:basis-1/3 h-auto"
                >
                  <Card className="group h-full flex flex-col gap-0 overflow-hidden rounded-[18px] border border-zinc-200 bg-white p-4 shadow-[0_20px_65px_rgba(6,21,37,0.13)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(6,21,37,0.18)]">
                    {/* Image area */}
                    <div className="relative h-56 overflow-hidden rounded-[14px] bg-zinc-100">
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#061525]/40 via-transparent to-transparent" />
                      <div className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-full bg-white text-[#061525] shadow-md">
                        <Icon className="size-5" />
                      </div>
                    </div>

                    {/* Meta row */}
                    <CardHeader className="flex flex-row items-center justify-between gap-4 border-b border-zinc-200 px-1 py-3! space-y-0">
                      <span className="text-sm text-zinc-500">
                        Module {module.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#E25C8F]">
                        Advisory
                      </span>
                    </CardHeader>

                    {/* Body */}
                    <CardContent className="flex flex-1 flex-col px-1 pt-4 pb-0">
                      <h3 className="text-2xl leading-tight text-[#061525]">
                        {module.title}
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                        {module.summary}
                      </p>

                      <div className="mt-6 space-y-2.5">
                        {module.details.slice(0, 3).map((detail) => (
                          <div key={detail} className="flex items-start gap-3">
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#E25C8F]" />
                            <span className="text-sm leading-relaxed text-zinc-700">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {module.href ? (
                        <Link
                          href={module.href}
                          className="mt-auto inline-flex items-center gap-2 pt-7 pb-1 text-sm font-semibold text-[#061525]"
                        >
                          Explore Learning
                          <ArrowUpRight className="size-4" />
                        </Link>
                      ) : null}
                    </CardContent>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselNext className={btnClass}>
            <ArrowRight className="size-5" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default ServiceModulesSlider;