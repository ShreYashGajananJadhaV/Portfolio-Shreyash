import React, { useEffect, useState } from "react";
import SkillBar from "./SkillBar";
import useGlobalStateManagement from "../Store";
function Drawer() {
  // const [isOpen, setIsOpen] = React.useState(false);
  const toogleBlurr = useGlobalStateManagement((state) => state.toogleBlurr);
  const blurr = useGlobalStateManagement((state) => state.blurr);
  const handleClick = () => {
    toogleBlurr();
  };

  return (
    <div className=" top-0 h-1/4 p-4 border w-full bg-slate-700  ">
      <button
        className={`hover:animate-border-color float-right relative inline-flex items-center justify-center  px-8 py-3 overflow-hidden font-medium text-teal-300 transition duration-300 ease-out border border-teal-500 rounded-3xl shadow-md group`}
        onClick={() => {
          handleClick();
        }}
      >
        <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-teal-500 group-hover:translate-x-0 ease">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 5l-7 7m0 0l7 7m-7-7H17"
            ></path>
          </svg>
        </span>
        <span className="text-lg absolute flex items-center justify-center w-full h-full text-teal-500 transition duration-300 transform group-hover:-translate-x-full ease">
          Info
        </span>
        <span className="relative invisible">Info</span>
      </button>

      <div
        className={`z-50 fixed top-0 right-0 h-screen border rounded-lg bg-slate-900 transition duration-500 ease-in-out ${
          blurr
            ? "translate-x-0 sm:w-4/5 lg:w-1/3 md:w-1/2"
            : "translate-x-full w-0 "
        }`}
      >
        <button
          className={` p-3 rounded-full top-0 right-0 text-yellow-400 text-3xl`}
          onClick={() => toogleBlurr()}
        >
          {blurr ? " X " : ""}
        </button>
        <SkillBar />
      </div>
    </div>
  );
}

export default Drawer;
