import React from "react";

const PatientHistory = () => {
  return (
    <div className="w-[312px] h-[549.86px] pt-11 pb-2 flex flex-col items-center gap-8">
      {/* Header with Back Arrow and Title */}
      <div className="pr-[105px] flex items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 pl-2.5 pr-2.5 pt-1.5 pb-1.5 flex items-center justify-center bg-[#004E79]">
            <div className="w-2.5 h-4.125 bg-white"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-[#004E79] text-2xl font-bold leading-6">
              Turnos
            </div>
          </div>
        </div>
      </div>

      {/* Patient Information */}
      <div className="w-full h-[146px] p-4 bg-[#F5F5F5] rounded-lg flex flex-col items-start gap-4">
        <div className="w-full h-10 flex items-center gap-4">
          <div className="flex flex-col items-start gap-2">
            <div className="text-[#004E79] text-xl font-bold">
              Lucía Reinoso
            </div>
            <div className="text-[#293343] text-xs font-bold">35296874</div>
          </div>
        </div>
        <div className="w-full h-[59px] flex flex-col items-start gap-4">
          <div className="text-[#293343] text-xs font-normal">
            Género: Femenino
          </div>
          <div className="flex items-start gap-2">
            <div className="text-[#293343] text-xs font-normal">
              Obra social: Sancor
            </div>
            <div className="text-[#293343] text-xs font-normal">
              Número: 2665841/00
            </div>
          </div>
          <div className="text-[#293343] text-xs font-normal">
            Fecha de nacimiento: 14/06/1991
          </div>
        </div>
      </div>

      {/* Treatment and Medication Information */}
      <div className="w-full h-[299.86px] pt-2 pb-4 bg-[#F5F5F5] rounded-lg flex flex-col items-center gap-4">
        <div className="w-full h-[137px] flex flex-col items-start gap-2">
          <div className="text-[#004E79] text-xl font-bold">Tratamiento</div>
          <div className="w-full flex flex-col items-start gap-2">
            <div className="text-[#004E79] text-xs font-bold">
              Tratamiento inmunodepresor
            </div>
            <div className="text-[#004E79] text-xs font-bold">Diagnóstico:</div>
            <div className="text-[#004E79] text-xs font-normal">
              Ciclosporina: 100 mg cada 12 horas.
              <br />
              Prednisona: 5 mg diario.
              <br />
              Micofenolato mofetilo: 500 mg cada 12 horas.
            </div>
          </div>
        </div>
        <div className="w-full h-[41.86px] flex items-start gap-3">
          <div className="flex-1 p-2.5 bg-white rounded-xl flex flex-col items-center gap-1.5">
            <div className="text-[#009BD7] text-xs font-bold">Estado</div>
            <div className="text-[#004E79] text-xs font-bold">Inactivo</div>
          </div>
          <div className="flex-1 p-2.5 bg-white rounded-xl flex flex-col items-center gap-1.5">
            <div className="text-[#009BD7] text-xs font-bold">Inicio</div>
            <div className="text-[#004E79] text-xs font-bold">00/00/00</div>
          </div>
          <div className="flex-1 p-2.5 bg-white rounded-xl flex flex-col items-center gap-1.5">
            <div className="text-[#009BD7] text-xs font-bold">Fin</div>
            <div className="text-[#004E79] text-xs font-bold">00/00/00</div>
          </div>
        </div>
        <div className="w-full h-[65px] flex flex-col items-center gap-4">
          <div className="w-full p-2 bg-white rounded-lg flex items-center justify-start">
            <div className="text-[#004E79] text-xs font-bold">Firma Médico</div>
          </div>
          <div className="w-full text-[#004E79] text-xs font-normal">
            Dr. Bortelli Clínica de Cuyo.
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientHistory;
