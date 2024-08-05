import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { es } from "date-fns/locale";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import {
  BeakerIcon,
  CalendarIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/24/outline";

const DashboardPaciente = () => {
  const { auth } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [profilePhoto, setProfilePhoto] = useState(
    "https://via.placeholder.com/150"
  );
  const [openSections, setOpenSections] = useState({
    tratamiento: false,
    calendario: false,
    medico: false,
  });

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderDays = () => {
    const days = [];
    const dateFormat = "d";
    const startDate = startOfWeek(new Date(), { locale: es });

    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      days.push(
        <button
          className={`text-center font-medium py-2 px-4 rounded-full ${
            isSameDay(day, selectedDate)
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-gray-200 text-gray-900"
          }`}
          key={i}
          onClick={() => setSelectedDate(day)}
        >
          <div>{format(day, "EEEEEE", { locale: es })}</div>
          <div>{format(day, dateFormat, { locale: es })}</div>
        </button>
      );
    }

    return <div className="grid grid-cols-7 gap-2 mb-4">{days}</div>;
  };

  return (
    <div className="min-h-screen pt-12 p w-full">
      <div className="flex  w-full flex-wrap lg:flex-nowrap gap-3 shadow-md rounded-lg p-4">
        <div className="container w-1/2 max-lg:w-full">
          <div className="flex items-center justify-between p-4 border border-blue-500 border-b-purple-500 border-r-purple-500 border-t-blue-500 rounded-lg mb-4 max-w-lg mx-auto">
            <div className="text-left ml-4 flex-1">
              <h2 className="text-lg font-bold text-gray-700">
                {auth.user.first_name}
              </h2>
              <p className="text-sm text-gray-900">
                ¡Qué bueno verte nuevamente!
              </p>
              <p className="text-sm text-blue-400">
                Tienes 2 tareas pendientes
              </p>
            </div>
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handlePhotoUpload}
            />
            <label htmlFor="photo-upload" className="cursor-pointer">
              <img
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-indigo-500"
                src={profilePhoto}
                alt="Profile"
              />
            </label>
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-32 h-32">
              <CircularProgressbar
                value={25}
                text="25%"
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: "#4F46E5",
                  textColor: "#4F46E5",
                  trailColor: "#E5E7EB",
                })}
              />
            </div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="w-24 h-24">
              <CircularProgressbar
                value={25}
                text="25%"
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: "#4F46E5",
                  textColor: "#4F46E5",
                  trailColor: "#E5E7EB",
                })}
              />
            </div>
            <div className="w-24 h-24">
              <CircularProgressbar
                value={25}
                text="25%"
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: "#4F46E5",
                  textColor: "#4F46E5",
                  trailColor: "#E5E7EB",
                })}
              />
            </div>
          </div>
        </div>

        <div className="container flex flex-col w-1/2 max-lg:w-full space-y-4 mb-4">
          <div
            tabIndex="0"
            className={`collapse collapse-arrow bg-gray-100 text-blue-500 rounded-lg ${
              openSections.tratamiento ? "collapse-open" : ""
            }`}
          >
            <div
              className="collapse-title text-lg font-medium flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("tratamiento")}
            >
              Mi tratamiento
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openSections.tratamiento && (
              <div className="collapse-content">
                <div className="flex-col space-y-4 mb-2 p-4">
                  <h3 className="text-lg font-bold text-nowrap text-gray-900">
                    Tratamiento inmunodepresor
                  </h3>
                  <p className="text-sm text-center text-gray-600 mb-2">
                    Diagnóstico:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Ciclosporina 10mg.</span>
                      <span className="badge badge-success">Activo</span>
                    </div>
                    <hr className="p-2"></hr>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Ciclosporina 10mg.</span>
                      <span className="badge badge-info">Finalizado</span>
                    </div>
                    <hr className="p-2"></hr>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700"> Ciclosporina 10mg.</span>
                      <span className="badge badge-error">Suspendido</span>
                    </div>
                  </div>
                  <div className="flex justify-center ">
                    <button className="flex items-center row border-2 border-blue-500 border-b-purple-500 border-r-purple-500 border-t-blue-500 rounded-lg p-1.5">
                      <BeakerIcon className="h-5 w-5" />
                      <span>Medicamentos</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            tabIndex="0"
            className={`collapse collapse-arrow bg-gray-100 text-blue-500 rounded-lg ${
              openSections.calendario ? "collapse-open" : ""
            }`}
          >
            <div
              className="collapse-title text-lg font-medium flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("calendario")}
            >
              Calendario
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openSections.calendario && (
              <div className="collapse-content">
                <div className="flex-col space-y-4 mb-2 p-4">
                  <div className="text-center">
                    <div className="flex items-center justify-between mb-4">
                      <button
                        onClick={() =>
                          setSelectedDate(addDays(selectedDate, -7))
                        }
                      >
                        <ChevronLeftIcon className="h-5 w-5" />
                      </button>
                      <h2 className="text-xl font-semibold text-gray-900">
                        {format(selectedDate, "MMMM yyyy", { locale: es })}
                      </h2>
                      <button
                        onClick={() =>
                          setSelectedDate(addDays(selectedDate, 7))
                        }
                      >
                        <ChevronRightIcon className="h-5 w-5" />
                      </button>
                    </div>
                    {renderDays()}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div
            tabIndex="0"
            className={`collapse collapse-arrow bg-gray-100 text-blue-500 rounded-lg ${
              openSections.medico ? "collapse-open" : ""
            }`}
          >
            <div
              className="collapse-title text-lg font-medium flex justify-between items-center cursor-pointer"
              onClick={() => toggleSection("medico")}
            >
              Médico
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
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            {openSections.medico && (
              <div className="collapse-content">
                <div className="flex-col space-y-4 mb-2 p-4">
                  <h3 className="text-lg font-bold text-nowrap text-gray-900">
                    Tratamiento inmunodepresor
                  </h3>
                  <p className="text-sm text-center text-gray-600 mb-2">
                    Diagnóstico:
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Ciclosporina 10mg.</span>
                      <span className="badge badge-success">Activo</span>
                    </div>
                    <hr className="p-2"></hr>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Ciclosporina 10mg.</span>
                      <span className="badge badge-info">Finalizado</span>
                    </div>
                    <hr className="p-2"></hr>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700"> Ciclosporina 10mg.</span>
                      <span className="badge badge-error">Suspendido</span>
                    </div>
                  </div>
                  <div className="flex justify-center ">
                    <button className="flex items-center row border-2 border-blue-500 border-b-purple-500 border-r-purple-500 border-t-blue-500 rounded-lg p-1.5">
                      <BeakerIcon className="h-5 w-5" />
                      <span>Medicamentos</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPaciente;
