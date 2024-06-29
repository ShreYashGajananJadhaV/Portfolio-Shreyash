import React from "react";
import frameworks from "../resources/frameworks.jpeg";
import programmingLanguages from "../resources/Programming_languages.jpeg";
import concepts from "../resources/Concepts.jpeg";
import tools from "../resources/tools.jpeg";
import databases from "../resources/databases.jpeg";
import otherskills from "../resources/otherskills.jpeg";

function Skills() {
  return (
    <div className=" border border-transparent rounded-lg p-5">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className="card w-auto shadow-xl transition duration-300 hover:scale-105 bg-gray-200 ">
          <figure className="overflow-hidden">
            <img
              src={programmingLanguages}
              alt="programming_languages"
              className="border-b-2 border-white-500 w-[600px] h-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">Programming Languages</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className=" text-gray-800">Java</li>
              <li className=" text-gray-800">Kotlin</li>
              <li className=" text-gray-800">JavaScript</li>
              <li className=" text-gray-800">Python</li>
            </ul>
          </div>
        </div>

        <div
          className="card  w-auto shadow-xl transition duration-300 hover:scale-105 bg-gray-200   "
          data-theme="sunset"
        >
          <figure className="overflow-hidden border-b-2 border-white">
            <img
              className="w-[600px] h-[200px]"
              src={frameworks}
              alt="technologies"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">Technologies</h2>
            <ul class="list-disc pl-4 space-y-2">
              {" "}
              <li class="text-gray-800">SpringBoot</li>{" "}
              <li class="text-gray-800">Reactjs</li>{" "}
              <li class="text-gray-800">Nodejs</li>{" "}
            </ul>
          </div>
        </div>

        <div
          className="card  w-auto shadow-xl transition duration-300 hover:scale-105 bg-gray-200  "
          data-theme="sunset"
        >
          <figure className="overflow-hidden border-b-2 border-white">
            <img
              src={concepts}
              alt="concepts"
              className="w-[600px] h-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">Concepts</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-gray-800">DSA</li>
              <li className="text-gray-800">OOPs</li>
              <li className="text-gray-800">System Design</li>
              <li className="text-gray-800">DBMS</li>
            </ul>
          </div>
        </div>

        <div
          className="card bg-gray-200 w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="overflow-hidden border-b-2 border-white">
            <img src={tools} alt="tools" className="w-[600px] h-[200px]" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">Tools</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-gray-800">Intellij</li>
              <li className="text-gray-800">Eclipse</li>
              <li className="text-gray-800">Vim</li>
            </ul>
          </div>
        </div>

        <div
          className="card bg-gray-200   w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="overflow-hidden border-b-2 border-white">
            <img
              src={databases}
              alt="databases"
              className="w-[600px] h-[200px]"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-black">Databases</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="text-gray-800">PostgresSQL</li>
              <li className="text-gray-800">MySQL</li>
            </ul>
          </div>
        </div>

        <div
          className="card bg-gray-200  w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="overflow-hidden border-b-2 border-white">
            <img
              src={otherskills}
              alt="other skills"
              className="w-[600px] h-[200px]"
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-black">Other Skills</h2>
            <div className="overflow-y-scroll h-[125px]">
              <ul className="list-disc pl-4 space-y-2 ">
                <li className=" text-gray-800">
                  RestFul API Design and Implementation
                </li>
                <li className="mb-1 text-gray-800">Version Control: Git</li>
                <li className="mb-1 text-gray-800">Build Tools: Maven</li>
                <li className="mb-1 text-gray-800">Agile Methodologies</li>
                <li className="mb-1 text-gray-800">
                  Strong Problem Solving and Trouble Shooting skills
                </li>
                <li className="mb-1 text-gray-800">
                  Strong Team Player and Effective Communicator
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
