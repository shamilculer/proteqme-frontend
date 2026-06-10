"use client";

import { useCallback, useEffect, useState } from "react";
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
import { cn } from "@/lib/utils";

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

const navBtnClass =
  "size-11 shrink-0 rounded-full border border-zinc-200 bg-white text-foreground shadow-[0_12px_35px_rgba(13,13,20,0.12)] transition hover:scale-105 hover:border-primary/45 disabled:opacity-45";

const desktopNavBtnClass =
  "absolute top-1/2 z-10 hidden -translate-y-1/2 md:inline-flex";

const ServiceModulesSlider = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const onSelect = useCallback(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
      api.off("reInit", onSelect);
    };
  }, [api, onSelect]);

  useEffect(() => {
    if (!api) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    const section = document.getElementById("advisory-modules");
    let autoplayId = null;
    let paused = false;

    const tick = () => {
      if (paused) return;
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    };

    autoplayId = window.setInterval(tick, 6000);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    section?.addEventListener("mouseenter", pause);
    section?.addEventListener("mouseleave", resume);
    section?.addEventListener("focusin", pause);
    section?.addEventListener("focusout", resume);

    return () => {
      if (autoplayId) window.clearInterval(autoplayId);
      section?.removeEventListener("mouseenter", pause);
      section?.removeEventListener("mouseleave", resume);
      section?.removeEventListener("focusin", pause);
      section?.removeEventListener("focusout", resume);
    };
  }, [api]);

  return (
    <div className="relative z-10 mt-2 w-full px-4.5 sm:container sm:px-4">
      <Carousel
        setApi={setApi}
        opts={{ align: "start", dragFree: false, loop: true }}
        className="w-full"
      >
        <div className="relative md:px-14">
          <CarouselContent className="-ml-3 items-stretch sm:-ml-4 md:-ml-6">
            {serviceModules.map((module) => {
              const Icon = module.icon;

              return (
                <CarouselItem
                  key={module.number}
                  className="h-auto basis-full pl-3 sm:pl-4 md:basis-1/2 md:pl-6 xl:basis-1/3"
                >
                  <Card className="group flex h-full flex-col gap-0 overflow-hidden rounded-2xl border border-white/20 bg-white p-3 shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_32px_90px_rgba(0,0,0,0.45)] sm:p-4">
                    <div className="relative h-48 overflow-hidden rounded-xl bg-zinc-100 sm:h-56">
                      <Image
                        src={module.image}
                        alt={module.title}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-proteq-dark/50 via-transparent to-transparent" />
                      <div className="absolute left-3 top-3 flex size-10 items-center justify-center rounded-xl border border-white/80 bg-white/95 shadow-md sm:left-4 sm:top-4 sm:size-11">
                        <Icon
                          className="size-5 text-primary"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>

                    <CardHeader className="flex flex-row items-center justify-between gap-3 space-y-0 border-b border-zinc-200 px-0 py-3! sm:gap-4">
                      <span className="text-sm text-zinc-500">
                        Module {module.number}
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                        Advisory
                      </span>
                    </CardHeader>

                    <CardContent className="flex flex-1 flex-col px-0 pt-3 pb-0 sm:pt-4">
                      <h3 className="text-xl leading-snug text-foreground sm:text-2xl sm:leading-tight">
                        {module.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:mt-4">
                        {module.summary}
                      </p>

                      <div className="mt-5 space-y-2 sm:mt-6 sm:space-y-2.5">
                        {module.details.slice(0, 3).map((detail) => (
                          <div
                            key={detail}
                            className="flex items-start gap-2.5 sm:gap-3"
                          >
                            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                            <span className="text-sm leading-relaxed text-zinc-700">
                              {detail}
                            </span>
                          </div>
                        ))}
                      </div>

                      {module.href ? (
                        <Link
                          href={module.href}
                          className="mt-auto inline-flex items-center gap-2 pt-6 pb-1 text-sm font-semibold text-foreground sm:pt-7"
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

          <CarouselPrevious
            className={cn(navBtnClass, desktopNavBtnClass, "left-0")}
          >
            <ArrowLeft className="size-5" />
          </CarouselPrevious>

          <CarouselNext
            className={cn(navBtnClass, desktopNavBtnClass, "right-0")}
          >
            <ArrowRight className="size-5" />
          </CarouselNext>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4 md:hidden">
          <CarouselPrevious className={cn(navBtnClass, "static")}>
            <ArrowLeft className="size-5" />
          </CarouselPrevious>
          <CarouselNext className={cn(navBtnClass, "static")}>
            <ArrowRight className="size-5" />
          </CarouselNext>
        </div>
      </Carousel>

      <div className="mt-6 flex items-center justify-center gap-2">
        {serviceModules.map((module, index) => (
          <button
            key={module.number}
            type="button"
            onClick={() => api?.scrollTo(index)}
            aria-label={`Go to ${module.title}`}
            aria-current={current === index ? "true" : undefined}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              current === index
                ? "w-8 bg-primary"
                : "w-1.5 bg-white/35 hover:bg-white/55"
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceModulesSlider;
