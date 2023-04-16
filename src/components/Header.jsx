import React, { useState, useEffect } from "react";

/***** import components ******/
import Logo from "../assets/img/logo2.svg";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  }, []);

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        <a href="/">
            <img src={Logo} alt="Logo" />
        </a>
        <div className="hidden lg:block">
            <Nav></Nav>
        </div>
        <div className="hidden lg:block">
            <Socials></Socials>
        </div>
        <div className="lg:hidden">
            <NavMobile></NavMobile>
        </div>
      </div>
    </header>
  );
};

export default Header;
