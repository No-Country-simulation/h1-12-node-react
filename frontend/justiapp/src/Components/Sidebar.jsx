// src/Components/Sidebar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import homeIcon from "../images/icons/homeIcon.svg";
import treatmentIcon from "../images/icons/treatmentIcon.svg";
import notificationIcon from "../images/icons/notificationIcon.svg";
import profileIcon from "../images/icons/profileIcon.svg";
import config from "../images/icons/config.svg";
import logoutIcon from "../images/icons/logoutIcon.svg";

// Directorio de íconos (ajusta la ruta según tu estructura de carpetas)

const Sidebar = ({ logout }) => {
  const { auth } = useContext(AuthContext);

  const roleLinks = {
    admin: [
      { path: "admin", label: "Home Admin", icon: "home.svg" },
      { path: "admin/uitoolkit", label: "UI Toolkit", icon: "toolkit.svg" },

      // Agrega más enlaces específicos para el administrador
    ],
    patient: [
      {
        path: "patient",
        label: "Inicio",
        icon: homeIcon,
      },
      {
        path: "patient/perfil",
        label: "Perfil",
        icon: profileIcon,
      },
      {
        path: "patient/configuracion",
        label: "Configuración",
        icon: config,
      },
      {
        path: "patient/notificaciones",
        label: "Notificaciones",
        icon: notificationIcon,
      },

      // Agrega más enlaces específicos para el paciente
    ],

    professional: [
      {
        path: "professional",
        label: "Inicio",
        icon: homeIcon,
      },
      {
        path: "professional/pacientes",
        label: "Pacientes",
        icon: profileIcon,
      },
      {
        path: "professional/tratamientos",
        label: "Tratamientos",
        icon: config,
      },
      {
        path: "professional/configuracion",
        label: "Configuración",
        icon: config,
      },
      {
        path: "professional/alertas",
        label: "Alertas",
        icon: notificationIcon,
      },
      {
        path: "professional/perfil",
        label: "Perfil",
        icon: notificationIcon,
      },

      // Agrega más enlaces específicos para el paciente
    ],

    // Agrega más roles aquí si es necesario
  };

  const links = roleLinks[auth.role] || [];
  console.log(links);

  return (
    <ul className="menu min-h-full bg-white flex justify-center gap-4 max-sm:hidden max-sm:bg-mypink max-w-56 pt-32 max-sm:pt-28">
      {links.map((link) => (
        <li key={link.path} className="w-full p-0">
          <Link
            to={`/dashboard/${link.path}`}
            className="flex items-center p-0"
          >
            <img src={link.icon} alt={link.label} className="h-5 w-5" />
            <span className="ml-2">{link.label}</span>
          </Link>
        </li>
      ))}
      <li>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          <img src={logoutIcon} alt="logout icon" />
          Logout
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
