// File: src/components/ParticlesBackground.jsx
import { useCallback, useContext } from "react";
import { useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const { isDark } = useContext(ThemeContext);
  const [isLoaded, setIsLoaded] = useState(false);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
    setIsLoaded(true);
  }, []);

  const options = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: isDark ? "#6366f1" : "#4f46e5",
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.5,
        random: true,
      },
      size: {
        value: 3,
        random: true,
      },
      links: {
        enable: true,
        distance: 150,
        color: isDark ? "#6366f1" : "#4f46e5",
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.5,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <div className="absolute inset-0 -z-10 opacity-30">
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default ParticlesBackground;
