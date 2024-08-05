import React, { useContext } from "react";
import CardContainer from "./CardContainer";
import Avatar from "./Avatar";
import Button from "./Button";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import HuntingSearcher from "./HuntingSearcher";

const cardData = [
  {
    id: 1,
    bgColor: "bg-[#004E79]",
    title: "Registrar\nprofesional\nde la salud",
    description: "Asegúrate de tener los datos",
    link: "regiter-professional",
  },
  {
    id: 2,
    bgColor: "bg-[#004E79]",
    title: "Registrar\nprestador\nde salud",
    description: "Asegúrate de tener los datos",
    link: "register-health-provider",
  },

  {
    id: 3,
    bgColor: "bg-[#004E79]",
    title: "Registrar\ninstitución\nde salud",
    description: "Asegúrate de tener los datos",
    link: "register-health-institution",
  },
];

const users = [
  { id: 1, name: "Juan Pérez", category: "healthProfessional" },
  { id: 2, name: "María García", category: "patient" },
  { id: 3, name: "Carlos López", category: "provider" },
  { id: 4, name: "Ana Sánchez", category: "healthInstitution" },
  { id: 5, name: "Lucía Torres", category: "healthProfessional" },
  // Agrega más usuarios según sea necesario
];

export default function HomeAdmin() {
  const { auth } = useContext(AuthContext);
  return (
    <div className="sm:max-w-6xl pt-10 min-h-screen w-11/12  sm:h-full flex flex-col gap-8 justify-center items-center bg-slate-100 rounded-none max-sm:rounded-xl shadow-lg">
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
              <span className="text-fuchsia-900">{auth.user.first_name}</span>
            </div>
            <div className="opacity-80 text-gray-700 text-sm font-normal font-open-sans">
              ¿Qué querés hacer hoy?
            </div>
          </div>
          <Link
            to="historial"
            className="container w-2/6 max-sm:hidden flex justify-between gap-2"
          >
            <Button
              label="Ver usuarios creados"
              bgColor="bg-sky-500"
              labelColor="text-white"
              borderColor="border-none"
              btnSize="btn-xs"
            />
          </Link>
        </div>
      </div>
      <HuntingSearcher users={users} />
      <Link
        to="historial"
        className="container w-32 flex sm:hidden justify-between gap-2"
      >
        <Button
          label="Ver usuarios creados"
          bgColor="bg-sky-500"
          labelColor="text-white"
          borderColor="border-none"
          btnSize="btn-xs"
        />
      </Link>

      <CardContainer cardData={cardData} />
    </div>
  );
}
