import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

const PatientSchedule = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventPerson, setEventPerson] = useState("");
  const [eventType, setEventType] = useState("");
  const [events, setEvents] = useState({});
  const [notification, setNotification] = useState(false);

  const users = [
    { id: 1, name: "Lorena Reinoso" },
    { id: 2, name: "Dr. Luis Cano" },
    { id: 3, name: "Ana Pérez" },
    { id: 4, name: "Mauro Gómez" },
    { id: 5, name: "Julio Rodríguez" },
  ];

  const types = ["Reunión", "Consulta", "Médico", "Entrega de turno"];

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
    const eventKey = `${currentYear}-${currentMonth}-${day}`;
    const event = events[eventKey] || {};
    setEventName(event.name || "");
    setEventDescription(event.description || "");
    setEventTime(event.time || "");
    setEventPerson(event.person || "");
    setEventType(event.type || "");
    document.getElementById("eventModal").showModal();
  };

  const handleNewTurnClick = () => {
    setSelectedDay(null);
    setEventName("");
    setEventDescription("");
    setEventTime("");
    setEventPerson("");
    setEventType("");
    document.getElementById("eventModal").showModal();
  };

  const handleSaveEvent = () => {
    setEvents({
      ...events,
      [`${currentYear}-${currentMonth}-${selectedDay}`]: {
        name: eventName,
        description: eventDescription,
        time: eventTime,
        person: eventPerson,
        type: eventType,
      },
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
    <div className="w-full flex flex-col items-center">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden my-4 p-4 w-full">
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

          <div className="flex justify-between mb-4">
            <button
              onClick={handleNewTurnClick}
              className="w-[151px] h-12 inline-flex items-center justify-center px-4 py-3.5 bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-lg border border-[#004e79] text-gray-50 text-base font-semibold font-['Open Sans'] leading-tight tracking-tight"
            >
              <img
                className="w-4 h-4 mr-2"
                src="https://via.placeholder.com/16x16"
                alt="Icono"
              />
              Nuevo turno
            </button>
          </div>

          <div className="space-y-4">
            {selectedDay && (
              <div className="bg-neutral-100 p-4 rounded-lg shadow">
                <div className="text-[#004e79] text-base font-semibold font-['Open Sans'] leading-tight tracking-tight">
                  {`${new Date(
                    currentYear,
                    currentMonth,
                    selectedDay
                  ).toLocaleDateString("es-ES", {
                    weekday: "short",
                    day: "2-digit",
                    month: "short",
                  })}`}
                </div>
                <div className="mt-4">
                  <table className="w-full table-auto border-collapse">
                    <thead>
                      <tr>
                        <th className="border-b p-2">Nombre</th>
                        <th className="border-b p-2">Descripción</th>
                        <th className="border-b p-2">Hora</th>
                        <th className="border-b p-2">Tipo</th>
                        <th className="border-b p-2">Persona</th>
                        <th className="border-b p-2">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(events).map(([key, event]) => {
                        const date = new Date(key);
                        const dayOfMonth = date.getDate();
                        const type = event.type || "";

                        return (
                          <tr key={key} className="text-sm">
                            <td className="border-b p-2">{event.name}</td>
                            <td className="border-b p-2">
                              {event.description}
                            </td>
                            <td className="border-b p-2">{event.time}</td>
                            <td className="border-b p-2">{type}</td>
                            <td className="border-b p-2">{event.person}</td>
                            <td className="border-b p-2">
                              <button
                                onClick={() => {
                                  setSelectedDay(dayOfMonth);
                                  setEventName(event.name);
                                  setEventDescription(event.description);
                                  setEventTime(event.time);
                                  setEventPerson(event.person);
                                  setEventType(event.type);
                                  document
                                    .getElementById("eventModal")
                                    .showModal();
                                }}
                                className="bg-blue-500 text-white px-2 py-1 rounded"
                              >
                                Editar
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        <dialog id="eventModal" className="modal">
          <div className="modal-box">
            <h2 className="text-xl font-bold mb-4">Detalles del Evento</h2>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <input
                type="text"
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Descripción
              </label>
              <input
                type="text"
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Hora
              </label>
              <input
                type="text"
                value={eventTime}
                onChange={(e) => setEventTime(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Persona
              </label>
              <select
                value={eventPerson}
                onChange={(e) => setEventPerson(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
              >
                <option value="">Seleccionar persona</option>
                {users.map((user) => (
                  <option key={user.id} value={user.name}>
                    {user.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Tipo
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="mt-1 p-2 w-full border rounded"
              >
                <option value="">Seleccionar tipo</option>
                {types.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end">
              <button
                onClick={handleSaveEvent}
                className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-2 text-white mr-2"
              >
                Guardar
              </button>
              <button
                onClick={handleDeleteEvent}
                className="bg-gradient-to-r from-red-700 to-red-500 rounded-lg p-2 text-white mr-2"
              >
                Eliminar
              </button>
              <button
                onClick={() => document.getElementById("eventModal").close()}
                className="bg-gray-300 rounded-lg p-2 text-gray-700"
              >
                Cancelar
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default PatientSchedule;
