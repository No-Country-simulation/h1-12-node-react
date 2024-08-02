//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import HomeAdmin from "./Components/HomeAdmin";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import UiToolkit from "./Components/UiToolkit";
import DashboardPaciente from "./Components/DashboardPaciente";
import ProfessionalDashboard from "./Components/ProfessionalDashboard";
import AgendaTurnos from "./Components/AgendaTurnos";
import PatientNotifications from "./Pages/PatientNotifications";
import Notice from "./Pages/Notice ";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard*" element={<Dashboard />}>
            <Route path="admin" element={<HomeAdmin />} />
            <Route path="uitoolkit" element={<UiToolkit />} />
            <Route path="patient" element={<DashboardPaciente />} />
            <Route path="patient/perfil" element={<Notice />} />
            <Route path="patient/configuracion" element={<Notice />} />
            <Route
              path="patient/notificaciones"
              element={<PatientNotifications />}
            />
            <Route path="professional" element={<ProfessionalDashboard />} />
            <Route path="professional/pacientes" element={<AgendaTurnos />} />
            <Route path="professional/tratamientos" element={<Notice />} />

            <Route path="professional/configuracion" element={<Notice />} />
            <Route path="professional/alertas" element={<Notice />} />
            <Route path="professional/perfil" element={<Notice />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
