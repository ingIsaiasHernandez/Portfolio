import React from "react";

/***** import image ******/
import Image from "../assets/img/isaias.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] 
            md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt=""
          />
          <div
            className="flex flex-col items-center text-center lg:items-start 
          lg:text-left"
          >
            <div className="flex flex-col">
              <h2
                className="text-3xl lg:text-4xl font-medium lg:font-extraboid 
                mb-3 before:content-about relative
                before:absolute before::opacity-40
                before:-top-[2rem] before:hidden
                before:lg:block"
              >
                Isaias Hernandez
              </h2>
              <p className="mb-4 text-accent">
                Desarrollador Front-End | ReactJs
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Me considero una persona persistente, honesta y trabajadora, con
                capacidad de trabajo en equipo, bajo condiciones de alta
                presión, con iniciativa para resolver problemas para lograr las
                metas y objetivos trazados en mi crecimiento profesional.
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover">
              <a href="#contact">
              Contáctame
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;