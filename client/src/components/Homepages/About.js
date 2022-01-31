import React, { useContext } from "react";
import { DataContext } from "../context/GlobalContext";

const About = () => {
  const state = useContext(DataContext);
  const [about] = state.about;
  // console.log(about);

  return (
    <>
      <main class="container">
  <div class="bg-light p-5 rounded">
    <h1>Navbar example</h1>
    <p class="lead">This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.</p>
    <a class="btn btn-lg btn-primary" href="/docs/5.0/components/navbar/" role="button">View navbar docs »</a>
  </div>
</main>
    </>
  );
};

export default About;
