import React from "react";
import profile from "./assets/portfolioImg.jpg";
import exp from "./assets/experience.png";
import edu from './assets/education.png';
import arrow from './assets/arrow.png';
import { HashLink as Link } from "react-router-hash-link";

export default function About() {
  return (
    <div className="px-20 md:px-28 py-5 md:py-10 flex-col flex   items-center" id="about">
      <div className="py-5 text-center">
        <h2 className="text-gray-600">Get to Know More</h2>
        <h1 className="text-3xl md:text-5xl font-bold py-3">About Me</h1>
      </div>
      <div className="flex flex-col md:flex-row  gap-5 justify-center items-center">
        <div className="w-1/3 md:w-full">
          <img className="w-[200px] md:w-[380px] rounded-3xl" src={profile}></img>
        </div>
        <div className="w-full md:w-[50%] ">
          <div className="grid grid-flow-col py-4 pb-8">
            <div className="w-44 md:w-64 px-4 py-5 border-2 rounded-3xl mr-8 ">
              <img className="w-8 pb-2" src={exp}></img>
              <p><span className="font-bold">Experience</span><br/>  2+ years Frontend Development</p>
            </div>
            <div className="w-44 md:w-64 px-4 py-5 border-2 rounded-3xl">
              <img className="w-8 pb-2" src={edu}></img>
              <p>
                <span className="font-bold">Education</span> <br/> B.Sc. Bachelors Degree M.Sc. Masters
                Degree
              </p>
            </div>
          </div>
          <div className="">
            <h4 className="px-4 md:px-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
              reprehenderit et laborum, rem, dolore eum quod voluptate
              exercitationem nobis, nihil esse debitis maxime facere minus sint
              delectus velit in eos quo officiis explicabo deleniti dignissimos.
              Eligendi illum libero dolorum cum laboriosam corrupti quidem,
              reiciendis ea magnam? Nulla, impedit fuga!
            </h4>
          </div>
        </div>
        <Link to="#experience"><img className="w-6 md:w-16 mt-0 md:mt-72  ml-64 md:ml-0" src={arrow }></img></Link>
      </div>
      
    </div>
  );
}
