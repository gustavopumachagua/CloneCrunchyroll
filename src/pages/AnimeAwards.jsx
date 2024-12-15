import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaAward,
  FaStar,
  FaMusic,
  FaPenNib,
  FaPlayCircle,
} from "react-icons/fa";

const AnimeAwards = () => {
  const [awards, setAwards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const fetchAwardsData = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/anime?order_by=score&sort=desc&limit=12"
      );
      if (!response.ok) {
        throw new Error("Error al cargar los datos de los premios.");
      }
      const data = await response.json();
      setAwards(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchAwardsData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-lg font-semibold text-white">
          Cargando Anime Awards...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchAwardsData}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  const categories = [
    { title: "Mejor Animación", icon: <FaStar className="text-yellow-400" /> },
    {
      title: "Mejor Banda Sonora",
      icon: <FaMusic className="text-green-400" />,
    },
    { title: "Mejor Historia", icon: <FaPenNib className="text-purple-400" /> },
    {
      title: "Mejor Anime General",
      icon: <FaPlayCircle className="text-blue-400" />,
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-20 px-4 ">
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        <FaAward className="inline-block text-yellow-500 mr-2" />
        Anime Awards
      </h1>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {awards.map((anime, index) => (
          <div
            key={anime.mal_id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-center">
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-40 h-auto object-cover"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-xl font-semibold text-white mb-2">
                {anime.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {anime.synopsis.slice(0, 100)}...
              </p>
              <div className="flex items-center text-sm text-gray-400">
                {categories[index % categories.length].icon}
                <span className="ml-2">
                  {categories[index % categories.length].title}
                </span>
              </div>
            </div>
            <div className="p-4 bg-gray-700 text-center flex justify-center">
              <button
                onClick={() => navigate("/series", { state: { anime } })}
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

export default AnimeAwards;
