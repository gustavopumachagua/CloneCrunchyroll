import { useEffect } from "react";
import {
  FaQuestionCircle,
  FaEnvelope,
  FaBook,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import helpcenter from "../assets/image/help-center-tips.png";

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const helpOptions = [
    {
      title: "Preguntas Frecuentes",
      description:
        "Encuentra respuestas rápidas a las preguntas más comunes sobre nuestra plataforma.",
      icon: <FaQuestionCircle className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Soporte por Email",
      description:
        "¿Necesitas ayuda específica? Contáctanos por correo electrónico y resolveremos tus dudas.",
      icon: <FaEnvelope className="text-blue-400 text-4xl" />,
    },
    {
      title: "Guías y Manuales",
      description:
        "Accede a nuestros manuales detallados para sacar el máximo provecho de nuestras funciones.",
      icon: <FaBook className="text-green-400 text-4xl" />,
    },
    {
      title: "Llamada de Soporte",
      description:
        "Comunícate directamente con nuestro equipo de soporte para asistencia personalizada.",
      icon: <FaPhoneAlt className="text-red-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Centro de Ayuda
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Estamos aquí para ayudarte. Explora nuestras opciones de soporte y
          encuentra la asistencia que necesitas.
        </p>

        <div className="flex justify-center mb-12">
          <div className="relative w-full max-w-lg">
            <input
              type="text"
              placeholder="Busca una respuesta..."
              className="w-full py-3 pl-10 pr-4 rounded-lg bg-gray-800 text-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <FaSearch className="absolute top-3 left-3 text-gray-400 text-lg" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {helpOptions.map((option, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{option.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{option.title}</h3>
              <p className="text-gray-400">{option.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img
            src={helpcenter}
            alt="Contact Support"
            className="rounded-lg shadow-md mx-auto w-full md:w-3/4 lg:w-1/2"
          />
          <p className="mt-6 text-gray-400">
            Si no encuentras la respuesta que buscas, no dudes en contactarnos
            directamente. Estamos aquí para ayudarte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
