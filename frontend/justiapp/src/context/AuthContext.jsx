// AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Crear el contexto
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null, role: null });
  const navigate = useNavigate();
  const [loginAttempts, setLoginAttempts] = useState(
    parseInt(localStorage.getItem("loginAttempts")) || 0
  );
  const [isLocked, setIsLocked] = useState(false);
  const [lockTimeoutId, setLockTimeoutId] = useState(null);

  // Verificar si hay un token almacenado en localStorage al montar el componente
  // Efecto para manejar redirección en caso de que el usuario ya esté autenticado

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    console.log(`este es el role ${role}`);

    if (token && role) {
      setAuth({ token, role });
      console.log(`este es el role ${role}`);
      // Solo redirigir si estamos en la ruta raíz o de login
      if (window.location.pathname === "/") {
        navigate(`/dashboard/${role}`);
      }
    }
  }, [navigate, setAuth]);

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
        console.log("llego la data");
        console.log(data);
        setAuth({ token: data.token, role: data.user.role.role_name });
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.user.role.role_name);
        setLoginAttempts(0);
        localStorage.setItem("loginAttempts", 0);
        navigate(`/dashboard/${data.user.role.role_name}`);
      } else {
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
    console.log("cierre de sesión detectado");
    setAuth({ token: null, role: null });
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/");
  };

  // Manejo de cierre de sesión al cerrar pestaña
  /* useEffect(() => {
    const handleBeforeUnload = (event) => {
      console.log("Evento beforeunload detectado");
      event.preventDefault();
      // Indicar que la pestaña está cerrándose
      localStorage.setItem("isClosing", "true");
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  useEffect(() => {
    const isClosing = localStorage.getItem("isClosing");
    if (isClosing === "true") {
      // Limpiar el estado de cierre de sesión
      localStorage.removeItem("isClosing");
      logout();
    }
  }, []);*/

  // Manejo de sincronización entre pestañas
  useEffect(() => {
    const handleStorageChange = (event) => {
      console.log(event.key, event.newValue);
      if (event.key === "token" && !event.newValue) {
        logout();
      } else if (event.key === "token" && event.newValue) {
        console.log("Token actualizado en otra pestaña:", event.newValue);
        const newRole = localStorage.getItem("role");
        console.log(`este es el role nuevo rol ${newRole}`);

        setAuth({ token: event.newValue, role: newRole });
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
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
