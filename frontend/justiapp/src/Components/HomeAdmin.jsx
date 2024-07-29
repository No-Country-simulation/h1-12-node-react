import React from "react";
import CardContainer from "./CardContainer";
import Avatar from "./Avatar";
import SearchBar from "./SearchBar";

const cardData = [
  {
    id: 1,
    bgColor: "bg-mynaval",
    title: "Registrar\nprofesional\nde la salud",
    description: "Asegúrate de tener los datos",
    link: "dashboard/regiter-professional",
  },
  {
    id: 2,
    bgColor: "bg-mygreen",
    title: "Registrar\nprestador\nde salud",
    description: "Asegúrate de tener los datos",
    link: "dashboard/register-health-provider",
  },

  {
    id: 3,
    bgColor: "bg-sky00",
    title: "Registrar\ninstitución\nde salud",
    description: "Asegúrate de tener los datos",
    link: "dashboard/register-health-institution",
  },
];

export default function HomeAdmin() {
  return (
    <div className="sm:max-w-6xl pt-10   w-11/12  sm:h-full flex flex-col gap-8 justify-center items-center bg-slate-100 rounded-none max-sm:rounded-xl shadow-lg">
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
          <Avatar />
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
              <button class=" btn btn-primary btn-xs border-none bg-sky-500 flex-1 rounded-lg flex justify-center items-center h-12">
                <span class="text-center p-0 text-white text-sm font-normal font-sans leading-tight tracking-tight">
                  Usuarios registrados
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="container flex sm:hidden  sm:max-w-6xl w-1/2 justify-between  items-center">
        <button className=" btn btn-primary btn-xs border-none bg-sky-500 flex-1 rounded-lg flex justify-center items-center h-12">
          <span class="text-center p-0 text-white text-sm font-normal font-sans leading-tight tracking-tight">
            Usuarios registrados
          </span>
        </button>
      </div>

      <CardContainer cardData={cardData} />
    </div>
  );
}
