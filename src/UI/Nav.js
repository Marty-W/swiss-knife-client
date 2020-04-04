import React, { useState } from "react";

import NavBar from "./Navbar";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

const Nav = () => {
  const [showResponsiveMenu, setShowResponsiveMenu] = useState(false);

  const toggleMenu = () => {
    setShowResponsiveMenu((prev) => !prev);
  };

  console.log(showResponsiveMenu);

  return (
    <>
      <Logo />
      <NavBar showMenu={showResponsiveMenu} toggleMenu={toggleMenu} />
      <MenuIcon showMenu={showResponsiveMenu} toggleMenu={toggleMenu} />
    </>
  );
};

export default Nav;
