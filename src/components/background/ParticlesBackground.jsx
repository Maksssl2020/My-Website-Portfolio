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

  const particlesOptions = {
    background: {
      color: "#000000",
    },
    fpsLimit: 60,
    fullScreen: true,
    particles: {
      color: {
        value: ["#FF3CAC", "#784BA0", "#0066FF"],
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
        enable: true,
        speed: 0.3,
        random: true,
      },
      opacity: {
        value: 0.5,
      },
    },
  };

  return (
    <div className={"fixed inset-0 -z-10"}>
      <Particles className={"h-screen w-screen"} options={particlesOptions} />
    </div>
  );
};

export default ParticlesBackground;
