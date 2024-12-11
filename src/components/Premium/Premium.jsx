import { AiOutlineCrown } from "react-icons/ai";
import { FaAd, FaClock, FaDownload, FaTabletAlt } from "react-icons/fa";

const Premium = ({ onComparePlansClick }) => {
  return (
    <div className="relative bg-black text-white">
      {/* Fondo con imagen */}
      <div className="bg-slate-800"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* Sección de texto */}
        <div className="flex-1">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-4">
            Sube de nivel tu experiencia{" "}
            <span className="text-yellow-400">anime</span> con Premium
          </h1>
          <p className="mt-4 text-base lg:text-lg text-gray-100">
            Descubre Crunchyroll Premium y disfruta de tus animes favoritos sin
            interrupciones. Con el plan **Mega Fan**, accede a nuevas funciones
            y beneficios exclusivos que mejorarán tu experiencia.
          </p>
          <p className="mt-4 text-sm lg:text-base text-gray-200">
            Tras tu prueba gratuita de Mega Fan, la suscripción se renovará
            automáticamente al precio de 19,00 PEN al mes. Puedes cancelar en
            cualquier momento.
          </p>

          {/* Botones */}
          <div className="mt-8 flex flex-col lg:flex-row gap-4">
            <button className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg shadow-md transition duration-300">
              <AiOutlineCrown className="mr-2" size={24} />
              PRUEBA MEGA FAN GRATIS DURANTE 7 DÍAS
            </button>
            <button
              onClick={onComparePlansClick}
              className="text-orange-400 font-bold text-sm hover:underline transition">
              COMPARA TODOS LOS PLANES ↓
            </button>
          </div>
        </div>

        {/* Sección de imagen */}
        <div className="flex-shrink-0 w-full lg:w-1/3">
          <img
            src="https://cdn.myanimelist.net/images/anime/7/4289l.jpg" // Cambia esta URL a una imagen representativa del anime
            alt="Anime Posters"
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>

      {/* Sección adicional: beneficios */}
      <div className="relative bg-gray-900 py-16 px-6">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-yellow-200 mb-8">
          Beneficios exclusivos de Premium
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sin anuncios */}
          <div className="flex flex-col items-center text-center">
            <FaAd className="text-yellow-400 text-6xl mb-4" />
            <h3 className="text-lg font-semibold">Sin anuncios</h3>
            <p className="text-sm text-gray-400">
              Disfruta de tus animes favoritos sin interrupciones publicitarias.
            </p>
          </div>

          {/* Episodios nuevos */}
          <div className="flex flex-col items-center text-center">
            <FaClock className="text-yellow-400 text-6xl mb-4" />
            <h3 className="text-lg font-semibold">Episodios nuevos</h3>
            <p className="text-sm text-gray-400">
              Acceso a nuevos episodios poco después de su estreno en Japón.
            </p>
          </div>

          {/* Contenido sin conexión */}
          <div className="flex flex-col items-center text-center">
            <FaDownload className="text-yellow-400 text-6xl mb-4" />
            <h3 className="text-lg font-semibold">Contenido sin conexión</h3>
            <p className="text-sm text-gray-400">
              Descarga tus episodios favoritos para verlos donde sea.
            </p>
          </div>

          {/* Multidispositivo */}
          <div className="flex flex-col items-center text-center">
            <FaTabletAlt className="text-yellow-400 text-6xl mb-4" />
            <h3 className="text-lg font-semibold">Multidispositivo</h3>
            <p className="text-sm text-gray-400">
              Disfruta en varios dispositivos a la vez sin complicaciones.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Premium;
