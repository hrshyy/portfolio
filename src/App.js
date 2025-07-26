import React from "react";
import Hero from "./menu/Hero";
import About from "./menu/About";
import Education from './menu/Education';
import Skills from "./menu/Skills";
import Projects from "./menu/Projects";
import Contact from "./menu/Contact";
import Header from "./menu/Header";


function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Education/>
      <Skills />
      <Projects />
      <Contact />
      
    </>
  );
}

export default App;
