// src/Components/Sidebar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

// Directorio de íconos (ajusta la ruta según tu estructura de carpetas)
const iconBasePath = "/assets/icons/";

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
        label: "Dashboard Paciente",
        icon: "dashboard.svg",
      },
      {
        path: "patient-treatment",
        label: "Tratamiento Paciente",
        icon: "treatment.svg",
      },
      {
        path: "patient-finish-register",
        label: "Finish Register",
        icon: "treatment.svg",
      },
      {
        path: "clinical-history",
        label: "Historia Clínica",
        icon: "history.svg",
      },
      // Agrega más enlaces específicos para el paciente
    ],
    // Agrega más roles aquí si es necesario
  };

  const links = roleLinks[auth.role] || [];
  console.log(links);

  return (
    <ul className="menu min-h-full bg-white flex justify-center max-sm:hidden max-w-56 pt-32 max-sm:pt-28">
      {links.map((link) => (
        <li key={link.path} className="w-full">
          <Link to={`/dashboard/${link.path}`} className="flex items-center">
            <img
              src={`${iconBasePath}${link.icon}`}
              alt={link.label}
              className="h-5 w-5"
            />
            <span className="ml-2">{link.label}</span>
          </Link>
        </li>
      ))}
      <li>
        <button
          onClick={logout}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
        >
          Logout
        </button>
      </li>
    </ul>
  );
};

export default Sidebar;
