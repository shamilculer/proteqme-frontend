"use client";

import { Component, useEffect, useMemo, useRef, useState } from "react";
import Particles from "@tsparticles/react";
import { cn } from "@/lib/utils";
import { heroParticleOptions } from "@/lib/hero-particles";

class ParticleErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return null;
    return this.props.children;
  }
}

function ParticleCanvas({ id, className }) {
  const options = useMemo(() => heroParticleOptions, []);

  return (
    <Particles
      id={id}
      className={cn("particles-canvas h-full w-full", className)}
      options={options}
    />
  );
}

export default function ParticleNetwork({
  id = "hero-particles",
  className,
}) {
  const hostRef = useRef(null);
  const [enabled, setEnabled] = useState(true);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(!media.matches);

    const handleChange = (event) => {
      setEnabled(!event.matches);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const target =
      host.closest("section") ??
      host.closest("[class*='hero-home-pattern']") ??
      host.parentElement;

    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0, rootMargin: "0px" }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!enabled) return null;

  return (
    <ParticleErrorBoundary>
      <div
        ref={hostRef}
        className="pointer-events-none absolute inset-0 z-[2] overflow-hidden [clip-path:inset(0)]"
        aria-hidden
      >
        {inView ? <ParticleCanvas id={id} className={className} /> : null}
      </div>
    </ParticleErrorBoundary>
  );
}
