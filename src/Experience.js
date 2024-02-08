import React from "react";
import check from "./assets/checkmark.png";
import ExpCard from "./ExpCard";

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
    <div className="px-28 py-10">
      <div className="py-5 text-center">
        <h2 className="text-gray-600">Explore My</h2>
        <h1 className="text-5xl font-bold py-3">Experience</h1>
      </div>
      <div className="flex gap-8 justify-center ">
        <ExpCard skills={skills} length={6} start={0}/>
        <ExpCard skills={skills} length={skills.length} start={7}/>
      </div>
    </div>
  );
}
