import React from "react";
import check from "./assets/checkmark.png";

export default function ExpCard({ skills, length, start }) {
  return (
    <div className="w-[300px] md:w-auto py-8 px-8 md:px-14 border-2 border-black rounded-3xl">
      <h1 className="font-bold text-xl md:text-3xl   text-center pb-7 text-gray-700">
        Frontend Development
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
        {skills.slice(start, length).map((s, key) => {
          return (
            <div className="flex items-center gap-2">
              <img className="w-7 " src={check}></img>
              <div><h2 className="font-bold text-xl">
                {s.skill}
                <br />
              </h2>
              <h3>{s.level}</h3>
            </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

{
  /* <div className="grid grid-cols-2 gap-4">
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
      </div> */
}
