import { useState, useEffect } from "react";
import { FaSortAlphaDown, FaSearch } from "react-icons/fa";

const AlphabeticalAnime = () => {
  const [animes, setAnimes] = useState([]);
  const [filteredAnimes, setFilteredAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedLetter, setSelectedLetter] = useState("");

  const fetchAnimes = async () => {
    try {
      const response = await fetch(
        "https://api.jikan.moe/v4/anime?order_by=title&sort=asc&limit=10"
      );
      if (!response.ok) {
        throw new Error("Error al cargar los animes.");
      }
      const data = await response.json();

      // Valida que data tenga la estructura esperada
      if (data && Array.isArray(data.data)) {
        setAnimes(data.data);
        setFilteredAnimes(data.data);
      } else {
        setAnimes([]);
        setFilteredAnimes([]);
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Filtrar animes por letra
  const filterByLetter = (letter) => {
    setSelectedLetter(letter);
    if (letter === "") {
      setFilteredAnimes(animes);
    } else {
      setFilteredAnimes(
        animes.filter((anime) =>
          anime.title.toLowerCase().startsWith(letter.toLowerCase())
        )
      );
    }
  };

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchAnimes();
  }, []);

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
            const letter = String.fromCharCode(65 + i); // Letras A-Z
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
          <button
            onClick={() => filterByLetter("")}
            className={`px-2 py-1 rounded ${
              selectedLetter === ""
                ? "bg-blue-500 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600"
            }`}>
            Todos
          </button>
        </div>
      </div>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredAnimes.map((anime) => (
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
              <div className="text-center mt-4">
                <a
                  href={anime.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                  Más detalles
                </a>
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
