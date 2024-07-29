import React, { Component } from "react";
import { Link } from "react-router-dom";
import userAvatar from "../images/jose.png";
import GenericForm from "./GenericForm";
import SearchBar from "./SearchBar";
import ModalComponent from "./ModalComponent";
const data = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

export default class UiToolkit extends Component {
  render() {
    return (
      <div className="flex flex-col">
        <ul class="menu flex-1  menu-horizontal ">
          <li class="w-full">
            <details class="w-full  bg-mycustomblue rounded-lg flex justify-center items-center h-12">
              <summary class="text-white text-sm font-normal font-sans leading-tight tracking-tight">
                Registrar usuario
              </summary>
              <ul class="bg-base-100 rounded-t-none z-10 p-2">
                <li class="w-full">
                  <Link to="/dashboard/register-professional">
                    Profesional de la salud
                  </Link>
                </li>
                <li class="w-full">
                  <Link to="/dashboard/register-institution">
                    Institución de salud
                  </Link>
                </li>
                <li class="w-full">
                  <Link to="/dashboard/register-patient">Paciente</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>

        <ul class="menu flex-1  menu-horizontal ">
          <li class="w-full">
            <button class="btn btn-primary  w-full bg-mycustomblue text-white text-sm font-normal font-sans leading-tight tracking-tight rounded-lg h-12 flex justify-center items-center">
              Crear Rol
            </button>
          </li>
        </ul>

        <label
          className="flex max-sm:hidden input input-bordered  items-center gap-2"
          style={{
            border: "2px solid transparent", // Aplica un borde transparente
            borderRadius: "10px", // Asegura que el borde esté redondeado
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(to bottom, #004E79, #003C79, #002279, #4D0079, #6F0079, #900079, #A9257C)", // Gradiente de fondo
            backgroundOrigin: "border-box", // El origen del fondo es el borde
            backgroundClip: "padding-box, border-box", // Define cómo se corta el fondo
          }}
        >
          <input
            type="text"
            className="grow border-none"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <ModalComponent />
        <SearchBar data={data} />
        <div className="dropdown   dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn flex max-sm:hidden btn-ghost btn-circle avatar"
          >
            <div
              className="w-10 h-10  rounded-full p-0.5 "
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, #004E79, #003C79, #002279, #4D0079, #6F0079, #900079, #A9257C)",
                backgroundClip: "border-box", // Asegura que el gradiente cubra el borde
                borderRadius: "9999px", // Asegura bordes redondeados
              }}
            >
              <img
                alt="Tailwind CSS Navbar component"
                src={userAvatar}
                className="w-10 h-10 rounded-full"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
