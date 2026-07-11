import { loadSlim } from "@tsparticles/slim";
import { loadInteractivityPlugin } from "@tsparticles/plugin-interactivity";
import { loadExternalGrabInteraction } from "@tsparticles/interaction-external-grab";
import { loadExternalRepulseInteraction } from "@tsparticles/interaction-external-repulse";
import { loadExternalPushInteraction } from "@tsparticles/interaction-external-push";
import { loadExternalAttractInteraction } from "@tsparticles/interaction-external-attract";

/** @type {import("@tsparticles/engine").ISourceOptions} */
export const heroParticleOptions = {
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  fpsLimit: 60,
  detectRetina: true,
  background: {
    color: {
      value: "transparent",
    },
  },
  particles: {
    number: {
      value: 56,
      density: {
        enable: true,
        width: 1200,
        height: 700,
      },
    },
    color: {
      value: ["#ffffff", "#ffffff", "#f4f6f9", "#E8185A"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.38,
        max: 0.58,
      },
      animation: {
        enable: true,
        speed: 0.3,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    size: {
      value: {
        min: 2.5,
        max: 4,
      },
      animation: {
        enable: false,
      },
    },
    links: {
      enable: true,
      distance: 155,
      color: "#ffffff",
      opacity: 0.32,
      width: 1.15,
      triangles: {
        enable: true,
        color: "#E8185A",
        opacity: 0.07,
      },
    },
    move: {
      enable: true,
      speed: {
        min: 0.25,
        max: 1,
      },
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce",
      },
      attract: {
        enable: true,
        rotate: {
          x: 800,
          y: 1600,
        },
      },
    },
  },
  interactivity: {
    detectsOn: "parent",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "repulse"],
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 200,
        links: {
          blink: false,
          consent: false,
          opacity: 0.55,
          color: "#E8185A",
        },
      },
      repulse: {
        distance: 120,
        duration: 0.5,
        factor: 0.6,
        speed: 0.6,
      },
      push: {
        quantity: 2,
      },
      attract: {
        distance: 200,
        duration: 0.4,
        factor: 0.6,
      },
    },
  },
};

/** @type {import("@tsparticles/engine").ISourceOptions} */
export const lightParticleOptions = {
  fullScreen: {
    enable: false,
    zIndex: 0,
  },
  fpsLimit: 60,
  detectRetina: true,
  background: {
    color: {
      value: "transparent",
    },
  },
  particles: {
    number: {
      value: 45,
      density: {
        enable: true,
        width: 1200,
        height: 700,
      },
    },
    color: {
      value: ["#0d0d14", "#E8185A", "#6b7280", "#E8185A"],
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: {
        min: 0.15,
        max: 0.35,
      },
      animation: {
        enable: true,
        speed: 0.3,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    size: {
      value: {
        min: 2,
        max: 3.5,
      },
      animation: {
        enable: false,
      },
    },
    links: {
      enable: true,
      distance: 140,
      color: "#0d0d14",
      opacity: 0.14,
      width: 1.0,
      triangles: {
        enable: true,
        color: "#E8185A",
        opacity: 0.03,
      },
    },
    move: {
      enable: true,
      speed: {
        min: 0.2,
        max: 0.8,
      },
      direction: "none",
      random: true,
      straight: false,
      outModes: {
        default: "bounce",
      },
      attract: {
        enable: true,
        rotate: {
          x: 800,
          y: 1600,
        },
      },
    },
  },
  interactivity: {
    detectsOn: "parent",
    events: {
      onHover: {
        enable: true,
        mode: ["grab", "repulse"],
      },
      onClick: {
        enable: true,
        mode: "push",
      },
    },
    modes: {
      grab: {
        distance: 180,
        links: {
          blink: false,
          consent: false,
          opacity: 0.25,
          color: "#E8185A",
        },
      },
      repulse: {
        distance: 100,
        duration: 0.5,
        factor: 0.6,
        speed: 0.6,
      },
      push: {
        quantity: 2,
      },
      attract: {
        distance: 180,
        duration: 0.4,
        factor: 0.6,
      },
    },
  },
};

/** Fewer, subtler particles for compact sections (CTA bands, register blocks). */
export const sparseParticleOptions = {
  ...heroParticleOptions,
  particles: {
    ...heroParticleOptions.particles,
    number: {
      value: 22,
      density: {
        enable: true,
        width: 1600,
        height: 480,
      },
    },
    opacity: {
      value: {
        min: 0.2,
        max: 0.38,
      },
      animation: {
        enable: true,
        speed: 0.25,
        sync: false,
        destroy: "none",
        startValue: "random",
      },
    },
    links: {
      ...heroParticleOptions.particles.links,
      distance: 130,
      opacity: 0.18,
      triangles: {
        enable: false,
      },
    },
  },
  interactivity: {
    ...heroParticleOptions.interactivity,
    events: {
      onHover: {
        enable: false,
      },
      onClick: {
        enable: false,
      },
    },
  },
};

export async function initHeroParticles(engine) {
  await loadSlim(engine);
  await loadInteractivityPlugin(engine);

  await Promise.all([
    loadExternalGrabInteraction(engine),
    loadExternalRepulseInteraction(engine),
    loadExternalPushInteraction(engine),
    loadExternalAttractInteraction(engine),
  ]);
}

/** Stable init reference — required when multiple particle canvases share one page */
export const particlesEngineInit = initHeroParticles;
