import React, { useContext } from "react";

function About() {
  return (
    <>
      <div className="main-container">
        <div className="container justify-content-center  ">
          <h2 className="mb-3">About me</h2>
          {/* <h1>{state}</h1> */}

          <div className="about-info">
            <p>
              I am currently a student at P.E.S's Modern College of Engineering,
              Pune, Maharashtra, India. I am pursuing an undergraduate degree in
              Computer Engineering. I will be gradduate in 2024. I am interested
              in Full Stack Web Developement , Artificial Intelligence and
              Machine Learning , Data Science and learnin new programming
              languages. I also have knowledge of CPP, Python with Data
              Structures And Algorithms. I am always curious about things and
              enjoy learning. I am a detail orientated person and I keep my
              goals and tasks organized to maintain productivity. I believe that
              the skills that I have attained from the dynamic environment and
              competitive university life define me and I am looking forward to
              implementing and polishing them in any opportunity that I receive.
            </p>
            <a
              class="btn btn-light btn-lg about-btn text-light"
              href="https://www.linkedin.com/in/vaibhavpande2605/"
              target={"_blank"}
              role="button"
            >
              Read more »
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
