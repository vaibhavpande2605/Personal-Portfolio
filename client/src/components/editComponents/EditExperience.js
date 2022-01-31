import React from "react";
import { Link } from "react-router-dom";
import Footer from "../Homepages/Footer";

const EditExperience = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
            <form>
              <h3 className="updated">Update</h3>

              <h4>Experience component</h4>
              <label htmlFor="text">Experience</label>

              <input type="text" />
              <div className="btns">
                <button type="submit" className="update-btn">
                  Update
                </button>
                <Link to="/admin">
                  <button className="cancel-btn">Cancel</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
   
  );
};


export default EditExperience;
