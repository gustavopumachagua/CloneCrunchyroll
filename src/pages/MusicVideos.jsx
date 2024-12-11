import { useState, useEffect } from "react";
import { FaMusic, FaPlayCircle, FaChevronUp, FaVideo } from "react-icons/fa";

const MusicVideos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch data from Jikan API
  const fetchMusicVideos = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/anime/1/videos");
      if (!response.ok) {
        throw new Error("Error al cargar videos musicales y conciertos.");
      }
      const data = await response.json();
      setVideos(data.data.music_videos || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchMusicVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-white">
          Cargando Videos Musicales y Conciertos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchMusicVideos}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        <FaMusic className="inline-block text-pink-400 mr-2" />
        Videos Musicales y Conciertos
      </h1>
      {videos.length === 0 ? (
        <p className="text-center text-gray-300">No hay videos disponibles.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {videos.map((video, index) => (
            <div
              key={index}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={video?.image_url || "https://via.placeholder.com/300"}
                  alt={video.title}
                  className="w-full h-56 object-cover"
                />
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
                  <FaPlayCircle className="text-white text-4xl" />
                </a>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {video.title || "Título no disponible"}
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  {video.description
                    ? video.description.slice(0, 100) + "..."
                    : "Sin descripción disponible."}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>
                    <FaVideo className="inline-block text-red-400 mr-2" />
                    Duración: {video.duration || "Desconocida"}
                  </span>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline">
                    Ver video
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 bg-pink-500 p-3 rounded-full shadow-lg hover:bg-pink-600">
        <FaChevronUp className="text-white" />
      </button>
    </div>
  );
};

export default MusicVideos;
