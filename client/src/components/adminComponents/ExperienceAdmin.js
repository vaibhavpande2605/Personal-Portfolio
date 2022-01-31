import React from "react";
import { Link } from "react-router-dom";

const ExperienceAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
          <h4>Experience Component</h4>
          <label htmlFor="text">Experience</label>
          <input type="text" />
          <button type="submit">Add item</button>
        </form>
      </div>
      <div className="same-item">
        <div className="about-info">
          <div className="same-admin">
            <div className="icons">
              <Link to={"/editExperience"}>
                <i className="fas fa-edit"></i>
              </Link>
              <i className="fas fa-trash"></i>
            </div>

            {/* single experience */}

            <div className="single-experience">
                <p>Web developer</p>
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
    </div>
  );
};

export default ExperienceAdmin;
