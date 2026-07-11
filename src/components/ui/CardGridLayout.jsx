"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { itemKey } from "@/lib/listKey";
import { StaggerContainer, StaggerItem } from "@/components/ui/scroll-reveal";

function CarouselTrack({
  items,
  renderCard,
  getItemKey,
  carouselMinHeight,
  carouselAriaLabel,
  trackRef,
  activeIndex,
  scrollToIndex,
}) {
  return (
    <>
      <div
        ref={trackRef}
        className="industries-snap-track -mx-1 px-1"
        aria-label={carouselAriaLabel}
      >
        {items.map((item, index) => (
          <div
            key={getItemKey(item, index)}
            className="h-full"
            style={{ minHeight: carouselMinHeight }}
          >
            {renderCard(item, index)}
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-2">
        {items.map((item, index) => (
          <button
            key={getItemKey(item, index)}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
            onClick={() => scrollToIndex(index)}
            className={cn(
              "size-2 rounded-full transition",
              activeIndex === index
                ? "bg-primary scale-110"
                : "bg-zinc-300 hover:bg-zinc-400",
            )}
          />
        ))}
      </div>
    </>
  );
}

export default function CardGridLayout({
  items,
  layout = "grid",
  gridClassName,
  renderCard,
  getItemKey = (item, index) => itemKey(item, index),
  staggerChildren = 0.06,
  carouselMinHeight = "320px",
  carouselAriaLabel = "Cards carousel",
}) {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const showMobileCarousel = layout === "carousel-grid" || layout === "carousel";
  const showDesktopCarousel = layout === "carousel";
  const showGrid = layout === "grid" || layout === "carousel-grid";

  const updateActiveIndex = useCallback(() => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;

    const card = track.firstElementChild;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = 16;
    const index = Math.round(track.scrollLeft / (cardWidth + gap));
    setActiveIndex(Math.min(Math.max(index, 0), items.length - 1));
  }, [items.length]);

  useEffect(() => {
    if (!showMobileCarousel && !showDesktopCarousel) return undefined;

    const track = trackRef.current;
    if (!track) return undefined;

    updateActiveIndex();
    track.addEventListener("scroll", updateActiveIndex, { passive: true });
    window.addEventListener("resize", updateActiveIndex);

    return () => {
      track.removeEventListener("scroll", updateActiveIndex);
      window.removeEventListener("resize", updateActiveIndex);
    };
  }, [showMobileCarousel, showDesktopCarousel, updateActiveIndex]);

  useEffect(() => {
    if (!showMobileCarousel && !showDesktopCarousel) return undefined;

    const track = trackRef.current;
    if (!track) return undefined;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return undefined;

    let autoplayId = null;
    let paused = false;

    const tick = () => {
      if (paused || !track.firstElementChild) return;

      const card = track.firstElementChild;
      const cardWidth = card.getBoundingClientRect().width;
      const gap = 16;
      const maxScroll = track.scrollWidth - track.clientWidth;

      if (track.scrollLeft >= maxScroll - 4) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: cardWidth + gap, behavior: "smooth" });
      }
    };

    autoplayId = window.setInterval(tick, 6500);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", resume);
    track.addEventListener("focusin", pause);
    track.addEventListener("focusout", resume);

    return () => {
      if (autoplayId) window.clearInterval(autoplayId);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", resume);
      track.removeEventListener("focusin", pause);
      track.removeEventListener("focusout", resume);
    };
  }, [showMobileCarousel, showDesktopCarousel, items.length]);

  const scrollToIndex = (index) => {
    const track = trackRef.current;
    if (!track?.firstElementChild) return;

    const card = track.firstElementChild;
    const cardWidth = card.getBoundingClientRect().width;
    track.scrollTo({ left: index * (cardWidth + 16), behavior: "smooth" });
  };

  return (
    <>
      {showMobileCarousel ? (
        <div className={showDesktopCarousel ? undefined : "lg:hidden"}>
          <CarouselTrack
            items={items}
            renderCard={renderCard}
            getItemKey={getItemKey}
            carouselMinHeight={carouselMinHeight}
            carouselAriaLabel={carouselAriaLabel}
            trackRef={trackRef}
            activeIndex={activeIndex}
            scrollToIndex={scrollToIndex}
          />
        </div>
      ) : null}

      {showGrid ? (
        <StaggerContainer
          className={cn(
            "grid gap-4",
            gridClassName,
            layout === "carousel-grid" && "hidden lg:grid",
          )}
          staggerChildren={staggerChildren}
        >
          {items.map((item, index) => (
            <StaggerItem key={getItemKey(item, index)} className="h-full">
              {renderCard(item, index)}
            </StaggerItem>
          ))}
        </StaggerContainer>
      ) : null}
    </>
  );
}
