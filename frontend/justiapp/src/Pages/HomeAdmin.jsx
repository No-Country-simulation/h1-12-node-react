//HomeAdmin.jsx me
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../context/AuthContext";
import CardContainer from "../Components/CardContainer";

const cardData = [
  {
    id: 1,
    bgColor: "bg-cyan-800",
    title: "Crear\nprofesional\nde la salud",
    description: "Asegúrate de tener los datos",
  },
  {
    id: 2,
    bgColor: "bg-emerald-600",
    title: "Crear\nprestador\nde salud",
    description: "Asegúrate de tener los datos",
  },
  {
    id: 3,
    bgColor: "bg-pink-700",
    title: "Crear\npaciente",
    description: "Asegúrate de tener los datos",
  },
  {
    id: 4,
    bgColor: "bg-sky-500",
    title: "Crear\ninstitución\nde salud",
    description: "Asegúrate de tener los datos",
  },
];

export default function HomeAdmin(props) {
  return (
    <>
      <Navbar />
      <main className="flex  bg-slate-200  items-center justify-center pt-24 w-full  ">
        <div className=" sm:max-w-6xl w-11/12 flex flex-col justify-center items-center bg-white rounded-xl shadow-lg">
          <div className="w-11/12 p-4 rounded-lg border-2 border-sky-900/90 flex flex-col justify-center items-start gap-4">
            <div className=" w-full flex justify-start items-center gap-4">
              <div className="avatar  w-14 h-14 relative rounded-full border-2 border-sky-900/90">
                <div className=" w-full h-full object-cover rounded-full ">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
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
          <div className="conainer bg-yellow-300 sm:max-w-6xl w-11/12 flex justify-around">
            <ul className="menu menu-horizontal px-1">
              <li>
                <details className="p-2  bg-indigo-600 rounded-lg justify-center items-center inline-flex">
                  <summary className="text-white text-sm font-normal font-['Open Sans'] leading-tight tracking-tight">
                    Registrar usuario
                  </summary>
                  <ul className="bg-base-100 rounded-t-none z-10 p-2">
                    <li>
                      <a>Profesional de la salud</a>
                    </li>
                    <li>
                      <a>institucion de salud</a>
                    </li>
                    <li>
                      <a>Paciente</a>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
            <button className=" bg-sky-500 rounded-lg justify-center items-center gap-2 inline-flex">
              <p className="text-center text-white text-sm font-normal font-['Open Sans'] leading-tight tracking-tight">
                Usuarios creados
              </p>
            </button>
          </div>
          <CardContainer cardData={cardData} />
        </div>
      </main>
    </>
  );
}
