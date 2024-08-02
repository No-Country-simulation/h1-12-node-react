import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import homeicon from "../images/icons/homeIcon.svg";
import patientsBlueIcon from "../images/icons/patientsBlueIcon.svg";
import logoutIcon from "../images/icons/logoutIcon.svg";
import treatmentIcon from "../images/icons/treatmentIcon.svg";
import profileIcon from "../images/icons/profileIcon.svg";
import configIcon from "../images/icons/config.svg";
import notificationIcon from "../images/icons/notificationIcon.svg";
import Logo from "../images/logo.svg";
import BellIndicator from "./BellIndicator";
import barIcon from "../images/barsButton.svg";
import Avatar from "./Avatar";

import Profile from "../images/Profile.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { logout } = useContext(AuthContext);
  const { auth } = useContext(AuthContext);
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
            <div className=" dropdown  dropdown-hover">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <img src={barIcon} alt="three barIcon" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  flex gap-2 bg-base-100 rounded-box z-[1] mt-10 w-52 p-2 shadow  text-[#004E79] text-xs font-roboto font-normal leading-[1.33333]"
              >
                <li className="flex w-full  ">
                  <Link className="w-full flex p-2">
                    <img className="p-0  w-5 h-5" src={homeicon} alt="Inicio" />
                    Inicio
                  </Link>
                </li>
                <li className="w-full flex ">
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src={patientsBlueIcon}
                      alt="Inicio"
                    />
                    Pacientes
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src={treatmentIcon}
                      alt="Inicio"
                    />
                    Tratamientos
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src={configIcon}
                      alt="Configuración"
                    />
                    Configuración
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src={notificationIcon}
                      alt="Alertas"
                    />
                    Alertas
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src={profileIcon}
                      alt="Perfil"
                    />
                    Perfil
                  </Link>
                </li>
                <li>
                  <button onClick={logout}>
                    <img
                      className="p-0  w-5 h-5"
                      src={logoutIcon}
                      alt="cerrar sesión"
                    />
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
            <Link to="/" className=" flex btn btn-ghost text-xl ">
              <img className="max-w-36   h-9" src={Logo} alt="Heart Logo" />
            </Link>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end flex ">
            <div className="relative  flex ">
              <Avatar />
              <BellIndicator onClick={handleBellClick} />
            </div>
            <p className="text-[#004E79] flex flex-col font-sans text-base font-semibold leading-tight tracking-tight">
              {auth.user.first_name}
              <span className="text-[#565656] font-sans text-sm font-normal leading-tight">
                {auth.user.role.role_name}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
