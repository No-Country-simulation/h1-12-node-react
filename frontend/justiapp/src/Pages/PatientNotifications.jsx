// src/components/PatientNotifications.jsx
import React, { useState } from "react";
import Modal from "../Components/Modal";

const PatientNotifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="Frame204 h-80 flex-col justify-start items-center gap-6 inline-flex">
        <div className="Frame98171 w-80 justify-start items-start gap-48 inline-flex">
          <div className="Frame98174 justify-start items-center gap-2 flex">
            <div className="HeroiconsSolidChevronLeft w-6 h-6 relative" />
            <div className="StatValue text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
              NOTIFICACIONES
            </div>
          </div>
        </div>
        <div className="Frame98272 h-72 flex-col justify-start items-start gap-2 flex">
          <div className="Frame98270 self-stretch h-28 flex-col justify-start items-start gap-4 flex">
            <div className="Frame98263 self-stretch h-11 flex-col justify-end items-center gap-2 flex">
              <div className="Frame98262 justify-start items-center gap-6 inline-flex">
                <div className="Ciclosporina10mg text-gray-800 text-sm font-normal font-['Open Sans'] leading-none">
                  Ciclosporina 10mg.
                </div>
                <div
                  className="Frame98261 p-2 bg-neutral-100 rounded-lg justify-center items-center gap-2 flex cursor-pointer"
                  onClick={openModal}
                >
                  <div className="30Am text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                    10:30 am
                  </div>
                  <div className="Min text-[#eb0118] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                    10min.
                  </div>
                </div>
              </div>
              <div className="Line180 self-stretch h-px border border-[#9ca0a6]"></div>
            </div>
            {/* Repetir elementos según sea necesario */}
          </div>
          {/* Repetir elementos según sea necesario */}
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="Frame98259 h-24 flex-col justify-center items-center gap-4 inline-flex">
          <div className="Title self-stretch text-center">
            <span className="text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
              ¡ Ana Hora de tomar
              <br />
            </span>
            <span className="text-[#004e79] text-xl font-normal font-['Lato'] leading-normal">
              Ciclosporina 10mg!
            </span>
          </div>
          <div className="Frame98258 h-8 justify-center items-center gap-2 inline-flex">
            <div className="ButtonNeutralSmEnabledSquare p-3 rounded-lg border-2 border-[#004e79] justify-center items-center gap-2 flex">
              <div className="Label text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none">
                Recordar luego
              </div>
            </div>
            <div className="ButtonDefaultSmEnabledSquare p-3 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg justify-center items-center gap-2 flex">
              <div className="Label text-white text-sm font-normal font-['Open Sans'] leading-none">
                Tomar ahora
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PatientNotifications;
