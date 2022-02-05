import { scroller } from "react-scroll";
import React from "react";
import { Link } from "react-router-dom";

import $ from "jquery";

const Footer = () => {
  'use strict';
  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 10,
      delay: 1,
      smooth: true,
      offset: -80,
    });
  };

  $(document).ready(function () {
    $(window).scrollTop(function () {
      if ($(this).scrollTop() > 100) {
        $("#arrow i").fadeIn();
      } else {
        $("#arrow i").fadeOut();
      }
    });
    $("#arrow i").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: 0,
        },
        100
      );
      return false;
    });
  });

  return (
    <>
      {/* <div id="arrow">
        <i class="bi bi-arrow-up" aria-hidden="true"></i>
      </div> */}

      <div className="main-contact mt-5">
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
              
              </div>
            </div>

            {/* media */}
            <div className="contact-center-media">
              <h3>Media</h3>
              <div className="contact-media">
                <li>
                  <a href={'https://github.com/vaibhavpande2605'} target='_blank'>
                    <i className="bi bi-github"></i>
                  </a>
                </li>
                <li>
                  <a href={'https://www.instagram.com/vaibhavapande/'} target='_blank'>
                    <i className="bi bi-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href={'https://www.linkedin.com/in/vaibhavpande2605/'} target='_blank'>
                    <i className="bi bi-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href={'https://twitter.com/Vaibhav30827869'} target='_blank'>
                    <i className="bi bi-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href={'https://www.facebook.com/vaibhav.pande.31149/'} target='_blank'>
                    <i className="bi bi-facebook"></i>
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <p style={{ fontSize: "15px" }}>
            {" "}
            &copy; Copyright{" "}
            <strong>
              <span>myportfolio</span>
            </strong>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
