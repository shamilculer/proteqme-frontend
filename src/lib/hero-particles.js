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
    detectsOn: "window",
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
