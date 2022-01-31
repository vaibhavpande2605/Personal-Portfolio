import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer = () => {
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 800,
      delay: 50,
      smooth: true,
      offset: -80,
    });
  };
  return (
    <React.Fragment>
      <div className="main-title">
        <h2 className="title contact-title"></h2>
      </div>
      <div className="main-contact">
        <div className="contact">
          <div className="contact-center">
            {/* links */}

            <div className="contact-center-links">
              <h3>Links</h3>
              <div className="contact-links">
                <li onClick={() => scrollToElement("Home")}>
                  <Link to="/">Home</Link>
                </li>
                <li onClick={() => scrollToElement("About")}>
                  <Link to="/">About</Link>
                </li>
                <li onClick={() => scrollToElement("Education")}>
                  <Link to="/">Education</Link>
                </li>
                <li onClick={() => scrollToElement("Skills")}>
                  <Link to="/">Skills</Link>
                </li>

                <li onClick={() => scrollToElement("Projects")}>
                  <Link to="/">Projects</Link>
                </li>
                <li onClick={() => scrollToElement("Experience")}>
                  <Link to="/">Experience</Link>
                </li>
                <li onClick={() => scrollToElement("Contact")}>
                  <Link to="/">Contact</Link>
                </li>
                <li onClick={() => scrollToElement("Login")}>
                  <Link to="/login">Login</Link>
                </li>
                <li onClick={() => scrollToElement("Admin")} className="admin">
                  <Link to="/">Admin</Link>
                </li>
              </div>
            </div>

            {/* media */}
            <div className="contact-center-media">
              <h3>Media</h3>
              <div className="contact-media">
                <li>
                  <Link href="#">
                    <i className="fab fa-youtube-square"></i>Youtube
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-github-square"></i>Github
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-linkedin"></i>Linkedin
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <i className="fab fa-twitter"></i>Linkedin
                  </Link>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p>Designed and created by Vaibhav 2022</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
