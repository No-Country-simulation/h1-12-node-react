//AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Crear el contexto
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null });
  const navigate = useNavigate();
  const [loginAttempts, setLoginAttempts] = useState(
    parseInt(localStorage.getItem("loginAttempts")) || 0
  );
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimeoutId, setLockTimeoutId] = useState(null); // Variable de estado para el ID del timeout
  // Función para manejar el login y almacenar el token
  const login = async (credentials) => {
    try {
      const response = await fetch(
        "https://h1-12-node-react.onrender.com/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        }
      );

      if (response.ok) {
        const data = await response.json();

        setAuth({ token: data.token });
        localStorage.setItem("token", data.token);
        setLoginAttempts(0);
        localStorage.setItem("loginAttempts", 0);
        navigate("/homeadmin");
      } else {
        // Manejar error de autenticación aquí
        console.log("fallo el login");
        handleFailedLogin();
      }
    } catch (error) {
      setLoginAttempts((prevAttempts) => prevAttempts + 1);
      throw new Error(
        "Error al iniciar sesión. Por favor, verifica tus credenciales."
      );
    }
  };

  const handleFailedLogin = () => {
    setLoginAttempts((prevAttempts) => {
      const newAttempts = prevAttempts + 1;
      localStorage.setItem("loginAttempts", newAttempts);
      //esto es nuevo
      if (newAttempts >= 3 && !isLocked) {
        // Solo activar el bloqueo si no está bloqueado
        setIsLocked(true);
        const timeoutId = setTimeout(() => {
          setIsLocked(false);
          setLoginAttempts(0);
          localStorage.setItem("loginAttempts", 0);
        }, 10000); // Bloquear durante 10 segundos (ms)
        setLockTimeoutId(timeoutId);
      }
      return newAttempts;
    });
  };

  // Función para manejar el logout
  const logout = () => {
    setAuth({ token: null });
    localStorage.removeItem("token");
    navigate("/");
  };

  // Verificar si hay un token almacenado en localStorage al montar el componente
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setAuth({ token });
      if (
        window.location.pathname === "/" ||
        window.location.pathname === "/login"
      ) {
        navigate("/homeadmin");
      }
    } else {
      navigate("/");
    }
  }, [navigate]); // Dependencia en navigate para evitar cambios innecesarios

  // Limpiar el timeout si el componente se desmonta o se actualiza
  useEffect(() => {
    return () => {
      if (lockTimeoutId) {
        clearTimeout(lockTimeoutId);
      }
    };
  }, [lockTimeoutId]);

  // Verificar si el usuario está autenticado
  const isAuthenticated = () => !!auth.token;

  return (
    <AuthContext.Provider
      value={{ isLocked, loginAttempts, auth, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
