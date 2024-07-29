import React, { useState } from "react";

// Componente Modal
const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <dialog
      open
      className="modal fixed inset-0 flex items-center justify-center z-50"
    >
      <div className="modal-box relative bg-white p-6 rounded-2xl shadow border border-gray-200">
        <form method="dialog">
          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={onClose}
          >
            ✕
          </button>
        </form>
        {/* Contenido del Modal */}
        <div className="ModalConfirmaciNUsuarioCreado w-80 h-80 p-6 bg-white rounded-2xl shadow border border-gray-200 flex-col justify-start items-end gap-4 inline-flex">
          <div className="HeroiconsOutlineXCircle w-8 h-8 relative" />
          <div className="Frame98348 self-stretch h-60 flex-col justify-center items-center gap-6 flex">
            <div className="Frame3182 self-stretch grow shrink basis-0 flex-col justify-start items-end gap-6 flex">
              <div className="Frame98349 self-stretch grow shrink basis-0 flex-col justify-start items-end gap-4 flex">
                <div className="Title self-stretch grow shrink basis-0 text-center text-[#009bd7] text-2xl font-bold font-['Lato'] leading-7">
                  ¡Hola Ana! <br /> Necesitamos algunos datos importantes
                </div>
                <div className="Title self-stretch grow shrink basis-0 text-center text-[#9b9fa6] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                  Para ofrecerte una experiencia personalizada y segura, por
                  favor completa la siguiente información
                </div>
              </div>
            </div>
            <div className="ButtonDefaultSmEnabledSquare px-4 py-2 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg justify-center items-end gap-2 inline-flex">
              <div className="Label text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                Completar
              </div>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

// Componente principal que incluye el botón y el modal
const ModalComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="flex flex-col items-center">
      {/* Botón para abrir el modal */}
      <button
        className="btn px-4 py-2 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] text-white rounded-lg"
        onClick={openModal}
      >
        Open Modal
      </button>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default ModalComponent;
