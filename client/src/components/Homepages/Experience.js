import React from "react";

function Experience() {
  return (
    <>
      <section className="container my-5 ">
        <h2 className="mb-4" style={{ color: "#2c2133", fontWeight: "700" }}>
          Experience
        </h2>
        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6">
                <div className="resume-item">
                  <h4>AWS CLOUD VIRTUAL INTERNSHIP </h4>
                  <h5>Oct 2021 - Nov 2021</h5>
                  <p>
                    <em>AICTE-EduSkill Foundation, Virtual</em>
                  </p>
                  <p>
                    • Received a training of Cloud foundations and Cloud
                    Architecting. <br /> • Studied services such as AWS EC2,
                    Lambda, RDS, CloudFormation etc. and done one project named
                    as Capstone Project.
                  </p>
                  <p>
                    <span style={{ color: "tomato", fontWeight: "600" }}>
                      Technologies & Skills:
                    </span>
                    <em>
                      {" "}
                      AWS Lambda, AWS EC2 , AWS RDS, AWS Cloudformation, AWS Pipeline etc.
                    </em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Campus Ambassador</h4>
                  <h5>Oct 2021 - Nov 2021</h5>
                  <p>
                    <em>National Engineering Olympiad (NEO), Virtual</em>
                  </p>
                  <p>
                    • To make students aware about the National Engineering.{" "}
                    <br />• Olympiad Exam using social platforms. To do tasks
                    given by the team in given time.
                  </p>
                  <p>
                    <span style={{ color: "tomato", fontWeight: "600" }}>
                    Technologies & Skills:
                    </span>
                    <em> Communication skills, Time Management, Leadership etc.
                    </em>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="resume-item">
                  <h4>Web Development Intern</h4>
                  <h5>Nov 2021 - Dec 2021</h5>
                  <p>
                    <em>Lets Grow More Community, Virtual</em>
                  </p>
                  <p>
                    • One-month Virtual Internship program with two hands on
                    project. <br />• Random user app generation app using
                    ReactJS and Dynamic static website using HTML, CSS, and
                    JavaScript.
                  </p>
                  <p>
                    <span style={{ color: "tomato", fontWeight: "600" }}>
                    Technologies & Skills:
                    </span>
                    <em> Html, CSS, JavaScript, ReactJS and Rest API etc.</em>
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Web Development and Designing Intern</h4>
                  <h5>Jan 2022 - Feb 2022</h5>
                  <p>
                    <em>The Spark Foundation, Virtual</em>
                  </p>
                  <p>
                    • One-month Virtual Internship program with one hands on
                    project. <br />
                    • Created basic bank management website using
                    HTML,CSS,JavaScript and Backend such as PHP and Database
                    MySQL. <br />• Customer have functionality such as credit
                    and debit money .
                  </p>
                  <p>
                    <span style={{ color: "tomato", fontWeight: "600" }}>
                    Technologies & Skills:
                    </span>
                    <em> Html, CSS, JavaScript, PHP and MySQL etc.</em>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}

export default Experience;
