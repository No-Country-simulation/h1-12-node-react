import React from "react";
import ProfileTable from "../Components/ProfileTable";
const profiles = [
  {
    name: "Daniel Botarelli",
    role: "Prof. de la Salud",
    imageUrl: "/path/to/image1.jpg",
  },
  {
    name: "Ana Martínez",
    role: "Desarrolladora Web",
    imageUrl: "/path/to/image2.jpg",
  },
  {
    name: "Juan Pérez",
    role: "Diseñador UX/UI",
    imageUrl: "/path/to/image3.jpg",
  },
];

export default function SearchPage() {
  return (
    <div>
      <ProfileTable profiles={profiles} />
    </div>
  );
}
