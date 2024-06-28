import React from "react";

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
    <div className="h-screen top-0 right-0  max-w-screen p-8 border-color-black text-white font-semibold ">
      <div className="container mx-auto p-10">
        <div className="flex flex-col justify-center items-center">
          <button
            data-theme="dim"
            onClick={handleEXPClick}
            className=" rounded px-5 py-2.5  w-full h-full mb-4 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-yellow-300 hover:to-slate-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300"
          >
            <div class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></div>
            <span class="text-lg text-center">Experience</span>
          </button>

          <button
            data-theme="dim"
            onClick={handlePRJClick}
            className=" rounded px-5 py-2.5  w-full h-full mb-4 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-orange-400 hover:to-slate-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300"
          >
            <div class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></div>
            <span class="text-lg text-center">Projects</span>
          </button>

          <button
            data-theme="dim"
            onClick={handleSKIClick}
            className=" rounded px-5 py-2.5  w-full h-full mb-4 overflow-hidden group  relative hover:bg-gradient-to-r hover:from-red-400 hover:to-slate-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300"
          >
            <div class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></div>
            <span class="text-lg text-center">Skills</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
