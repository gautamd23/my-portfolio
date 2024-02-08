import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from "react-router-hash-link";
import menu from "./assets/hamburger.png";
import cross from "./assets/cross-23.png";

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  function handleToggle() {
    setToggleMenu(!toggleMenu);
  }
  function handleClear() {
    setToggleMenu(false);
  }
  return (
    <div className="flex justify-between items-center  gap-20 md:gap-10 px-12 md:px-28 py-8 md:py-5 shadow-lg">
      <h1 className="text-xl md:text-3xl">Gautam Dhiman</h1>
      <div>
        {!toggleMenu && (
          <img
            src={menu}
            className="w-7 inline-block md:hidden cursor-pointer"
            onClick={handleToggle}
          ></img>
        )}
        {toggleMenu && (
          <img
            src={cross}
            className="w-7 inline-block md:hidden "
            onClick={handleToggle}
          ></img>
        )}
        {toggleMenu && (
          <div className="">
            <ul className="absolute top-15 right-3 bg-white px-7 shadow-lg rounded-lg py-6 text-xl">
              <Link to="#about">
                <li className="py-3 " onClick={handleClear}>
                  About
                </li>
              </Link>
              <Link to="#experience">
                <li onClick={handleClear}>Experience</li>
              </Link>
              <Link to="#projects">
                {" "}
                <li className="py-3" onClick={handleClear}>
                  Projects
                </li>
              </Link>
              <Link to="#contact">
                {" "}
                <li onClick={handleClear}>Contact</li>
              </Link>
            </ul>
          </div>
        )}
        <ul className="hidden md:flex gap-9 text-2xl  ">
          <Link to="#about">
            <li>About</li>
          </Link>
          <Link to="#experience">
            <li>Experience</li>
          </Link>
          <Link to="#projects">
            <li>Projects</li>
          </Link>
          <Link to="#contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
