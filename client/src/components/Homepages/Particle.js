import React from "react";
import Particles from "react-tsparticles";
import "./particle.css";

function Particle() {
  const style = {
    width: "100%",
    height: "100%",
    backgroundColor: "#2c2133",
    position: "absolute",

    // Adding media querry..
    "@media  (max-width: 400px)": {
      width: "100%",
      height: "1000px",
      backgroundColor: "#ffff"

    },
  };
  return (
    <div  style={style}>
      <Particles
        // Add window resize logic if required
        height={window.outerHeight}
        params={{
          fpsLimit: 90,

          particles: {
            color: { value: "#ffffff" },
            line_linked: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
              bounce: false,
              direction: "none",
              enable: true,
              out_mode: "out",
              random: false,
              speed: 2,
              straight: false,
            },
            number: {
              density: { enable: true, value_area: 800 },
              value: 80,
            },
            opacity: {
              anim: {
                enable: false,
                opacity_min: 0.1,
                speed: 1,
                sync: false,
              },
              random: false,
              value: 0.5,
            },
            shape: {
              character: {
                fill: false,
                font: "Verdana",
                style: "",
                value: "*",
                weight: "400",
              },
              image: {
                height: 100,
                replace_color: true,
                src: "images/github.svg",
                width: 100,
              },
              polygon: { nb_sides: 5 },
              stroke: { color: "#000000", width: 0 },
              type: "circle",
            },
            size: {
              anim: {
                enable: false,
                size_min: 0.1,
                speed: 40,
                sync: false,
              },
              random: true,
              value: 5,
            },
          },
          interactivity: {
            events: {
              onclick: { enable: true, mode: "push" },
              onhover: {
                enable: true,
                mode: "attract",
                parallax: { enable: false, force: 60, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              attract: { distance: 200, duration: 0.4, factor: 5 },
            },
          },
          polygon: {
            draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
            move: { radius: 10 },
            scale: 1,
            type: "none",
            url: "",
          },
          retina_detect: true,
        }}
      />
    </div>
  );
}

export default Particle;
