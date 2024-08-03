import React from "react";

const ProfessionalSchedule = () => {
  return (
    <div className="bg-base-200 collapse">
      <input type="checkbox" id="schedule-toggle" className="peer hidden" />
      <label
        htmlFor="schedule-toggle"
        className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content cursor-pointer px-4 py-2"
      >
        Click me to show/hide content
      </label>
      <div className="collapse-content bg-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-base-content">
        <div className="Frame98343 h-64 p-4 bg-neutral-100 rounded-lg flex-col justify-start items-start gap-6 inline-flex">
          <div className="Frame98340 h-6 flex-col justify-start items-center gap-2 flex">
            <div className="StatValue self-stretch text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
              Jueves 06/07
            </div>
          </div>
          <div className="Frame98373 self-stretch h-44 flex-col justify-start items-start gap-4 flex">
            <table className="w-full table-auto border-collapse">
              <tbody>
                <tr className="border-b border-[#9ca0a6]">
                  <td className="px-4 py-2 flex items-center gap-2">
                    <div className="Button px-4 py-3.5 opacity-80 rounded-lg flex items-center gap-2">
                      <div className="Label text-[#293242] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        Lorena Reinoso
                      </div>
                      <div className="Label text-[#293242] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        10:30am
                      </div>
                      <div className="Badge px-3 py-0.5 bg-[#009bd7] rounded-full flex items-center">
                        <div className="Badge text-center text-white text-sm font-normal font-['Open Sans'] leading-none">
                          Paciente
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr className="border-b border-[#9ca0a6]">
                  <td className="px-4 py-2 flex items-center gap-2">
                    <div className="Button px-4 py-3.5 opacity-80 rounded-lg flex items-center gap-2">
                      <div className="Label text-[#293242] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        Dr. Luis Cano
                      </div>
                      <div className="Label text-[#293242] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        10:30am
                      </div>
                      <div className="Badge px-3 py-0.5 bg-[#004e79] rounded-full flex items-center">
                        <div className="Badge text-center text-white text-sm font-normal font-['Open Sans'] leading-none">
                          Colega
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-2 flex items-center gap-2">
                    <div className="Button px-4 py-3.5 opacity-80 rounded-lg flex items-center gap-2">
                      <div className="Label text-[#293242] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        Lorena Reinoso
                      </div>
                      <div className="Label text-[#293242] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                        10:30am
                      </div>
                      <div className="Badge px-3 py-0.5 bg-[#009bd7] rounded-full flex items-center">
                        <div className="Badge text-center text-white text-sm font-normal font-['Open Sans'] leading-none">
                          Paciente
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalSchedule;
