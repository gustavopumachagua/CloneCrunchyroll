import { useState, useEffect } from "react";
import {
  FaCalendarAlt,
  FaPlayCircle,
  FaUsers,
  FaStar,
  FaTv,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SeasonalSimulcasts = () => {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch data from Jikan API
  const fetchSimulcasts = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/seasons/now");
      if (!response.ok) {
        throw new Error("Error al cargar los datos de simulcasts.");
      }
      const data = await response.json();
      setAnimes(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSimulcasts();
  }, []);

  const handleViewDetails = (anime) => {
    navigate("/series", { state: { anime } });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-lg font-semibold text-white">
          Cargando Temporada de Simulcasts...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchSimulcasts}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10">
        <FaCalendarAlt className="inline-block text-yellow-500 mr-2" />
        Temporada de Simulcasts
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {animes.map((anime) => (
          <div
            key={anime.mal_id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <img
              src={anime.images?.jpg?.large_image_url}
              alt={anime.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-white mb-2">
                {anime.title}
              </h2>
              <div className="flex items-center text-sm text-gray-400 gap-2 mb-2">
                <FaPlayCircle />
                Episodios: {anime.episodes || "TBA"}
              </div>
              <div className="flex items-center text-sm text-gray-400 gap-2 mb-2">
                <FaTv />
                Tipo: {anime.type || "Desconocido"}
              </div>
              <div className="flex items-center text-sm text-gray-400 gap-2 mb-2">
                <FaCalendarAlt />
                Emisión:{" "}
                {anime.aired?.from
                  ? new Date(anime.aired.from).toLocaleDateString()
                  : "N/A"}
              </div>
              <div className="flex items-center text-sm text-gray-400 gap-2 mb-2">
                <FaUsers />
                Popularidad: {anime.popularity || "N/A"}
              </div>
              <div className="flex items-center text-sm text-gray-400 gap-2 mb-4">
                <FaStar className="text-yellow-400" />
                Puntuación: {anime.score || "N/A"}
              </div>
              <div className="p-4 bg-gray-700 text-center flex justify-center">
                <button
                  onClick={() => handleViewDetails(anime)}
                  className="text-blue-500 hover:underline flex items-center justify-center space-x-2">
                  <FaPlayCircle className="text-blue-400" />
                  <span>Ver Anime</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeasonalSimulcasts;
