import { useEffect } from "react";
import { FaLock, FaUserSecret, FaDatabase } from "react-icons/fa";
import politicaseguridad from "../assets/image/politica_seguridad.jpg";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const policySections = [
    {
      title: "Recopilación de Datos",
      description:
        "Recopilamos información para mejorar tu experiencia, como preferencias de usuario y datos de navegación. Estos datos nos ayudan a personalizar el contenido que ves.",
      icon: <FaDatabase className="text-blue-400 text-4xl" />,
    },
    {
      title: "Protección de tu Privacidad",
      description:
        "Implementamos medidas de seguridad avanzadas para garantizar que tu información personal esté protegida contra accesos no autorizados.",
      icon: <FaLock className="text-green-400 text-4xl" />,
    },
    {
      title: "Tu Control",
      description:
        "Tienes derecho a acceder, modificar y eliminar tus datos personales en cualquier momento. Respetamos tus decisiones.",
      icon: <FaUserSecret className="text-yellow-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Política de Privacidad
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Conoce cómo protegemos y utilizamos tu información.
        </p>

        <div className="mb-12">
          <img
            src={politicaseguridad}
            alt="Política de Privacidad"
            className="rounded-lg shadow-md mx-auto w-full md:w-3/4 lg:w-1/2"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {policySections.map((section, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{section.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{section.title}</h3>
              <p className="text-gray-400">{section.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Detalles Completos</h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Nuestra Política de Privacidad describe cómo recopilamos, usamos y
            protegemos tu información personal. Al utilizar nuestra plataforma,
            aceptas nuestras prácticas descritas en este documento. Nos
            comprometemos a garantizar la transparencia y el control total de
            tus datos.
          </p>
          <p className="text-gray-400 leading-relaxed mb-6">
            Podemos recopilar datos como tu dirección de correo electrónico,
            preferencias de usuario y actividad en nuestra plataforma. Estos
            datos se usan para mejorar tu experiencia y garantizar el
            funcionamiento adecuado del servicio.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Si tienes preguntas sobre nuestra Política de Privacidad, no dudes
            en contactarnos. Estamos aquí para garantizar tu tranquilidad.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
