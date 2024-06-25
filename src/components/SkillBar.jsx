import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const SkillBar = () => {
  const handleEXPClick = () => {
    const element = document.getElementById("exp");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handlePRJClick = () => {
    const element = document.getElementById("prj");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSKIClick = () => {
    const element = document.getElementById("ski");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleACHClick = () => {
    const element = document.getElementById("ach");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const handleABMClick = () => {
    const element = document.getElementById("abm");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-screen top-0 right-0  max-w-screen  p-8 border-color-black text-white font-semibold  bg-gray-800">
      <div className="container mx-auto p-10">
        <div className="flex flex-col justify-center items-center">
          <button className="text-center w-full xl" onClick={handleABMClick}>
            <div className="mb-4  w-full ">
              <div className="bg-yellow-500 hover:text-yellow-500 rounded-xl w-full h-full p-4 border hover:animate-border-color transition duration-1000 ease-out  hover:scale-105 hover:bg-transparent ">
                <p className="text-lg text-center ">About Me</p>
              </div>
            </div>
          </button>
          <button className="text-center w-full" onClick={handleEXPClick}>
            <div className="mb-4  w-full">
              <div className="bg-orange-500 hover:text-orange-500 rounded-lg w-full h-full p-4 border hover:animate-border-color transition duration-1000 ease-out  hover:scale-105 hover:bg-transparent ">
                <p className="text-lg text-center">Experience</p>
              </div>
            </div>
          </button>
          <button className="text-center w-full" onClick={handlePRJClick}>
            <div className="mb-4  w-full">
              <div className="bg-blue-500 hover:text-blue-500 rounded-lg w-full h-full p-4 border hover:animate-border-color transition duration-1000 ease-out  hover:scale-105 hover:bg-transparent ">
                <p className="text-lg text-center">Project</p>
              </div>
            </div>
          </button>
          <button className="text-center w-full" onClick={handleSKIClick}>
            <div className="mb-4 w-full">
              <div className="bg-green-500 hover:text-green-500 rounded-lg w-full h-full p-4 border hover:animate-border-color transition duration-1000 ease-out  hover:scale-105 hover:bg-transparent ">
                <p className="text-lg text-center">Skills</p>
              </div>
            </div>
          </button>
          <button className="text-center w-full" onClick={handleACHClick}>
            <div className="transition duration-1000 ease-out hover:scale-110 w-full">
              <div className="bg-red-500 hover:text-red-500 rounded-lg w-full h-full p-4 border hover:animate-border-color transition duration-1000 ease-out  hover:scale-105 hover:bg-transparent ">
                <p className="text-lg text-center">Achievements</p>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
