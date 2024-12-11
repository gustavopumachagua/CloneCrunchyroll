import React, { useEffect } from "react";
import { FaBalanceScale, FaRegFileAlt, FaUserShield } from "react-icons/fa";

const TermsOfUse = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Realiza scroll hacia arriba al cargar la página
  }, []);

  const sections = [
    {
      title: "Uso General de la Plataforma",
      description:
        "Estas condiciones regulan el uso de la plataforma. Al usar este sitio, aceptas cumplir con todas las leyes y normas aplicables.",
      icon: <FaBalanceScale className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Política de Privacidad",
      description:
        "Nos comprometemos a proteger tus datos personales. Lee cómo recopilamos, usamos y almacenamos tu información.",
      icon: <FaUserShield className="text-blue-400 text-4xl" />,
    },
    {
      title: "Contenido y Propiedad Intelectual",
      description:
        "Todo el contenido es propiedad de nuestra marca o de terceros con licencia. Está prohibido su uso no autorizado.",
      icon: <FaRegFileAlt className="text-green-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-10">
          Términos de Uso
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Conoce las reglas y políticas que rigen el uso de nuestra plataforma.
        </p>

        {/* Image Section */}
        <div className="mb-12">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Términos de Uso"
            className="rounded-lg shadow-md mx-auto w-full md:w-3/4 lg:w-1/2"
          />
        </div>

        {/* Terms Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>

        {/* Full Terms Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Términos Completos</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Al utilizar nuestra plataforma, aceptas cumplir con los términos
            descritos aquí. Esto incluye respetar los derechos de autor,
            abstenerse de cualquier actividad fraudulenta, y seguir nuestras
            políticas de privacidad. Para más detalles, te recomendamos leer
            cuidadosamente esta sección y contactarnos si tienes dudas.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Nuestro objetivo es proporcionar una experiencia segura y agradable
            para todos los usuarios. Nos reservamos el derecho de modificar
            estos términos en cualquier momento, y es tu responsabilidad
            mantenerte informado sobre los cambios.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Si tienes preguntas o necesitas más información, no dudes en ponerte
            en contacto con nuestro equipo de soporte.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;
