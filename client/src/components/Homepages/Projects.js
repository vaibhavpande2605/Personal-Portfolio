import React from "react";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";
import project5 from "../images/project5.png";
import project6 from "../images/project6.png";

const Projects = () => {
  return (
    <>
    <div className="main-container">
      <div className="container mb-4 project-img">
        <h2 className="mb-3" style={{ color: "#2c2133", fontWeight: "700" }}>
          Projects
        </h2>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100">
              <img
                src={project1}
                className="card-img-top"
                height={"250px"}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Web Technology Group Static Website</h5>
                <p className="card-text">
                  A single static website using Html, CSS and JavaScript.
                  Maintains Responsive Layout Feature & Scrolling according to
                  Navigations..
                </p>

              </div>
                <a className="mb-2 text-center" style={{textDecoration:'none', color:'black' ,fontWeight:'500'}} target={'_blank'} href="https://github.com/vaibhavpande2605/LGM_WEBDEV_Task1">View Project</a>
             
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={project4}
                className="card-img-top"
                height={"250px"}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Get User React App - ReactJS
</h5>
                <p className="card-text">
                It is react based get user app which generate user randomly from API and display on the screen. Basically this all project is created in ReactJS library.
                </p>
              </div>
                <a className="mb-2 text-center" style={{textDecoration:'none', color:'black' ,fontWeight:'500'}} target={'_blank'} href="https://github.com/vaibhavpande2605/LGM_WEBDEV_Task2">View Project</a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={project2}
                className="card-img-top"
                height={"250px"}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Basic Bank System</h5>
                <p className="card-text">
                 This project is based on the basic banking operation such as send money and received money. The tools and technologies used are HTML, CSS ,JavaScript and PHP and MySQL database.
                </p>
              </div>
                <a className="mb-2 text-center" style={{textDecoration:'none', color:'black' ,fontWeight:'500'}} target={'_blank'} href="https://github.com/vaibhavpande2605/Spark_foundation">View Project</a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={project3}
                className="card-img-top"
                height={"250px"}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Bank Management System - C++</h5>
                <p className="card-text">
                  Basically these project is based on the C++ lauguage using
                  File handling concept. Getting clear idea about functions of
                  bank management system such as create account, withdraw money
                  , diposit money and close account etc
                </p>
              </div>
                <a className="mb-2 text-center" style={{textDecoration:'none', color:'black' ,fontWeight:'500'}} target={'_blank'} href="https://github.com/vaibhavpande2605/Bank-management-system">View Project</a>
            </div>
          </div>
         
          <div className="col">
            <div className="card h-100">
              <img
                src={project5}
                className="card-img-top"
                height={"250px"}
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Flappy Bird Game - Python</h5>
                <p className="card-text">
                  Basically these game is made using python launguage and
                  database such as PHP And MySQL database. In these game , bird
                  attempting fly between two green pipes to protect collision.
                </p>
              </div>
                <a className="mb-2 text-center" style={{textDecoration:'none', color:'black' ,fontWeight:'500'}} target={'_blank'} href="https://github.com/vaibhavpande2605/flappy-bird-game">View Project</a>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img
                src={project6}
                className="card-img-top"
                height={"250px"}
           
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Personal Portfolio - MERN</h5>
                <p className="card-text">
                  This is mine personal portfolio. It contains all information and biodata. The tools and technologies used are ReactJS , NodeJs, ExpressJS and MongoDB database. Contact form is fully working.
                </p>
              
              </div>
              <a className="mb-2 text-center" style={{textDecoration:'none', color:'black' ,fontWeight:'500'}} target={'_blank'} href="https://github.com/vaibhavpande2605/Personal-Portfolio">View Project</a>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Projects;
