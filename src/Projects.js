import React from "react";
import ProjectCard from "./ProjectCard";
import arrow from "./assets/arrow.png";
import { HashLink as Link } from "react-router-hash-link";
import netflix from "./assets/netflixpng.png";
import swiggy from "./assets/swiggyImg.jpg";
import eat from "./assets/eatNsplit.png";
import worldwise from "./assets/worldwise.jpg";
export default function Projects() {
  return (
    <div
      className="bg-slate-100 px-10 md:px-28 py-5 md:py-10  flex-col items-center justify-center"
      id="projects"
    >
      <div className="py-2 md:py-5 text-center">
        <h2 className="text-gray-600">Browse My Recent</h2>
        <h1 className="text-3xl md:text-5xl font-bold py-3 ">Projects</h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-3 ">
        <ProjectCard
          image={netflix}
          name="Netflix Clone"
          github="https://github.com/gautamd23/NetflixApp"
          live="https://65b9e1ae2cc4ca9057abfe8c--iridescent-faloodeh-08a266.netlify.app/"
        />
        <ProjectCard
          image={swiggy}
          name="Food Ordering App"
          github="https://github.com/gautamd23/foodOrderingAppv1"
          live={"https://main--idyllic-tartufo-0285e1.netlify.app/"}
        />
        <ProjectCard
          image={eat}
          name="Eat-n-Split"
          github="https://github.com/gautamd23/EatAndSplitReact"
        />
        <ProjectCard
          image={worldwise}
          name="WorldWise"
          github="https://github.com/gautamd23/worldwise"
          live="https://65c77384e53246689ed44d5e--joyful-speculoos-d4c4a6.netlify.app/"
        />
      </div>
    </div>
  );
}
