"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import HeroLeadPopup from "@/components/forms/HeroLeadPopup";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { homeHeroSlides } from "@/data/homeHeroSlides";
import { cn } from "@/lib/utils";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const navBtnClass =
  "flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-foreground shadow-[0_8px_28px_rgba(13,13,20,0.1)] transition hover:scale-105 hover:border-primary/30 sm:size-12";

/** Matches global h1 scale — h2 slides need ! to override default h2 styles */
const slideHeadingClass =
  "max-w-xl font-heading font-semibold tracking-tight text-foreground lg:max-w-2xl text-[38px]! leading-[1.15]! md:text-6xl! lg:text-[68px]!";

export default function Hero() {
  const [leadPopupOpen, setLeadPopupOpen] = useState(false);
  const manualOpenRef = useRef(false);
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  const openLeadPopup = () => {
    manualOpenRef.current = true;
    setLeadPopupOpen(true);
  };

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

    const root = document.getElementById("home-hero");
    let autoplayId = null;
    let paused = false;

    const tick = () => {
      if (paused) return;
      if (api.canScrollNext()) api.scrollNext();
      else api.scrollTo(0);
    };

    autoplayId = window.setInterval(tick, 7000);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    root?.addEventListener("mouseenter", pause);
    root?.addEventListener("mouseleave", resume);
    root?.addEventListener("focusin", pause);
    root?.addEventListener("focusout", resume);

    return () => {
      if (autoplayId) window.clearInterval(autoplayId);
      root?.removeEventListener("mouseenter", pause);
      root?.removeEventListener("mouseleave", resume);
      root?.removeEventListener("focusin", pause);
      root?.removeEventListener("focusout", resume);
    };
  }, [api]);

  return (
    <section
      id="home-hero"
      className="section-light-white relative isolate w-full overflow-hidden border-b border-zinc-200/70"
      aria-roledescription="carousel"
      aria-label="Homepage hero"
    >
      <ParticleNetwork variant="light" id="hero-particles" />

      <HeroLeadPopup
        open={leadPopupOpen}
        onOpenChange={setLeadPopupOpen}
        manualOpenRef={manualOpenRef}
      />

      <Carousel setApi={setApi} opts={{ align: "start", loop: true }} className="w-full">
        <CarouselContent className="-ml-0">
          {homeHeroSlides.map((slide, index) => {
            const Heading = index === 0 ? "h1" : "h2";

            return (
              <CarouselItem key={slide.id} className="pl-0">
                <article
                  className="relative w-full"
                  aria-roledescription="slide"
                  aria-label={`${slide.tag} — slide ${index + 1} of ${homeHeroSlides.length}`}
                >
                  <div className="container grid min-h-[min(85svh,820px)] items-center gap-8 py-10 pb-20 sm:gap-10 sm:py-12 sm:pb-24 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14 lg:py-16 lg:pb-20">
                    <div className="relative z-10 flex flex-col items-start">
                      <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-zinc-50 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                        <span className="relative flex h-2 w-2 shrink-0">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600 sm:text-xs">
                          {slide.tag}
                        </span>
                      </div>

                      <Heading className={slideHeadingClass}>
                        {slide.title}
                      </Heading>

                      <p className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-600 sm:mt-6 sm:text-base md:text-lg">
                        {slide.description}
                      </p>

                      <div className="mt-8 w-full sm:mt-10">
                        {slide.opensConsultation ? (
                          <Button
                            type="button"
                            onClick={openLeadPopup}
                            glowingDot
                            showArrow
                            className="h-13 w-full px-8 text-base font-semibold shadow-[0_8px_30px_rgba(232,24,90,0.25)] sm:w-auto"
                          >
                            {slide.cta}
                          </Button>
                        ) : (
                          <Button
                            href={slide.href}
                            showArrow
                            glowingDot
                            className="h-13 w-full px-8 text-base font-semibold shadow-[0_8px_30px_rgba(232,24,90,0.25)] sm:w-auto"
                          >
                            {slide.cta}
                          </Button>
                        )}
                      </div>
                    </div>

                    <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200/70 shadow-[0_24px_70px_rgba(13,13,20,0.1)] sm:aspect-[16/10] lg:aspect-[4/3]">
                      <Image
                        src={slide.image}
                        alt={slide.imageAlt}
                        fill
                        priority={index === 0}
                        sizes="(min-width: 1024px) 46vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </article>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="container pointer-events-auto flex items-center justify-end gap-3 pb-6 sm:pb-8 md:pb-10">
          <div className="mr-auto flex items-center gap-2">
            {homeHeroSlides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.tag}`}
                aria-current={current === index ? "true" : undefined}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  current === index
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                )}
              />
            ))}
          </div>

          <span className="text-xs font-medium tabular-nums text-zinc-500">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(homeHeroSlides.length).padStart(2, "0")}
          </span>
          <button
            type="button"
            onClick={() => api?.scrollPrev()}
            aria-label="Previous slide"
            className={navBtnClass}
          >
            <ArrowLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={() => api?.scrollNext()}
            aria-label="Next slide"
            className={navBtnClass}
          >
            <ArrowRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
