// src/Components/Sidebar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Directorio de íconos (ajusta la ruta según tu estructura de carpetas)

const Aside = ({ logout }) => {
  const { auth } = useContext(AuthContext);

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

      // Agrega más enlaces específicos para el administrador
    ],
    patient: [
      {
        path: "patient",
        label: "Inicio",
        icon: "/images/icons/home.svg",
      },
      {
        path: "patient/perfil",
        label: "Perfil",
        icon: "/images/icons/profileIcon.svg",
      },
      {
        path: "patient/configuracion",
        label: "Configuración",
        icon: "/images/icons/config.svg",
      },
      {
        path: "patient/notificaciones",
        label: "Notificaciones",
        icon: "/images/icons/notificationIcon.svg",
      },

      // Agrega más enlaces específicos para el paciente
    ],

    professional: [
      {
        path: "professional",
        label: "Inicio",
        icon: "/images/icons/homeIcon.svg",
      },
      {
        path: "professional/pacientes",
        label: "Pacientes",
        icon: "/images/icons/patientsBlueIcon.svg",
      },
      {
        path: "professional/agenda",
        label: "Agenda",
        icon: "/images/icons/Agenda.svg",
      },
      {
        path: "professional/tratamientos",
        label: "Tratamientos",
        icon: "/images/icons/treatmentIcon.svg",
      },
      {
        path: "professional/configuracion",
        label: "Configuración",
        icon: "/images/icons/config.svg",
      },
      {
        path: "professional/consulta",
        label: "Consulta",
        icon: "/images/icons/notificationIcon.svg",
      },
      {
        path: "professional/perfil",
        label: "Perfil",
        icon: "/images/icons/profileIcon.svg",
      },

      // Agrega más enlaces específicos para el paciente
    ],

    // Agrega más roles aquí si es necesario
  };

  const links = roleLinks[auth.role] || [];

  return (
    <div className="container max-sm:hidden flex z-1  w-1/5 pt-32">
      <ul className="menu min-h-full   justify-center gap-4    ">
        {links.map((link) => (
          <li key={link.path} className="w-full p-0">
            <Link
              to={`/dashboard/${link.path}`}
              className="flex items-center p-0"
            >
              {console.log(link.icon)}
              <img src={link.icon} alt={link.label} className="h-5 w-5" />
              <span className="ml-2 text-[#004E79]">{link.label}</span>
            </Link>
          </li>
        ))}
        <li>
          <button
            onClick={logout}
            className="mt-4 px-4 py-2 text-[#004E79] rounded"
          >
            <img src="/images/icons/logoutIcon.svg" alt="logout icon" />
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
