import React from "react";
import { FaPlane } from "react-icons/fa";

const BeneficioPremium = () => {
  return (
    <div className="bg-gradient-to-t from-black to-gray-900 text-white py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Imagen */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://via.placeholder.com/600x400" // Reemplaza este enlace con la imagen deseada
            alt="Contenido sin conexión"
            className="rounded-lg shadow-lg max-w-full"
          />
        </div>

        {/* Texto */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-4">
            <FaPlane className="text-yellow-400 text-5xl" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Contenido sin conexión
          </h2>
          <p className="text-gray-300 text-lg">
            Sigue viendo tus series favoritas fuera de casa desbloqueando el
            contenido sin conexión con los planes{" "}
            <span className="font-semibold">Mega</span> y{" "}
            <span className="font-semibold">Ultimate Fan</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BeneficioPremium;
