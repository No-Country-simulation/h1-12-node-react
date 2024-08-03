import React, { useState } from "react";

const CreateTreatment = () => {
  const [diagnostico, setDiagnostico] = useState("");
  const [tratamiento, setTratamiento] = useState("");
  const [frecuencia, setFrecuencia] = useState("");
  const [dosis, setDosis] = useState("");
  const [notas, setNotas] = useState("");

  const handleReset = () => {
    setDiagnostico("");
    setTratamiento("");
    setFrecuencia("");
    setDosis("");
    setNotas("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes manejar el envío del formulario
    console.log({
      diagnostico,
      tratamiento,
      frecuencia,
      dosis,
      notas,
    });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="pt-36 b flex-col justify-start items-start gap-8 inline-flex"
      >
        <div className="self-stretch justify-start items-start gap-48 inline-flex">
          <div className="justify-start items-center gap-2 flex">
            <div className=" w-6 h-6 relative" />
            <div className=" text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
              TRATAMIENTO NUEVO
            </div>
          </div>
        </div>
        <div className="Frame98236 self-stretch h-96 flex-col justify-start items-start gap-8 flex">
          <div className="TextInput self-stretch h-16 flex-col justify-start items-start gap-2 flex">
            <div className="Nombre justify-center items-center gap-2 inline-flex">
              <label
                htmlFor="diagnostico"
                className="Nombre text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none"
              >
                Diagnóstico
              </label>
            </div>
            <div className="Input self-stretch h-11 pl-4 pr-6 py-5 bg-neutral-100 rounded-lg justify-start items-center inline-flex">
              <input
                id="diagnostico"
                value={diagnostico}
                onChange={(e) => setDiagnostico(e.target.value)}
                className="Frame98225 grow shrink basis-0 h-4 text-[#9b9fa6] text-xs font-normal font-['Open Sans'] leading-none"
                placeholder="Buscador de diagnóstico"
              />
            </div>
          </div>
          <div className="Frame98235 self-stretch h-96 flex-col justify-start items-start gap-4 flex">
            <div className="Frame98234 self-stretch h-56 flex-col justify-start items-start gap-2 flex">
              <div className="TextInput self-stretch h-16 flex-col justify-start items-start gap-2 flex">
                <div className="Nombre justify-center items-center gap-2 inline-flex">
                  <label
                    htmlFor="tratamiento"
                    className="Nombre text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none"
                  >
                    Tratamiento
                  </label>
                </div>
                <div className="Input self-stretch h-11 pl-4 pr-6 py-5 bg-neutral-100 rounded-lg justify-start items-center inline-flex">
                  <input
                    id="tratamiento"
                    value={tratamiento}
                    onChange={(e) => setTratamiento(e.target.value)}
                    className="Frame98225 grow shrink basis-0 h-4 text-[#9b9fa6] text-xs font-normal font-['Open Sans'] leading-none"
                    placeholder="Agregue medicamento"
                  />
                </div>
              </div>
              <div className="Input self-stretch h-11 pl-4 pr-6 py-5 bg-neutral-100 rounded-lg border border-[#9b9fa6] justify-start items-center inline-flex">
                <input
                  value={frecuencia}
                  onChange={(e) => setFrecuencia(e.target.value)}
                  className="Frame98225 grow shrink basis-0 h-4 text-[#293242] text-xs font-normal font-['Open Sans'] leading-none"
                  placeholder="Frecuencia"
                />
              </div>
              <div className="Input self-stretch h-11 pl-4 pr-6 py-5 bg-neutral-100 rounded-lg border border-[#9b9fa6] justify-start items-center inline-flex">
                <input
                  value={dosis}
                  onChange={(e) => setDosis(e.target.value)}
                  className="Frame98225 grow shrink basis-0 h-4 text-[#293242] text-xs font-normal font-['Open Sans'] leading-none"
                  placeholder="Dosis"
                />
              </div>
              <div className="Input self-stretch h-11 pl-4 pr-6 py-5 bg-neutral-100 rounded-lg border border-[#9b9fa6] justify-start items-center inline-flex">
                <input
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                  className="Frame98225 grow shrink basis-0 h-4 text-[#293242] text-xs font-normal font-['Open Sans'] leading-none"
                  placeholder="Notas"
                />
              </div>
            </div>
            <div className="Button w-80 px-4 py-3.5 bg-gray-100 rounded-lg border border-gray-100 justify-between items-center inline-flex">
              <div className="Label text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none">
                Ciclosporina 10mg.
              </div>
              <div className="RightIcon w-5 h-5 relative" />
            </div>
            <div className="Frame183 self-stretch h-10 flex-col justify-start items-start gap-4 flex">
              <div className="CountdownInBoxes self-stretch justify-start items-end gap-3 inline-flex">
                <div className="Days grow shrink basis-0 p-2 bg-neutral-100 rounded-lg flex-col justify-center items-center gap-1.5 inline-flex">
                  <div className="Number justify-start items-center gap-1 inline-flex">
                    <div className=" text-[#009bd7] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                      Inicio
                    </div>
                  </div>
                  <div className="Label flex-col justify-start items-center gap-1 flex">
                    <div className=" text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                      27/07/24
                    </div>
                  </div>
                </div>
                <div className="Days grow shrink basis-0 p-2 bg-neutral-100 rounded-lg flex-col justify-center items-center gap-1.5 inline-flex">
                  <div className="Number justify-start items-center gap-1 inline-flex">
                    <div className=" text-[#009bd7] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                      Fin
                    </div>
                  </div>
                  <div className="Label flex-col justify-start items-center gap-1 flex">
                    <div className=" text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                      10/07/24
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="FileInput self-stretch justify-start items-start inline-flex">
              <div className="Button px-3.5 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-tl-lg rounded-bl-lg justify-center items-center gap-2 flex">
                <div className="RightIcon w-5 h-5 relative" />
              </div>
              <div className="TextInput bg-red-500 grow shrink basis-0 flex-col justify-start items-start inline-flex">
                <div className="Input self-stretch px-3.5 py-3.5 bg-neutral-100 rounded-tr-lg rounded-br-lg border border-[#9b9fa6] justify-start items-center gap-2 inline-flex">
                  <div className="Text grow shrink basis-0 h-5 text-[#293242] text-xs font-normal font-['Open Sans'] leading-none">
                    Archivo
                  </div>
                </div>
              </div>
            </div>
            <div className="Button w-80 px-4 py-3.5 bg-gray-100 rounded-lg border border-gray-100 justify-between items-center inline-flex">
              <div className="Label text-[#004e79] text-sm font-normal font-['Open Sans'] leading-none">
                Estudio 1
              </div>
              <div className="RightIcon w-5 h-5 relative" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="Button h-8 px-3 py-1.5 bg-white rounded-lg border-2 border-[#004e79] justify-center items-center gap-2 inline-flex"
          >
            <div className="LeftIcon w-5 h-5 relative" />
            <div className="Label text-[#004e79] text-base font-semibold font-['Lato'] leading-tight">
              CANCELAR
            </div>
          </button>
          <button
            type="submit"
            className="Button h-8 px-3 py-1.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg justify-center items-center gap-2 inline-flex"
          >
            <div className="RightIcon w-5 h-5 relative" />
            <div className="Label text-white text-base font-semibold font-['Lato'] leading-tight">
              CREAR
            </div>
          </button>
        </div>
      </form>
    </>
  );
};

export default CreateTreatment;
