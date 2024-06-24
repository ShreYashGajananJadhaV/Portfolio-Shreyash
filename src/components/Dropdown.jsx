import React from "react";

export default function Dropdown() {
  return (
    <div className="dropdown float-right">
      <div tabIndex={0} role="button" className="btn mr-3">
        Social-Media
        <svg
          className="inline-block h-2 w-2 fill-current opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content bg-base-300 rounded-box z-[1] w-52 p-2 shadow-2xl"
      >
        <li>
          <a
            href="#"
            aria-label="Default"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          >
            LinkedIN
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Retro"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Cyberpunk"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          >
            LeetCode
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Valentine"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          >
            Gfg
          </a>
        </li>
        <li>
          <a
            href="#"
            aria-label="Aqua"
            className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
          >
            CodeChef
          </a>
        </li>
      </ul>
    </div>
  );
}
