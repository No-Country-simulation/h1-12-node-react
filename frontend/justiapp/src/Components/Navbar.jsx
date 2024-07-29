import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import Logo from "../images/logo.svg";
import BellIndicator from "./BellIndicator";
import barIcon from "../images/barsButton.svg";
import Avatar from "./Avatar";

import Profile from "../images/Profile.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const handleBellClick = () => {
    // Lógica para manejar el clic en la campana
    console.log("Bell icon clicked");
  };
  /*   */

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="p-2 ">
        <div className="navbar max-w-6xl ">
          <div className="navbar-start">
            <div className="bg-red-100 dropdown  dropdown-hover flex sm:hidden">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <img src={barIcon} alt="three barIcon" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  bg-base-100 rounded-box z-[1] mt-10 w-52 p-2 shadow  text-[#004E79] text-xs font-roboto font-normal leading-[1.33333]"
              >
                <li>
                  <Link>Historial</Link>
                </li>
                <li>
                  <Link>Mensajes</Link>
                </li>
                <li>
                  <Link>Configuración</Link>
                </li>
                <li>
                  <button onClick={logout}>Cerrar sesión</button>
                </li>
              </ul>
            </div>
            <Link className=" flex btn btn-ghost text-xl ">
              <img className="max-w-36  h-9" src={Logo} alt="Heart Logo" />
            </Link>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end">
            <div className="relative ">
              <Avatar />
              <BellIndicator onClick={handleBellClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
