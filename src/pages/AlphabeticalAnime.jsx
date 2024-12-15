import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSortAlphaDown, FaPlayCircle } from "react-icons/fa";

const AlphabeticalAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");
  const navigate = useNavigate();
  const fetchAnimes = async () => {
    try {
      let fetchedAnimes = [];
      for (let page = 1; page <= 10; page++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?order_by=title&sort=asc&page=${page}`
        );
        if (!response.ok) {
          throw new Error("Error al cargar los animes.");
        }
        const data = await response.json();
        if (data && Array.isArray(data.data)) {
          fetchedAnimes = [...fetchedAnimes, ...data.data];
        } else {
          break;
        }
      }
      setAnimes(fetchedAnimes);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
    setFilteredAnimes(
      animes.filter((anime) => {
        const title = anime.title || "";
        const normalizedTitle = title.replace(/^[^a-zA-Z]+/, "");
        return normalizedTitle.toLowerCase().startsWith(letter.toLowerCase());
      })
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchAnimes();
  }, []);

  const handleViewDetails = (anime) => {
    navigate("/series", { state: { anime } });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="text-lg font-semibold text-white">
          Cargando lista alfabética...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchAnimes}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 min-h-screen py-20 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        <FaSortAlphaDown className="inline-block text-yellow-400 mr-2" />
        Animes Alfabéticos
      </h1>
      <div className="flex justify-center mb-6">
        <div className="grid grid-cols-12 gap-2 sm:grid-cols-8 md:grid-cols-12">
          {[...Array(26)].map((_, i) => {
            const letter = String.fromCharCode(65 + i);
            return (
              <button
                key={letter}
                onClick={() => filterByLetter(letter)}
                className={`px-2 py-1 rounded ${
                  selectedLetter === letter
                    ? "bg-blue-500 text-white"
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}>
                {letter}
              </button>
            );
          })}
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAnimes.map((anime, index) => (
          <div
            key={`${anime.mal_id}-${index}`}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
            <div className="flex justify-center">
              <img
                src={anime.images.jpg.large_image_url}
                alt={anime.title}
                className="w-40 h-auto object-cover"
              />
            </div>
            <div className="p-4 flex-grow flex flex-col justify-between">
              <h2 className="text-lg font-semibold text-white mb-2">
                {anime.title}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {anime.synopsis?.slice(0, 100) || "Sin descripción..."}...
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
      {filteredAnimes.length === 0 && (
        <div className="text-center text-gray-400 mt-6">
          No se encontraron animes para esta letra.
        </div>
      )}
    </div>
  );
};

export default AlphabeticalAnime;
