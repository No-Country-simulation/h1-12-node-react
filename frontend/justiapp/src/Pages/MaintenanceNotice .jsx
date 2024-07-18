import React from "react";

const MaintenanceNotice = () => {
  return (
    <div className="bg-gray-100">
      <div className="min-h-screen flex flex-col justify-center items-center">
        <img
          src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
          alt="Maintenance Logo"
          className="mb-8 h-40"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">
          Site is under maintenance
        </h1>
        <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
          We're working hard to improve the user experience. Stay tuned!
        </p>
      </div>
    </div>
  );
};

export default MaintenanceNotice;
