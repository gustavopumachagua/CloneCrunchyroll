import { useState, useEffect } from "react";
import {
  FaCalendarDay,
  FaPlayCircle,
  FaClock,
  FaStar,
  FaInfoCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ReleaseCalendar = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const fetchSchedule = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/schedules");
      if (!response.ok) {
        throw new Error("Error al cargar el calendario de lanzamientos.");
      }
      const data = await response.json();
      setSchedule(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSchedule();
  }, []);

  const handleViewDetails = (anime) => {
    navigate("/series", { state: { anime } });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-lg font-semibold text-white">
          Cargando Calendario de Lanzamientos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center bg-gray-900">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchSchedule}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          <FaCalendarDay className="inline-block text-yellow-500 mr-2" />
          Calendario de Lanzamientos
        </h1>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {schedule.map((anime) => (
            <div
              key={anime.mal_id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img
                src={anime.images?.jpg?.large_image_url}
                alt={anime.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2">
                  {anime.title}
                </h3>
                <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FaClock />
                  {anime.broadcast?.time || "Hora no disponible"}
                </p>
                <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FaPlayCircle />
                  Episodios: {anime.episodes || "TBA"}
                </p>
                <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FaStar />
                  Puntuación: {anime.score || "N/A"}
                </p>
                <p className="text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <FaInfoCircle />
                  Rating: {anime.rating || "No disponible"}
                </p>
                <p className="text-sm text-gray-400 mb-4 flex items-center gap-2">
                  <FaInfoCircle />
                  Fuente: {anime.source || "Desconocida"}
                </p>
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
    </div>
  );
};

export default ReleaseCalendar;
