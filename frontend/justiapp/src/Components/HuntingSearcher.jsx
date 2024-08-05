import React, { useState } from "react";

const HuntingSearcher = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [categories, setCategories] = useState({
    healthProfessional: false,
    patient: false,
    provider: false,
    healthInstitution: false,
  });

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    filterUsers(event.target.value, categories);
  };

  const handleCategoryChange = (event) => {
    const { name, checked } = event.target;
    setCategories((prevCategories) => {
      const newCategories = { ...prevCategories, [name]: checked };
      filterUsers(searchTerm, newCategories);
      return newCategories;
    });
  };

  const filterUsers = (searchTerm, categories) => {
    let filtered = users;

    if (searchTerm) {
      filtered = filtered.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (Object.values(categories).some((value) => value)) {
      filtered = filtered.filter((user) => categories[user.category]);
    }

    setFilteredUsers(filtered);
  };

  const handleUserSelect = (user) => {
    setSelectedUser(user.name);
    setSearchTerm(user.name);
    setFilteredUsers([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Usuario seleccionado:", selectedUser);
    // Aquí puedes manejar el envío del usuario seleccionado
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="w- 11/12 justify-start items-center gap-4 inline-flex">
        <div className="w-[598px] flex-col justify-start items-start inline-flex relative">
          <div className="self-stretch justify-start items-start inline-flex">
            <div className="bg-gradient-to-r from-[#004e79] via-[#002279] to-[#a9257c] rounded-tl-[10px] rounded-bl-[10px] justify-center items-center gap-[7.47px] flex">
              <button
                onClick={handleSubmit}
                type="submit"
                className="btn bg-transparent "
              >
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
                    d="M9.33518 3.93295C6.49989 3.93295 4.20144 6.2314 4.20144 9.06669C4.20144 11.902 6.49989 14.2004 9.33518 14.2004C10.753 14.2004 12.0355 13.6266 12.9653 12.6968C13.8951 11.767 14.4689 10.4845 14.4689 9.06669C14.4689 6.2314 12.1705 3.93295 9.33518 3.93295ZM2.80133 9.06669C2.80133 5.45814 5.72663 2.53284 9.33518 2.53284C12.9437 2.53284 15.869 5.45814 15.869 9.06669C15.869 10.6185 15.3274 12.0448 14.4239 13.1653L17.5308 16.2723C17.8042 16.5457 17.8042 16.9889 17.5308 17.2623C17.2574 17.5357 16.8142 17.5357 16.5408 17.2623L13.4338 14.1554C12.3133 15.0589 10.887 15.6005 9.33518 15.6005C5.72663 15.6005 2.80133 12.6752 2.80133 9.06669Z"
                    fill="white"
                    stroke="white"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
              <div className="self-stretch px-[14.93px] py-[13.07px] bg-white rounded-tr-lg rounded-br-lg border border-[#9b9fa6] justify-start items-center gap-[7.47px] inline-flex">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="grow shrink basis-0 h-[18.67px] text-gray-300 text-[14.93px] font-semibold font-['Open Sans'] leading-[18.67px] tracking-tight"
                  placeholder="Buscar"
                />
              </div>
            </div>
          </div>
          {filteredUsers.length > 0 && (
            <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded-b-lg z-10">
              {filteredUsers.map((user) => (
                <div
                  key={user.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => handleUserSelect(user)}
                >
                  {user.name}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="px-4 py-3.5 bg-white rounded-lg border border-[#9b9fa6] justify-center items-center gap-2 flex">
          <input
            type="checkbox"
            name="healthProfessional"
            checked={categories.healthProfessional}
            onChange={handleCategoryChange}
            className="p-0.5 bg-white rounded-lg border border-[#004e79]"
          />
          <div className="text-[#004e79] text-xs font-normal font-['Open Sans'] leading-[15px]">
            Prof. de la Salud
          </div>
        </div>
        <div className="px-4 py-3.5 bg-white rounded-lg border border-[#9b9fa6] justify-center items-center gap-2 flex">
          <input
            type="checkbox"
            name="patient"
            checked={categories.patient}
            onChange={handleCategoryChange}
            className="p-0.5 bg-white rounded-lg border border-[#004e79]"
          />
          <div className="text-[#004e79] text-xs font-normal font-['Open Sans'] leading-[15px]">
            Paciente
          </div>
        </div>
        <div className="px-4 py-3.5 bg-white rounded-lg border border-[#9b9fa6] justify-center items-center gap-2 flex">
          <input
            type="checkbox"
            name="provider"
            checked={categories.provider}
            onChange={handleCategoryChange}
            className="p-0.5 bg-white rounded-lg border border-[#004e79]"
          />
          <div className="text-[#004e79] text-xs font-normal font-['Open Sans'] leading-[15px]">
            Prestador
          </div>
        </div>
        <div className="px-4 py-3.5 bg-white rounded-lg border border-[#9b9fa6] justify-center items-center gap-2 flex">
          <input
            type="checkbox"
            name="healthInstitution"
            checked={categories.healthInstitution}
            onChange={handleCategoryChange}
            className="p-0.5 bg-white rounded-lg border border-[#004e79]"
          />
          <div className="text-[#004e79] text-xs font-normal font-['Open Sans'] leading-[15px]">
            Inst. de Salud
          </div>
        </div>
      </div>
    </form>
  );
};

export default HuntingSearcher;
