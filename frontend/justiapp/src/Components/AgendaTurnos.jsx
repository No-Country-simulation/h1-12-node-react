import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import "daisyui/dist/full.css";

const AgendaTurnos = () => {
  const [selectedDay, setSelectedDay] = useState(null);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [eventPerson, setEventPerson] = useState(""); // New state
  const [eventType, setEventType] = useState(""); // New state
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
    setEventPerson(event.person || ""); // Set new state
    setEventType(event.type || ""); // Set new state
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
                          <td className="border-b p-2">{event.description}</td>
                          <td className="border-b p-2">{event.time}</td>
                          <td className="border-b p-2">{type}</td>
                          <td className="border-b p-2">{event.person}</td>
                          <td className="border-b p-2 text-center">
                            <button
                              onClick={() => {
                                setEventName(event.name);
                                setEventDescription(event.description);
                                setEventTime(event.time);
                                setEventPerson(event.person);
                                setEventType(event.type);
                                document
                                  .getElementById("eventModal")
                                  .showModal();
                              }}
                              className="text-blue-500"
                            >
                              ✎
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

        <div className="flex justify-between mt-4">
          <button className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-1.5 text-white w-1/2 mr-2">
            ❮ Volver
          </button>
          <button className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-lg p-1.5 text-white w-1/2">
            ✎ Agregar evento
          </button>
        </div>
      </div>

      <dialog id="eventModal" className="modal">
        <form method="dialog" className="modal-box">
          <h2 className="text-lg font-bold mb-4">Detalles del Evento</h2>
          <input
            type="text"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            placeholder="Nombre"
            className="input input-bordered w-full mb-2"
          />
          <input
            type="text"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            placeholder="Descripción"
            className="input input-bordered w-full mb-2"
          />
          <input
            type="time"
            value={eventTime}
            onChange={(e) => setEventTime(e.target.value)}
            className="input input-bordered w-full mb-2"
          />
          <div className="mb-4">
            <label htmlFor="eventPerson" className="block mb-1">
              Persona
            </label>
            <input
              type="text"
              id="eventPerson"
              value={eventPerson}
              onChange={(e) => setEventPerson(e.target.value)}
              placeholder="Buscar persona"
              className="input input-bordered w-full mb-2"
            />
            <ul className="list-disc pl-5">
              {users
                .filter((user) =>
                  user.name.toLowerCase().includes(eventPerson.toLowerCase())
                )
                .map((user) => (
                  <li key={user.id} onClick={() => setEventPerson(user.name)}>
                    {user.name}
                  </li>
                ))}
            </ul>
          </div>
          <div className="mb-4">
            <label htmlFor="eventType" className="block mb-1">
              Tipo
            </label>
            <select
              id="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="select select-bordered w-full mb-2"
            >
              <option value="">Selecciona un tipo</option>
              {types.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={handleSaveEvent}
              className="btn btn-primary"
            >
              Guardar
            </button>
            <button
              type="button"
              onClick={handleDeleteEvent}
              className="btn btn-secondary"
            >
              Eliminar
            </button>
          </div>
        </form>
      </dialog>

      {notification && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-lg shadow-lg">
          Cambios guardados!
        </div>
      )}
    </div>
  );
};

export default AgendaTurnos;
