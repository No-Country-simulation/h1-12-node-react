import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Crear el contexto
const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: null });
  const navigate = useNavigate();

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

      const data = await response.json();
      if (response.ok) {
        setAuth({ token: data.token });
        localStorage.setItem("token", data.token);

        navigate("/homeadmin");
      } else {
        // Manejar error de autenticación aquí
        console.error("Error de autenticación:", data.message);
      }
    } catch (error) {
      console.error("Error de red:", error);
    }
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
  }, [navigate]);
  // Verificar si el usuario está autenticado
  const isAuthenticated = () => !!auth.token;

  return (
    <AuthContext.Provider value={{ auth, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
