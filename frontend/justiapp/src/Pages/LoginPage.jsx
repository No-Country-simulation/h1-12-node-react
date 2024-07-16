import React, { useState } from "react";
import { Link } from "react-router-dom";
import justinaHeart from "../images/justinaHeart.svg";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  const [errors, setErrors] = useState({ username: "", password: "" });

  const handleUsernameChange = (e) => {
    const value = e.target.value.slice(0, 15); // Recortar si excede 15 caracteres
    setUsername(value);

    let errorMessage = "";
    if (!value) {
      errorMessage = "El usuario es requerido";
    } else if (!/^[a-zA-Z0-9!#$%&()*+\-/?@[\\\]^_{|}]{4,15}$/.test(value)) {
      errorMessage =
        "El usuario debe ser alfanumérico y tener entre 4 y 15 caracteres";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      username: errorMessage,
    }));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsTyped(value.length > 0);

    let errorMessage = "";
    if (!value) {
      errorMessage = "La contraseña es requerida";
    } else if (value.length < 8 || value.length > 15) {
      errorMessage = "La contraseña debe tener entre 8 y 15 caracteres";
    } else if (!/[A-Z]/.test(value)) {
      errorMessage = "La contraseña debe tener al menos una mayúscula";
    } else if (!/[a-z]/.test(value)) {
      errorMessage = "La contraseña debe tener al menos una minúscula";
    } else if (!/[0-9]/.test(value)) {
      errorMessage = "La contraseña debe tener al menos un número";
    } else if (!/[!#$%&'*+\-/?=^_{|}~]/.test(value)) {
      errorMessage =
        "La contraseña debe tener al menos un carácter especial (! # $ % & ' * + - / = ? ^ _ { | } ~)";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      password: errorMessage,
    }));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex justify-center items-center h-screen flex-col max-w-2xl p-6 ">
      <div className="flex flex-col gap-6 justify-center items-center max-w-xs w-full p-4">
        <img className="max-w-72" src={justinaHeart} alt="logo" />

        <form className="flex gap-4 w-full flex-col justify-center items-center">
          <h1 className="text-center font-roboto text-xl font-semibold text-gray-700">
            iniciar sesión
          </h1>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text text-xs font-normal leading-tight text-gray-700">
                Usuario
              </span>
            </div>
            <input
              type="text"
              value={username}
              onChange={handleUsernameChange}
              placeholder="Escribe aquí"
              className="input input-bordered w-full max-w-xs truncate text-sm font-normal leading-5 border border-black rounded-md bg-white p-2"
            />
            {errors.username && (
              <div className="text-xs text-red-500 mt-1">{errors.username}</div>
            )}
            <div className="label mt-4">
              <span className="label-text text-xs font-normal leading-tight text-gray-700">
                Contraseña
              </span>
            </div>
            <label className="input input-bordered flex items-center gap-2 border border-black rounded-md bg-white p-2">
              <input
                type={showPassword ? "text" : "password"}
                className="grow w-full max-w-xs truncate text-sm font-normal leading-5 text-gray-400"
                value={password}
                placeholder="Enter your password"
                onChange={handlePasswordChange}
              />
              {isTyped && (
                <svg
                  onClick={togglePasswordVisibility}
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  {showPassword ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.0002 17C7.24028 17 4.93125 13.4825 4.12654 12C4.93122 10.5176 7.24025 7 12.0002 7C16.7603 7 19.0693 10.5176 19.8739 12C19.0693 13.4824 16.7602 17 12.0002 17ZM12.0002 5C5.38111 5 2.62962 10.5049 2.11276 11.539L2.10581 11.5529C1.96505 11.8344 1.96506 12.1658 2.10583 12.4473L2.11286 12.4614C2.6299 13.4957 5.38146 19 12.0002 19C18.6193 19 21.3708 13.4953 21.8877 12.4612L21.8946 12.4473C22.0354 12.1658 22.0354 11.8344 21.8947 11.5529L21.8878 11.5391C21.3711 10.5053 18.6196 5 12.0002 5ZM12.0001 15C13.6569 15 15.0001 13.6569 15.0001 12C15.0001 10.3431 13.6569 9 12.0001 9C10.3432 9 9.00006 10.3431 9.00006 12C9.00006 13.6569 10.3432 15 12.0001 15Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M11.9999 16.9999C6.64929 16.9999 4.3956 12.5553 3.8943 11.5527L2.10547 12.4472L2.1125 12.4613C2.33348 12.9033 2.96263 14.1619 4.1274 15.4583L2.79285 16.7928L4.20706 18.2071L5.5871 16.827C6.93349 17.8808 8.71066 18.7564 11 18.9568V21H13V18.9568C15.2892 18.7563 17.0664 17.8807 18.4127 16.827L19.7928 18.2071L21.2071 16.7928L19.8724 15.4582C21.0373 14.1617 21.6664 12.9031 21.8873 12.4611L21.8943 12.4472L20.1054 11.5528C19.6042 12.5553 17.3505 16.9999 11.9999 16.9999Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.5"
                    />
                  )}
                </svg>
              )}
            </label>
            {errors.password && (
              <div className="text-xs text-red-500 mt-1">{errors.password}</div>
            )}
          </label>
          <button
            type="submit"
            className="w-full btn btn-primary mt-4 rounded-lg border border-[#374151] bg-[#374151]"
          >
            Ingresar
          </button>
        </form>
        <p className="text-center text-sm mt-4">
          ¿Olvidaste contraseña?{" "}
          <Link to="/forgot-password" className="text-blue-500">
            Click aquí
          </Link>
        </p>
        <p className="text-center text-sm mt-4">
          Como aun no hay contraseña, ve al home del administrador{" "}
          <Link to="/homeadmin" className="text-blue-500">
            Click aquí
          </Link>
        </p>
      </div>
    </section>
  );
}
