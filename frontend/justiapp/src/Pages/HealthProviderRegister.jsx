import React, { useState } from "react";

const HealthProviderRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, por ejemplo, enviar los datos a una API
    console.log("Datos del formulario:", formData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="w-[338px] text-[#195678] text-2xl font-bold font-['Lato'] leading-7 mb-4">
        Registrar proveedor de la salud de salud
      </div>
      <div className="text-gray-700 text-xl font-bold font-['Lato'] leading-normal mb-6">
        Completa los siguientes datos
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="h-[62px] flex-col justify-start items-start gap-2 flex">
          <label
            className="text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Escribe aquí"
            className="self-stretch h-11 px-6 py-5 bg-[#ebecee] rounded-lg border text-[#9b9fa6] text-sm font-normal font-['Open Sans'] leading-none"
          />
        </div>
        <div className="h-[62px] flex-col justify-start items-start gap-2 flex">
          <label
            className="text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none"
            htmlFor="address"
          >
            Dirección
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Escribe aquí"
            className="self-stretch h-11 px-6 py-5 bg-[#ebecee] rounded-lg border text-[#9b9fa6] text-sm font-normal font-['Open Sans'] leading-none"
          />
        </div>
        <div className="h-[62px] flex-col justify-start items-start gap-2 flex">
          <label
            className="text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none"
            htmlFor="phone"
          >
            Teléfono
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Escribe aquí"
            className="self-stretch h-11 px-6 py-5 bg-[#ebecee] rounded-lg border text-[#9b9fa6] text-sm font-normal font-['Open Sans'] leading-none"
          />
        </div>
        <div className="h-[62px] flex-col justify-start items-start gap-2 flex">
          <label
            className="text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Escribe aquí"
            className="self-stretch h-11 px-6 py-5 bg-[#ebecee] rounded-lg border text-[#9b9fa6] text-sm font-normal font-['Open Sans'] leading-none"
          />
        </div>
        <div className="h-[55px] justify-start items-center inline-flex">
          <button
            type="submit"
            className="w-[312px] self-stretch px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg border border-[#004e79] text-gray-50 text-base font-bold font-['Lato'] leading-tight"
          >
            Crear
          </button>
        </div>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[287px] h-[237px] p-6 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-end gap-4 inline-flex">
            <div className="w-8 h-8 relative" />
            <div className="self-stretch h-[104px] flex-col justify-start items-end gap-[7px] flex">
              <div className="self-stretch text-center text-gray-800 text-2xl font-bold font-['Lato'] leading-7">
                ¡La institución fue creada!
              </div>
              <div className="self-stretch h-[69px] p-2 justify-center items-center gap-2 inline-flex">
                <div className="text-center text-gray-800 text-xl font-bold font-['Lato'] leading-normal">
                  Enviaremos los detalles <br />
                  al email proporcionado
                </div>
              </div>
            </div>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthProviderRegister;
