import React from "react";
import { Link } from "react-router-dom";

const cardData = [
  {
    route: "/ruta-nula-adherencia",
    bgColor: "bg-[#eb0118]",
    title: "Nula",
    subtitle: "Adherencia",
    count: 15,
    textColor: "text-white",
  },
  {
    route: "/ruta-baja-adherencia",
    bgColor: "bg-[#e8cd54]",
    title: "Baja",
    subtitle: "Adherencia",
    count: 15,
    textColor: "text-[#293242]",
  },
  {
    route: "/ruta-moderada-adherencia",
    bgColor: "bg-[#6f0079]",
    title: "Moderada",
    subtitle: "Adherencia",
    count: 15,
    textColor: "text-white",
  },
  {
    route: "/ruta-buena-adherencia",
    bgColor: "bg-[#3e7652]",
    title: "Buena",
    subtitle: "Adherencia",
    count: 15,
    textColor: "text-white",
  },
];

const ProfesionalCards = () => {
  return (
    <div className="h-[196px] p-4 bg-neutral-100 rounded-lg flex-col justify-start items-start gap-4 inline-flex">
      <div className="text-center text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
        Pacientes en tratamiento
      </div>
      <div className="self-stretch h-32 flex-col justify-start items-start gap-4 flex">
        <div className="self-stretch h-14 flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch h-14 flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch h-14 justify-start items-start gap-4 inline-flex">
              <Link
                to={cardData[0].route}
                className="grow shrink basis-0 self-stretch px-2 bg-[#eb0118] rounded-lg flex-col justify-center items-start gap-2 inline-flex"
              >
                <div className="self-stretch grow shrink basis-0 justify-end items-center gap-1 inline-flex">
                  <div className="h-[25px] justify-start items-start gap-1.5 flex">
                    <div className="h-[17.69px] relative" />
                    <div className="w-[75px]">
                      <span className="text-white text-sm font-normal font-['Open Sans'] leading-none">
                        Nula{" "}
                      </span>
                      <span className="text-white text-xs font-normal font-['Open Sans'] leading-[15px]">
                        Adherencia
                      </span>
                    </div>
                  </div>
                  <div className="w-[18.03px] text-right text-white text-xs font-bold font-['Open Sans'] leading-[13px] tracking-tight">
                    15
                  </div>
                </div>
              </Link>
              <Link
                to={cardData[1].route}
                className="grow shrink basis-0 self-stretch px-2 bg-[#e8cd54] rounded-lg flex-col justify-center items-start gap-2 inline-flex"
              >
                <div className="self-stretch grow shrink basis-0 justify-end items-center gap-1 inline-flex">
                  <div className="h-[25px] justify-start items-start gap-1.5 flex">
                    <div className="h-[17.69px] relative" />
                    <div className="w-[75px]">
                      <span className="text-[#293242] text-sm font-normal font-['Open Sans'] leading-none">
                        Baja{" "}
                      </span>
                      <span className="text-[#293242] text-xs font-normal font-['Open Sans'] leading-[15px]">
                        Adherencia
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-right text-[#293242] text-xs font-bold font-['Open Sans'] leading-[13px] tracking-tight">
                    15
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="self-stretch h-14 flex-col justify-start items-start gap-10 flex">
          <div className="self-stretch h-14 flex-col justify-center items-center gap-4 flex">
            <div className="self-stretch h-14 justify-start items-start gap-4 inline-flex">
              <Link
                to={cardData[2].route}
                className="grow shrink basis-0 self-stretch px-2 bg-[#6f0079] rounded-lg flex-col justify-center items-start gap-2 inline-flex"
              >
                <div className="self-stretch grow shrink basis-0 justify-end items-center gap-1 inline-flex">
                  <div className="h-[25px] justify-start items-start gap-1.5 flex">
                    <div className="h-[17.69px] relative" />
                    <div className="w-[75px]">
                      <span className="text-white text-sm font-normal font-['Open Sans'] leading-none">
                        Moderada{" "}
                      </span>
                      <span className="text-white text-xs font-normal font-['Open Sans'] leading-[15px]">
                        Adherencia
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-right text-white text-xs font-bold font-['Open Sans'] leading-[13px] tracking-tight">
                    15
                  </div>
                </div>
              </Link>
              <Link
                to={cardData[3].route}
                className="grow shrink basis-0 self-stretch px-2 bg-[#3e7652] rounded-lg flex-col justify-center items-start gap-2 inline-flex"
              >
                <div className="self-stretch grow shrink basis-0 justify-end items-center gap-1 inline-flex">
                  <div className="h-[25px] justify-start items-start gap-1.5 flex">
                    <div className="h-[17.69px] relative" />
                    <div className="w-[75px]">
                      <span className="text-white text-sm font-normal font-['Open Sans'] leading-none">
                        Buena{" "}
                      </span>
                      <span className="text-white text-xs font-normal font-['Open Sans'] leading-[15px]">
                        Adherencia
                      </span>
                    </div>
                  </div>
                  <div className="grow shrink basis-0 text-right text-white text-xs font-bold font-['Open Sans'] leading-[13px] tracking-tight">
                    15
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfesionalCards;
