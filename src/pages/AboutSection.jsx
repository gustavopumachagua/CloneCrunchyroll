import React, { useEffect } from "react";
import { FaUsers, FaGlobe, FaHistory, FaHeart } from "react-icons/fa";

const AboutSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Realiza scroll hacia arriba al cargar la página
  }, []);

  const aboutData = [
    {
      title: "Nuestra Comunidad",
      description:
        "Conecta con millones de fans del anime alrededor del mundo. Compartimos la pasión por la animación japonesa.",
      icon: <FaUsers className="text-yellow-400 text-4xl" />,
    },
    {
      title: "Presencia Global",
      description:
        "Disponemos de contenido subtitulado y doblado en múltiples idiomas, accesible desde cualquier lugar.",
      icon: <FaGlobe className="text-blue-400 text-4xl" />,
    },
    {
      title: "Historia del Anime",
      description:
        "Desde los clásicos hasta los más recientes simulcasts, ofrecemos un catálogo que honra la rica historia del anime.",
      icon: <FaHistory className="text-purple-400 text-4xl" />,
    },
    {
      title: "Pasión por el Anime",
      description:
        "Nos dedicamos a proporcionar la mejor experiencia para los fans del anime, con eventos exclusivos y contenido premium.",
      icon: <FaHeart className="text-red-400 text-4xl" />,
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Acerca de Nosotros
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Somos una plataforma dedicada a traer lo mejor del anime a tu
          pantalla. Con contenido exclusivo, una comunidad global y un amor
          compartido por la animación japonesa, estamos aquí para todos los fans
          del anime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aboutData.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img
            src="https://via.placeholder.com/800x400"
            alt="Anime Community"
            className="rounded-lg shadow-md mx-auto w-full md:w-3/4 lg:w-1/2"
          />
          <p className="mt-6 text-gray-400">
            Únete a nosotros en este emocionante viaje por el mundo del anime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
