import React from "react";
import {
  FaClock,
  FaPlane,
  FaDesktop,
  FaExclamationCircle,
} from "react-icons/fa";

const DescriptionPremium = () => {
  const features = [
    {
      icon: <FaClock className="text-cyan-500 text-4xl" />,
      title: "Nuevos episodios poco después de su emisión en Japón",
    },
    {
      icon: <FaExclamationCircle className="text-orange-500 text-4xl" />,
      title: "Anime sin anuncios",
    },
    {
      icon: <FaPlane className="text-yellow-500 text-4xl" />,
      title: "Contenido sin conexión",
    },
    {
      icon: <FaDesktop className="text-blue-500 text-4xl" />,
      title: "Disfruta en varios dispositivos a la vez",
    },
  ];

  return (
    <div className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-4">Consigue más con Premium</h2>
          <a
            href="#planes"
            className="text-orange-400 font-semibold text-lg inline-flex items-center mb-8 lg:mb-0">
            COMPARAR PLANES <span className="ml-2">⬇</span>
          </a>
        </div>

        {/* Features Section */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-6 mt-8 lg:mt-0">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center">
              {feature.icon}
              <p className="text-center mt-4 text-sm">{feature.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-16 lg:mt-0 flex justify-center">
        <img
          src="https://via.placeholder.com/300x400" // Sustituye esta URL por la imagen que deseas usar
          alt="Premium"
          className="w-full max-w-sm lg:max-w-md"
        />
      </div>
    </div>
  );
};

export default DescriptionPremium;
