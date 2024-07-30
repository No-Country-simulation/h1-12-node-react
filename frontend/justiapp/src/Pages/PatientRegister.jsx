//PatientRegister.jsx
import React, { useState } from "react";
import Modal from "../Components/Modal";
import GenericForm from "../Components/GenericForm";

export default function PatientRegister() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleFormSubmit = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <GenericForm
        title="Registro de paciente"
        subtitle="Completa los campos para registrar un paciente"
        onFormSubmit={handleFormSubmit} // Pasa el callback para abrir el modal
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="w-3/4  p-7 bg-white rounded-2xl shadowflex flex-col justify-start items-end gap-4">
          <div className="self-stretch h-24 flex flex-col justify-start items-end gap-1.5">
            <div className="text-center text-gray-800 text-2xl font-bold leading-7">
              ¡El usuario fue creado!
            </div>
            <div className="self-stretch h-16 p-2 flex justify-center items-center gap-2">
              <div className="text-center text-gray-800 text-xl font-bold leading-normal">
                Enviaremos el usuario <br />y la contraseña al paciente
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
