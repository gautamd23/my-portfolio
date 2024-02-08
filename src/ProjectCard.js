import React from "react";
import project1 from "./assets/project-1.png";

export default function ProjectCard() {
  return (
    <div className="px-9 py-9 border-2 border-black w-[450px]  rounded-2xl ">
      <img className="w-full rounded-2xl" src={project1}></img>
      <h2 className="text-center pt-5 text-xl md:text-2xl font-bold">Project One</h2>
      <div className="flex gap-2 md:gap-6  justify-evenly md:justify-center">
        <botton className="py-5 md:py-3  px-5 md:px-8 border-2 border-black text-black rounded-3xl md:rounded-full font-bold text-xs md:text-sm mt-5 mr-4 hover:bg-gray-700 hover:text-white">
          Github
        </botton>
        <botton className="py-5 md:py-3  w-[120px] md:w-0 px-4 md:px-5 border-2 border-black text-black rounded-3xl  md:rounded-full font-bold text-xs md:text-sm mt-5   hover:bg-gray-700 hover:text-white text-center">
          Live Demo
        </botton>
      </div>
    </div>
  );
}
