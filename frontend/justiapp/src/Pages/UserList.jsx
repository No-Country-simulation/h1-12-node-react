import React, { useState } from "react";

// Sample data with specific dates
const users = [
  {
    name: "Daniel Botarelli",
    role: "Prof. de la Salud",
    date: new Date().toISOString(),
  },
  {
    name: "Ana García",
    role: "Paciente",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  }, // Created yesterday
  {
    name: "Luis Martínez",
    role: "Prestador",
    date: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
  }, // Created yesterday
  {
    name: "María Pérez",
    role: "Inst. de Salud",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  }, // Created a week ago
  {
    name: "Pedro Gómez",
    role: "Prof. de la Salud",
    date: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
  }, // Created a week ago
  {
    name: "Laura Torres",
    role: "Paciente",
    date: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000).toISOString(),
  }, // Created two weeks ago
  {
    name: "Carlos Díaz",
    role: "Prestador",
    date: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
  }, // Created a month ago
  {
    name: "Isabel Fernández",
    role: "Inst. de Salud",
    date: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000).toISOString(),
  }, // Created two months ago
  {
    name: "Jorge Sánchez",
    role: "Paciente",
    date: new Date(Date.now() - 90 * 24 * 60 * 60 * 1000).toISOString(),
  }, // Created three months ago
  {
    name: "Marta Jiménez",
    role: "Prof. de la Salud",
    date: new Date(Date.now() - 120 * 24 * 60 * 60 * 1000).toISOString(),
  }, // Created four months ago
];

