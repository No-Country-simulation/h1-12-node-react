import React, { useContext } from "react";
import BellIndicator from "./BellIndicator";
import Avatar from "./Avatar";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const handleBellClick = () => {
    console.log("Bell icon clicked");
  };
  const { logout, auth } = useContext(AuthContext);

  // Define los enlaces según el rol del usuario
  const roleLinks = {
    admin: [
      { path: "admin", label: "Inicio", icon: "/images/icons/homeIcon.svg" },

      {
        path: "admin/historial",
        label: "Historial",
        icon: "/images/icons/history.svg",
      },
      {
        path: "admin/configurar",
        label: "Configurar",
        icon: "/images/icons/config.svg",
      },
    ],
    patient: [
      { path: "/patient", label: "Inicio", icon: "/images/icons/home.svg" },
      {
        path: "/patient/perfil",
        label: "Perfil",
        icon: "/images/icons/profileIcon.svg",
      },
      {
        path: "/patient/configuracion",
        label: "Configuración",
        icon: "/images/icons/config.svg",
      },
      {
        path: "/patient/notificaciones",
        label: "Notificaciones",
        icon: "/images/icons/notificationIcon.svg",
      },
    ],
    professional: [
      {
        path: "/professional",
        label: "Inicio",
        icon: "/images/icons/homeIcon.svg",
      },
      {
        path: "/professional/pacientes",
        label: "Pacientes",
        icon: "/images/icons/patientsBlueIcon.svg",
      },
      {
        path: "/professional/tratamientos",
        label: "Tratamientos",
        icon: "/images/icons/treatmentIcon.svg",
      },
      {
        path: "/professional/configuracion",
        label: "Configuración",
        icon: "/images/icons/config.svg",
      },
      {
        path: "professional/consulta",
        label: "Consulta",
        icon: "/images/icons/notificationIcon.svg",
      },
      {
        path: "/professional/perfil",
        label: "Perfil",
        icon: "/images/icons/profileIcon.svg",
      },
    ],
  };

  const links = roleLinks[auth.role] || [];
  console.log(links);
  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-10">
      <div className="p-2">
        <div className="navbar max-w-6xl">
          <div className="navbar-start">
            <div className="container  flex sm:hidden">
              <div className=" dropdown dropdown-hover">
                <div
                  tabIndex={0}
                  role="button"
                  className=" btn btn-ghost btn-circle "
                >
                  <img src="/images/barsButton.svg" alt="three barIcon" />
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content flex gap-2 bg-base-100 rounded-box z-[1] mt-10 w-52 p-2 shadow text-[#004E79] text-xs font-roboto font-normal leading-[1.33333]"
                >
                  {links.map((link) => (
                    <li key={link.path} className="w-full p-0">
                      <Link
                        to={`/dashboard/${link.path}`}
                        className="flex items-center p-0"
                      >
                        {console.log(link.icon)}
                        <img
                          src={link.icon}
                          alt={link.label}
                          className="h-5 w-5"
                        />
                        <span className="ml-2">{link.label}</span>
                      </Link>
                    </li>
                  ))}
                  <li>
                    <button onClick={logout}>
                      <img
                        className="p-0 w-5 h-5"
                        src="/images/icons/logoutIcon.svg"
                        alt="cerrar sesión"
                      />
                      Cerrar sesión
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <Link to="/" className="flex btn btn-ghost text-xl">
              <img
                className="max-w-36 h-9"
                src="/images/logo.svg"
                alt="Heart Logo"
              />
            </Link>
          </div>
          <div className="navbar-center"></div>
          <div className="navbar-end gap-6 flex">
            <div className="relative flex">
              <Avatar />
              <BellIndicator onClick={handleBellClick} />
            </div>
            <p className="text-[#004E79] flex flex-col font-sans text-base font-semibold leading-tight tracking-tight">
              {auth.userName}
              <span className="text-[#565656] font-sans text-sm font-normal leading-tight">
                {auth.userRole}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
