import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Logo from "../images/logo.svg";
import bell from "../images/bell-icon.svg";
import userAvatar from "../images/jose.png";
import Profile from "../images/Profile.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { logout } = useContext(AuthContext);

  /*   */

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="p-2 ">
        <div className="navbar max-w-6xl ">
          <div className="navbar-start">
            <p className="flex sm:hidden text-center text-gray-800 text-2xl font-bold leading-6 break-words">
              Home
            </p>
            <a className=" flex max-sm:hidden btn btn-ghost text-xl">
              <img className="max-w-md h-9" src={Logo} alt="Heart Logo" />
            </a>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <label
              className="flex max-sm:hidden input input-bordered  items-center gap-2"
              style={{
                border: "2px solid transparent", // Aplica un borde transparente
                borderRadius: "10px", // Asegura que el borde esté redondeado
                backgroundImage:
                  "linear-gradient(white, white), linear-gradient(to bottom, #004E79, #003C79, #002279, #4D0079, #6F0079, #900079, #A9257C)", // Gradiente de fondo
                backgroundOrigin: "border-box", // El origen del fondo es el borde
                backgroundClip: "padding-box, border-box", // Define cómo se corta el fondo
              }}
            >
              <input
                type="text"
                className="grow border-none"
                placeholder="Search"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator ">
                <img src={bell} alt="bell notification icon" />
                <span className="badge badge-xs badge-warning indicator-item text-sm">
                  {" "}
                  1
                </span>
              </div>
            </button>
            <div className="dropdown   dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn flex max-sm:hidden btn-ghost btn-circle avatar"
              >
                <div
                  className="w-10 h-10  rounded-full p-0.5 "
                  style={{
                    backgroundImage:
                      "linear-gradient(to bottom, #004E79, #003C79, #002279, #4D0079, #6F0079, #900079, #A9257C)",
                    backgroundClip: "border-box", // Asegura que el gradiente cubra el borde
                    borderRadius: "9999px", // Asegura bordes redondeados
                  }}
                >
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={userAvatar}
                    className="w-10 h-10 rounded-full"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            <div className="dropdown ropdown-left dropdown-end flex sm:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <img src={Profile} alt="profile" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-10 w-52 p-2 shadow"
              >
                <li>
                  <Link>Perfil</Link>
                </li>
                <li>
                  <Link>Configuración</Link>
                </li>
                <li>
                  <Link>Soporte</Link>
                </li>
                <li>
                  <Link>Ayuda</Link>
                </li>
                <button
                  onClick={logout}
                  className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
                >
                  Logout
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
