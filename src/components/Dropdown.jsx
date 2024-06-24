import React from "react";

export default function Dropdown() {
  return (
    <div className="dropdown dropdown-end font-mono">
      <div tabIndex={0} role="button" className="btn m-1">
        Click
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
      >
        <li>
          <a>Facebook</a>
        </li>
        <li>
          <a>Instagram</a>
        </li>
        <li>
          <a>Linkedin</a>
        </li>
      </ul>
    </div>
  );
}
