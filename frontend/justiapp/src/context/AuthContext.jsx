//AuthContext.jsx
import React, { createContext, useState, useEffect, useRef } from "react";
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
  //para que si el usuario deja su  pestaña abierta y no cierra sesión
  const inactivityTimeoutId = useRef(null);

  // Tiempo de inactividad en milisegundos (por ejemplo, 15 minutos)
  const INACTIVITY_TIME = 0.5 * 60 * 1000;

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
        resetInactivityTimeout();
      } else {
        // Manejar error de autenticación aquí
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
    //tiene que ver con el tiempo de inactividad
    clearTimeout(inactivityTimeoutId.current);
  };

  // Función para resetear el timeout de inactividad
  const resetInactivityTimeout = () => {
    clearTimeout(inactivityTimeoutId.current);
    inactivityTimeoutId.current = setTimeout(logout, INACTIVITY_TIME);
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
      //esto tiene que ver con el tiempo de inactividad
      resetInactivityTimeout();
    } else {
      navigate("/");
    }
  }, [navigate]);

  // Manejo de cierre de sesión al cerrar o recargar la pestaña

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      logout();
      event.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    // Limpieza del efecto
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
      if (lockTimeoutId) {
        clearTimeout(lockTimeoutId);
      }
      clearTimeout(inactivityTimeoutId.current);
    };
  }, [lockTimeoutId]);

  // Manejo de sincronización entre pestañas
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === "token" && !event.newValue) {
        logout();
      } else if (event.key === "token" && event.newValue) {
        setAuth({ token: event.newValue });
        resetInactivityTimeout();
      }
    };
    /*const handleStorageChange = (event) => {
  useEffect(() => {
      if (event.key === "token" && !event.newValue) {
        // Si el token ha sido eliminado en otra pestaña, hacer logout
        logout();
      }
    };*/

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      if (lockTimeoutId) {
        clearTimeout(lockTimeoutId);
      }
      clearTimeout(inactivityTimeoutId.current);
    };
  }, [lockTimeoutId]);

  // Limpiar el timeout si el componente se desmonta o se actualiza
  /* useEffect(() => {
    return () => {
      if (lockTimeoutId) {
        clearTimeout(lockTimeoutId);
      }
    };
  }, [lockTimeoutId]);
*/

  // Manejo de inactividad del usuario
  useEffect(() => {
    const resetInactivityTimeout = () => {
      clearTimeout(inactivityTimeoutId.current);
      inactivityTimeoutId.current = setTimeout(logout, INACTIVITY_TIME);
    };

    const events = ["click", "mousemove", "keydown", "scroll", "touchstart"];
    events.forEach((event) =>
      window.addEventListener(event, resetInactivityTimeout)
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, resetInactivityTimeout)
      );
    };
  }, []);

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
