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
import AgendaTurnos from "./Components/AgendaTurnos";

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
            <Route
              path="patient-finish-register"
              element={<PatientFinishRegister />}
            />
            <Route path="clinical-history" element={<ClinicalHistory />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
