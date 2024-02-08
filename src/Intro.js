import React from "react";
import profile from "./assets/portfolioImg.jpg";
import linkedIn from "./assets/linkedin.png";
import github from "./assets/github.png";

export default function Intro() {
  return (
    <div className="flex flex-col md:flex-row py-14 justify-center gap-9 md:gap-32 items-center">
      <div>
        <img className="w-[200px] md:w-[410px]  rounded-full" src={profile}></img>
      </div>
      <div className="text-center">
        <h1 className="text-gray-500 font-bold">Hello, I'm </h1>
        <h1 className="text-2xl md:text-5xl py-2 md:py-4 font-bold ">Gautam Dhiman</h1>
        <h2 className="font-bold text-xl md:text-3xl text-gray-500">Frontend Developer</h2>

        <button className="py-3  px-4 border-2 border-black text-black rounded-full font-bold text-sm my-5 mr-4 hover:bg-gray-700 hover:text-white">
          Download CV
        </button>
        <button className="py-3  px-4 border-2  border-gray-700  bg-gray-700 text-white rounded-full font-bold text-sm my-5 mr-3 hover:bg-gray-900">
          Contact Info
        </button>
        <div className="flex justify-center gap-4">
          <img className="w-9 cursor-pointer" src={linkedIn}></img>
          <img className="w-9 cursor-pointer" src={github}></img>
        </div>
      </div>
    </div>
  );
}
