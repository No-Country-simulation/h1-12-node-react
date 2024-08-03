import React, { useState } from "react";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { es } from "date-fns/locale";

const ProfessionalProfile = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

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
    <div className="flex flex-col min-h-screen w-full bg-blue-400 p-8">
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between p-4 border border-blue-500 border-b-purple-500 border-r-purple-500 border-t-blue-500 rounded-lg mb-4 max-w-lg mx-auto">
          <div className="text-left ml-4 flex-1">
            <h2 className="text-lg font-bold text-gray-700">¡Hola Ana!</h2>
            <p className="text-sm text-gray-900">
              ¡Qué bueno verte nuevamente!
            </p>
            <p className="text-sm text-blue-400">Tienes 2 tareas pendientes</p>
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
        {renderDays()}
        <div className="flex w-full mb-4">
          <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
            content
          </div>
          <div className="divider divider-horizontal">OR</div>
          <div className="card bg-base-300 rounded-box grid h-20 flex-grow place-items-center">
            content
          </div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Nombre
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Apellido
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>
          {/* Agrega más campos de formulario según sea necesario */}
        </form>
        <div className="flex w-full flex-col mt-4">
          <div className="divider">Default</div>
          <div className="divider divider-neutral">Neutral</div>
          <div className="divider divider-primary">Primary</div>
          <div className="divider divider-secondary">Secondary</div>
          <div className="divider divider-accent">Accent</div>
          <div className="divider divider-success">Success</div>
          <div className="divider divider-warning">Warning</div>
          <div className="divider divider-info">Info</div>
          <div className="divider divider-error">Error</div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalProfile;
