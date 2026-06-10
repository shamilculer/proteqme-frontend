import { cn } from "@/lib/utils";

export default function HeroOverlays({ className }) {
  return (
    <>
      <div
        className={cn(
          "hero-home-overlay pointer-events-none absolute inset-0 z-[1] lg:hidden",
          className
        )}
        aria-hidden
      />
      <div
        className={cn(
          "hero-home-overlay-side pointer-events-none absolute inset-0 z-[1] hidden lg:block",
          className
        )}
        aria-hidden
      />
      <div
        className={cn(
          "hero-home-overlay-accent pointer-events-none absolute inset-0 z-[1]",
          className
        )}
        aria-hidden
      />
    </>
  );
}
