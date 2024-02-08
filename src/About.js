import React from "react";
import profile from "./assets/portfolioImg.jpg";
import exp from "./assets/experience.png";
import edu from './assets/education.png';
import arrow from './assets/arrow.png';
import { HashLink as Link } from "react-router-hash-link";

export default function About() {
  return (
    <div className="px-28 py-10 flex-col flex   items-center" id="about">
      <div className="py-5 text-center">
        <h2 className="text-gray-600">Get to Know More</h2>
        <h1 className="text-5xl font-bold py-3">About Me</h1>
      </div>
      <div className="flex  gap-5 justify-center items-center">
        <div className="w-full">
          <img className="w-[380px] rounded-3xl" src={profile}></img>
        </div>
        <div className="w-[50%] ">
          <div className="grid grid-flow-col py-4 pb-8">
            <div className="w-64 px-4 py-5 border-2 rounded-3xl mr-8 ">
              <img className="w-8 pb-2" src={exp}></img>
              <p><span className="font-bold">Experience</span><br/>  2+ years Frontend Development</p>
            </div>
            <div className="w-64 px-4 py-5 border-2 rounded-3xl">
              <img className="w-8 pb-2" src={edu}></img>
              <p>
                <span className="font-bold">Education</span> <br/> B.Sc. Bachelors Degree M.Sc. Masters
                Degree
              </p>
            </div>
          </div>
          <div className="">
            <h4>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </h4>
          </div>
        </div>
        <Link to="#experience"><img className="w-16 mt-72  " src={arrow }></img></Link>
      </div>
      
    </div>
  );
}
