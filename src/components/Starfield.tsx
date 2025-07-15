// src/components/Starfield.tsx (updated for upgrade)
"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { MoveDirection, OutMode } from "@tsparticles/engine";

export default function Starfield() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

const options = useMemo(
  () => ({
    background: {
      color: {
        value: "#000000",
      },
    },
    fpsLimit: 60,
    particles: {
      color: {
        value: ["#ffffff", "#dddddd", "#eeeeee"], // Subtle color variation
      },
      number: {
        value: 250, // More stars overall
      },
      opacity: {
        value: { min: 0.1, max: 0.3 }, // Brighter range
        animation: {
          enable: true, // Twinkling
          speed: 0.5,
          minimumValue: 0.1,
        },
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 0.5, max: 2 },
      },
      move: {
        enable: true,
        speed: { min: 0.1, max: 0.5 },
        direction: MoveDirection.left,
        random: false,
        straight: true,
        outModes: {
          default: OutMode.out,
        },
      },
      // Enhanced groups for depth (more stars distributed)
      groups: {
        background: {
          number: { value: 150 }, // More slow stars
          move: { speed: 0.1 },
          size: { value: { min: 0.5, max: 1 } },
          opacity: { value: 0.1 },
        },
        foreground: {
          number: { value: 100 }, // More fast stars
          move: { speed: 0.3 },
          size: { value: { min: 1, max: 2 } },
          opacity: { value: 0.3 },
        },
      },
    },
    detectRetina: true,
  }),
  []
);

  if (init) {
    return (
      <Particles
        id="starfield"
        options={options}
        style={{ position: "fixed", top: 0, left: 0, zIndex: -1, width: "100%", height: "100%" }}
      />
    );
  }

  return null;
}