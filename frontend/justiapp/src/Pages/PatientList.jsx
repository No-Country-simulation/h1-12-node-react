import React, { useState } from "react";

const PatientList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const patients = [
    {
      name: "Lucía Reinoso",
      id: "35296874",
      treatmentAdherence: "Nula",
      adherenceLevel: 16,
      adherenceColor: "#eb0118",
    },
    {
      name: "Juan Perez",
      id: "12345678",
      treatmentAdherence: "Buena",
      adherenceLevel: 64,
      adherenceColor: "#3e7652",
    },
    // Agrega más pacientes aquí
  ];

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-3/5 pt-32 flex-col justify-start items-start gap-8 inline-flex">
      <div className="Frame98171 self-stretch justify-start items-start gap-48 inline-flex">
        <div className="Frame98174 self-stretch justify-start items-center gap-2 flex">
          <div className="HeroiconsOutlineUserGroup w-6 h-6 relative" />
          <div className="StatValue text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
            PACIENTES
          </div>
        </div>
      </div>
      <div className="Frame98205 self-stretch h-96 flex-col justify-end items-end gap-6 flex">
        <div className="Frame98208 w-80 justify-center items-center gap-4 inline-flex">
          <div className="Frame204 grow shrink basis-0 h-12 justify-center items-start gap-6 flex">
            <div className="FileInput grow shrink basis-0 h-12 justify-start items-start flex">
              <div className="Button px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-tl-lg rounded-bl-lg justify-center items-center gap-2 flex">
                <div className="LeftIcon w-5 h-5 relative" />
              </div>
              <div className="TextInput grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <input
                  type="text"
                  placeholder="Buscar pacientes"
                  className="Input self-stretch px-4 py-3.5 bg-white rounded-tr-lg rounded-br-lg border border-gray-300 justify-start items-center gap-2 inline-flex"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="Button px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg justify-center items-center gap-2 flex">
            <div className="RightIcon w-5 h-5 relative" />
          </div>
        </div>
        <div className="Frame98204 self-stretch h-96 flex-col justify-start items-start gap-2 flex">
          {filteredPatients.map((patient, index) => (
            <div
              key={index}
              className="Frame98210 h-32 p-4 bg-neutral-100 rounded-lg flex-col justify-start items-start gap-4 flex"
            >
              <div className="Frame98200 self-stretch h-24 flex-col justify-start items-start gap-4 flex">
                <div className="Frame98199 self-stretch h-9 flex-col justify-start items-center gap-2 flex">
                  <div className="Frame98192 h-9 justify-center items-center gap-12 inline-flex">
                    <div className="Frame98190 w-44 flex-col justify-center items-start gap-2 inline-flex">
                      <div className="Label self-stretch text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        {patient.name}
                      </div>
                      <div className="Label self-stretch text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                        {patient.id}
                      </div>
                    </div>
                    <div className="Frame98191 justify-center items-center gap-4 flex">
                      <div className="RightIcon w-5 h-5 relative">
                        <img
                          className="Subtract w-4 h-4 left-[2px] top-[2px] absolute"
                          src="https://via.placeholder.com/16x16"
                          alt="icon"
                        />
                      </div>
                      <div className="RightIcon w-5 h-5 relative" />
                    </div>
                  </div>
                </div>
                <div className="Frame98189 self-stretch h-12 flex-col justify-start items-start gap-2 flex">
                  <div className="AdherenciaAlTratamiento self-stretch text-[#293242] text-sm font-normal font-['Open Sans'] leading-none">
                    Adherencia al Tratamiento
                  </div>
                  <div className="Group5 w-72 h-3 relative">
                    <div className="Rectangle6326 w-72 h-3 left-0 top-0 absolute bg-gray-300 rounded" />
                    <div
                      className="Rectangle6327 w-{patient.adherenceLevel} h-3 left-0 top-0 absolute"
                      style={{ backgroundColor: patient.adherenceColor }}
                    />
                  </div>
                  <div className="Nula self-stretch text-[#eb0118] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                    {patient.treatmentAdherence}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientList;
