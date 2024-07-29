import React from "react";

const ClinicalHistory = () => {
  return (
    <div className="h-screen py-2 flex flex-col justify-start items-center gap-8 bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <div className="flex justify-start items-center mb-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 relative">
              {/* Icon for "Chevron Left" */}
            </div>
            <div className="flex items-center gap-2">
              <div className="text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
                CLINICAL HISTORY
              </div>
            </div>
          </div>
        </div>
        <div className="h-36 p-4 bg-neutral-100 rounded-lg flex flex-col justify-start gap-4">
          <div className="h-10 flex items-center gap-4">
            <div className="flex flex-col justify-center gap-2">
              <div className="text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
                Lucía Reinoso
              </div>
              <div className="text-[#293242] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                35296874
              </div>
            </div>
          </div>
          <div className="h-14 flex flex-col justify-center gap-4">
            <div className="text-[#293242] text-xs font-normal font-['Open Sans'] leading-none">
              Gender: Female
            </div>
            <div className="flex gap-2">
              <div className="text-[#293242] text-xs font-normal font-['Open Sans'] leading-none">
                Health Insurance: Sancor
              </div>
              <div className="text-[#293242] text-xs font-normal font-['Open Sans'] leading-none">
                Number: 2665841/00
              </div>
            </div>
            <div className="text-[#293242] text-xs font-normal font-['Open Sans'] leading-none">
              Date of Birth: 14/06/1991
            </div>
          </div>
        </div>
        <div className="h-80 pt-2 pb-4 bg-neutral-100 rounded-lg flex flex-col justify-start gap-4">
          <div className="h-36 flex flex-col justify-start gap-2">
            <div className="h-36 flex flex-col justify-start gap-4">
              <div className="text-[#004e79] text-xl font-bold font-['Lato'] leading-normal">
                Treatment
              </div>
              <div className="h-2 flex flex-col gap-4">
                <div className="text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                  Immunosuppressive Treatment
                </div>
              </div>
              <div className="text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                Diagnosis:
              </div>
              <div className="h-10 flex flex-col gap-2">
                <div className="text-[#004e79] text-xs font-normal font-['Open Sans'] leading-none">
                  Cyclosporine: 100 mg every 12 hours.
                  <br />
                  Prednisone: 5 mg daily.
                  <br />
                  Mycophenolate mofetil: 500 mg every 12 hours.
                </div>
              </div>
            </div>
          </div>
          <div className="h-10 flex gap-4">
            <div className="p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-1.5">
              <div className="text-[#009bd7] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                Status
              </div>
              <div className="text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                Inactive
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-1.5">
              <div className="text-[#009bd7] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                Start
              </div>
              <div className="text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                00/00/00
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg flex flex-col justify-center items-center gap-1.5">
              <div className="text-[#009bd7] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                End
              </div>
              <div className="text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                00/00/00
              </div>
            </div>
          </div>
          <div className="h-28 flex flex-col justify-center items-center gap-4">
            <div className="w-80 p-2 bg-white rounded-lg flex justify-center items-start gap-24">
              <div className="text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                Doctor's Signature
              </div>
            </div>
            <div className="w-72 text-[#004e79] text-xs font-normal font-['Open Sans'] leading-none">
              Dr. Bortelli Clínica de Cuyo.
            </div>
            <div className="w-80 p-2 bg-white rounded-lg flex justify-center items-start gap-24">
              <div className="text-[#004e79] text-xs font-bold font-['Open Sans'] leading-3 tracking-tight">
                Files
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClinicalHistory;
