import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
// Homepages components
import Header from "./components/Homepages/Header";
import Projects from "./components/Homepages/Projects";

import Navbar from "./components/Homepages/Navbar";

import Footer from "./components/Homepages/Footer";
import Experience from "./components/Homepages/Experience";
import Education from "./components/Homepages/Education";
import Contact from "./components/Homepages/Contact";
import About from "./components/Homepages/About";
import Skills from "./components/Homepages/Skills";

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
        <Element className="Footer">
          <Routes>
            <Route exact path="/" element={<Footer />} />
          </Routes>
        </Element>
      </div>
    </>
  );
}

export default App;