const UserList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const filteredUsers = users.filter(
    (user) =>
      (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        searchTerm === "") &&
      (selectedRole === "all" || user.role === selectedRole)
  );

  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="w-11/12 min-h-screen flex-col justify-start items-start gap-8 inline-flex p-11 bg-slate-200 rounded-lg shadow-md">
      <div className="w-full  flex flex-wrap md:flex-nowrap justify-start items-center gap-4">
        <div className="w-full md:w-1/2 flex-col justify-start items-start inline-flex">
          <div className="self-stretch flex justify-start items-start">
            <div className="p-5 h-full bg-[#004e79] rounded-tl-[10px] rounded-bl-[10px] flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M9.33518 3.93286C6.49989 3.93286 4.20144 6.23131 4.20144 9.06659C4.20144 11.9019 6.49989 14.2003 9.33518 14.2003C10.753 14.2003 12.0355 13.6265 12.9653 12.6967C13.8951 11.7669 14.4689 10.4844 14.4689 9.06659C14.4689 6.23131 12.1705 3.93286 9.33518 3.93286ZM2.80133 9.06659C2.80133 5.45805 5.72663 2.53275 9.33518 2.53275C12.9437 2.53275 15.869 5.45805 15.869 9.06659C15.869 10.6184 15.3274 12.0447 14.4239 13.1652L17.5308 16.2722C17.8042 16.5456 17.8042 16.9888 17.5308 17.2622C17.2574 17.5356 16.8142 17.5356 16.5408 17.2622L13.4338 14.1553C12.3133 15.0588 10.887 15.6004 9.33518 15.6004C5.72663 15.6004 2.80133 12.6751 2.80133 9.06659Z"
                  fill="white"
                  stroke="white"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start">
              <div className="self-stretch px-[14.93px] py-[13.07px] bg-white rounded-tr-lg rounded-br-lg border border-[#9b9fa6] flex items-center">
                <input
                  type="text"
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full text-gray-700 text-[14.93px] font-semibold leading-tight"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 container flex flex-wrap justify-between gap-2 ">
          <div className="p-2 bg-white rounded-lg border border-[#9b9fa6] flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="all"
              name="role"
              value="all"
              checked={selectedRole === "all"}
              onChange={handleRoleChange}
              className="w-4"
            />
            <label
              htmlFor="all"
              className="text-[#004e79] text-base font-semibold"
            >
              Todos
            </label>
          </div>
          <div className="p-2 bg-white rounded-lg border border-[#9b9fa6] flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="profesional"
              name="role"
              value="Prof. de la Salud"
              checked={selectedRole === "Prof. de la Salud"}
              onChange={handleRoleChange}
              className="w-4 p-2"
            />
            <label
              htmlFor="profesional"
              className="text-[#004e79] text-base font-semibold"
            >
              Prof. de la Salud
            </label>
          </div>
          <div className="p-2 bg-white rounded-lg border border-[#9b9fa6] flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="paciente"
              name="role"
              value="Paciente"
              checked={selectedRole === "Paciente"}
              onChange={handleRoleChange}
              className="w-4 p-2"
            />
            <label
              htmlFor="paciente"
              className="text-[#004e79] text-base font-semibold"
            >
              Paciente
            </label>
          </div>
          <div className="p-2 bg-white rounded-lg border border-[#9b9fa6] flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="prestador"
              name="role"
              value="Prestador"
              checked={selectedRole === "Prestador"}
              onChange={handleRoleChange}
              className="w-4 p-2"
            />
            <label
              htmlFor="prestador"
              className="text-[#004e79] text-base font-semibold"
            >
              Prestador
            </label>
          </div>
          <div className="p-2 bg-white rounded-lg border border-[#9b9fa6] flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              id="institucion"
              name="role"
              value="Inst. de Salud"
              checked={selectedRole === "Inst. de Salud"}
              onChange={handleRoleChange}
              className="w-4 p-2"
            />
            <label
              htmlFor="institucion"
              className="text-[#004e79] text-base font-semibold"
            >
              Inst. de Salud
            </label>
          </div>
        </div>
      </div>

      <div className=" self-stretch min-h-screen flex flex-col gap-8 justify-start items-start  ">
        {filteredUsers.length === 0 ? (
          <div className="flex justify-center items-center h-full text-gray-500 text-lg font-semibold">
            No se encontraron resultados.
          </div>
        ) : (
          <>
            <div className="self-stretch flex-col justify-start items-start ">
              <div className="self-stretch h-6 flex justify-center items-end gap-6">
                <div className="w-full text-[#004e79] text-xl font-bold leading-normal">
                  Hace una semana
                </div>
              </div>
              <div className=" w-full  flex-col gap-6">
                <table className=" w-full rounded-xl  bg-white ">
                  <tbody>
                    {filteredUsers
                      .filter(
                        (user) =>
                          new Date(user.date) >=
                            new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) &&
                          new Date(user.date) < new Date()
                      )
                      .map((user, index) => (
                        <tr
                          key={index}
                          className=" w-full flex justify-between rounded-xl border-b border-[#e0e0e0]"
                        >
                          <td className=" w-full p-4 rounded-xl  flex items-center gap-2">
                            <img
                              src="/images/icons/profileIcon.svg"
                              alt="Icono izquierdo"
                              className="w-6 h-6"
                            />
                            {user.name}
                          </td>
                          <td className=" w-11/12 px-4 py-2">
                            <button className=" btn px-2 py-1 bg-blue-500 text-white rounded-lg">
                              {user.role}
                            </button>
                          </td>
                          <td className=" w-11/12 px-4 py-2">
                            {formatDate(user.date)}
                          </td>
                          <td className="px-4 py-2 flex justify-start">
                            <img
                              src="/images/icons/colorfulPencil.svg"
                              alt="Icono derecho"
                              className="w-6 h-6 p-6"
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="self-stretch flex-col justify-start items-start gap-4">
              <div className="self-stretch h-6 flex justify-center items-end gap-6">
                <div className="w-full text-[#004e79] text-xl font-bold leading-normal">
                  Último mes
                </div>
              </div>
              <div className="self-stretch h-48 flex-col gap-6">
                <table className="self-stretch bg-white">
                  <tbody>
                    {filteredUsers
                      .filter(
                        (user) =>
                          new Date(user.date) >=
                            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) &&
                          new Date(user.date) <
                            new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
                      )
                      .map((user, index) => (
                        <tr key={index} className="border-b border-[#e0e0e0]">
                          <td className="px-4 py-2 flex items-center gap-2">
                            <img
                              src="/images/icons/profileIcon.svg"
                              alt="Icono izquierdo"
                              className="w-6 h-6"
                            />
                            {user.name}
                          </td>
                          <td className="px-4 py-2">
                            <button className=" btn px-2 py-1 bg-blue-500 text-white rounded-lg">
                              {user.role}
                            </button>
                          </td>
                          <td className="px-4 py-2">{formatDate(user.date)}</td>
                          <td className="px-4 py-2 flex justify-end">
                            <img
                              src="/images/icons/colorfulPencil.svg"
                              alt="Icono derecho"
                              className="w-6 h-6"
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="self-stretch flex-col justify-start items-start gap-4">
              <div className="self-stretch h-6 flex justify-center items-end gap-6">
                <div className="w-full text-[#004e79] text-xl font-bold leading-normal">
                  Últimos tres meses
                </div>
              </div>
              <div className=" flex-colgap-6">
                <table className=" rounded-xl bg-white">
                  <tbody className="">
                    {filteredUsers
                      .filter(
                        (user) =>
                          new Date(user.date) >=
                            new Date(Date.now() - 90 * 24 * 60 * 60 * 1000) &&
                          new Date(user.date) <
                            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
                      )
                      .map((user, index) => (
                        <tr key={index} className="border-b   border-[#e0e0e0]">
                          <td className="px-4 py-2 flex items-center gap-2">
                            <img
                              src="/images/icons/profileIcon.svg"
                              alt="Icono izquierdo"
                              className="w-6 h-6"
                            />
                            {user.name}
                          </td>
                          <td className="px-4 py-2">
                            <button className="btn px-2 py-1 bg-blue-500 text-white rounded-lg">
                              {user.role}
                            </button>
                          </td>
                          <td className="px-4 py-2">{formatDate(user.date)}</td>
                          <td className="px-4 py-2 flex justify-end">
                            <img
                              src="/images/icons/colorfulPencil.svg"
                              alt="Icono derecho"
                              className="w-6 h-6"
                            />
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserList;
