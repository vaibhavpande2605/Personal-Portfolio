import React from "react";
import { Link } from "react-router-dom";

const EducationAdmin = () => {
  return (
    <div className="same-component">
      <div className="same-form">
        <form>
          <h4>Education Component</h4>

          <label htmlFor="text">Education</label>
          <input type="text" />
          <button type="submit">Add Item</button>
        </form>
      </div>

      <div className="same-item">
        <div className="about-info">
          <div className="icons">
            <Link to={"/editEdication"}>
              <i className="fas fa-edit"></i>
            </Link>
            <i className="fas fa-trash"></i>
          </div>
<div className="single-education">
    <p>Web developer</p>
</div>
{/* <h3 className="item-delete-tab"></h3> */}
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

export default EducationAdmin;
