import { useState, useEffect } from "react";
import { FaHeart, FaStar, FaUserAlt } from "react-icons/fa";

const PopularAnime = () => {
  const [popularAnime, setPopularAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from Jikan API
  const fetchPopularAnime = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/top/anime?type=tv&filter=bypopularity&limit=12"
      );
      if (!response.ok) {
        throw new Error("Error al cargar los animes populares.");
      }
      const data = await response.json();
      setPopularAnime(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchPopularAnime();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-lg font-semibold text-white">
          Cargando animes populares...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchPopularAnime}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        <FaHeart className="inline-block text-red-500 mr-2" />
        Animes Populares
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {popularAnime.map((anime) => (
          <div
            key={anime.mal_id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-white mb-2">
                {anime.title}
              </h2>
              <div className="text-sm text-gray-300 mb-4 flex flex-col gap-1">
                <div className="flex items-center">
                  <FaStar className="text-yellow-400 mr-2" />
                  Puntuación: {anime.score || "N/A"}
                </div>
                <div className="flex items-center">
                  <FaUserAlt className="text-blue-400 mr-2" />
                  Miembros: {anime.members.toLocaleString() || "N/A"}
                </div>
              </div>
              <p className="text-sm text-gray-300 mb-4">
                {anime.synopsis?.slice(0, 100) || "Sin descripción..."}...
              </p>
            </div>
            <div className="p-4 bg-gray-700 text-center">
              <a
                href={anime.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm">
                Ver más detalles
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularAnime;
