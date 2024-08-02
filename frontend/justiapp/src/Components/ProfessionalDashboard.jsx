import React, { useContext } from "react";
import Avatar from "../Components/Avatar";
import CardContainer from "../Components/CardContainer";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

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
  const { auth } = useContext(AuthContext);

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
        <div className="w-full justify-start items-center gap-2 inline-flex">
          <div className="flex-col justify-start items-start gap-6 inline-flex">
            <h1 className="w-full text-gray-700 text-2xl font-medium font-['Lato'] leading-normal">
              Hola {auth.user.first_name}!
            </h1>
            <div className=" flex-col justify-start items-start gap-4 flex">
              <p className=" flex flex-wrap opacity-80 text-[#4A518D] text-base font-semibold font-sans leading-tight tracking-tight">
                ¡Qué bueno verte nuevamente!
              </p>
              <span className="StatDesc self-stretch text-[#009bd7] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                Tienes 2 notificaciones
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full bg-green-50 gap-8 justify-center ">
        <Link className="btn w-1/3 px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg flex justify-center items-center gap-2 ">
          <p className="Label text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
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
          className="btn w-1/3 h-12 px-4 rounded-lg border-2 border-[#004e79] flex justify-center items-center gap-2 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M6.23047 2.8667C6.64468 2.8667 6.98047 3.20249 6.98047 3.6167V4.8667H13.9805V3.6167C13.9805 3.20249 14.3163 2.8667 14.7305 2.8667C15.1447 2.8667 15.4805 3.20249 15.4805 3.6167V4.8667H15.7305C17.2493 4.8667 18.4805 6.09792 18.4805 7.6167V16.1167C18.4805 17.6355 17.2493 18.8667 15.7305 18.8667H5.23047C3.71169 18.8667 2.48047 17.6355 2.48047 16.1167V7.6167C2.48047 6.09792 3.71169 4.8667 5.23047 4.8667H5.48047V3.6167C5.48047 3.20249 5.81626 2.8667 6.23047 2.8667ZM5.23047 8.3667C4.54011 8.3667 3.98047 8.92634 3.98047 9.6167V16.1167C3.98047 16.8071 4.54011 17.3667 5.23047 17.3667H15.7305C16.4208 17.3667 16.9805 16.8071 16.9805 16.1167V9.6167C16.9805 8.92634 16.4208 8.3667 15.7305 8.3667H5.23047Z"
              fill="#004E79"
            />
          </svg>
          <div className=" text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
            Tratamientos
          </div>
        </Link>
      </div>

      <CardContainer cardData={cardData} />
    </div>
  );
};

export default ProfessionalDashboard;
