import React from "react";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import FAQ from "./FAQ";
const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Skills />
      <Services />
      <Testimonials />
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
