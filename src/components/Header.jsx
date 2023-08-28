import React, { useEffect, useState } from "react";

import Logo from "../assets/img/Logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";
import Socials from "./Socials";
import { Link } from "react-router-dom";

const Header = () => {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : false;
    });
  });

  return (
    <header className={`${
        bg ? "bg-nav bg-cover h-20 " : "h-24 shadow-2xl"
      } flex fixed top-0 w-full text-white z-50 transition-all duration-300`}
    >
      <div className="h-full w-full flex items-center justify-between px-4">
        {/* logo */}
        <Link to='/'>
          <img src={Logo} alt="" />
        </Link>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* Social */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* Nav mobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
