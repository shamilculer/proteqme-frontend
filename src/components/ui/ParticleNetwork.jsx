"use client";

import { Component, useEffect, useMemo, useState } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { cn } from "@/lib/utils";
import {
  heroParticleOptions,
  particlesEngineInit,
} from "@/lib/hero-particles";

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
      className={cn(
        "particles-canvas pointer-events-none absolute inset-0 z-[2] h-full w-full",
        className
      )}
      options={options}
    />
  );
}

export default function ParticleNetwork({
  id = "hero-particles",
  className,
}) {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setEnabled(!media.matches);

    const handleChange = (event) => {
      setEnabled(!event.matches);
    };

    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  if (!enabled) return null;

  return (
    <ParticleErrorBoundary>
      <ParticlesProvider init={particlesEngineInit}>
        <ParticleCanvas id={id} className={className} />
      </ParticlesProvider>
    </ParticleErrorBoundary>
  );
}
