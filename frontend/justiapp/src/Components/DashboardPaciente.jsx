import React, { useState } from 'react';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { es } from 'date-fns/locale';
import 'tailwindcss/tailwind.css';
import 'daisyui/dist/full.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { BeakerIcon, CalendarIcon,ChevronRightIcon,ChevronLeftIcon} from '@heroicons/react/24/outline'





const DashboardPaciente = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
  const renderDays = () => {
    const days = [];
    const dateFormat = "d";
    const startDate = startOfWeek(new Date(), { locale: es });

    for (let i = 0; i < 7; i++) {
      const day = addDays(startDate, i);
      days.push(
        <button
          className={`text-center font-medium py-2 px-4 rounded-full ${
            isSameDay(day, selectedDate)
              ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
              : 'bg-gray-200 text-gray-900'
          }`}
          key={i}
          onClick={() => setSelectedDate(day)}
        >
          <div>{format(day, 'EEEEEE', { locale: es })}</div>
          <div>{format(day, dateFormat, { locale: es })}</div>
        </button>
      );
    }

    return <div className="grid grid-cols-7 gap-2 mb-4">{days}</div>;
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
            <h2 className="text-lg font-bold text-gray-700">¡Hola Ana!</h2>
            <p className="text-sm text-gray-900">¡Qué bueno verte nuevamente!</p>
            <p className="text-sm text-blue-400">Tienes 2 tareas pendientes</p>
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
              text2="tratamiento"
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
              <div className="flex-col  space-y-4 mb-2 p-4">
                <h3 className="text-lg font-bold text-nowrap text-gray-900 ">Tratamiento inmunodepresor</h3>
                <p className="text-sm text-center text-gray-600 mb-2">Diagnóstico:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className='text-gray-700'>Ciclosporina 10mg.</span>
                    <span className="badge badge-success">Activo</span>
                  </div>
                  <hr className='p-2'></hr>
                  <div className="flex justify-between items-center">
                    <span className='text-gray-700'>Ciclosporina 10mg.</span>
                    <span className="badge badge-info">Finalizado</span>
                  </div>
                  <hr className='p-2'></hr>
                  <div className="flex justify-between items-center">
                    <span className='text-gray-700'> Ciclosporina 10mg.</span>
                    <span className="badge badge-error">Suspendido</span>
                  </div>
                </div>
                <div className='flex justify-center '>
                <button className="flex items-center row border-2 border-blue-500 border-b-purple-500 border-r-purple-500 border-t-blue-500 rounded-lg p-1.5 ">
                    <BeakerIcon className="h-5 w-5" />
                    <span>Medicamentos</span>
                  </button>
                </div>
              </div>
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
              <div className="mb-2 p-4">
                <div className="flex justify-between ">
                <ChevronLeftIcon className="w-6 h-6 text-blue-700" />
                  <span className='flex justify-center pb-3 text-black bold'>Julio 2024</span>
                  <ChevronRightIcon className="flex jus w-6 h-6 text-blue-700" />
                </div>
                {renderDays()}
              
                <div className="space-y-2 mt-4">
                  <div className="flex justify-between items-center">
                    <span>Ciclosporina 10mg.</span>
                    <span className="badge badge-primary">Medicación</span>
                  </div>
                  <hr className='p-2' />
                  <div className="flex justify-between items-center">
                    <span>Cita con el Urólogo</span>
                    <span className="badge badge-info">Profesional</span>
                  </div>
                  <hr className='p-2' />
                  <div className="flex justify-between items-center">
                    <span>Ciclosporina 10mg.</span>
                    <span className="badge badge-primary">Medicación</span>
                  </div>
                  <hr />
                  <div className="flex justify-between items-center">
                    <span>Cita con el Urólogo</span>
                    <span className="badge badge-info">Profesional</span>
                  </div>
                  <div className="flex justify-center space-x-10 ">
                  <button className="flex row-auto items-center border-2 border-blue-500 border-b-purple-500 border-r-purple-500 border-t-blue-500 rounded-xl text-blue" ><CalendarIcon className="w-6 h-6 text-white-500" />
                    Agenda</button>
                  <button className="btn btn-square btn-ghost">
                  </button>
                  <button className="btn btn-square btn-ghost">
                  </button>
                    
                    <button className=" flex items-center row bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg p-1.5  text-white">
                    <CalendarIcon className="w-6 h-6 text-white-500" /> Turno</button>
                  </div>
                </div>
              </div>
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
              <div className="p-4">
                <div className="flex flex-col space-y-4">
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-8 3a7 7 0 01-7-7h1a6 6 0 0011.9 2A3.1 3.1 0 0012 11z" clipRule="evenodd" />
                      </svg>
                      <span>Dr. Gonzales</span>
                    </div>
                    <span className="badge badge-primary">Urólogo</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-8 3a7 7 0 01-7-7h1a6 6 0 0011.9 2A3.1 3.1 0 0012 11z" clipRule="evenodd" />
                      </svg>
                      <span>Dr. Gonzales</span>
                    </div>
                    <span className="badge badge-primary">Urólogo</span>
                  </div>
                  <div className="flex justify-between items-center p-2 bg-white rounded-lg shadow">
                    <div className="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M18 8a6 6 0 11-12 0 6 6 0 0112 0zm-8 3a7 7 0 01-7-7h1a6 6 0 0011.9 2A3.1 3.1 0 0012 11z" clipRule="evenodd" />
                      </svg>
                      <span>Dr. Gonzales</span>
                    </div>
                    <span className="badge badge-primary">Urólogo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-4 ">
                    <button className="flex items-center row bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-1.5  text-white">
                    <CalendarIcon className="w-6 h-6 text-blue-500" />Historia Clinica</button>
                    
                    <button className=" flex items-center row bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-1.5  text-white">
                    <CalendarIcon className="w-6 h-6 text-white-500" />Carnet</button>
                    <button className=" flex items-center row bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-1.5  text-white">
                    <CalendarIcon className="w-6 h-6 text-white-500" />Obra Social</button>
                  </div>
      </div>
    </div>
  );
};

export default DashboardPaciente;
