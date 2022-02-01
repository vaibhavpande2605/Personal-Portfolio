import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";

const Footer = () => {
  return (
    <React.Fragment>
      
      <div className="main-contact mt-5">
        <div className="contact">
          <div className="contact-center">
            {/* links */}

            <div className="contact-center-links">
              <h3>Links</h3>
              <div className="contact-links">
              <li><Link to="/">Home</Link></li>
             <li><Link to="/">About</Link></li>
             <li><Link to="/">Education</Link></li>
             <li><Link to="/">Skills</Link></li>
             <li><Link to="/">Experience</Link></li>
             <li><Link to="/">Projects</Link></li>
             <li><Link to="/">Contact</Link></li>
             <li><Link to="/login">Login</Link></li>
             <li className="admin"><Link to="/">Admin</Link></li>
              </div>
            </div>

        {/* media */}
        <div className="contact-center-media">
            <h3>Media</h3>
            <div className="contact-media">
                <li><a href="#"><i className="bi bi-github"></i></a></li>
                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
                <li><a href="#"><i className="bi bi-linkedin"></i></a></li>
                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a href="#"><i className="bi bi-skype"></i></a></li>
            </div>
        </div>
          </div>
        </div>

        <div className="footer" >
    <p style={{fontSize:'15px'}}>    &copy; Copyright <strong><span>myportfolio</span></strong>. All Rights Reserved</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
