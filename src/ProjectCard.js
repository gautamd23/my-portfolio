import React from "react";
import project1 from "./assets/project-1.png";
import netflix from "./assets/netflixpng.png";
import swiggy from "./assets/swiggyImg.jpg";
import { Link } from "react-router-dom";

export default function ProjectCard({ image, name, github,live }) {

    function handleGithub() {
        <Link to="https://github.com/gautamd23/NetflixApp"></Link>
    }
  return (
    <div className="px-9 py-9 bg-white  w-[450px]  rounded-2xl shadow-lg">
      <img className="w-full max-h-[440px] rounded-2xl " src={image}></img>
      <h2 className="text-center pt-5 text-xl md:text-2xl font-bold">{name}</h2>
      <div className="flex gap-2 md:gap-6  justify-evenly md:justify-center mt-3 md:mt-4">
        {/* <botton className="py-5 md:py-3  px-5 md:px-8 border border-black text-black rounded-3xl md:rounded-full font-bold text-xs md:text-sm mt-5 mr-4 hover:bg-gray-700 hover:text-white cursor-pointer" onClick={handleGithub}>
        <Link to="https://github.com/gautamd23/NetflixApp">Github</Link>
        </botton> */}
        <Link to={github}><button className="py-2 px-7 border border-black rounded-3xl text-xs md:text-sm hover:bg-gray-700 hover:text-white cursor-pointer font-bold">Github</button></Link>

        {/* <botton className="py-5 md:py-3  w-[120px] md:w-auto px-4 md:px-5 border border-black text-black rounded-3xl  md:rounded-full font-bold text-xs md:text-sm mt-5   hover:bg-gray-700 hover:text-white text-center md:text-balance">
          Live Demo
        </botton> */}
        <Link to={live}><button className="py-2 px-4 border border-black rounded-3xl text-xs md:text-sm hover:bg-gray-700 hover:text-white font-bold">Live Demo</button></Link>
      </div>
    </div>
  );
}
