//LoginPage.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import justinaHeart from "../images/justinaHeart.svg";
import { AuthContext } from "../context/AuthContext";

export default function LoginPage() {
  //autenticación
  const { login } = useContext(AuthContext);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [isTyped, setIsTyped] = useState(false);
  // const [errors, setErrors] = useState({ username: "", password: "" });
  // Maneja el envío del formulario y realiza la autenticación
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (username && password && !errors.username && !errors.password) {
      try {
        await login({ username, password });
        navigate("/homeadmin");
      } catch (error) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: "Error al iniciar sesión. Por favor, verifica tus credenciales.",
        }));
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: "Por favor, completa todos los campos correctamente.",
      }));
    }
  };

  const navigate = useNavigate();

  // Maneja los cambios en los campos de entrada y valida la entrada
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    validateInput(name, value);
  };

  const validateInput = (name, value) => {
    let errorMessage = "";

    if (name === "username") {
      const trimmedValue = value.slice(0, 15);
      if (!trimmedValue) {
        errorMessage = "El usuario es requerido";
      } else if (
        !/^[a-zA-Z0-9!#$%&()*+\-/?@[\\\]^_{|}]{4,15}$/.test(trimmedValue)
      ) {
        errorMessage =
          "El usuario debe ser alfanumérico y tener entre 4 y 15 caracteres";
      }
    } else if (name === "password") {
      setIsTyped(value.length > 0);
      if (!value) {
        errorMessage = "La contraseña es requerida";
      } else if (value.length < 8 || value.length > 15) {
        errorMessage = "La contraseña debe tener entre 8 y 15 caracteres";
      } else if (!/[a-z]/.test(value)) {
        errorMessage = "La contraseña debe tener al menos una minúscula";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMessage }));
  };

  // Alterna la visibilidad de la contraseña
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="flex justify-center items-center h-screen flex-col max-w-2xl p-6 ">
      <div className="flex flex-col gap-6 justify-center items-center max-w-xs w-full p-4">
        <img className="w-2/3" src={justinaHeart} alt="logo" />
        <div className="flex flex-col w-80 text-center">
          <h1 className="text-indigo-600 text-2xl font-black font-lato">
            Te damos la bienvenida
          </h1>
          <span className="text-gray-700 text-base font-normal font-lato">
            Ingresá tus datos para comenzar
          </span>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex gap-4 w-full flex-col justify-center items-center"
        >
          <label className="form-control w-full max-w-xs ">
            <div className="label  ">
              <span className="label-text text-xs font-normal leading-tight text-gray-700">
                Usuario
              </span>
            </div>
            <input
              type="text"
              name="username"
              value={credentials.username}
              onChange={handleChange}
              placeholder="Escribe tu usuario"
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
            <label className="input self-stretch px-4 py-3.5 bg-white rounded-md border border-zinc-900 justify-start items-center gap-1.5 inline-flex">
              <input
                name="password"
                value={credentials.password}
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="bg grow w-full max-w-xs truncate text-sm font-normal leading-5 text-gray-400"
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

        <div className="w-80 h-3.5 flex-col justify-center items-center gap-6 inline-flex">
          <div className="flex-col justify-center items-center gap-2 flex">
            <div className="flex w-full gap-1 text-center">
              <span className="text-stone-700 text-xs font-normal font-roboto">
                ¿Olvidaste contraseña?
              </span>

              <span className="text-neutral-800 text-xs font-normal font-roboto"></span>
              <Link
                to="/"
                className="text-gray-700 text-xs font-bold font-roboto"
              >
                Click aquí
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
/*
  const handleUsernameChange = (e) => {
    const value = e.target.value.slice(0, 15); // Recortar si excede 15 caracteres

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

    setIsTyped(value.length > 0);

    let errorMessage = "";
    if (!value) {
      errorMessage = "La contraseña es requerida";
    } else if (value.length < 8 || value.length > 15) {
      errorMessage = "La contraseña debe tener entre 8 y 15 caracteres";
    } else if (!/[a-z]/.test(value)) {
      errorMessage = "La contraseña debe tener al menos una minúscula";
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      password: errorMessage,
    }));
  };
  
*/
