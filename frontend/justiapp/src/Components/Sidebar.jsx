// src/Components/Sidebar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Avatar from "./Avatar";

const Sidebar = ({ logout }) => (
  <ul className="menu min-h-full bg-white flex max-sm:hidden max-w-56  pt-32   max-sm:pt-28">
    <li>
      <Link to="/">
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
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
        Inicio
      </Link>
    </li>
    <li className="bg-red-100">
      <Link to="/dashboard/search">
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
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        Buscar
      </Link>
    </li>
    {/* Agrega los demás enlaces aquí */}
    <li className="w-full">
      <Link to="/dashboard/uitoolkit">Componentes</Link>
    </li>
    <li className="w-full">
      <Link to="/dashboard/finish-register">Paciente termina registro</Link>
    </li>
    <li className="w-full">
      <Link to="/dashboard/pacient-dashboard">Paciente Dashboard</Link>
    </li>
    <li className="w-full">
      <Link to="/dashboard/clinical-history">historia Clinica</Link>
    </li>
    <li>
      <a>
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
        Configuración
      </a>
    </li>
    <button
      onClick={logout}
      className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
    >
      Logout
    </button>
  </ul>
);

export default Sidebar;
