"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, GraduationCap, Layers, ShieldCheck } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ScrollReveal } from "../ui/scroll-reveal";
import { cn } from "@/lib/utils";

const services = [
  {
    number: "01",
    tag: "Advisory",
    title: "Consultancy & Advisory",
    description:
      "Expert guidance on AML compliance frameworks, anti-fraud programme design, risk assessment, and regulatory readiness — built to stand up to regulatory scrutiny.",
    href: "/consultancy-bg",
    cta: "Book a Free Consultation",
    icon: ShieldCheck,
    image: "/consulting-bg.webp",
    imageAlt: "Compliance advisory consultation",
  },
  {
    number: "02",
    tag: "Learning",
    title: "Professional Learning",
    description:
      "Practitioner-led webinars, structured courses, and certification preparation for compliance teams who need audit-ready knowledge — not textbook theory.",
    href: "/learning",
    cta: "Browse Courses",
    icon: GraduationCap,
    image: "/learning-3.webp",
    imageAlt: "Professional compliance learning",
  },
  {
    number: "03",
    tag: "Systems",
    title: "RegTech Systems",
    description:
      "Vendor-neutral evaluation and implementation of AML screening, transaction monitoring, and KYC platforms — recommended on obligation, not commission.",
    href: "/systems",
    cta: "Request a Systems Assessment",
    icon: Layers,
    image: "/system-provider.webp",
    imageAlt: "RegTech systems and compliance technology",
  },
];

const navBtnClass =
  "absolute top-1/2 z-20 flex size-12 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-proteq-dark shadow-[0_8px_28px_rgba(0,0,0,0.18)] transition hover:scale-105 hover:shadow-[0_12px_36px_rgba(0,0,0,0.22)]";

export default function ServicesSlider() {
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

  return (
    <section id="services" className="section-dark section-bg-pattern py-14 md:py-20">
      <div className="container relative z-10">
        <div className="mb-8 flex flex-col gap-5 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
          <ScrollReveal>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/65">
              Solutions Blueprint
            </p>
            <h2 className="text-section-heading max-w-2xl text-white">
              Integrated Advisory, Learning, and RegTech
            </h2>
          </ScrollReveal>

          <ScrollReveal xOffset={12} className="max-w-lg">
            <p className="text-sm leading-relaxed text-white/75 md:text-base">
              Three integrated capabilities — advisory, learning, and RegTech —
              each scoped to your regulatory obligations, risk appetite, and
              operational scale.
            </p>
          </ScrollReveal>
        </div>

        <div className="relative md:px-16 lg:px-20">
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-0">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <CarouselItem key={service.title} className="pl-0">
                    <article className="group overflow-hidden rounded-2xl border border-white/20 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.45),0_0_0_1px_rgba(255,255,255,0.08)] md:grid md:h-[480px] lg:h-[520px] md:grid-cols-[1.05fr_1fr]">
                      <div className="relative flex flex-col justify-between p-7 sm:p-10 lg:p-12">
                        <span
                          className="font-serif-quote pointer-events-none absolute right-5 top-4 text-6xl leading-none text-zinc-100 md:text-7xl"
                          aria-hidden
                        >
                          {service.number}
                        </span>

                        <div className="relative z-10">
                          <div className="mb-5 flex items-center gap-3">
                            <div className="icon-ghost-pink flex size-11 items-center justify-center rounded-xl">
                              <Icon
                                className="size-5 text-primary"
                                strokeWidth={1.75}
                              />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                              {service.tag}
                            </span>
                          </div>

                          <h3 className="mb-4 text-2xl font-semibold leading-snug text-foreground sm:text-4xl lg:text-[2.75rem]">
                            {service.title}
                          </h3>
                          <p className="max-w-lg text-sm leading-[1.75] text-zinc-600 sm:text-base">
                            {service.description}
                          </p>
                        </div>

                        <div className="relative z-10 mt-8 flex flex-col gap-3 border-t border-zinc-200 pt-6 sm:flex-row sm:flex-wrap sm:items-center">
                          <Link
                            href={service.href}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white transition hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(232,24,90,0.35)] sm:w-auto"
                          >
                            {service.cta}
                            <ArrowRight className="size-4" />
                          </Link>

                          <Link
                            href={service.href}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-zinc-50 px-5 py-3 text-sm font-semibold text-proteq-dark transition hover:bg-zinc-100 sm:w-auto"
                          >
                            Learn more
                            <ArrowRight className="size-4" />
                          </Link>
                        </div>
                      </div>

                      <div className="relative h-56 border-t border-zinc-200 sm:h-64 md:h-full md:border-t-0 md:border-l">
                        <Image
                          src={service.image}
                          alt={service.imageAlt}
                          fill
                          className="object-cover transition duration-700 group-hover:scale-[1.03]"
                          sizes="(min-width: 768px) 50vw, 100vw"
                          priority={service.number === "01"}
                        />
                      </div>
                    </article>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>

          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous service"
            className={cn(navBtnClass, "left-0 max-md:top-[38%]")}
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next service"
            className={cn(navBtnClass, "right-0 max-md:top-[38%]")}
          >
            <ArrowRight className="size-5" />
          </button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {services.map((service, index) => (
            <button
              key={service.number}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to ${service.title}`}
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
    </section>
  );
}
