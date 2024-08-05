import React from "react";
import AgendaTurnos from "./AgendaTurnos";

const ProfessionalSchedule = () => {
  return (
    <div className="bg-base-200 collapse w-2/3 ">
      <input type="checkbox" id="schedule-toggle" className="peer hidden" />
      <label
        htmlFor="schedule-toggle"
        className="collapse-title bg-[#F5F5F5] text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content cursor-pointer px-4 py-2"
      >
        <span className="text-[#004E79] text-[24px] font-normal leading-[26px] font-['Lato']">
          Agenda
        </span>
      </label>
      <div className="collapse-content bg-base-100 text-primary-content peer-checked:bg-base-200 peer-checked:text-base-content">
        <AgendaTurnos />
      </div>
    </div>
  );
};

export default ProfessionalSchedule;
