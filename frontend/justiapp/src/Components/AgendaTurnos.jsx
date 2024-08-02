import React, { useState } from "react";
//import 'tailwindcss/tailwind.css';
//import 'daisyui/dist/full.css';

const AgendaTurnos = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [eventName, setEventName] = useState("");
  const [events, setEvents] = useState({});
  const [notification, setNotification] = useState(false);

  const months = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dic",
  ];
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const daysInMonth = (month, year) => new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(currentYear, currentMonth, 1).getDay();

  const handleDayClick = (day) => {
    setSelectedDay(day);
    setEventName(events[`${currentYear}-${currentMonth}-${day}`] || "");
    document.getElementById("eventModal").showModal();
  };

  const handleSaveEvent = () => {
    setEvents({
      ...events,
      [`${currentYear}-${currentMonth}-${selectedDay}`]: eventName,
    });
    document.getElementById("eventModal").close();
    setNotification(true);
    setTimeout(() => setNotification(false), 3000);
  };

  const handleDeleteEvent = () => {
    const newEvents = { ...events };
    delete newEvents[`${currentYear}-${currentMonth}-${selectedDay}`];
    setEvents(newEvents);
    document.getElementById("eventModal").close();
  };

  const handleChangeMonth = (direction) => {
    if (direction === "prev") {
      setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
      setCurrentYear(currentMonth === 0 ? currentYear - 1 : currentYear);
    } else if (direction === "next") {
      setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
      setCurrentYear(currentMonth === 11 ? currentYear + 1 : currentYear);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4">
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-blue-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-6 4h6M5 11h14M5 15h14M5 19h14"
              />
            </svg>
            <h2 className="text-xl font-semibold">AGENDA</h2>
          </div>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center text-gray-500">
            <button
              className="text-blue-500"
              onClick={() => handleChangeMonth("prev")}
            >
              ❮
            </button>
            <span className="text-sm">
              {months[currentMonth]} {currentYear}
            </span>
            <button
              className="text-blue-500"
              onClick={() => handleChangeMonth("next")}
            >
              ❯
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1 mt-2 text-center text-gray-700 text-sm">
            {["L", "M", "X", "J", "V", "S", "D"].map((day, index) => (
              <div key={index}>{day}</div>
            ))}
            {[...Array(firstDay === 0 ? 6 : firstDay - 1)].map((_, index) => (
              <div key={index} className="calendar__date text-gray-400"></div>
            ))}
            {Array.from(
              { length: daysInMonth(currentMonth, currentYear) },
              (_, i) => i + 1
            ).map((date) => (
              <div
                key={date}
                className={`p-2 cursor-pointer relative ${
                  events[`${currentYear}-${currentMonth}-${date}`]
                    ? "bg-gradient-to-b from-blue-500 to-fuchsia-500 text-white rounded-full shadow-lg"
                    : ""
                }`}
                onClick={() => handleDayClick(date)}
              >
                {date}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {Object.keys(events).map((key) => {
            const date = new Date(key);
            const dayOfWeek = date
              .toLocaleString("default", { weekday: "short" })
              .charAt(0); // Get the first letter
            const dayOfMonth = date.getDate();
            const time = date.toLocaleTimeString("default", {
              hour: "2-digit",
              minute: "2-digit",
            });

            return (
              <div
                key={key}
                className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow"
              >
                <div className="flex-shrink-0 text-blue-500 font-bold">{`${dayOfWeek} ${dayOfMonth}`}</div>
                <div className="flex-grow text-center text-gray-700">
                  {events[key]}
                </div>
                <div className="text-gray-700 font-semibold">{time}</div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-between mt-4">
          <button className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-1.5  text-white w-1/2 mr-2">
            ❮ Volver
          </button>
          <button className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-1.5  text-white w-1/2">
            Turno ❯
          </button>
        </div>
      </div>

      <dialog id="eventModal" className="modal modal-bottom sm:modal-middle">
        <form method="dialog" className="modal-box">
          <button
            onClick={() => document.getElementById("eventModal").close()}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </button>
          <h3 className="text-lg font-bold mb-4">Evento o Tarea</h3>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            className="input input-bordered w-full mb-4"
            placeholder="Nombre del Evento/Tarea"
          />
          <div className="text-sm text-gray-600 mb-4">
            {selectedDay &&
              `Fecha seleccionada: ${selectedDay} ${months[currentMonth]} ${currentYear}`}
          </div>
          <div className="modal-action flex justify-end space-x-2">
            {events[`${currentYear}-${currentMonth}-${selectedDay}`] && (
              <>
                <button onClick={handleSaveEvent} className="btn">
                  Modificar
                </button>
                <button onClick={handleDeleteEvent} className="btn btn-error">
                  Borrar Evento
                </button>
              </>
            )}
            {!events[`${currentYear}-${currentMonth}-${selectedDay}`] && (
              <button onClick={handleSaveEvent} className="btn">
                Guardar
              </button>
            )}
          </div>
        </form>
      </dialog>

      {notification && (
        <div className="toast toast-top toast-end">
          <div className="alert alert-success">
            <div>
              <span>Evento creado con éxito!</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgendaTurnos;
