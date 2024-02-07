import React from "react";
import check from "./assets/checkmark.png";

export default function Experience() {
  return (
    <div className="px-28 py-10">
      <div className="py-5 text-center">
        <h2 className="text-gray-600">Explore My</h2>
        <h1 className="text-5xl font-bold py-3">Experience</h1>
      </div>
      <div className="flex gap-8 justify-center ">
        <div className="py-5 px-5 border-2 border-black rounded-3xl">
          <h1 className="font-bold text-2xl text-gray-700 text-center pb-5">
            Frontend Development
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <img className="w-7 " src={check}></img>
              <h2>
                HTML
                <br /> Experienced
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-7 " src={check}></img>
              <h2>
                CSS
                <br /> Experienced
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-7 " src={check}></img>
              <h2>
                SASS
                <br /> Intermediate
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-7 " src={check}></img>
              <h2>
                JavaScript
                <br /> Basic
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-7 " src={check}></img>
              <h2>
                TypeScript
                <br /> Basic
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <img className="w-7 " src={check}></img>
              <h2>
                Material
                <br /> UI Intermediate
              </h2>
            </div>
          </div>
        </div>
        <div className="py-5 px-5 border-2 border-black rounded-3xl">
          <h1 className="font-bold text-2xl text-gray-700 text-center pb-5">
            Frontend Development
          </h1>
          <ul className="grid grid-cols-2 gap-4">
            <li>
              HTML
              <br /> Experienced
            </li>
            <li>
              CSS
              <br /> Experienced
            </li>
            <li>
              SASS
              <br /> Intermediate
            </li>
            <li>
              JavaScript
              <br /> Basic
            </li>
            <li>
              TypeScript
              <br /> Basic
            </li>
            <li>
              Material
              <br /> UI Intermediate
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
