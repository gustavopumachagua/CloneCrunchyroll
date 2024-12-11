import { useState, useEffect } from "react";
import { FaClock, FaCalendarAlt, FaPlayCircle } from "react-icons/fa";

const NovedadesPage = () => {
  const [latestAnime, setLatestAnime] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchLatestAnime = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/seasons/now?limit=12"
      );
      if (!response.ok) {
        throw new Error("Error al cargar las novedades.");
      }
      const data = await response.json();
      setLatestAnime(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchLatestAnime();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-lg font-semibold text-white">
          Cargando novedades...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchLatestAnime}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        <FaPlayCircle className="inline-block text-green-500 mr-2" />
        Novedades Anime
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {latestAnime.map((anime) => (
          <div
            key={anime.mal_id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <img
              src={anime.images.jpg.large_image_url}
              alt={anime.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-white mb-2">
                {anime.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {anime.synopsis?.slice(0, 100) || "Sin descripción..."}...
              </p>
              <div className="text-sm text-gray-400 flex flex-col gap-1">
                <div className="flex items-center">
                  <FaCalendarAlt className="text-blue-400 mr-2" />
                  Fecha de emisión:{" "}
                  {anime.aired?.from
                    ? new Date(anime.aired.from).toLocaleDateString()
                    : "N/A"}
                </div>
                <div className="flex items-center">
                  <FaClock className="text-yellow-400 mr-2" />
                  Episodios: {anime.episodes || "N/A"}
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-700 text-center">
              <a
                href={anime.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline text-sm">
                Más detalles
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NovedadesPage;
