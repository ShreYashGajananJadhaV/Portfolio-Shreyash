import React from "react";
import frameworks from "../resources/frameworks.jpeg";
import programmingLanguages from "../resources/Programming_languages.jpeg";
import concepts from "../resources/Concepts.jpeg";
import tools from "../resources/tools.jpeg";
import databases from "../resources/databases.jpeg";
import otherskills from "../resources/otherskills.jpeg";

function Skills() {
  return (
    <div className=" border border-transparent rounded-lg p-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          className="card bg-base-100 w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="px-10 pt-10">
            <img
              src={programmingLanguages}
              alt="programming_languages"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-indigo-400">
              Programming Languages
            </h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className=" hover:text-white text-neutral-300">Java</li>
              <li className=" hover:text-white text-neutral-300">Kotlin</li>
              <li className=" hover:text-white text-neutral-300">JavaScript</li>
              <li className=" hover:text-neutral-100 text-neutral-300">
                Python
              </li>
            </ul>
          </div>
        </div>

        <div
          className="card bg-base-100  w-auto shadow-xl transition duration-300 hover:scale-105  "
          data-theme="sunset"
        >
          <figure className="px-10 pt-10">
            <img src={frameworks} alt="technologies" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-indigo-400">Technologies</h2>
            <ul class="list-disc pl-4 space-y-2">
              {" "}
              <li class="hover:text-white text-neutral-300">SpringBoot</li>{" "}
              <li class="hover:text-white text-neutral-300">Reactjs</li>{" "}
              <li class="hover:text-white text-neutral-300">Nodejs</li>{" "}
            </ul>
          </div>
        </div>

        <div
          className="card bg-base-100  w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="px-10 pt-10">
            <img src={concepts} alt="concepts" className="rounded-xl" />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title text-indigo-400">Concepts</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="hover:text-white text-neutral-300">DSA</li>
              <li className="hover:text-white text-neutral-300">OOPs</li>
              <li className="hover:text-white text-neutral-300">
                System Design
              </li>
              <li className="hover:text-white text-neutral-300">DBMS</li>
            </ul>
          </div>
        </div>

        <div
          className="card bg-base-100  w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="px-10 pt-10">
            <img src={tools} alt="tools" className="rounded-xl" />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title text-indigo-400">Tools</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="hover:text-white text-neutral-300">Intellij</li>
              <li className="hover:text-white text-neutral-300">Eclipse</li>
              <li className="hover:text-white text-neutral-300">Vim</li>
            </ul>
          </div>
        </div>

        <div
          className="card bg-base-100 w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="px-10 pt-10">
            <img src={databases} alt="databases" className="rounded-xl" />
          </figure>
          <div className="card-body items-center ">
            <h2 className="card-title text-indigo-400">Databases</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className="hover:text-white text-neutral-300">PostgresSQL</li>
              <li className="hover:text-white text-neutral-300">MySQL</li>
            </ul>
          </div>
        </div>

        <div
          className="card bg-base-100 w-auto shadow-xl transition duration-300 hover:scale-105"
          data-theme="sunset"
        >
          <figure className="px-10 pt-10">
            <img src={otherskills} alt="other skills" className="rounded-xl" />
          </figure>
          <div className="card-body items-center">
            <h2 className="card-title text-indigo-400">Other Skills</h2>
            <ul className="list-disc pl-4 space-y-2">
              <li className=" hover:text-white text-neutral-300">
                RestFul API Design and Implementation
              </li>
              <li className="mb-1 hover:text-white text-neutral-300">
                Version Control: Git
              </li>
              <li className="mb-1 hover:text-white text-neutral-300">
                Build Tools: Maven
              </li>
              <li className="mb-1 hover:text-white text-neutral-300">
                Agile Methodologies
              </li>
              <li className="mb-1 hover:text-white text-neutral-300">
                Strong Problem Solving and Trouble Shooting skills
              </li>
              <li className="mb-1 hover:text-white text-neutral-300">
                Strong Team Player and Effective Communicator
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
