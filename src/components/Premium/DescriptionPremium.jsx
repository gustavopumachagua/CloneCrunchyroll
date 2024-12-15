import {
  FaClock,
  FaPlane,
  FaDesktop,
  FaExclamationCircle,
} from "react-icons/fa";

const DescriptionPremium = ({ onComparePlansClick }) => {
  const features = [
    {
      icon: <FaClock className="text-cyan-500 text-5xl" />,
      title: "Nuevos episodios poco después de su emisión en Japón",
    },
    {
      icon: <FaExclamationCircle className="text-orange-500 text-5xl" />,
      title: "Anime sin anuncios",
    },
    {
      icon: <FaPlane className="text-yellow-500 text-5xl" />,
      title: "Contenido sin conexión",
    },
    {
      icon: <FaDesktop className="text-blue-500 text-5xl" />,
      title: "Disfruta en varios dispositivos a la vez",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-snug">
            Consigue más <span className="text-yellow-400">con Premium</span>
          </h2>
          <p className="text-gray-400 mb-6">
            Explora todas las ventajas que Premium tiene para ti y disfruta del
            mejor contenido anime de forma ilimitada.
          </p>
          <button
            onClick={onComparePlansClick}
            className="inline-block bg-orange-500 text-black font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300">
            COMPARAR PLANES <span className="ml-2">⬇</span>
          </button>
        </div>
        <div className="lg:w-1/2 grid grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-gray-800 rounded-lg p-6 shadow-lg hover:scale-105 transition-transform duration-300">
              {feature.icon}
              <p className="mt-4 text-lg font-medium text-gray-300">
                {feature.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionPremium;
