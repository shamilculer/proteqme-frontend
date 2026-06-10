"use client";

import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/lib/use-media-query";

const pageCtas = {
  "/": { label: "Book a Free Demo", href: "/contact" },
  "/consultancy-advisory": {
    label: "Book a Consultation",
    href: "/contact",
  },
  "/learning": { label: "Browse Courses", href: "#training-programmes" },
  "/systems": { label: "Request Assessment", href: "/contact" },
  "/ai-investments": { label: "Explore Aurum", href: "https://aurum-foundation.com/" },
  "/become-a-partner": { label: "Apply to Partner", href: "#partner-form" },
  "/contact": null,
};

export default function MobileStickyCTA() {
  const pathname = usePathname();
  const isMobile = useMediaQuery("(max-width: 767px)");
  const cta = pageCtas[pathname] ?? { label: "Book a Free Demo", href: "/contact" };

  if (!isMobile || !cta) return null;

  const isExternal = cta.href.startsWith("http");

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-zinc-200/80 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(13,13,20,0.08)] backdrop-blur-md md:hidden"
      role="region"
      aria-label="Quick action"
    >
      <Button
        href={cta.href}
        showArrow
        glowingDot
        className="h-12 w-full text-sm"
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
      >
        {cta.label}
      </Button>
    </div>
  );
}
