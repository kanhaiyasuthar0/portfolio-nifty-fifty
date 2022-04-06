import React from "react";
import Separator from "../common";
import About from "./About/About";
import "./body.css";
import Contact from "./contact/Contact";
import Project from "./projects/Project";
import Skills from "./skills/Skills";
const Body = () => {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <Separator/>
      <section id="projects">
        <Project />
      </section>
      <Separator/>
      <section id="skills">
        <Skills />
      </section>
      <Separator/>
      <section id="contact">
        <Contact />
      </section>
      <Separator/>
    </div>
  );
};

export default Body;
