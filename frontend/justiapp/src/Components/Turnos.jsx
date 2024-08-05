import React, { useState } from "react";

// Datos simulados para médicos y prepaga
const medicos = ["Dra. Botarelli", "Dr. Pérez", "Dra. García", "Dr. Martínez"];

const prepagas = ["Sancor", "Osde", "Galeno", "Swiss Medical"];

const motivos = ["Consulta", "Revisión"];

// Componente Modal
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 text-center">
        <p className="text-lg font-semibold text-[#004E79]">
          Tu turno fue agendado correctamente
        </p>
        <button
          onClick={onClose}
          className="mt-4 bg-[#004E79] text-white px-4 py-2 rounded-lg"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

const Turnos = () => {
  const [medico, setMedico] = useState("");
  const [prepaga, setPrepaga] = useState("");
  const [motivo, setMotivo] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({ medico, prepaga, motivo, fecha, hora });
    setIsModalOpen(true); // Mostrar el modal al guardar
  };

  const handleBack = () => {
    // Aquí puedes manejar la acción para volver atrás
    console.log("Volver atrás");
  };

  return (
    <div className="w-[344px] h-[420px] p-4 bg-white rounded-lg flex flex-col gap-8">
      <div className="flex items-center gap-2">
        <button
          onClick={handleBack}
          className="text-[#004E79] text-xl font-semibold"
        >
          &#8592; {/* Flecha hacia la izquierda */}
        </button>
        <h2 className="text-[#004E79] text-xl font-semibold">Turnos</h2>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label className="text-[#004E79] text-sm font-open-sans font-normal leading-4">
            Médico
          </label>
          <select
            value={medico}
            onChange={(e) => setMedico(e.target.value)}
            className="w-full h-8 px-4 bg-[#F5F5F5] rounded-lg border border-[#9CA0A6] text-[#9CA0A6] text-sm font-open-sans"
          >
            <option value="" disabled>
              Selecciona un médico
            </option>
            {medicos.map((medico, index) => (
              <option key={index} value={medico}>
                {medico}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#004E79] text-sm font-open-sans font-normal leading-4">
            Prepaga
          </label>
          <select
            value={prepaga}
            onChange={(e) => setPrepaga(e.target.value)}
            className="w-full h-8 px-4 bg-[#F5F5F5] rounded-lg border border-[#9CA0A6] text-[#9CA0A6] text-sm font-open-sans"
          >
            <option value="" disabled>
              Selecciona una prepaga
            </option>
            {prepagas.map((prepaga, index) => (
              <option key={index} value={prepaga}>
                {prepaga}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#004E79] text-sm font-open-sans font-normal leading-4">
            Motivo
          </label>
          <select
            value={motivo}
            onChange={(e) => setMotivo(e.target.value)}
            className="w-full h-8 px-4 bg-[#F5F5F5] rounded-lg border border-[#9CA0A6] text-[#9CA0A6] text-sm font-open-sans"
          >
            <option value="" disabled>
              Selecciona un motivo
            </option>
            {motivos.map((motivo, index) => (
              <option key={index} value={motivo}>
                {motivo}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#004E79] text-sm font-open-sans font-normal leading-4">
            Fecha
          </label>
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full h-8 px-4 bg-[#F5F5F5] rounded-lg border border-[#9CA0A6] text-[#9CA0A6] text-sm font-open-sans"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-[#004E79] text-sm font-open-sans font-normal leading-4">
            Hora
          </label>
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            className="w-full h-8 px-4 bg-[#F5F5F5] rounded-lg border border-[#9CA0A6] text-[#9CA0A6] text-sm font-open-sans"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="w-full rounded-lg border-2 border-[#004E79] px-4 py-2 flex justify-center items-center gap-2 text-[#004E79] text-lg font-open-sans font-semibold leading-5 tracking-wider"
            onClick={handleBack}
          >
            Volver atrás
          </button>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#004E79] to-[#A9257C] rounded-lg px-4 py-2 flex justify-center items-center gap-2 text-white text-lg font-open-sans font-semibold leading-5 tracking-wider"
          >
            Guardar
          </button>
        </div>
      </form>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Turnos;
