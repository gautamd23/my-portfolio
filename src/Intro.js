import React from "react";
import profile from "./assets/portfolioImg.jpg";

export default function Intro() {
  return (
    <div className="flex py-14 justify-center gap-32 items-center">
      <div>
        <img className="w-[410px] rounded-full" src={profile}></img>
      </div>
      <div className="text-center">
        <h1 className="text-gray-500 font-bold">Hello, I'm </h1>
        <h1 className="text-4xl py-4 font-bold ">Gautam Dhiman</h1>
        <h2 className="font-bold text-2xl text-gray-500">Frontend Developer</h2>

        <button className="py-3  px-4 border-2 border-black text-black rounded-full font-bold my-5 mr-4">Download CV</button>
        <button className="py-3  px-4 border-2  border-black bg-gray-900 text-white rounded-full font-bold my-5 mr-3">Contact Info</button>
      </div>
    </div>
  );
}
