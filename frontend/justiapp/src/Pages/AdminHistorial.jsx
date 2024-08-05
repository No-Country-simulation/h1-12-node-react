import React from "react";
import UserList from "./UserList";

const userData = [
  {
    name: "Daniel Botarelli",
    role: "Prof. de la Salud",
    date: "2023-07-28T10:00:00Z",
  },
  {
    name: "Ana Pérez",
    role: "Ingeniera de Software",
    date: "2023-07-22T10:00:00Z",
  },
  {
    name: "Carlos González",
    role: "Administrador",
    date: "2023-07-15T10:00:00Z",
  },
  // Otros usuarios...
];

export default function AdminHistorial() {
  return (
    <>
      <UserList data={userData} />
    </>
  );
}
