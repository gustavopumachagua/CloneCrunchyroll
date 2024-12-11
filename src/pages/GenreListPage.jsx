import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FaRegClosedCaptioning,
  FaStar,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const GenreListPage = () => {
  const { genreId } = useParams();
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Efecto para desplazarse al inicio de la página
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const fetchAnimeByGenre = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?genres=${genreId}`
        );
        const data = await response.json();
        setAnimeList(data.data || []);
      } catch (error) {
        console.error("Error al obtener los animes:", error);
        setError("Hubo un problema al cargar los animes.");
      } finally {
        setLoading(false);
      }
    };

    fetchAnimeByGenre();
  }, [genreId]);

  const handleSelectAnime = (anime) => {
    navigate(`/series`, { state: { anime } });
  };

  if (loading) {
    return (
      <div className="text-white text-center min-h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center min-h-screen flex items-center justify-center">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Lista completa del género
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {animeList.map((anime) => (
          <div
            key={anime.mal_id}
            onClick={() => handleSelectAnime(anime)}
            className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition hover:bg-gray-700 cursor-pointer">
            <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
              <img
                src={anime.images?.jpg?.large_image_url || "/default-image.jpg"}
                alt={anime.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-3 space-y-1">
              <h3 className="text-sm md:text-base font-bold text-white truncate">
                {anime.title}
              </h3>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                <FaRegClosedCaptioning />
                <span>
                  {`${anime.type} | ${anime.episodes || "?"} episodios`}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                <FaStar />
                <span>
                  {`${anime.score || "?"} | ${anime.scored_by || "?"} votos`}
                </span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                <FaClock className="text-orange-500" />
                <span>{anime.duration || "Duración desconocida"}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                <FaShieldAlt className="text-red-500" />
                <span>{anime.rating || "Sin clasificación"}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GenreListPage;
