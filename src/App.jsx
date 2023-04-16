// import components
import React from "react";
import About from "./components/About";
import Brands from "./components/Brands";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import TopBtn from "./components/TopBtn";

const App = () => {
  
  return (
    <div>
      
      <Header />
      <Hero />
      <Brands />
      <About />
      <Skills />
      <Services />
      <Portfolio />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
      <TopBtn />
    </div>
  );
};

export default App;
