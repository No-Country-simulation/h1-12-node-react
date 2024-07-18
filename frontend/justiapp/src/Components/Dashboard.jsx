import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Dashboard = () => {
  const [profilePhoto, setProfilePhoto] = useState('https://via.placeholder.com/150');

  const handlePhotoUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <button className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <img src="logo.png" alt="Logo" className="h-10" />
      </div>
      <div className="bg-white shadow-md rounded-lg p-4">
        <div className="flex items-center justify-between p-4 border border-blue-500 border-b-purple-500 border-r-purple-500 border-t-blue-500 rounded-lg mb-4 max-w-lg mx-auto">
          <div className="text-left ml-4 flex-1">
            <h2 className="text-lg font-bold text-blue-500">¡Hola Ana!</h2>
            <p className="text-sm text-gray-900">¡Qué bueno verte nuevamente!</p>
            <p className="text-sm text-gray-900">Tienes 2 tareas pendientes</p>
          </div>
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handlePhotoUpload}
          />
          <label htmlFor="photo-upload" className="cursor-pointer">
            <img
              className="w-16 h-16 md:w-20 md:h-20 rounded-full border-2 border-indigo-500"
              src={profilePhoto}
              alt="Profile"
            />
          </label>
        </div>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-32">
            <CircularProgressbar
              value={25}
              text="25%"
              styles={buildStyles({
                textSize: '16px',
                pathColor: '#4F46E5',
                textColor: '#4F46E5',
                trailColor: '#E5E7EB',
              })}
            />
          </div>
        </div>
        <div className="flex justify-between mb-4">
          <div className="w-24 h-24">
            <CircularProgressbar
              value={25}
              text="25%"
              styles={buildStyles({
                textSize: '16px',
                pathColor: '#4F46E5',
                textColor: '#4F46E5',
                trailColor: '#E5E7EB',
              })}
            />
          </div>
          <div className="w-24 h-24">
            <CircularProgressbar
              value={25}
              text="25%"
              styles={buildStyles({
                textSize: '16px',
                pathColor: '#4F46E5',
                textColor: '#4F46E5',
                trailColor: '#E5E7EB',
              })}
            />
          </div>
        </div>
        <div className="flex flex-col space-y-4 mb-4">
          <div tabIndex="0" className="collapse collapse-arrow bg-gray-100 text-blue-500 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium flex justify-between items-center">
              Mi tratamiento
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content">
              <p>Contenido de Mi tratamiento</p>
            </div>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow bg-gray-100 text-blue-500 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium flex justify-between items-center">
              Calendario
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content">
              <p>Contenido de Calendario</p>
            </div>
          </div>
          <div tabIndex="0" className="collapse collapse-arrow bg-gray-100 text-blue-500 rounded-lg">
            <input type="checkbox" className="peer" />
            <div className="collapse-title text-lg font-medium flex justify-between items-center">
              Médico
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="collapse-content">
              <p>Contenido de Médico</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="flex flex-col items-center justify-center h-20 border-2 border-blue-500 border-b-purple-500 border-r-purple-500 rounded-lg text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span>Historia Clínica</span>
          </button>
          <button className="flex flex-col items-center justify-center h-20 border-2 border-blue-500 border-b-purple-500 border-r-purple-500 rounded-lg text-blue-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
            <span>Carnet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
