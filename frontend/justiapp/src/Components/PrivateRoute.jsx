import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = () => {
  const { auth, isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated() || !auth.token) {
    console.log("No autenticado, redirigiendo a /");
    return <Navigate to="/" />;
  }

  // Renderiza el contenido si el usuario está autenticado
  return <Outlet />;
};

export default PrivateRoute;
