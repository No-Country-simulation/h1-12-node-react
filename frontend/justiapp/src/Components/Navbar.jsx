import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import BellIndicator from "./BellIndicator";
import Avatar from "./Avatar";
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
                <img src="/images/barsButton.svg" alt="three barIcon" />
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content  flex gap-2 bg-base-100 rounded-box z-[1] mt-10 w-52 p-2 shadow  text-[#004E79] text-xs font-roboto font-normal leading-[1.33333]"
              >
                <li className="flex w-full  ">
                  <Link className="w-full flex p-2">
                    <img
                      className="p-0  w-5 h-5"
                      src="/images/icons/homeIcon.svg"
                      alt="Inicio"
                    />
                    Inicio
                  </Link>
                </li>
                <li className="w-full flex ">
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src="/images/icons/patientsBlueIcon.svg"
                      alt="Inicio"
                    />
                    Pacientes
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src="/images/icons/treatmentIcon.svg"
                      alt="Inicio"
                    />
                    Tratamientos
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src="/images/icons/config.svg"
                      alt="Configuración"
                    />
                    Configuración
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src="/images/icons/notificationIcon.svg"
                      alt="Alertas"
                    />
                    Alertas
                  </Link>
                </li>
                <li>
                  <Link>
                    <img
                      className="p-0  w-5 h-5"
                      src="/images/icons/profileIcon.svg"
                      alt="Perfil"
                    />
                    Perfil
                  </Link>
                </li>
                <li>
                  <button onClick={logout}>
                    <img
                      className="p-0  w-5 h-5"
                      src="/images/icons/logoutIcon.svg"
                      alt="cerrar sesión"
                    />
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
            <Link to="/" className=" flex btn btn-ghost text-xl ">
              <img
                className="max-w-36   h-9"
                src="/images/logo.svg"
                alt="Heart Logo"
              />
            </Link>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end gap-6 flex ">
            <div className="relative flex ">
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
