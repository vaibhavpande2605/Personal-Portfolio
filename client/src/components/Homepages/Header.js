import React from "react";
import profile from "../images/profilephoto.jpg";
import resume from "../images/Vaibhav Pande Resume.pdf";
import "./header.css";
import Typewriter from "typewriter-effect";
import { Particles } from "react-tsparticles";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <React.Fragment>
      <div className="header">
        <div className="particle">
          <Particles
            width="100%"
            height="400px"
            params={{
              fpsLimit: 90,
              outerHeight: "100px",

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
          />

          <div className="container col-xxl-8 mt-5 px-4 py-5 text-light ">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6 ml-5 profile-img">
                <img
                  src={profile}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Bootstrap Themes"
                  width="350"
                  height="200"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  {" "}
                  <h3>Hello,I'm</h3>{" "}
                  <div className="fullName">
                    <h1>
                      <Typewriter
                        options={{
                          strings: ["Vaibhav Pande", "MERN Stack Developer "],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </h1>
                  </div>
                </h1>
                <p className="lead">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap, the world’s most popular front-end open source
                  toolkit, featuring Sass variables and mixins, responsive grid
                  system, extensive prebuilt components, and powerful JavaScript
                  plugins.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <button
                    type="button"
                    style={{ backgroundColor: "#1d1622" ,color: "white",}}
                    className="btn btn-outline-success btn-lg px-4 me-md-2"
                  >
                    Hire Me
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-4 text-light"
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
