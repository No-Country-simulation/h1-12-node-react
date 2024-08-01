import React from "react";
import Avatar from "../Components/Avatar";
import CardContainer from "../Components/CardContainer";
import { Link } from "react-router-dom";
import patientsIcon from "../images/icons/patientsIcon.svg";

const cardData = [
  {
    id: 1,
    bgColor: "bg-red-600",
    title: "",
    description: "Nula Adherencia",
    link: "dashboard/regiter-professional",
  },
  {
    id: 2,
    bgColor: "bg-warning",
    title: "",
    description: "Baja Adherencia",
    link: "dashboard/register-health-provider",
  },

  {
    id: 3,
    bgColor: "bg-sky00",
    title: "",
    description: "Asegúrate de tener los datos",
    link: "dashboard/register-health-institution",
  },
  {
    id: 4,
    bgColor: "bg-red-500",
    title: "",
    description: "Asegúrate de tener los datos",
    link: "register-patient",
  },
];

const ProfessionalDashboard = () => {
  return (
    <div className="sm:max-w-6xl pt-10   w-11/12  sm:h-full flex flex-col gap-8 justify-center items-center bg-slate-100 rounded-none max-sm:rounded-xl shadow-lg">
      <div
        className="w-11/12 p-5 border-gradient  rounded-xl border-2 flex flex-col justify-center items-start gap-4"
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
          <div className="StatContent h-24 justify-start items-center gap-2 inline-flex">
            <div className="StatText w-56 flex-col justify-start items-start gap-6 inline-flex">
              <h1 className="StatValue text-gray-700 text-2xl font-medium font-['Lato'] leading-normal">
                ¡Hola Alejandro!
              </h1>
              <div className="Frame98355 h-14 flex-col justify-start items-start gap-4 flex">
                <p className="StatTitle self-stretch opacity-80 text-gray-700 text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                  ¡Qué bueno verte nuevamente!
                </p>
                <span className="StatDesc self-stretch text-[#009bd7] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                  Tienes 2 notificaciones
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-4 justify-center ">
        <Link className="btn h-12 px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg flex justify-center items-center gap-2 inline-flex">
          <img src={patientsIcon} alt="Icono de pacientes" />
          <p className="Label text-gray-50 text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
            Pacientes
          </p>
        </Link>
        <Link
          style={{
            border: "2px solid transparent", // Aplica un borde transparente
            borderRadius: "10px", // Asegura que el borde esté redondeado
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(to bottom, #004E79, #003C79, #002279, #4D0079, #6F0079, #900079, #A9257C)", // Gradiente de fondo
            backgroundOrigin: "border-box", // El origen del fondo es el borde
            backgroundClip: "padding-box, border-box", // Define cómo se corta el fondo
          }}
          className="btn h-12 px-4 py-3.5 bg-neutral-100 rounded-lg border-2 border-[#004e79] flex justify-center items-center gap-2 "
        >
          <div className="LeftIcon w-5 h-5 relative">
            <img
              className="Subtract w-4 h-4 left-[2px] top-[2px] absolute"
              src="https://via.placeholder.com/16x16"
              alt="icon"
            />
          </div>
          <div className="Label text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
            Tratamientos
          </div>
        </Link>
      </div>

      <CardContainer cardData={cardData} />
    </div>
  );
};

export default ProfessionalDashboard;
