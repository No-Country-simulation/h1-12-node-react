import React from "react";

const Button = ({ icon: Icon, label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="h-8 px-3 py-1.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg flex justify-center items-center gap-2"
    >
      {Icon && (
        <div className="w-5 h-5 flex justify-center items-center">
          <Icon className="w-full h-full" />
        </div>
      )}
      <div className="text-white text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
        {label}
      </div>
    </button>
  );
};

export default Button;
