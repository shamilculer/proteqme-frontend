"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import ActionButton from "@/components/ui/ActionButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { homeHeroSlides } from "@/data/homeHeroSlides";
import {
  pageEnterHiddenX,
  pageEnterSpring,
  pageEnterVisible,
  popHidden,
} from "@/lib/motion-presets";
import { useSlideMetrics } from "@/lib/use-slide-metrics";
import { cn } from "@/lib/utils";
import { heroHeadingClass } from "@/lib/heroTypography";

const ParticleNetwork = dynamic(
  () => import("@/components/ui/ParticleNetwork"),
  { ssr: false }
);

const navBtnClass =
  "flex size-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-foreground shadow-[0_8px_28px_rgba(13,13,20,0.1)] transition hover:scale-105 hover:border-primary/30 sm:size-12";

const slideHeadingClass = heroHeadingClass;

function HeroSlidePanel({ slide, index, isActive, slideCount }) {
  const reduceMotion = useReducedMotion();
  const { x: slideX } = useSlideMetrics();

  const childReveal = {
    hidden: popHidden(-slideX),
    visible: (delay = 0) => ({
      ...pageEnterVisible,
      transition: pageEnterSpring(delay),
    }),
  };
  const [enterKey, setEnterKey] = useState(index === 0 ? 1 : 0);
  const Heading = index === 0 ? "h1" : "h2";

  useEffect(() => {
    if (isActive && !reduceMotion) {
      setEnterKey((key) => key + 1);
    }
  }, [isActive, reduceMotion]);

  const shouldAnimate = !reduceMotion && isActive && enterKey > 0;

  return (
    <article
      className="relative w-full"
      aria-roledescription="slide"
      aria-label={`${slide.tag} — slide ${index + 1} of ${slideCount}`}
    >
      <div className="container grid min-h-[min(calc(100svh-5.5rem),700px)] items-center gap-6 py-6 pb-14 sm:gap-8 sm:py-8 sm:pb-16 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10 lg:py-8 lg:pb-14">
        <div className="relative z-10 flex flex-col items-start">
          <motion.div
            key={`eyebrow-${slide.id}-${enterKey}`}
            custom={0.06}
            initial={shouldAnimate ? "hidden" : false}
            animate={shouldAnimate ? "visible" : false}
            variants={childReveal}
            className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-zinc-200/80 bg-zinc-50 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]"
          >
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-600 sm:text-xs">
              {slide.tag}
            </span>
          </motion.div>

          <motion.div
            key={`title-${slide.id}-${enterKey}`}
            custom={0.12}
            initial={shouldAnimate ? "hidden" : false}
            animate={shouldAnimate ? "visible" : false}
            variants={childReveal}
          >
            <Heading className={slideHeadingClass}>{slide.title}</Heading>
          </motion.div>

          <motion.p
            key={`desc-${slide.id}-${enterKey}`}
            custom={0.2}
            initial={shouldAnimate ? "hidden" : false}
            animate={shouldAnimate ? "visible" : false}
            variants={childReveal}
            className="mt-5 max-w-lg text-sm leading-relaxed text-zinc-600 sm:mt-6 sm:text-sm md:text-base"
          >
            {slide.description}
          </motion.p>

          <motion.div
            key={`cta-${slide.id}-${enterKey}`}
            custom={0.28}
            initial={shouldAnimate ? "hidden" : false}
            animate={shouldAnimate ? "visible" : false}
            variants={childReveal}
            className="mt-6 w-full sm:mt-8"
          >
            {slide.cta ? (
              <ActionButton
                {...slide.cta}
                glowingDot={slide.cta.glowingDot ?? true}
                showArrow={slide.cta.showArrow ?? true}
                className="w-full shadow-[0_8px_30px_rgba(232,24,90,0.25)] sm:w-auto"
              />
            ) : null}
          </motion.div>
        </div>

        <motion.div
          key={`image-${slide.id}-${enterKey}`}
          className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-2xl border border-zinc-200/70 shadow-[0_24px_70px_rgba(13,13,20,0.1)] sm:aspect-[16/10] lg:aspect-[4/3]"
          initial={shouldAnimate ? pageEnterHiddenX(slideX) : false}
          animate={shouldAnimate ? pageEnterVisible : false}
          transition={pageEnterSpring(0.12)}
        >
          <Image
            src={slide.image}
            alt={slide.imageAlt}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 46vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </div>
    </article>
  );
}

export default function Hero({ slides: slidesProp }) {
  const slides = slidesProp?.length ? slidesProp : homeHeroSlides;
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

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: true, duration: 35 }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="pl-0">
              <HeroSlidePanel
                slide={slide}
                index={index}
                isActive={current === index}
                slideCount={slides.length}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20">
        <div className="container pointer-events-auto flex items-center justify-end gap-3 pb-4 sm:pb-5 md:pb-6">
          <div className="mr-auto flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}: ${slide.tag}`}
                aria-current={current === index ? "true" : undefined}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-500 ease-out",
                  current === index
                    ? "w-8 bg-primary"
                    : "w-1.5 bg-zinc-300 hover:bg-zinc-400"
                )}
              />
            ))}
          </div>

          <span className="text-xs font-medium tabular-nums text-zinc-500">
            {String(current + 1).padStart(2, "0")} /{" "}
            {String(slides.length).padStart(2, "0")}
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
