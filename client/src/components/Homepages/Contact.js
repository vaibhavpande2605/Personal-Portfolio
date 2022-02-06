import React, { Component } from 'react';
// import './App.css'
import axios from 'axios'
export default class Contact extends Component {

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
          .post("/api/forma", data)
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
    return <>
      <div className="main-container">
   <section id="contact" className="contact mt-2 mb-3">
          <div className="container" data-aos="fade-up">
            <h2
              className="mb-4"
              style={{ color: "#2c2133", fontWeight: "700" }}
            >
              Contact
            </h2>

            <div className="row mt-1">
              <div className="col-lg-4">
                <div className="info">
                  <div className="address">
                    <i className="bi bi-geo-alt"></i>
                    <h4>Location:</h4>
                    <p> Nashik, Maharashtra, India</p>
                  </div>

                  <div className="email">
                    <i className="bi bi-envelope"></i>
                    <h4>Email:</h4>
                    <p>vaibhavpande193@gmail.com</p>
                  </div>

                  <div className="phone">
                    <i className="bi bi-phone"></i>
                    <h4>Call:</h4>
                    <p>+91 9373448307</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-8 mt-5 mt-lg-0">
                <form
                 onSubmit={this.formSubmit}
                  >
                  {/* <p>{banner}</p> */}
                  <div className="row">
                    <div className="col-md-6 form-group ">
                        <label htmlFor="name">Enter Your Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control mt-1 name"
                     
                        placeholder=" Name"
                        required
                        value={this.state.name}
                        onChange={this.handleNameChange}
                      />
                    </div>
                    <div className="col-md-6 form-group  mt-3 mt-md-0">
                    <label htmlFor="email">Enter Your Email</label>
                      <input
                        type="email"
                        className="form-control mt-1"
                        name="email"
                    
                        placeholder=" Email"
                        required
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                      />
                    </div>
                  </div>
                  <div className="form-group mt-3 ">
                  <label htmlFor="subject">Enter Your Subject</label>
                    <input
                      type="text"
                      className="form-control subject mt-1"
                      name="subject"
                 
                      placeholder="Subject"
                      required
                      value={this.state.subject}
                      onChange={this.handleSubjectChange}
                    />
                  </div>
                  <div className="form-group mt-3 ">
                  <label htmlFor="message">Enter Your Message</label>
                    <textarea
                      className="form-control message mt-1"
                      name="message"
                      rows="5"
                     
                      placeholder="Message"
                      required
                      value={this.state.message}
                      onChange={this.handleMessageChange}
                    ></textarea>
                  </div>
                  {/* <div className="my-3">
                    <div className="loading">Loading</div>
                    <div className="error-message"></div>
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div> */}
                  <div className={this.state.sent?"msg msgAppear":'msg'}>message has been sent
                   
                  </div>
                  <div className="text-center mt-3">
                  <button style={{backgroundColor:'#2c2133'}} type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
    
        </div>
    
    </>;
  }
}
