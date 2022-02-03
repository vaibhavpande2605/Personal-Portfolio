import React, { Component } from "react";
import axios from "axios";

export class contact1 extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
    sent: false,
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value });
  };
  handleEmailChange = (e) => {
    this.setState({ email: e.target.value });
  };
  handleSubjectChange = (e) => {
    this.setState({ subject: e.target.value });
  };

  handleMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  formSubmit = (e) => {
    e.preventDefault();

    let data = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    axios
      .post("http://localhost:5000/contact", data)
      .then((res) => {
        this.setState(
          {
            sent: true,
          },
          this.resetForm()
        );
      })
      .catch(() => {
        console.log("mesg not sent");
      });
  };

  // for resteting intial data
  resetForm = () => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setTimeout(() => {
      this.setState({
        sent: false,
      });
    }, 2000);
  };

  render() {
    return (
      <>
        <section id="contact" class="contact mt-2 mb-3">
          <div class="container" data-aos="fade-up">
            <h2
              className="mb-5"
              style={{ color: "#2c2133", fontWeight: "700" }}
            >
              Contact
            </h2>

            <div class="row mt-1">
              <div class="col-lg-4">
                <div class="info">
                  <div class="address">
                    <i class="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p>Shivajinagar, Pune, Maharashtra</p>
                  </div>

                  <div class="email">
                    <i class="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>vaibhavpande194@example.com</p>
                  </div>

                  <div class="phone">
                    <i class="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 9373448307</p>
                  </div>
                </div>
              </div>

              <div class="col-lg-8 mt-5 mt-lg-0">
                <form onClick={this.formSubmit} >
                  <p>{banner}</p>
                  <div class="row">
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        required
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                      />
                    </div>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      class="form-control"
                      name="subject"
                      id="subject"
                      placeholder="Subject"
                      required
                      value={this.state.subject}
                      onChange={this.handleSubjectChange}
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      class="form-control"
                      name="message"
                      rows="5"
                      placeholder="Message"
                      required
                      value={this.state.message}
                      onChange={this.handleMessageChange}
                    ></textarea>
                  </div>
                  <div class="my-3">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className={this.state.sent ? 'msg msgAppear':'msg'}>message has been send
                    <button type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default contact1;
