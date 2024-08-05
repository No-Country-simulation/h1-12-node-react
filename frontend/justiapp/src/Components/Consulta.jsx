import React, { useState } from "react";
import VoiceRecorder from "./VoiceRecorder"; // Asegúrate de que la ruta sea correcta

const Consulta = () => {
  const [transcription, setTranscription] = useState("");

  const handleTranscriptionReceived = (text) => {
    setTranscription(text);
  };
  console.log(transcription);
  const handleSaveConsultation = () => {
    console.log("Consulta finalizada");
  };

  return (
    <div className="w-[1024px] h-[286px] flex-col justify-start items-start gap-[58px] inline-flex">
      <div className="justify-start items-start gap-2 inline-flex">
        <div className="w-6 h-6 relative" />
        <div className="w-[1024px] flex-col justify-start items-start gap-10 inline-flex">
          <div className="self-stretch text-[#004e79] text-[26px] font-medium font-['Lato'] leading-normal">
            CONSULTA
          </div>
        </div>
      </div>
      <div className="self-stretch justify-center items-start gap-[72px] inline-flex">
        <div className="flex-col justify-center items-start gap-6 inline-flex">
          <div className="h-[204px] p-4 bg-neutral-100 rounded-[10px] flex-col justify-start items-start gap-6 flex">
            <div className="h-6 flex-col justify-start items-center gap-2 flex">
              <div className="self-stretch text-[#009bd7] text-xl font-bold font-['Lato'] leading-normal">
                Jueves 06/07
              </div>
            </div>
            <div className="self-stretch h-[124px] flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch h-[124px] flex-col justify-start items-start gap-2 flex">
                <div className="self-stretch h-[52px] flex-col justify-start items-center flex">
                  <div className="self-stretch h-[52px] flex-col justify-start items-center flex">
                    <div className="self-stretch px-4 py-3.5 opacity-80 rounded-lg justify-start items-center gap-2 inline-flex">
                      <div className="text-[#293242] text-2xl font-normal font-['Lato'] leading-relaxed">
                        Lorena Reinoso
                      </div>
                      <div className="text-[#a9257c] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        Ahora
                      </div>
                      <div className="grow shrink basis-0 self-stretch px-3 py-0.5 bg-[#009bd7] rounded-full justify-center items-center gap-2 flex">
                        <div className="text-center text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                          Paciente
                        </div>
                      </div>
                      <div className="w-5 h-5 relative" />
                    </div>
                  </div>
                </div>
                <div className="self-stretch pb-4 justify-center items-center gap-10 inline-flex">
                  <div className="px-4 py-3.5 bg-white rounded-lg border-2 border-[#004e79] justify-center items-center gap-2 flex">
                    <div className="w-5 h-5 relative" />
                    <div className="text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                      Ir al Paciente
                    </div>
                  </div>
                  <div className="px-4 py-3.5 bg-[#eaecf5] rounded-lg justify-center items-center gap-2 flex">
                    <div className="text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                      En consulta
                    </div>
                    <div className="w-5 h-5 relative" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
          <div className="self-stretch h-[142.50px] flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[286px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[17px] flex-col justify-start items-start gap-4 flex">
                <div className="grow shrink basis-0 text-[#009bd7] text-2xl font-normal font-['Lato'] leading-relaxed">
                  Jueves 26/07/24
                </div>
                <div className="grow shrink basis-0 text-right text-[#009bd7] text-2xl font-normal font-['Lato'] leading-relaxed">
                  10:30am
                </div>
              </div>
              <div className="self-stretch h-[245px] flex-col justify-start items-start gap-6 flex">
                <div className="text-[#004e79] text-2xl font-normal font-['Lato'] leading-relaxed">
                  Evoluciones
                </div>
                <div className="self-stretch h-[132px] px-3 pt-4 pb-2 bg-neutral-100 rounded-[10px] justify-start items-start gap-2 inline-flex">
                  <div className="grow shrink basis-0 self-stretch text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                    {transcription}
                  </div>
                </div>
                <div className="self-stretch h-12 flex-col justify-start items-end gap-6 flex">
                  <button
                    onClick={handleSaveConsultation}
                    className="px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg justify-end items-center gap-2 inline-flex"
                  >
                    <div className="text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                      Finalizar Consulta
                    </div>
                    <div className="w-5 h-5 relative" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <VoiceRecorder
            onTranscriptionReceived={handleTranscriptionReceived}
          />
        </div>
      </div>
    </div>
  );
};

export default Consulta;
