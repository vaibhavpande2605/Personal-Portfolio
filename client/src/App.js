import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// Homepages components
import Header from "./components/Homepages/Header";
// import Projects from "./components/Homepages/Projects";
// import Register from "./components/Homepages/Register";
import Navbar from "./components/Homepages/Navbar";
// import Login from "./components/Homepages/Login";
// import Footer from "./components/Homepages/Footer";
// import Experience from "./components/Homepages/Experience";
import Education from "./components/Homepages/Education";
// import Contact from "./components/Homepages/Contact";
import About from "./components/Homepages/About";
// import Skills from "./components/Homepages/Skills";

// Admin components

// import Admin from "./components/adminComponents/Admin";
// import EducationAdmin from './components/adminComponents/EducationAdmin';
// import ProjectsAdmin from './components/adminComponents/ProjectsAdmin';
// import ExperienceAdmin from './components/adminComponents/ExperienceAdmin';
// import AboutAdmin from './components/adminComponents/AboutAdmin';

// edit components

// import EditAbout from "./components/editComponents/EditAbout";
// import EditEducation from "./components/editComponents/EditEducation";
// import EditExperience from "./components/editComponents/EditExperience";
// import EditProjects from "./components/editComponents/EditProjects";
// import EditSkills from "./components/editComponents/EditSkills";

import { Routes, Route, Link } from "react-router-dom";
import { Element } from "react-scroll";
import e from "cors";

function App() {
  return (
    <>
      <div className="App">
        {/* navbar components */}

        <Navbar />

        <Element className="Home">
          <Routes>
            <Route exact path={"/"} element={<Header />} />
          </Routes>
        </Element>

        <Element className="About">
          <Routes>
            <Route exact path="/" element={<About />} />
          </Routes>
        </Element>
     
      <Element className="Education">
        <Routes>
          <Route exact path="/" element={<Education />} />
        </Routes>
      </Element>
   {/*
      <Element className="Skills">
        <Routes>
          <Route exact path="/" element={<Skills />} />
        </Routes>
      </Element>

      <Element className="Projects">
        <Routes>
          <Route exact path="/" element={<Projects />} />
        </Routes>
      </Element>

      <Element className="Experience">
        <Routes>
          <Route exact path="/" element={<Experience />} />
        </Routes>
      </Element>
      <Element className="Contact">
        <Routes>
          <Route exact path="/" element={<Contact />} />
        </Routes>
      </Element>

      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Footer />
      </Routes>
      <Routes>
        <Route exact path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      <Routes>
        <Route exact path="/edit/:id" element={<EditAbout />} />
      </Routes>
      <Routes>
        <Route exact path="/editEducation/:id" element={<EditEducation />} />
      </Routes>
      <Routes>
        <Route exact path="/editSkills/:id" element={<EditSkills />} />
      </Routes>
      <Routes>
        <Route exact path="/editProject/:id" element={<EditProjects />} />
      </Routes>
      <Routes>
        <Route exact path="/editExperience/:id" element={<EditExperience />} />
      </Routes> */}
      </div>
    </>
  );
}

export default App;
