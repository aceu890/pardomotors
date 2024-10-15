"use client";
import React, { useState } from "react";
import CarGallery from "@/app/components/CarGallery";
import Search from "@/app/components/Search";
import FilterSidebar from "../../components/FilterSidebar";
import { FiFilter } from "react-icons/fi"; // Asegúrate de instalar react-icons

const Catalogo = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Search onSearch={undefined} />
      <div className="flex flex-col md:flex-row">
        {/* Contenedor para centrar el FilterSidebar */}
        <div className="hidden md:flex items-center justify-center w-1/4">
          <FilterSidebar />
        </div>

        {/* CarGallery */}
        <div className="w-full md:w-3/4">
          <CarGallery />
        </div>

        {/* Icono de filtro para la vista móvil */}
        <button
          type="button"
          className="fixed bottom-4 right-4 md:hidden p-2 bg-blue-500 text-white rounded-full shadow-lg"
          onClick={toggleModal}
        >
          {" "}
          Filtrar
          <div className="flex items-center justify-center">
    <FiFilter size={24} />
  </div>
        </button>
      </div>

      {/* Modal de filtros */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 relative">
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-600"
              onClick={toggleModal}
            >
              &times; {/* Icono de cierre */}
            </button>
            <h2 className="text-lg font-bold mb-4">Filtros</h2>
            <FilterSidebar /> {/* Reutiliza el componente de filtros aquí */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Catalogo;
