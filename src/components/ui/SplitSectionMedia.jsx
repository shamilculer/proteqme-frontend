"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const SIZE_CLASSES = {
  overview:
    "h-[280px] sm:h-[380px] md:h-[520px] lg:h-[600px]",
  portrait:
    "aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[720px]",
  portraitTall:
    "aspect-[4/5] sm:aspect-[5/6] lg:aspect-auto lg:min-h-[760px]",
  expertise: "h-[500px] md:h-[560px]",
  why: "min-h-[360px] sm:min-h-[400px] md:min-h-[460px]",
  cms: "aspect-[4/3] min-h-[240px]",
  video:
    "aspect-video min-h-[220px] md:min-h-[340px] lg:min-h-[380px]",
};

const ACCENT_OFFSET = "pl-1.5 pt-1.5 sm:pl-2 sm:pt-2";

const FRAME_STYLES = {
  default: "rounded-[1.15rem] sm:rounded-[1.35rem]",
  soft: "rounded-[1.35rem] sm:rounded-[1.65rem]",
  tight: "rounded-xl sm:rounded-[1.15rem]",
  wide: "rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[1.65rem]",
};

function MediaImage({ src, alt, priority, sizes, className }) {
  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt || ""}
      fill
      priority={priority}
      sizes={sizes}
      className={cn("object-cover", className)}
    />
  );
}

/**
 * Split-section media: thin pink top/left accent + rounded image (no overlay).
 */
export default function SplitSectionMedia({
  src,
  alt,
  children,
  frame = "default",
  size = "overview",
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className,
  imageClassName,
  frameClassName,
}) {
  const sizeClass = SIZE_CLASSES[size] ?? SIZE_CLASSES.overview;
  const radiusClass = FRAME_STYLES[frame] ?? FRAME_STYLES.default;
  const hasCustomContent = Boolean(children);

  const media = hasCustomContent ? (
    children
  ) : (
    <MediaImage
      src={src}
      alt={alt}
      priority={priority}
      sizes={sizes}
      className={imageClassName}
    />
  );

  return (
    <div className={cn("relative w-full max-w-xl lg:max-w-none", ACCENT_OFFSET, className)}>
      <div
        aria-hidden
        className={cn("absolute inset-0 bg-primary", radiusClass)}
      />

      <div
        className={cn(
          "relative overflow-hidden bg-proteq-dark shadow-[0_24px_64px_rgba(35,17,67,0.16)]",
          radiusClass,
          sizeClass,
          frameClassName
        )}
      >
        {media}
      </div>
    </div>
  );
}
