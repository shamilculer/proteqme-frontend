"use client";

import { cn } from "@/lib/utils";

const SIZES = {
  sm: "size-10 rounded-xl [&_svg]:size-4",
  md: "size-14 rounded-2xl [&_svg]:size-7",
  lg: "size-16 rounded-2xl [&_svg]:size-8",
};

export default function FeatureIconBox({
  children,
  size = "md",
  className,
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center border border-primary/15 bg-primary/[0.07] text-primary shadow-[0_10px_24px_rgba(232,24,90,0.08)] transition duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white",
        SIZES[size],
        className
      )}
    >
      {children}
    </span>
  );
}
