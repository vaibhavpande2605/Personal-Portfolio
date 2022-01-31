import React from "react";
import "./contact.css";
import "./style.css";
import BackImg from "../images/im4.png";
import load2 from "../images/load2.jpg";

const Contact = () => {
  return (
    <div className="main-container">
      <h2 className="title">Contact form</h2>
      <div class="container" id="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5"></div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-12">
            <div class="wrapper">
              <div class="row no-gutters">
                <div
                  id="form1"
                  class="col-lg-7 col-md-6 order-md-last d-flex align-items-stretch"
                >
                  <div class="contact-wrap w-100 p-md-5 p-4">
                    <h3 class="mb-4">Contact Me</h3>

                    <form
                      id="contactForm"
                      name="contactForm"
                      class="contactForm"
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" htmlFor="name">
                              Full Name
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" htmlFor="email">
                              Email Address
                            </label>
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" htmlFor="subject">
                              Subject
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                              required
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <label class="label" htmlFor="#">
                              Message
                            </label>
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="4"
                              placeholder="Message"
                              required
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-primary"
                            />
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div class="col-lg-5 col-md-6 d-flex align-items-stretch">
                  <div class="info-wrap bg-secondary w-100 p-md-5 p-4">
                    <div >
                      <h3>Let's get in touch</h3>
                      <p class="mb-4">
                        We're open for any suggestion or just to have a chat
                      </p>
                      <div class="dbox w-100 d-flex align-items-start">
                        <div class="  icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-map-marker"></span>
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Address:</span> Pune, Maharashtra, India
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="  icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-phone"></span>
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Phone:</span>{" "}
                            <a href="tel://1234567920">+91 9373448307</a>
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-80 d-flex align-items-center">
                        <div class=" icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-paper-plane"></span>
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Email:</span>{" "}
                            <a href="mailto:info@yoursite.com">
                              vaibhavpande194@gmail.com
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="  icon d-flex align-items-center justify-content-center">
                          <span class="fa fa-globe"></span>
                        </div>
                        <div class="text pl-3">
                          <p>
                            <span>Website</span> <a href="#">mysite.com</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
