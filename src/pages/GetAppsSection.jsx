import { useEffect } from "react";
import { FaApple, FaAndroid, FaDesktop } from "react-icons/fa";
import aplicaciones from "../assets/image/aplicaciones.webp";

const GetAppsSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll hacia arriba al cargar la página
  }, []);

  const appDetails = [
    {
      platform: "iOS",
      description:
        "Descarga nuestra app en la App Store y lleva el anime contigo.",
      icon: <FaApple className="text-blue-500 text-5xl" />,
      link: "#", // Sustituye con el enlace a la App Store
    },
    {
      platform: "Android",
      description:
        "Disponible en Google Play para todos tus dispositivos Android.",
      icon: <FaAndroid className="text-green-500 text-5xl" />,
      link: "#", // Sustituye con el enlace a Google Play
    },
    {
      platform: "Escritorio",
      description:
        "Accede desde tu computadora con nuestra aplicación de escritorio.",
      icon: <FaDesktop className="text-gray-500 text-5xl" />,
      link: "#", // Sustituye con el enlace al sitio de descarga
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Hazte con nuestras aplicaciones
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Descubre una experiencia inmersiva con nuestras aplicaciones en todas
          tus plataformas favoritas. ¡Descárgalas ahora y disfruta del mejor
          contenido de anime!
        </p>

        {/* Imagen principal */}
        <div className="mb-12">
          <img
            src={aplicaciones}
            alt="Hazte con nuestras aplicaciones"
            className="rounded-lg shadow-md mx-auto w-full md:w-3/4 lg:w-1/2"
          />
        </div>

        {/* Detalles de las aplicaciones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {appDetails.map((app, index) => (
            <a
              key={index}
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 group">
              <div className="mb-4">{app.icon}</div>
              <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400">
                {app.platform}
              </h3>
              <p className="text-gray-400">{app.description}</p>
            </a>
          ))}
        </div>

        {/* Llamado a la acción */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">
            ¡Empieza a disfrutar donde quieras!
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Haz clic en tu plataforma favorita para comenzar la descarga.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetAppsSection;
