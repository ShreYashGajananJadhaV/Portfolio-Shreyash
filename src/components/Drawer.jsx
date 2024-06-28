import React, { useCallback, useState } from "react";
import SkillBar from "./SkillBar";
import useGlobalStateManagement from "../Store";
import Dropdown from "./Dropdown";
import mylogo from "../shreyashlogo.png";

function Drawer() {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseOut = useCallback(() => {
    setHovered(false);
  }, []);
  const toogleBlurr = useGlobalStateManagement((state) => state.toogleBlurr);
  const blurr = useGlobalStateManagement((state) => state.blurr);
  const handleClick = () => {
    toogleBlurr();
  };

  return (
    <div className="top-0 h-1/4 py-4 px-4 w-full shadow-2xl flex justify-between">
      <section className="my-auto">
        <img src={mylogo} alt="LOGO" className="w-[280px] h-[60px]"></img>
      </section>
      <section className="my-auto">
        <div
          role="button"
          tabIndex={0}
          className={`btn glass float-right  items-center justify-center  px-8 py-3 overflow-hidden font-medium text-teal-300 transition duration-300 ease-out border border-teal-500 rounded-xl shadow-md group `}
          onClick={() => {
            handleClick();
          }}
        >
          <span className="absolute flex items-center justify-center w-full h-full text-white duration-300 translate-x-full bg-teal-600 group-hover:translate-x-0 ease">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="white"
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

          <span className="text-lg absolute flex items-center justify-center w-full h-full text-teal-500 transition duration-300 transform group-hover:-translate-x-full ease ">
            Info
          </span>
          <span className="relative invisible">Info</span>
        </div>

        <Dropdown></Dropdown>
        <div
          className={`z-50 fixed top-0 right-0 h-screen border rounded-lg  transition duration-500 ease-in-out ${
            blurr
              ? "translate-x-0 sm:w-4/5 lg:w-1/3 md:w-1/2"
              : "translate-x-full w-0 "
          }`}
        >
          <button
            className="btn btn-circle hover:btn-ghost border-white left-0 ml-3 mt-3 "
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => toogleBlurr()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={hovered ? "black" : "white"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <SkillBar />
        </div>
      </section>{" "}
    </div>
  );
}

export default Drawer;
