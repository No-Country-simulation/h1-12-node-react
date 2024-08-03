import React, { useState } from "react";

const Carnet = () => {
  // Estado para manejar la información del usuario
  const [userInfo, setUserInfo] = useState({
    nombre: "Alejandro",
    apellido: "Gomez",
    dni: "14258147",
    matricula: "10845963",
    especialidad: "Medicina",
    fechaNacimiento: "27/07/91",
    movil: "123456789",
    domicilio: "Calle Falsa 123",
  });

  // Estado para manejar la foto de perfil
  const [profilePhoto, setProfilePhoto] = useState(null);

  // Estado para manejar la edición
  const [isEditing, setIsEditing] = useState(false);

  // Manejar cambios en los campos de entrada
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Manejar la carga de foto de perfil
  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePhoto(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // Alternar el modo de edición
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-800">Carnet de Usuario</h2>
        <button onClick={toggleEdit} className="text-blue-500 underline">
          {isEditing ? "Guardar" : "Editar"}
        </button>
      </div>

      <div className="flex flex-col items-center mb-4">
        <label htmlFor="photo-upload" className="cursor-pointer">
          <img
            src={profilePhoto || "https://via.placeholder.com/100"}
            alt="Foto de perfil"
            className="w-24 h-24 rounded-full border-2 border-gray-300 mb-2"
          />
          {isEditing && (
            <input
              type="file"
              id="photo-upload"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="hidden"
            />
          )}
        </label>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {Object.keys(userInfo).map((key) => (
          <div key={key} className="flex items-center justify-between">
            <label className="text-gray-600">
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </label>
            {isEditing ? (
              <input
                type="text"
                name={key}
                value={userInfo[key]}
                onChange={handleInputChange}
                className="border border-gray-300 rounded-lg px-2 py-1"
              />
            ) : (
              <span className="text-gray-800">{userInfo[key]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carnet;
