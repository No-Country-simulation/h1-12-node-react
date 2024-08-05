import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Card = ({ bgColor, title, description, link, cardIcon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div
      className={`w-5/12 flex flex-col gap-3 py-3 px-4 ${bgColor} rounded-xl`}
    >
      <div className="flex flex-col">
        <div className="flex flex-col">
          <h1 className="text-white text-base font-bold font-lato leading-tight">
            {title}
          </h1>
        </div>
      </div>
      <div className="text-white text-sm font-normal font-sans leading-none">
        {description}
      </div>
      <div className="container flex sm:hidden">
        <button
          onClick={handleClick}
          className="btn btn-circle btn-xs border-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="#004E79"
          >
            <path
              d="M12 9.86902V15.869M15 12.869H9M21 12.869C21 17.8396 16.9706 21.869 12 21.869C7.02944 21.869 3 17.8396 3 12.869C3 7.89846 7.02944 3.86902 12 3.86902C16.9706 3.86902 21 7.89846 21 12.869Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="container flex max-sm:hidden">
        <Link to={link}>
          <button className="btn btn-outline border-white border-2  btn-warning px-2 rounded-xl  justify-center items-center inline-flex">
            <div className="h-8 flex-col justify-center items-center inline-flex">
              <div className="h-6 justify-start items-center inline-flex">
                <div className="justify-start items-start gap-1 flex">
                  <span className=" text-center text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                    Crear
                  </span>
                </div>
              </div>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
