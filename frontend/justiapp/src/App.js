//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeAdmin from "./Pages/HomeAdmin";
import LoginPage from "./Pages/LoginPage";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route
          path="/homeadmin"
          element={
            <PrivateRoute>
              <HomeAdmin />
            </PrivateRoute>
          }
        />
        {/* Agrega más rutas protegidas de la misma manera */}
      </Routes>
    </AuthProvider>
  );
}

export default App;
