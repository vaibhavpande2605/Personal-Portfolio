import React from "react";
import logo from "./../images/pr1.jpg";
import panel from "./../images/pr5.png";
import tablet from "./../images/pr3.jpg";
import arduino1 from "./../images/pr6.jpg";
const Projects = () => {
  return (
    <div className="main-container">
      <div className="projects">
        <h2 className="title">Projects</h2>
        <div className="projects-center">

          {/* single projects */}

          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>

            <div className="single-project-info">
              <h3>Smart Phone</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
                nemo praesentium et ut, quae dolorum suscipit, totam sit eveniet
                quo rem minus quos. Suscipit iure perferendis debitis aut odio
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, libero!
              </p>
            </div>
          </div>
          {/* single projects */}

          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>

            <div className="single-project-info">
              <h3>Smart Phone</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
                nemo praesentium et ut, quae dolorum suscipit, totam sit eveniet
                quo rem minus quos. Suscipit iure perferendis debitis aut odio
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, libero!
              </p>
            </div>
          </div>
          {/* single projects */}

          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>

            <div className="single-project-info">
              <h3>Smart Phone</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
                nemo praesentium et ut, quae dolorum suscipit, totam sit eveniet
                quo rem minus quos. Suscipit iure perferendis debitis aut odio
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, libero!
              </p>
            </div>
          </div>
          {/* single projects */}

          <div className="single-project">
            <div className="single-project-img">
              <img src={tablet} alt="" />
            </div>

            <div className="single-project-info">
              <h3>Smart Phone</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos aut
                nemo praesentium et ut, quae dolorum suscipit, totam sit eveniet
                quo rem minus quos. Suscipit iure perferendis debitis aut odio
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, libero!
              </p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Projects;
