import React from "react";

//import services data
import { services } from "../data";

const Services = () => {
  return (
    <section id="services" className="section bg-tertiary">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-services relative 
            before:absolute before:opacity-40 before:-top-[2rem] before:-left-28
            before:hidden before:lg:block"
          >
            Habilidades
          </h2>
          <p className="subtitle">
            Habilidades basadas en PERN Stack como PostgreSQL , Express, React, y node.js para crear aplicaciónes web con operaciones CRUD.
          </p>
        </div>
        {/* item grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { icon, name, description } = service;
            return <div className="bg-secondary p-6 rounded-2xl" key={index}>
                <div className="w-16 h-16 flex justify-center item-center mb-24">
                    <img src={icon} alt="" />
                </div>
                <h4 className="text-xl font-medium">{name}</h4>
              <p>
                {description}
              </p>
            </div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
