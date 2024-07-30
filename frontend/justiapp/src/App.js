//App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import GenericForm from "./Components/GenericForm";
import LoginPage from "./Pages/LoginPage";
import HomeAdmin from "./Components/HomeAdmin";
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./Components/PrivateRoute";
import UiToolkit from "./Components/UiToolkit";
import PatientFinishRegister from "./Pages/PatientFinishRegister";
import ClinicalHistory from "./Pages/ClinicalHistory";
import SearchPage from "./Pages/SearchPage";
import PatientRegister from "./Pages/PatientRegister";
import ProfessionalRegister from "./Pages/ProfessionalRegister";
import DashboardPaciente from "./Components/DashboardPaciente";
import TratamientoPaciente from "./Components/TratamientoPaciente";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Ruta pública de inicio de sesión */}
        <Route path="/" element={<LoginPage />} />

        {/* Rutas protegidas */}
        <Route path="/dashboard" element={<PrivateRoute />}>
          {/* Ruta principal dentro de Dashboard */}
          <Route element={<Dashboard />}>
            <Route index element={<HomeAdmin />} /> {/* Ruta predeterminada */}
            <Route path="homeadmin" element={<HomeAdmin />} />
            <Route path="uitoolkit" element={<UiToolkit />} />
            <Route path="finish-register" element={<PatientFinishRegister />} />
            <Route path="clinical-history" element={<ClinicalHistory />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="register-patient" element={<PatientRegister />} />
            <Route path="pacient-dashboard" element={<DashboardPaciente />} />
            <Route path="patient-treatment" element={<TratamientoPaciente />} />
            <Route
              path="register-professional"
              element={<ProfessionalRegister />}
            />
            {/* Otras rutas secundarias */}
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
