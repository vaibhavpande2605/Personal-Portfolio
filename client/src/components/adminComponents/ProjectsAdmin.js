import React from "react";
import { Link } from "react-router-dom";

const ProjectsAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
          <h4>Projects Components</h4>
          <label htmlFor="text">Id</label>
          <input type="text" name="product_id" id="product_id" required />

          <label htmlFor="text">Title</label>
          <input type="text" name="title" id="title" required />

          <label htmlFor="text">Description</label>
          <textarea
            type="text"
            name="description"
            id="description"
            cols="30"
            rows="3"
            required
          />

          <div className="upload">
            <input type="file" name="file" id="file_up" />

            <div id="file_img">
              <img
                src="https://images.pexels.com/photos/586744/pexels-photo-586744.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt=""
              />
              <span>X</span>
            </div>
          </div>

          <button>Add Item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="projects-admin">
            <div className="icons">
              <Link to={"/editProjects"}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>


            {/* single project */}

            <div className="single-project">
                <div className="single-project-img">
                    <img src="https://images.pexels.com/photos/1590549/pexels-photo-1590549.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="" />
                </div>
          
                <div className="single-info">
                <h3>Nature</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nemo fugiat facilis nihil autem blanditiis dolorem rem hic quas sint!
                </p>
            </div>
                </div>

            
          </div>
          {/* <div className="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>Holy guacamole!</strong> You should check in on some of those fields below.
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <button type="button" className="close" data-dismiss="alert" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
</div> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectsAdmin;
