import React from "react";
import Heart from "../images/justinaHeart2.svg";
import justina from "../images/justinaio_logo (1).svg";
import BigHeart from "../images/BigHeart.svg";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="p-2 ">
        <div className="navbar max-w-6xl ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a>Cerrar sesión</a>
                </li>
                <li>
                  <a>hacia otra página</a>
                </li>
                <li>
                  <a>hacia otra página</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl">
              <img className="max-w-md h-9" src={BigHeart} alt="Heart Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
