import React from "react";
import { Link } from "react-router-dom";

const EditProjects = () => {
  return (
    <div className="edit">
      <div className="main-container">
        <div className="same-component">
          <div className="same-form">
          <form>
              <h3 className="updated">Updated</h3>
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

export default EditProjects;
