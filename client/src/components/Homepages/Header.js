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

  return (
    <React.Fragment>
      <div className="main-container ">
        <div className="particle ">
          <Particle />

          <div className="container col-xxl-8  py-4 text-light ">
            <div className="row flex-lg-row-reverse align-items-center   py-5">
              <div className="col-10 col-sm-8 col-lg-6 px-4 profile-img">
                <img
                  src={profile}
                  className="d-block mx-lg-auto img-fluid"
                  alt="Profile Photo"
                  width="370px"
                  height="250px"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6  info-head px-2 ">
              <h6 className="text-light">Hello, I'm</h6>
                <h1 className="display-5 fw-bold  mb-0">
                 
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
                    MERN, Python and CPP developer, Artificial intelligence &
                    Machine learning enthusiast, Empathic person.
                  </p>
                </div>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start header-btn">
                  <button
                    type="button"
                    style={{ backgroundColor: "#1d1622", color: "white" }}
                    className="btn btn-outline-success btn-lg px-4 me-md-2  hire-btn"
                    onClick={() => scrollToElement("Contact")}
                  >
                    <Link
                      style={{ textDecoration: "none", color: "white" }}
                      to="/"
                    >
                      Hire me
                    </Link>
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-info btn-lg px-3 text-light  resume-btn"
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
