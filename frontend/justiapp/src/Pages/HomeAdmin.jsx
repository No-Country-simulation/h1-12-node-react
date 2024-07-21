//HomeAdmin.jsx me
import React, { useContext } from "react";
import { Routes, Route, Link } from "react-router-dom";
import RegisterUserForm from "../Pages/MaintenanceNotice ";
import Navbar from "../Components/Navbar";
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
      <main className="flex  bg-slate-200  items-center justify-center pt-24 w-full  ">
        <div className="sm:max-w-6xl pt-8  w-11/12 flex flex-col justify-center items-center bg-white rounded-xl shadow-lg">
          <div className="w-11/12 p-4 rounded-lg border-2 border-fuchsia-900 flex flex-col justify-center items-start gap-4">
            <div className=" w-full flex justify-start items-center gap-4">
              <div className="avatar   w-14 h-14 relative rounded-full border-2  border-fuchsia-900">
                <div className=" w-full h-full object-cover rounded-full ">
                  <img
                    alt="avatar"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>

              <div className=" flex flex-col justify-start items-start gap-2">
                <div className="text-xl font-bold font-lato">
                  <span className="text-fuchsia-900">¡Hola</span>
                  <span className="text-gray-700"> </span>
                  <span className="text-fuchsia-900">José!</span>
                </div>
                <div className="opacity-80 text-gray-700 text-sm font-normal font-open-sans">
                  ¿Qué querés hacer hoy?
                </div>
              </div>
            </div>
          </div>
          <div class="container sm:max-w-6xl w-11/12 flex justify-between  items-center">
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
                Usuarios creados
              </span>
            </button>
          </div>

          <CardContainer cardData={cardData} />
        </div>
      </main>
    </>
  );
}
