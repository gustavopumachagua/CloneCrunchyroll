import { useState, useEffect } from "react";
import {
  FaCalendarDay,
  FaPlayCircle,
  FaChevronUp,
  FaClock,
} from "react-icons/fa";

const ReleaseCalendar = () => {
  const [schedule, setSchedule] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from Jikan API
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

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchSchedule();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-white">
          Cargando Calendario de Lanzamientos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
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
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        <FaCalendarDay className="inline-block text-yellow-500 mr-2" />
        Calendario de Lanzamientos
      </h1>
      <div className="space-y-10">
        {Object.entries(schedule).map(([day, animes]) => (
          <div key={day}>
            <h2 className="text-2xl font-bold text-blue-400 mb-6">
              {day.charAt(0).toUpperCase() + day.slice(1)}
            </h2>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {animes.map((anime) => (
                <div
                  key={anime.mal_id}
                  className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <img
                    src={anime.images?.jpg?.large_image_url}
                    alt={anime.title}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-4 flex flex-col justify-between h-full">
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {anime.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-400 gap-2 mb-2">
                      <FaClock />
                      Hora de emisión:{" "}
                      {anime.broadcast?.time || "No disponible"}
                    </div>
                    <div className="flex items-center text-sm text-gray-400 gap-2 mb-4">
                      <FaPlayCircle />
                      Episodios: {anime.episodes || "TBA"}
                    </div>
                    <a
                      href={anime.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm text-center">
                      Ver más detalles
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-blue-500 p-3 rounded-full shadow-lg hover:bg-blue-600">
        <FaChevronUp className="text-white" />
      </button>
    </div>
  );
};

export default ReleaseCalendar;
