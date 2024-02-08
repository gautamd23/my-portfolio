import React from "react";
import email from "./assets/email.png";
import link from "./assets/linkedin.png";
import { HashLink as Link } from "react-router-hash-link";
export default function Contact() {
  return (
    <div className="flex flex-col items-center" id="contact">
      <div className="py-5 text-center">
        <h2 className="text-gray-600">Get in Touch</h2>
        <h1 className="text-5xl font-bold py-3">Contact Me</h1>
      </div>
      <div className="flex  items-center gap-6 border-2 mt-8 border-black px-8 py-8 w-[550px] rounded-3xl">
        <div className="flex items-center gap-3">
          <img className="w-10" src={email}></img>
          <h1 className="text-xl">gautamdhiman60@gmail.com</h1>
        </div>
        <div className="flex items-center gap-3">
          <img className="w-8" src={link}></img>
          <h1 className="text-xl">LinkedIn</h1>
        </div>
      </div>
      <div className="my-16">
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
      <div className="mb-12 -mt-4">
        <h1>Copyright © 2023 John Doe. All Rights Reserved.</h1>
      </div>
    </div>
  );
}
