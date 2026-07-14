"use client";

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

const navBtnClass =
  "flex size-11 items-center justify-center rounded-full border border-white/70 bg-white/95 text-foreground shadow-[0_8px_28px_rgba(13,13,20,0.18)] backdrop-blur-sm transition hover:scale-105 hover:border-primary/40 sm:size-12";

const slideHeadingClass = cn(
  heroHeadingClass,
  "text-zinc-950 drop-shadow-[0_1px_0_rgba(255,255,255,0.55)]",
);

function resolveSlideCta(slide) {
  if (!slide?.cta) return null;
  if (typeof slide.cta === "object") return slide.cta;
  if (typeof slide.cta === "string") {
    return {
      label: slide.cta,
      href: slide.href || "/contact",
      actionType: slide.opensConsultation ? "popup" : "link",
      popupSlug: slide.opensConsultation ? "consultation" : undefined,
      glowingDot: true,
      showArrow: true,
    };
  }
  return null;
}

function HeroSlidePanel({ slide, index, isActive, slideCount }) {
  const reduceMotion = useReducedMotion();
  const { x: slideX } = useSlideMetrics();
  const cta = resolveSlideCta(slide);

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
      <div className="relative isolate min-h-[min(calc(100svh-5.5rem),720px)] w-full overflow-hidden sm:min-h-[min(calc(100svh-5.5rem),640px)] lg:min-h-[min(calc(100svh-5.5rem),680px)]">
        {/* Full-bleed banner — separate mobile / desktop assets when provided */}
        <div className="absolute inset-0">
          <Image
            src={slide.mobileImage || slide.image}
            alt={slide.imageAlt || slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover object-center lg:hidden"
          />
          <Image
            src={slide.image}
            alt={slide.imageAlt || slide.title}
            fill
            priority={index === 0}
            sizes="100vw"
            className="hidden object-cover object-[62%_center] lg:block"
          />
        </div>

        <div className="container relative z-10 flex min-h-[inherit] items-start pt-8 pb-24 sm:pt-12 sm:pb-24 lg:items-center lg:py-16 lg:pb-20">
          <div className="relative z-10 flex w-full max-w-xl flex-col items-start lg:max-w-2xl">
            <motion.div
              key={`eyebrow-${slide.id}-${enterKey}`}
              custom={0.06}
              initial={shouldAnimate ? "hidden" : false}
              animate={shouldAnimate ? "visible" : false}
              variants={childReveal}
              className="mb-3.5 inline-flex items-center gap-2.5 rounded-full border border-zinc-200/90 bg-white/90 px-4 py-1.5 shadow-[0_1px_2px_rgba(0,0,0,0.04)] backdrop-blur-sm sm:mb-4"
            >
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-zinc-700 sm:text-xs">
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
              className="mt-3.5 max-w-lg text-sm leading-relaxed text-zinc-700 sm:mt-4 sm:text-base md:text-[1.05rem] md:leading-relaxed"
            >
              {slide.description}
            </motion.p>

            <motion.div
              key={`cta-${slide.id}-${enterKey}`}
              custom={0.28}
              initial={shouldAnimate ? "hidden" : false}
              animate={shouldAnimate ? "visible" : false}
              variants={childReveal}
              className="mt-5 w-full sm:mt-6"
            >
              {cta ? (
                <ActionButton
                  {...cta}
                  glowingDot={cta.glowingDot ?? true}
                  showArrow={cta.showArrow ?? true}
                  className="h-10! w-full px-4! text-sm! shadow-[0_8px_30px_rgba(232,24,90,0.28)] sm:h-11! sm:w-auto sm:px-5! sm:text-[15px]! [&_span.w-7]:h-6! [&_span.w-7]:w-6!"
                />
              ) : null}
            </motion.div>
          </div>
        </div>
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
      className="relative isolate w-full overflow-hidden bg-zinc-100"
      aria-roledescription="carousel"
      aria-label="Homepage hero"
    >
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
        <div className="container pointer-events-auto flex items-center justify-end gap-3 pb-5 sm:pb-6 md:pb-7">
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
                    : "w-1.5 bg-white/70 hover:bg-white",
                )}
              />
            ))}
          </div>

          <span className="rounded-full bg-black/35 px-2.5 py-1 text-xs font-medium tabular-nums text-white backdrop-blur-sm">
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
