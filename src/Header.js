import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { HashLink as Link } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="flex justify-between items-center gap-10 px-28 py-5 ">
      <h1 className="text-3xl">Gautam Dhiman</h1>
      <div>
        <ul className="flex gap-9 text-2xl ">
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
