//Dashboard.jsx
import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UiToolkit from "../Components/UiToolkit";
import SearchBar from "../Components/SearchBar";
import Navbar from "../Components/Navbar";
import Avatar from "../Components/Avatar";
import { AuthContext } from "../context/AuthContext";
import Sidebar from "../Components/Sidebar";
import CardContainer from "../Components/CardContainer";

const data = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

export default function Dashboard(props) {
  const { logout } = useContext(AuthContext);
  console.log("Renderizando Dashboard");

  return (
    <>
      <Navbar />
      <Sidebar logout={logout} />
      <main className="flex h-screen bg-slate-50  items-start justify-center  pt-20   max-sm:pt-28 w-full  ">
        <Outlet />
      </main>
    </>
  );
}
