//HomeAdmin.jsx me
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../context/AuthContext";
import CardContainer from "../Components/CardContainer";

const cardData = [
  {
    id: 1,
    bgColor: "bg-blue-950",
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
  const { logout } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <main className="flex  bg-slate-200  items-center justify-center pt-24 w-full  ">
        <div className="Frame98169 w-36 h-40 relative bg-cyan-800 rounded-xl">
          <div className="Frame98143 w-36 h-16 left-[16px] top-[13px] absolute flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="Frame98142 w-40 flex-col justify-start items-start gap-14 flex">
              <div className="CrearProfesionalDeLaSalud w-40 h-14 text-white text-base font-bold font-['Lato'] leading-tight">
                Crear
                <br />
                profesional
                <br />
                de la salud
              </div>
            </div>
          </div>
          <div className="AsegurateDeTenerLosDatos w-28 h-10 left-[16px] top-[80px] absolute text-white text-sm font-normal font-['Open Sans'] leading-none">
            Asegurate de tener los datos
          </div>
          <div className="HeroiconsOutlinePlusCircle w-6 h-6 left-[16px] top-[118px] absolute" />
        </div>
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

/*      <div className="flex p-2 ">
          <div className="flex flex-col  items-center">
            <h1 className="w-52 text-neutral-800 text-xl font-bold font-['Lato'] leading-normal">
              Hola Andrés
            </h1>
            <p className="w-52 text-neutral-800 text-xl font-bold font-['Lato'] leading-normal">
              ¿Qué querés hacer hoy?
            </p>
            <button
              onClick={logout}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Logout
            </button>
            <div className="flex flex-wrap  justify-center max-w-7xl p-6  gap-2">
              {cardsData.map((card, index) => (
                <div
                  key={index}
                  className="card bg-base-100 max-w-xs shadow-xl"
                >
                  <div className="card-body flex">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-1/2 h-1/2 object-cover mr-4"
                    />
                    <div>
                      <h2 className="card-title">{card.title}</h2>
                      <p>{card.description}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary w-full h-14 px-4 py-3.5 bg-gray-700 border-gray-700">
                          {card.action}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>*/

/*<div className="flex flex-wrap  sm:max-w-6xl w-11/12 justify-center gap-3">
            <div className="w-36 h-40 relative bg-blue-950 rounded-xl">
              <div className="w-36 h-16 absolute left-4 top-3 flex flex-col justify-start items-start gap-0.5">
                <div className="w-40 flex flex-col justify-start items-start gap-14">
                  <div className="w-40 h-14 text-white text-base font-bold font-['Lato'] leading-tight">
                    Crear
                    <br />
                    profesional
                    <br />
                    de la salud
                  </div>
                </div>
              </div>
              <div className="w-28 h-10 absolute left-4 top-20 text-white text-sm font-normal font-['Open Sans'] leading-none">
                Asegúrate de tener los datos
              </div>
              <div className="w-6 h-6 absolute left-4 top-28" />
            </div>
            <div className="w-36 h-40 relative bg-emerald-600 rounded-xl">
              <div className="w-36 h-16 absolute left-[16px] top-[13px] flex flex-col justify-start items-start gap-0.5">
                <div className="w-40 flex flex-col justify-start items-start gap-14">
                  <div className="w-40 h-14 text-white text-base font-bold font-['Lato'] leading-tight">
                    Crear
                    <br />
                    prestador
                    <br />
                    de salud
                  </div>
                </div>
              </div>
              <div className="w-28 h-10 absolute left-[16px] top-[80px] text-white text-sm font-normal font-['Open Sans'] leading-none">
                Asegúrate de tener los datos
              </div>
              <div className="w-6 h-6 absolute left-[16px] top-[118px]" />
            </div>
            <div className="w-36 h-40 relative bg-pink-700 rounded-xl">
              <div className="h-16 absolute left-[16px] top-[13px] flex flex-col justify-start items-start gap-0.5">
                <div className="w-40 flex flex-col justify-start items-start gap-14">
                  <div className="w-40 h-14 text-white text-base font-bold font-['Lato'] leading-tight">
                    Crear
                    <br />
                    paciente
                  </div>
                </div>
              </div>
              <div className="w-28 h-10 absolute left-[16px] top-[80px] text-white text-sm font-normal font-['Open Sans'] leading-none">
                Asegúrate de tener los datos
              </div>
              <div className="w-6 h-6 absolute left-[16px] top-[118px]" />
            </div>
            <div className="w-36 h-40 relative bg-sky-500 rounded-xl">
              <div className="w-36 h-16 absolute left-[16px] top-[13px] flex flex-col justify-start items-start gap-0.5">
                <div className="w-40 flex flex-col justify-start items-start gap-14">
                  <div className="w-40 h-14 text-white text-base font-bold font-['Lato'] leading-tight">
                    Crear
                    <br />
                    institución
                    <br />
                    de salud
                  </div>
                </div>
              </div>
              <div className="w-28 h-10 absolute left-[16px] top-[80px] text-white text-sm font-normal font-['Open Sans'] leading-none">
                Asegúrate de tener los datos
              </div>
              <div className="w-6 h-6 absolute left-[16px] top-[118px]" />
            </div>
          </div>*/
