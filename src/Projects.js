import React from "react";
import ProjectCard from "./ProjectCard";
import arrow from "./assets/arrow.png";
import { HashLink as Link } from "react-router-hash-link";

export default function Projects() {
  return (
    
      <div
        className="px-28 py-10  flex-col items-center justify-center"
        id="projects"
      >
        <div className="py-5 text-center">
          <h2 className="text-gray-600">Browse My Recent</h2>
          <h1 className="text-5xl font-bold py-3 ">Projects</h1>
        </div>
        <div className="flex flex-wrap justify-center gap-10 mt-3">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
     
    
  );
}
