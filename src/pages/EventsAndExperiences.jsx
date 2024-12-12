import { useState, useEffect } from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaPlayCircle  } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const EventsAndExperiences = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch data from API
  const fetchEventsData = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/seasons/upcoming" // Replace with actual endpoint for events if available
      );
      if (!response.ok) {
        throw new Error("Error al cargar los eventos.");
      }
      const data = await response.json();
      setEvents(data.data.slice(0, 12)); // Limiting to 12 events for display
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchEventsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-lg font-semibold text-white">
          Cargando eventos y experiencias...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchEventsData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        <FaCalendarAlt className="inline-block text-yellow-500 mr-2" />
        Eventos y Experiencias
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {events.map((event, index) => (
          <div
            key={event.mal_id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <img
              src={event.images.jpg.large_image_url}
              alt={event.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-white mb-2">
                {event.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {event.synopsis?.slice(0, 100) || "Descripción no disponible."}
              </p>
              <div className="flex items-center text-sm text-gray-400 mb-2">
                <FaMapMarkerAlt className="text-red-500" />
                <span className="ml-2">
                  {event.producers?.[0]?.name || "Ubicación desconocida"}
                </span>
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <FaCalendarAlt className="text-yellow-500" />
                <span className="ml-2">
                  {event.aired?.string || "Fecha no disponible"}
                </span>
              </div>
            </div>
            <div className="p-4 bg-gray-700 text-center flex justify-center">
              <button
                onClick={() =>
                  navigate("/series", { state: { anime: event } })
                }
                className="text-blue-500 hover:underline flex items-center justify-center space-x-2">
                <FaPlayCircle className="text-blue-400" />
                               <span>Ver Anime</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsAndExperiences;
