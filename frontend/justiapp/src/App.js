//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/LoginPage";
import HomeAdmin from "./Components/HomeAdmin";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import DashboardPaciente from "./Components/DashboardPaciente";
import ProfessionalDashboard from "./Components/ProfessionalDashboard";
import AgendaTurnos from "./Components/AgendaTurnos";
import PatientList from "./Pages/PatientList";
import PatientNotifications from "./Pages/PatientNotifications";
import CreateTreatment from "./Pages/CreateTreatment";
import ProfessionalProfile from "./Pages/ProfessionalProfile";
import Notice from "./Pages/Notice ";
import AdminHistorial from "./Pages/AdminHistorial";
import ProfessionalRegister from "./Pages/ProfessionalRegister";
import InstitutionRegister from "./Pages/InstitutionRegister";
import VoiceRecorder from "./Components/VoiceRecorder";
import HealthProviderRegister from "./Pages/HealthProviderRegister";
import Turnos from "./Components/Turnos";
import PatientHistory from "./Pages/PatientHistory";
import PatientSchedule from "./Pages/PatientSchedule";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard*" element={<Dashboard />}>
            <Route path="admin" element={<HomeAdmin />} />
            <Route path="admin/historial" element={<AdminHistorial />} />
            <Route path="admin/configurar" element={<Notice />} />
            <Route
              path="admin/regiter-professional"
              element={<ProfessionalRegister />}
            />
            <Route
              path="admin/register-health-provider"
              element={<HealthProviderRegister />}
            />
            <Route
              path="admin/register-health-institution"
              element={<InstitutionRegister />}
            />
            <Route path="patient" element={<DashboardPaciente />} />
            <Route path="patient/perfil" element={<Notice />} />
            <Route path="patient/configuracion" element={<Notice />} />
            <Route path="patient/agenda" element={<PatientSchedule />} />
            <Route
              path="patient/notificaciones"
              element={<PatientNotifications />}
            />
            <Route path="professional" element={<ProfessionalDashboard />} />

            <Route path="professional/agenda" element={<AgendaTurnos />} />
            <Route path="patient/turno" element={<Turnos />} />
            <Route
              path="patient/historial-clinico"
              element={<PatientHistory />}
            />
            <Route
              path="professional/tratamientos"
              element={<CreateTreatment />}
            />
            <Route path="professional/pacientes" element={<PatientList />} />

            <Route path="professional/configuracion" element={<Notice />} />
            <Route path="professional/consulta" element={<VoiceRecorder />} />
            <Route
              path="professional/perfil"
              element={<ProfessionalProfile />}
            />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
