import React from "react";
import "./Admin.css";
import { Link } from "react-router-dom";
import AboutAdmin from "./AboutAdmin";
import EducationAdmin from "./EducationAdmin";
import ProjectsAdmin from "./ProjectsAdmin";
import SkillsAdmin from "./SkillsAdmin";
import ExperienceAdmin from "./ExperienceAdmin";
import '../Homepages/skills.css'

const Admin = () => {
  return (
    <div className="main-container">
        <br />
      <h2 className="title">Admin Forms</h2>
      <div className="admin-center">
        {/* about admin components */}
        <h4 className="admin-title">About component</h4>
        <AboutAdmin />
        {/* end of about componenet */}

        <br />
        <br />

        <hr style={{ border: "1px solid lightgray" }} />
        <br />
        <br />

        {/* education admin component */}
        <h4 className="admin-title">Education component</h4>
        <EducationAdmin />
        {/*end  education component */}

        <br />
        <br />

        <hr style={{ border: "1px solid lightgray" }} />
        <br />
        <br />

        {/* skills admin component/ */}
        {/* <h4 className="admin-title">Skills component</h4>
        <SkillsAdmin />
        end  skills component */}

        {/* <br />
        <br />

        <hr style={{ border: "1px solid lightgray" }} />
        <br />
        <br /> */}

    {/* project admin component */}
    <h4 className="admin-title">Projects component</h4>
        <ProjectsAdmin />
        {/*end project component */}

        <br />
        <br />

        <hr style={{ border: "1px solid lightgray" }} />
        <br />
        <br />

        {/* experience admin component */}
        <h4 className="admin-title">Experience component</h4>
        <ExperienceAdmin />
        {/*end  experience component */}

        <br />
        <br />

        <hr style={{ border: "1px solid lightgray" }} />
        <br />
        <br />


    

      </div>
    </div>
  );
};

export default Admin;
