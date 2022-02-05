import React from "react";
import profile from "../images/profilephoto.jpeg";
import resume from "../images/Vaibhav Pande Resume.pdf";
import "./header.css";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import Particle from "./Particle";

import { scroller } from "react-scroll";
const Header = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 10,
      delay: 1,
      smooth: true,
      offset: -80,
    });
  };

  // tsParticles.load("tsparticles", {
  //   height="500px",
  //   particles: {
  //     number: {
  //       value: 100,
  //     },
  //     color: {
  //       value: "random",
  //       animation: {
  //         enable: true,
  //         speed: 40,
  //         sync: false,
  //       },
  //     },
  //     shape: {
  //       type: "circle",
  //     },
  //     size: {
  //       value: 5,
  //       random: true,
  //       animation: {
  //         enable: true,
  //         speed: 16,
  //         minimumValue: 0.1,
  //         sync: false,
  //       },
  //     },
  //     links: {
  //       enable: true,
  //       distance: 100,
  //       color: "random",
  //       opacity: 0.4,
  //       width: 1,
  //     },
  //     move: {
  //       enable: true,
  //     },
  //   },
  //   interactivity: {
  //     detectsOn: "canvas",
  //     events: {
  //       onHover: {
  //         enable: true,
  //         mode: "repulse",
  //       },
  //       onClick: {
  //         enable: true,
  //         mode: "bubble",
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       grab: {
  //         distance: 400,
  //         links: {
  //           opacity: 1,
  //         },
  //       },
  //       bubble: {
  //         distance: 400,
  //         size: 40,
  //         duration: 2,
  //         opacity: 0.8,
  //       },
  //       repulse: {
  //         distance: 200,
  //       },
  //       push: {
  //         quantity: 4,
  //       },
  //       remove: {
  //         quantity: 2,
  //       },
  //     },
  //   },
  //   detectRetina: true,
  // });
  return (
    <React.Fragment>
      <div className="main-container ">
        <div className="particle ">
          <Particle />
          {/* <Particles
         
            params={{
              fpsLimit: 90,
            

              background: {
                color: {
                  value: "#2c2133",
                },
              },
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
                detect_on: "canvas",
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
          /> */}

          <div className="container col-xxl-8  px-2 py-4 text-light ">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6 ml-5 profile-img">
                <img
                  src={profile}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="370"
                  height="250"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6  info-head">
                <h1 className="display-5 fw-bold lh-1 mb-0">
                  <h6 className="text-light">Hello, I'm</h6>
                  <div className="fullName">
                    <h1>
                      <Typewriter
                        options={{
                          strings: [
                            "Vaibhav Pande",
                            "Student",
                            "Full Stack Developer ",
                          ],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </h1>
                  </div>
                </h1>
                <div className="header-info">
                  <p>
                    Passionate coder, Full stack web developer interested in
                    MERN, Python and CPP developer, Artificial intelligence & Machine learning enthusiast, Empathic
                    person.
                  </p>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start header-btn">
                  <button
                    type="button"
                    style={{ backgroundColor: "#1d1622", color: "white" }}
                    className="btn btn-outline-success btn-lg px-4 me-md-2  hire-btn"
                    onClick={() => scrollToElement("Contact")}
                  >
                    <Link  style={{ textDecoration: "none", color: "white" }} to="/">Hire me</Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-4 text-light  resume-btn"
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to={resume}
                      download={"Vaibhav Pande Resume"}
                      target={"_blank"}
                    >
                      Resume
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;
