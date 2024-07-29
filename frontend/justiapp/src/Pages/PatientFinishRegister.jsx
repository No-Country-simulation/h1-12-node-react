import React from "react";

export default function PatientFinishRegister() {
  return (
    <div className="w-full max-w-md mx-auto my-4 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-[#004e79] text-xl font-bold mb-6">PERFIL</h2>
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="nombre"
            >
              Nombre
            </label>
            <input
              id="nombre"
              type="text"
              value="Ana Laura"
              className="h-11 px-4 py-2 bg-neutral-100 rounded-lg border border-gray-300 text-[#004e79] placeholder-gray-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="apellido"
            >
              Apellido
            </label>
            <input
              id="apellido"
              type="text"
              value="Alamino"
              className="h-11 px-4 py-2 bg-neutral-100 rounded-lg border border-gray-300 text-[#004e79] placeholder-gray-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="dni"
            >
              DNI
            </label>
            <input
              id="dni"
              type="text"
              value="35852147"
              className="h-11 px-4 py-2 bg-neutral-100 rounded-lg border border-gray-300 text-[#004e79] placeholder-gray-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="fecha"
            >
              Fecha
            </label>
            <input
              id="fecha"
              type="text"
              value="27/07/24"
              className="h-12 px-4 py-2 bg-neutral-100 rounded-lg border border-gray-300 text-[#004e79] placeholder-gray-500"
              readOnly
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="movil"
            >
              Móvil
            </label>
            <input
              id="movil"
              type="text"
              placeholder="Escribe aquí"
              className="h-11 px-4 py-2 bg-neutral-100 rounded-lg border border-[#6f0079] text-[#9b9fa6] placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="sexo"
            >
              Sexo
            </label>
            <select
              id="sexo"
              className="h-12 px-4 py-2 bg-neutral-100 rounded-lg border border-[#6f0079] text-[#9b9fa6] placeholder-gray-500"
            >
              <option value="" disabled selected>
                Elige una opción
              </option>
              {/* Opciones de selección aquí */}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="domicilio"
            >
              Domicilio
            </label>
            <input
              id="domicilio"
              type="text"
              placeholder="Escribe aquí"
              className="h-11 px-4 py-2 bg-neutral-100 rounded-lg border border-[#6f0079] text-[#9b9fa6] placeholder-gray-500"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="obra-social"
            >
              Obra Social
            </label>
            <select
              id="obra-social"
              className="h-12 px-4 py-2 bg-neutral-100 rounded-lg border border-[#6f0079] text-[#9b9fa6] placeholder-gray-500"
            >
              <option value="" disabled selected>
                Elige una opción
              </option>
              {/* Opciones de selección aquí */}
            </select>
          </div>
          <div className="flex flex-col">
            <label
              className="text-[#004e79] text-sm font-normal mb-1"
              htmlFor="grupo-sanguineo"
            >
              Grupo Sanguíneo
            </label>
            <select
              id="grupo-sanguineo"
              className="h-12 px-4 py-2 bg-neutral-100 rounded-lg border border-[#6f0079] text-[#9b9fa6] placeholder-gray-500"
            >
              <option value="" disabled selected>
                Elige una opción
              </option>
              {/* Opciones de selección aquí */}
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="w-full h-14 px-4 py-3.5 bg-[#9b9fa6] rounded-lg text-gray-50 text-base font-bold"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}
