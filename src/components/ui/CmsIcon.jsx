"use client";

import Image from "next/image";
import { resolveIcon } from "@/lib/iconMap";
import { cn } from "@/lib/utils";

/**
 * Renders a CMS icon as either a Lucide component or an uploaded image.
 */
export default function CmsIcon({
  icon,
  lucide,
  src,
  alt = "",
  className,
  strokeWidth = 1.75,
  size,
}) {
  const imageSrc =
    src ||
    (icon && typeof icon === "object" && !Array.isArray(icon) ? icon.src : null)

  if (imageSrc) {
    const dimension = size || 18;
    return (
      <Image
        src={imageSrc}
        alt={alt || icon?.alt || ""}
        width={dimension}
        height={dimension}
        className={cn("shrink-0 object-contain", className)}
      />
    );
  }

  const lucideKey =
    lucide ||
    (typeof icon === "string" ? icon : icon?.lucide) ||
  null;

  if (typeof icon === "function") {
    const LegacyIcon = icon;
    return (
      <LegacyIcon
        className={className}
        strokeWidth={strokeWidth}
        size={size}
      />
    );
  }

  const Icon = resolveIcon(lucideKey);
  return (
    <Icon className={className} strokeWidth={strokeWidth} size={size} />
  );
}
