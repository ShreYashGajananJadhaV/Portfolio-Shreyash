// HeroSection.js
import React from "react";

import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";

import useGlobalStateManagement from "../Store";
import MainCarousel from "./MainCarousel";

function HeroSection() {
  const blurr = useGlobalStateManagement((state) => state.blurr);

  return (
    <div
      className={`App w-screen  z-0 overflow-scroll overflow-x-hidden flex flex-col p-4 ${
        blurr ? "blur-sm " : ""
      }`}
    >
      <div className=" flex flex-col p-4 justify-center items-center ">
        <MainCarousel />
      </div>

      <div className="flex flex-col p-4 items-center justify-center">
        <span
          id="exp"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 group font-bold"
        >
          EXPERIENCE
          <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 font-bold"></div>
        </span>

        <div className="mb-7">
          <Experience />
        </div>

        <span
          id="prj"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 group font-bold"
        >
          PROJECTS
          <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 font-bold"></div>
        </span>
        <div className=" mb-7 ">
          <Projects />
        </div>

        <span
          id="ski"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 group font-bold"
        >
          SKILLS
          <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 font-bold"></div>
        </span>
        <div className="mb-7 ">
          <Skills />
        </div>

        <span
          id="ach"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 group font-bold"
        >
          ACHIEVEMENTS
          <div class="bg-teal-500 h-[2px] w-0 group-hover:w-full transition-all duration-500 font-bold"></div>
        </span>
        <div className="mb-4 ">
          <Achievements />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
