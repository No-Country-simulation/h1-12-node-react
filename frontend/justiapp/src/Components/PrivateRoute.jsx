// PrivateRoute.jsx
import React, { useContext } from "react";
import { Route, Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  if (!auth) {
    // Redirige a la página de login si no está autenticado
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};

export default PrivateRoute;
