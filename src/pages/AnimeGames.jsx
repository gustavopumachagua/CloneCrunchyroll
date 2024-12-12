import { useState, useEffect } from "react";
import { FaGamepad, FaPlayCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AnimeGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Fetch data from Jikan API
  const fetchGames = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/anime?order_by=popularity&sort=desc&limit=16"
      );
      if (!response.ok) {
        throw new Error("Error al cargar la lista de juegos.");
      }
      const data = await response.json();
      setGames(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold text-white">
          Cargando Juegos...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchGames}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  const handleNavigate = (game) => {
    navigate("/series", { state: { anime: game } });
  };

  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        <FaGamepad className="inline-block text-green-400 mr-2" />
        Juegos de Anime
      </h1>
      {games.length === 0 ? (
        <p className="text-center text-gray-300">No hay juegos disponibles.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {games.map((game) => (
            <div
              key={game.mal_id}
              className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative">
                <img
                  src={game.images.jpg.large_image_url}
                  alt={game.title}
                  className="w-full h-56 object-cover"
                />
                <button
                  onClick={() => handleNavigate(game)}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 hover:bg-opacity-75 transition duration-300">
                  <FaPlayCircle className="text-white text-4xl" />
                </button>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-semibold text-white mb-2">
                  {game.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4">
                  {game.synopsis
                    ? game.synopsis.slice(0, 100) + "..."
                    : "Sin descripción disponible."}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <span>
                    Popularidad:{" "}
                    <span className="text-green-400">{game.popularity}</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AnimeGames;
