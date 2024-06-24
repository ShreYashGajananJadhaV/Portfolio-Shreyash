// HeroSection.js
import React, { useEffect } from "react";
import { useState } from "react";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Achievements from "./Achievements";
import MyPhoto from "../resources/MyPhoto.png";
import useGlobalStateManagement from "../Store";
function HeroSection() {
  const blurr = useGlobalStateManagement((state) => state.blurr);

  return (
    <div
      className={`App w-screen  z-0 overflow-scroll overflow-x-hidden flex flex-col p-4 ${
        blurr ? "blur-sm " : ""
      }`}
    >
      <div className=" flex flex-col p-4 justify-center items-center">
        <div className="avatar mask mask-squircle mb-4 w-[400px] h-[400px] overflow-hidden shadow-2xl">
          <img
            className="bg-cover  w-[400px] h-[400px] transition duration-1000 ease-out hover:scale-110"
            alt="My_Photo"
            src={MyPhoto}
          />
        </div>

        <p
          id="abm"
          class=" tracking-normal text-4xl mb-4 mr-2 text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          ABOUT ME
        </p>

        <div className="shadow-2xl leading-relaxed w-full rounded-xl p-4 hover:animate-border-color   hover:text-neutral-100 text-neutral-300 border border-transparent">
          <p>
            A software company is forming teams that consist of a specifics
            number of employees. There are two types of employees: software
            developers and software testers. They want to make sure the
            developers and testers are well-integrated, so they decide to limit
            the number of testers and developers that can be seated
            consecutively with employees of the same type. Given the desired
            team size and these limits, how many different ways can the company
            form a team? Input d: the maximum number of consecutive developers
            allowed t: the maximum number of consecutive testers allowed n: the
            desired team size Output The number of ways to form a team modulo
            10^9 + 7 (because the number of ways could be very large). Example
            Let's say d = 3, t = 2, and n = 4. This means you need a team of 4
            employees where there are fewer than 3 developers seated
            consecutively and fewer than 2 testers seated consecutively. There
            are 5 ways to form the team with these constraints. If 'D' denotes a
            developer and 'T' denotes a tester, these ways are as follows:
          </p>
        </div>
      </div>

      <div className="flex flex-col p-4 items-center justify-center">
        <span
          id="exp"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          EXPERIENCE
        </span>

        <div className="mb-7">
          <Experience />
        </div>

        <span
          id="prj"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          PROJECTS
        </span>
        <div className=" mb-7 ">
          <Projects />
        </div>

        <span
          id="ski"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          SKILLS
        </span>
        <div className="mb-7 ">
          <Skills />
        </div>

        <span
          id="ach"
          class="text-4xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400"
        >
          ACHIEVEMENTS
        </span>
        <div className="mb-4 ">
          <Achievements />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
