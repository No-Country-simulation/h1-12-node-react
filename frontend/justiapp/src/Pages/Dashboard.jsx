//Dashboard.jsx
import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { AuthContext } from "../context/AuthContext";
import Aside from "../Components/Aside";

export default function Dashboard(props) {
  const { logout, auth } = useContext(AuthContext);
  console.log("Renderizando Dashboard");

  return (
    <>
      <Navbar />
      <Aside logout={logout} />
      <main className="flex h-screen bg-slate-50  items-start justify-center  pt-20   max-sm:pt-28 w-full  ">
        <Outlet />
      </main>
    </>
  );
}
