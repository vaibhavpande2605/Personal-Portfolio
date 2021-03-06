import React from "react";

const Education = () => {
  return (
    <>
      <div className="main-container">
      <section className="container my-5">
        <h2 className="mb-4" style={{ color: "#2c2133", fontWeight: "700" }}>
          Education
        </h2>
        <section id="resume" className="resume">
          <div className="container" data-aos="fade-up">
            <div className="row">
              <div className="col-lg-6">
                <div className="resume-item">
                  <h4>Bachelor Of Engineering : Computer Science </h4>
                  <h5>2021 - Present</h5>
                  <p>
                    <em>
                      PES's Modern College Of Engineering, Pune, Maharashtra
                    </em>
                    
                  </p>
                </div>
                <div className="resume-item">
                  <h4>Higher Secondary Education (XII)</h4>
                  <h5>2018 - 2020</h5>
                  <p>
                    <em>Arts, Commerce and Science Junior College Nashik Road, Nashik, Maharashtra <br /></em>
                    <em>
                      <span>Score :</span> 86%
                    </em>
                  </p>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="resume-item">
                  <h4>Secondary Education (X)</h4>
                  <h5>2013 - 2018</h5>
                  <p>
                    <em>Madhyamik Vidyalaya Palse, Nashik, Maharashtra <br /></em>
                    <em>
                      <span>Score :</span> 95.40%
                    </em>
                  </p>
                </div>
           
              </div>
            </div>
          </div>
        </section>
      </section>
      
      </div>
  
    </>
  );
};

export default Education;
