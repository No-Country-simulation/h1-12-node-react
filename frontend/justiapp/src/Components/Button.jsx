import React from "react";

const Button = ({
  icon: Icon,
  label,
  onClick,
  bgColor,
  labelColor,
  borderColor,
}) => {
  return (
    <button
      onClick={onClick}
      className={`w-full p-4  rounded-lg flex justify-center items-center gap-2 ${
        bgColor ? bgColor : ""
      } ${borderColor ? `border-2 ${borderColor}` : ""}`}
    >
      {Icon && (
        <div className="w-6 h-6 flex justify-center items-center">
          <Icon className="w-full h-full" />
        </div>
      )}
      <div
        className={`text-base font-semibold font-['Open Sans'] leading-tight tracking-tight ${
          labelColor ? labelColor : ""
        }`}
      >
        {label}
      </div>
    </button>
  );
};

export default Button;
