import React from "react";
import check from "./assets/checkmark.png";
import ExpCard from "./ExpCard";
import arrow from "./assets/arrow.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Experience() {
  const skills = [
    { skill: "HTML", level: "Experienced" },
    { skill: "CSS", level: "Experienced" },
    { skill: "Javascript", level: "Experienced" },
    { skill: "SASS", level: "experienced" },
    { skill: "JavaScript", level: "experienced" },
    { skill: "TypeScript", level: "experienced" },
    { skill: "Material UI", level: "experienced" },
    { skill: "PostgreSQL", level: "experienced" },
    { skill: "Node JS", level: "experienced" },
    { skill: "Express JS", level: "experienced" },
    { skill: "Git", level: "experienced" },
  ];
  return (
    <div
      className="flex flex-col justify-center items-center px-28 py-3 md:py-10"
      id="experience"
    >
      <div className="py-2 md:py-5 text-center">
        <h2 className="text-gray-600">Explore My</h2>
        <h1 className="text-3xl md:text-5xl font-bold py-3">Experience</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-8 justify-center ">
        <ExpCard skills={skills} length={6} start={0} />
        <ExpCard skills={skills} length={skills.length} start={7} />
        <Link to="#projects">
          <img className="w-6 md:w-8 mt-0 md:mt-72 ml-64 md:ml-0" src={arrow}></img>
        </Link>
      </div>
    </div>
  );
}
