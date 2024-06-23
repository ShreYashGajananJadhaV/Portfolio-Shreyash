import React from "react";

function Skills() {
  return (
    <div className=" border border-transparent rounded-lg p-5 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-transparent p-4 rounded-xl shadow-lg border border-transparent hover:animate-border-color">
          <h3 className="text-lg text-indigo-400 font-medium mb-2">
            Programming Languages
          </h3>
          <ul className="list-none mb-4">
            <li className=" hover:text-white text-neutral-300">Java</li>
            <li className=" hover:text-white text-neutral-300">Kotlin</li>
            <li className=" hover:text-white text-neutral-300">JavaScript</li>
            <li className=" hover:text-neutral-100 text-neutral-300">Python</li>
          </ul>
        </div>
        <div className="bg-transparent p-4 rounded-xl shadow-md border border-transparent hover:animate-border-color ">
          <h3 className="text-lg text-indigo-400 font-medium mb-2">
            Technologies
          </h3>
          <ul className="list-none mb-4">
            <li className="hover:text-white text-neutral-300">SpringBoot</li>
            <li className="hover:text-white text-neutral-300">Reactjs</li>
            <li className="hover:text-white text-neutral-300">Nodejs</li>
          </ul>
        </div>
        <div className="bg-transparent p-4 rounded-xl shadow-md border border-transparent hover:animate-border-color">
          <h3 className="text-lg text-indigo-400 font-medium mb-2">Concepts</h3>
          <ul className="list-none mb-4">
            <li className="hover:text-white text-neutral-300">DSA</li>
            <li className="hover:text-white text-neutral-300">OOPs</li>
            <li className="hover:text-white text-neutral-300">System Design</li>
            <li className="hover:text-white text-neutral-300">DBMS</li>
          </ul>
        </div>
        <div className="bg-transparent p-4 rounded-xl shadow-md border border-transparent hover:animate-border-color">
          <h3 className="text-lg text-indigo-400 font-medium mb-2">Tools</h3>
          <ul className="list-none mb-4">
            <li className="hover:text-white text-neutral-300">Intellij</li>
            <li className="hover:text-white text-neutral-300">Eclipse</li>
            <li className="hover:text-white text-neutral-300">Vim</li>
          </ul>
        </div>
        <div className="bg-transparent p-4 rounded-xl shadow-md border border-transparent hover:animate-border-color">
          <h3 className="text-lg text-indigo-400 font-medium mb-2">
            Databases
          </h3>
          <ul className="list-none mb-4">
            <li className="hover:text-white text-neutral-300">PostgresSQL</li>
            <li className="hover:text-white text-neutral-300">MySQL</li>
          </ul>
        </div>
        <div className="bg-transparent p-4 rounded-xl shadow-md border border-transparent hover:animate-border-color">
          <h3 className="text-lg text-indigo-400 font-medium mb-2">
            Other Skills
          </h3>
          <ul className="list-none mb-5">
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
  );
}

export default Skills;
