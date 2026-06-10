"use client";

import { ParticlesProvider } from "@tsparticles/react";
import { particlesEngineInit } from "@/lib/hero-particles";

export default function ParticlesRoot({ children }) {
  return (
    <ParticlesProvider init={particlesEngineInit}>
      {children}
    </ParticlesProvider>
  );
}
