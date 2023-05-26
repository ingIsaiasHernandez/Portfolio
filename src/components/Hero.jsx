import React from "react";



const Hero = () => {
  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary 
    lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-center">
            <p className="text-lg text-accent mb-[22px]">Hola, soy Isaias </p>
            <h1 className="text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1:2]">
              & desarrollo
              <br />
              aplicaciones web.
            </h1>
            <p className="pt-4 pb-8 md:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Desarrollados con ReactJs y con mucho cariño.
            </p>
            <button className="btn btn-md bg-accent hover:bg-accent-hover md:btn-lg transition-all"><a href="#contact">Hagamos un proyecto</a> </button>
          </div>
          {/* right side
          <div className="hidden lg:flex flex-1 justify-end items-end h-full">
            <img src={} alt="" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
