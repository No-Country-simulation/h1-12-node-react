//HomeAdmin.jsx me
import React, { useContext } from "react";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../context/AuthContext";

const cardsData = [
  {
    title: "Profesional de salud",
    action: "Crear",
    description: "Información sobre profesionales de salud",
    image:
      "https://plus.unsplash.com/premium_photo-1682141106314-d471655e316b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Paciente",
    action: "Crear",
    description: "Información sobre pacientes",
    image:
      "https://plus.unsplash.com/premium_photo-1667511034915-3fb9af8927ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Prestador de la salud",
    action: "Crear",
    description: "Información sobre prestadores de salud",
    image:
      "https://images.unsplash.com/photo-1615631648086-325025c9e51e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Institución de salud",
    action: "Crear",
    description: "Información sobre instituciones de salud",
    image:
      "https://plus.unsplash.com/premium_photo-1682130157004-057c137d96d5?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Ver usuarios creados",
    action: "Ver",
    description: "Ver lista de usuarios creados",
    image:
      "https://plus.unsplash.com/premium_photo-1661331604078-add96f12ab49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export default function HomeAdmin(props) {
  console.log(props.auth);
  const { logout } = useContext(AuthContext);
  return (
    <>
      <Navbar />

      <main className="flex flex-col pt-16 max-w-7xl">
        <div className="flex p-2 ">
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
        </div>
      </main>
    </>
  );
}
