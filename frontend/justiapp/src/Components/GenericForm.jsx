//GeneicForm.jsx
import React, { useState } from "react";
import Modal from "./Modal";

const TextInput = ({ label, placeholder, name, value, onChange }) => (
  <div className="TextInput self-stretch h-[62px] flex-col justify-start items-start gap-2 flex">
    <div className="Nombre justify-center items-center gap-2 inline-flex">
      <div className="Nombre text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none">
        {label}
      </div>
    </div>
    <div className="Input self-stretch h-11 px-6 py-5 bg-[#ebecee] rounded-lg border justify-start items-center inline-flex">
      <input
        type="text"
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full h-full bg-transparent border-none outline-none text-[#9b9fa6] text-sm font-normal font-['Open Sans'] leading-none"
      />
    </div>
  </div>
);

const GenericForm = ({ title, subtitle, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    dni: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log("Formulario enviado:", formData);
    setIsModalOpen(true); // Llamar a la función pasada como prop
    if (onFormSubmit) onFormSubmit(); // Llama al callback si se proporciona
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="p-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-[#004e79] font-['Open Sans'] mb-2">
          {title}
        </h1>
        <form
          onSubmit={handleSubmit}
          className="FormCrearUsuario h-auto flex-col justify-start items-start gap-6 p-6 bg-white shadow-md rounded-lg max-w-md mx-auto"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-lg text-[#004e79] font-normal font-['Open Sans'] mb-4">
              {subtitle}
            </h2>
            <TextInput
              label="Nombre"
              placeholder="Escribe aquí"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <TextInput
              label="Apellido"
              placeholder="Escribe aquí"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            <TextInput
              label="DNI"
              placeholder="Escribe aquí"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
            />
            <TextInput
              label="Email"
              placeholder="Escribe aquí"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className=" mt-6 flex justify-start items-center">
            <button
              type="submit"
              className="btn w-full  self-stretch px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg border border-[#004e79] flex justify-center items-center gap-2"
            >
              <span className="Label text-gray-50 text-base font-bold font-['Lato'] leading-tight">
                Enviar
              </span>
            </button>
          </div>
        </form>
      </div>
      {/* Modal */}
    </>
  );
};

export default GenericForm;
