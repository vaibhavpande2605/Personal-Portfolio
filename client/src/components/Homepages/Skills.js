import React from "react";
import "./skills.css";

const Skills = () => {
  return (
    <div className="main-container">
      <div className="skills">
        <h2 className="title"> Skills</h2>
        <div className="skills-center">
          <div className="mh-skills" id="mh-skills">
            <div className="container">
              <div className="row">
                <div className=" single-skill col-sm-12 col-md-5" id="skill1">
                  <div className="mh-professional-skill">
                    <h2 className="title1">Technical Skills</h2>
                    <div className="each-skills">
                      <div className="skills-bar">
                        <div className="bar">
                          <div className="info">
                            <span>HTML</span>
                          </div>
                          <div className="progress-line html">
                            <span></span>
                          </div>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>CSS</span>
                          </div>
                          <div className="progress-line css">
                            <span></span>
                          </div>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>JavaScript</span>
                          </div>
                          <div className="progress-line javascript">
                            <span></span>
                          </div>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>Python</span>
                          </div>
                          <div className="progress-line python">
                            <span></span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" single-skill col-sm-12 col-md-5" id="skill2">
                  <div className="mh-professional-skill">
                    <h2 className="title1">Professional Skills</h2>
                    <div className="each-skills">
                      <div className="skills-bar">
                        <div className="bar">
                          <div className="info">
                            <span>Communication</span>
                          </div>
                          <div className="progress-line communication">
                            <span></span>
                          </div>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>Team Management</span>
                          </div>
                          <div className="progress-line team">
                            <span></span>
                          </div>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>Emotional intelligence</span>
                          </div>
                          <div className="progress-line emotional">
                            <span></span>
                          </div>
                        </div>
                        <div className="bar">
                          <div className="info">
                            <span>Flexibility</span>
                          </div>
                          <div className="progress-line flexibility">
                            <span></span>
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
    </div>
  );
};

export default Skills;
