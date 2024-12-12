import { useEffect } from "react";
import { FaCookieBite, FaShieldAlt, FaHandPointer } from "react-icons/fa";
import cookie from "../assets/image/cookie.jpg";

const CookieConsent = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll hacia arriba al cargar la página
  }, []);

  const cookieFeatures = [
    {
      title: "Preferencias Personalizadas",
      description:
        "Guarda tus preferencias para que podamos ofrecerte una experiencia personalizada en nuestra web.",
      icon: <FaHandPointer className="text-yellow-500 text-4xl" />,
    },
    {
      title: "Seguridad y Privacidad",
      description:
        "Tus datos están protegidos y nunca serán compartidos sin tu consentimiento explícito.",
      icon: <FaShieldAlt className="text-green-400 text-4xl" />,
    },
    {
      title: "Mejor Experiencia",
      description:
        "Las cookies nos ayudan a optimizar nuestra plataforma para que tengas la mejor experiencia posible.",
      icon: <FaCookieBite className="text-blue-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Herramienta de Aceptación de Cookies
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Configura cómo usamos las cookies para brindarte una mejor experiencia
          en nuestra plataforma.
        </p>

        {/* Imagen principal */}
        <div className="mb-12">
          <img
            src={cookie}
            alt="Herramienta de Cookies"
            className="rounded-lg shadow-md mx-auto w-full md:w-3/4 lg:w-1/2"
          />
        </div>

        {/* Funcionalidades Destacadas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cookieFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Configuración de Cookies */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Configura tus Preferencias
          </h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <p className="text-gray-400 mb-4">
              Selecciona las categorías de cookies que deseas aceptar. Puedes
              cambiar estas configuraciones en cualquier momento.
            </p>
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-blue-500 rounded focus:ring focus:ring-blue-400"
                />
                <span className="text-gray-200">Cookies Esenciales</span>
              </label>
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-green-500 rounded focus:ring focus:ring-green-400"
                />
                <span className="text-gray-200">Cookies de Rendimiento</span>
              </label>
              <label className="flex items-center gap-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-yellow-500 rounded focus:ring focus:ring-yellow-400"
                />
                <span className="text-gray-200">Cookies de Marketing</span>
              </label>
            </div>
            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">
              Guardar Preferencias
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
