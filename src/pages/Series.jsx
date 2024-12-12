import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaStar,
  FaHeart,
  FaInfoCircle,
  FaShieldAlt,
  FaRegClosedCaptioning,
} from "react-icons/fa";
import { FiBookmark } from "react-icons/fi";
import AnimeEpisodes from "../components/AnimeEpisodio/AnimeEpisodes";

const Series = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const anime = location.state?.anime;

  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  // Scroll hacia arriba al cargar la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!anime) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">No se encontró información del anime.</p>
      </div>
    );
  }

  const toggleSynopsis = () => setShowFullSynopsis(!showFullSynopsis);

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6">
      {/* Imagen principal del anime */}
      <div className="flex justify-center mb-8">
        <img
          src={
            anime.images?.jpg?.large_image_url ||
            anime.image ||
            "https://via.placeholder.com/400x300?text=Imagen+no+disponible"
          }
          alt={`Imagen de ${anime.title || "Anime sin título"}`}
          className="rounded-lg shadow-2xl object-cover w-full h-[300px] sm:h-auto md:max-w-[250px] md:max-h-[auto]"
        />
      </div>

      {/* Contenido principal */}
      <div className="flex flex-col lg:flex-row lg:space-x-8">
        {/* Información del anime */}
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-orange-500">
            {anime.title || "Título no disponible"}
          </h1>
          <div className="flex flex-wrap items-center space-x-4 text-sm lg:text-lg">
            <div className="flex items-center ">
              <FaRegClosedCaptioning className="text-gray-400 mr-2" size={16} />
              <p>
                {anime.subtitle ||
                  `${anime.type} | ${anime.episodes || "?"} episodios`}
              </p>
            </div>
            {/* Puntuación */}
            <p className="flex items-center">
              <FaStar className="text-yellow-500 mr-2" size={16} />
              {anime.score || "No disponible"}
            </p>
            {/* Votos */}
            <p className="flex items-center">
              <FaInfoCircle className="text-blue-500 mr-2" size={16} />
              {anime.scored_by || 0} votos
            </p>
            {/* Clasificación */}
            <p className="flex items-center">
              <FaShieldAlt className="text-green-500 mr-2" size={16} />
              {anime.rating || "No clasificado"}
            </p>
          </div>

          {/* Sinopsis con "Ver más" */}
          <div>
            <p className="text-gray-300">
              {showFullSynopsis
                ? anime.synopsis || "Sin sinopsis disponible."
                : `${anime.synopsis?.substring(0, 250) || ""}...`}
            </p>
            {anime.synopsis && anime.synopsis.length > 250 && (
              <button
                className="text-orange-500 hover:underline mt-2"
                onClick={toggleSynopsis}>
                {showFullSynopsis ? "Ver menos" : "Ver más"}
              </button>
            )}
          </div>

          {/* Botones */}
          <div className="flex flex-col space-y-4 mt-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-start">
            <button className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto">
              <FiBookmark className="mr-2" size={20} /> Añadir a Favoritos
            </button>
            <button className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto">
              <FaHeart className="mr-2" size={20} /> Añadir a CrunchyLista
            </button>
          </div>
        </div>

        {/* Video del trailer */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="relative group">
            {anime?.trailer?.embed_url ? (
              <iframe
                src={anime.trailer.embed_url}
                title={`Trailer de ${anime.title || "Anime sin título"}`}
                className="w-full h-64 rounded-lg shadow-lg"
                frameBorder="0"
                allow="accelerometer; play; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            ) : (
              <img
                src="https://via.placeholder.com/400x300?text=Trailer+no+disponible"
                alt="Imagen de reemplazo"
                className="rounded-lg shadow-lg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Lista de episodios */}
      <AnimeEpisodes animeId={anime.mal_id} />
    </div>
  );
};

export default Series;
