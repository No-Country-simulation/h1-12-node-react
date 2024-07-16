import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAdmin from "./Pages/HomeAdmin";
import LoginPage from "./Pages/LoginPage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
