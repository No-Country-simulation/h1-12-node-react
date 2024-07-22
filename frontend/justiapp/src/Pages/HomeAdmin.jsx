//HomeAdmin.jsx me
import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterUserForm from "../Pages/MaintenanceNotice ";
import Navbar from "../Components/Navbar";
import userAvatar from "../images/jose.png";
import { AuthContext } from "../context/AuthContext";
import CardContainer from "../Components/CardContainer";

const cardData = [
  {
    id: 1,
    bgColor: "bg-mynaval",
    title: "Registrar\nprofesional\nde la salud",
    description: "Asegúrate de tener los datos",
  },
  {
    id: 2,
    bgColor: "bg-mygreen",
    title: "Registrar\nprestador\nde salud",
    description: "Asegúrate de tener los datos",
  },
  {
    id: 3,
    bgColor: "bg-mypink",
    title: "Registrar\npaciente",
    description: "Asegúrate de tener los datos",
  },
  {
    id: 4,
    bgColor: "bg-sky00",
    title: "Registrar\ninstitución\nde salud",
    description: "Asegúrate de tener los datos",
  },
];

export default function HomeAdmin(props) {
  return (
    <>
      <Navbar />
      <main className="flex h-screen bg-slate-200  items-start justify-center pt-44  w-full  ">
        <ul className="menu flex max-sm:hidden  bg-white rounded-box max-w-56">
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
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Item 2
            </a>
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Item 1
            </a>
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
              Item 3
            </a>
          </li>
        </ul>
        <div className="sm:max-w-6xl pt-10  w-11/12 flex flex-col justify-center items-center bg-white rounded-xl shadow-lg">
          <div
            className="w-11/12 p-4 rounded-xl border-2 flex flex-col justify-center items-start gap-4"
            style={{
              border: "2px solid transparent", // Aplica un borde transparente
              borderRadius: "10px", // Asegura que el borde esté redondeado
              backgroundImage:
                "linear-gradient(white, white), linear-gradient(to bottom, #004E79, #003C79, #002279, #4D0079, #6F0079, #900079, #A9257C)", // Gradiente de fondo
              backgroundOrigin: "border-box", // El origen del fondo es el borde
              backgroundClip: "padding-box, border-box", // Define cómo se corta el fondo
            }}
          >
            <div className=" w-full flex justify-around gap-4">
              <div
                className="avatar w-14 h-14 flex items-center justify-center relative rounded-full"
                style={{
                  border: "2px solid transparent", // Borde transparente para aplicar el gradiente
                  borderRadius: "50%", // Asegura que el borde sea circular
                  backgroundImage:
                    "linear-gradient(to bottom, #004E79 0%, #003C79 30%, #002279 60%, #4D0079 100%)", // Gradiente más sutil
                  backgroundClip: "border-box", // El gradiente cubre el borde
                  boxSizing: "border-box", // Incluye el borde en el tamaño del contenedor
                }}
              >
                <div
                  className="w-full h-full rounded-full overflow-hidden"
                  style={{
                    borderRadius: "50%", // Asegura que el contenedor interno también sea circular
                  }}
                >
                  <img
                    alt="avatar"
                    src={userAvatar}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="text-xl font-bold font-lato">
                  <span className="text-fuchsia-900">¡Hola</span>
                  <span className="text-gray-700"> </span>
                  <span className="text-fuchsia-900">José!</span>
                </div>
                <div className="opacity-80 text-gray-700 text-sm font-normal font-open-sans">
                  ¿Qué querés hacer hoy?
                </div>
              </div>
              <div className=" flex  justify-between gap-2">
                <div class="container max-sm:hidden sm:max-w-6xl w-11/12 flex justify-between  items-center">
                  <ul class="menu flex-1  menu-horizontal ">
                    <li class="w-full">
                      <details class="w-full  bg-mycustomblue rounded-lg flex justify-center items-center h-12">
                        <summary class="text-white text-sm font-normal font-sans leading-tight tracking-tight">
                          Registrar usuario
                        </summary>
                        <ul class="bg-base-100 rounded-t-none z-10 p-2">
                          <li class="w-full">
                            <Link to="/homeadmin/register-professional">
                              Profesional de la salud
                            </Link>
                          </li>
                          <li class="w-full">
                            <Link to="/homeadmin/register-institution">
                              Institución de salud
                            </Link>
                          </li>
                          <li class="w-full">
                            <Link to="/homeadmin/register-patient">
                              Paciente
                            </Link>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                  <button class=" btn btn-primary btn-xs border-none bg-sky-500 flex-1 rounded-lg flex justify-center items-center h-12">
                    <span class="text-center p-0 text-white text-sm font-normal font-sans leading-tight tracking-tight">
                      Usuarios registrados
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="container flex sm:hidden  sm:max-w-6xl w-11/12  justify-between  items-center">
            <ul class="menu flex-1  menu-horizontal ">
              <li class="w-full">
                <details class="w-full  bg-mycustomblue rounded-lg flex justify-center items-center h-12">
                  <summary class="text-white text-sm font-normal font-sans leading-tight tracking-tight">
                    Registrar usuario
                  </summary>
                  <ul class="bg-base-100 rounded-t-none z-10 p-2">
                    <li class="w-full">
                      <Link to="/homeadmin/register-professional">
                        Profesional de la salud
                      </Link>
                    </li>
                    <li class="w-full">
                      <Link to="/homeadmin/register-institution">
                        Institución de salud
                      </Link>
                    </li>
                    <li class="w-full">
                      <Link to="/homeadmin/register-patient">Paciente</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <button class=" btn btn-primary btn-xs border-none bg-sky-500 flex-1 rounded-lg flex justify-center items-center h-12">
              <span class="text-center p-0 text-white text-sm font-normal font-sans leading-tight tracking-tight">
                Usuarios registrados
              </span>
            </button>
          </div>

          <CardContainer cardData={cardData} />
        </div>
      </main>
    </>
  );
}
