import React from "react";

//impor components
import TestimonialSlider from "../components/TestimonialSlider";

const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2
            className="section-title before:content-testimonials realtive 
          before:absoluite before:opacity-40 before:-top-[2rem] before:-left-64 
          before:hidden before:lg:block"
          >
            Lo que dicen otras personas
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sit
            repellendus sint deserunt enim, impedit dolore, molestiae quas
            maxime, iure ipsa? Quam eum dolore sunt laborum quisquam eius,
            officiis magnam?
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
