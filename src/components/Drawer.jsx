import React, { useCallback, useState } from "react";
import SkillBar from "./SkillBar";
import useGlobalStateManagement from "../Store";
import Dropdown from "./Dropdown";

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
      {/* <section className="my-auto">
        <img src={mylogo} alt="LOGO" className="w-[280px] h-[60px]"></img>
      </section> */}
      <secton className="flex justify-evenly">
        {" "}
        <h1 className="text-4xl  text-gray-800 font-mono font-extrabold m-auto">
          SHREYASH.
        </h1>
        <div class="relative w-[150px] h-[40px] overflow-hidden m-auto">
          {" "}
          <div class="  absolute w-full h-full flex justify-around  ">
            <div class="w-[55%] h-full bg-blue-500 border-2 border-gray-600 rounded-l-xl"></div>
            <div class="w-[25%] h-full bg-white  border-2 border-gray-600 rounded-l-xl"></div>
            <div class="w-[7%] h-full bg-red-500  border-2 border-gray-600 rounded-r-full"></div>
          </div>
        </div>
      </secton>
      <section className="my-auto">
        <div
          role="button"
          tabIndex={0}
          className={`relative inline-flex float-right  items-center justify-center  px-8 py-3 overflow-hidden font-medium text-black transition duration-300 ease-out border-2 border-black rounded-xl shadow-xl group `}
          onClick={() => {
            handleClick();
          }}
        >
          <span className="absolute flex inset-0 items-center justify-center w-full h-full text-black duration-300 translate-x-full bg-black group-hover:translate-x-0 ease">
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

          <span className=" absolute flex items-center justify-center w-full h-full text-black font-mono font-semibold transition-all duration-300 transform group-hover:-translate-x-full ease ">
            Info
          </span>
          <span className="relative invisible ">Info</span>
        </div>

        <Dropdown></Dropdown>
        <div
          className={`z-50 fixed top-0 right-0 h-screen border rounded-lg transition duration-500 ease-in-out ${
            blurr
              ? "translate-x-0 sm:w-4/5 lg:w-1/3 md:w-1/2"
              : "translate-x-full w-0 "
          }`}
          data-theme="sunset"
        >
          <button
            className="btn btn-circle hover:btn-ghost border-white left-0 ml-3 mt-3"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => toogleBlurr()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke={hovered ? "white" : "white"}
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
