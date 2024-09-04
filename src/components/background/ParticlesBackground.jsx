import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return;
  }

  return (
    <Particles
      className={"fixed -z-10"}
      options={{
        background: {
          color: "#1A1A1A",
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: ["#4386F4", "#6A5ACD", "#8A2BE2", "#3216BC"],
          },
          shape: {
            type: "circle",
          },
          number: {
            value: 50,
          },
          size: {
            value: 2,
          },
          move: {
            direction: "none",
            enable: true,
            speed: 0.5,
          },
          opacity: {
            value: 0.5,
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
