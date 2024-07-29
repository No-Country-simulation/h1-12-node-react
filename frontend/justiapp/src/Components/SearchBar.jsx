import React, { useState } from "react";

const data = [
  "paciente: Juan Pérez",
  "prestador de salud: Clínica ABC",
  "institución de salud: Hospital General",
  "médico: Dr. Ana García",
  "paciente: María López",
  "prestador de salud: Centro de Salud XYZ",
  "institución de salud: Sanatorio Los Pinos",
  "médico: Dr. Carlos Fernández",
];

const SearchBar = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTypes, setSelectedTypes] = useState({
    paciente: true,
    prestador: true,
    institucion: true,
    medico: true,
  });

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckboxChange = (type) => {
    setSelectedTypes({
      ...selectedTypes,
      [type]: !selectedTypes[type],
    });
  };

  const filteredData = data.filter((item) => {
    if (typeof item !== "string") return false; // Verifica si el ítem es una cadena

    const parts = item.split(":");
    if (parts.length !== 2) return false; // Verifica el formato correcto

    const itemType = parts[0].trim().toLowerCase();
    const itemName = parts[1].trim().toLowerCase();

    return (
      selectedTypes[itemType] && itemName.includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div className="relative w-11/12 flex gap-2 items-center">
      {/* Caja de checkboxes */}
      <div className="flex flex-col gap-2">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Paciente</span>
            <input
              type="checkbox"
              checked={selectedTypes.paciente}
              onChange={() => handleCheckboxChange("paciente")}
              className="checkbox checkbox-success"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Prestador de salud</span>
            <input
              type="checkbox"
              checked={selectedTypes.prestador}
              onChange={() => handleCheckboxChange("prestador")}
              className="checkbox checkbox-success"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Institución de salud</span>
            <input
              type="checkbox"
              checked={selectedTypes.institucion}
              onChange={() => handleCheckboxChange("institucion")}
              className="checkbox checkbox-success"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Médico</span>
            <input
              type="checkbox"
              checked={selectedTypes.medico}
              onChange={() => handleCheckboxChange("medico")}
              className="checkbox checkbox-success"
            />
          </label>
        </div>
      </div>

      {/* Input de búsqueda */}
      <div className="dropdown w-full flex-grow">
        <div className="w-full inline-flex">
          <div className="px-[11.20px] py-[5.60px] bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-tl-[10px] rounded-bl-[10px] flex justify-center items-center">
            <svg
              className="w-[18.67px] h-[18.67px]"
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </div>
          <div className="flex-grow">
            <input
              type="text"
              placeholder="Buscar"
              value={searchTerm}
              onChange={handleSearch}
              className="input input-bordered dropdown-toggle self-stretch px-[11.20px] py-[5.60px] bg-white rounded-tr-lg rounded-br-lg focus:outline-none focus:ring-2 focus:ring-purple-950 focus:border-transparent border border-[#9b9fa6] w-full"
              tabIndex="0"
            />
          </div>
        </div>
        {searchTerm && (
          <ul className="dropdown-content menu bg-base-100 rounded-box border border-gray-200 shadow-md mt-2 w-full z-10">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 border-b border-gray-200 last:border-b-0"
                >
                  <a>{item}</a>
                </li>
              ))
            ) : (
              <li className="px-4 py-2 text-gray-500">No hay coincidencias</li>
            )}
          </ul>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
