import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoClose } from "react-icons/io5";
import {
  FaRegClosedCaptioning,
  FaStar,
  FaClock,
  FaShieldAlt,
} from "react-icons/fa";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const fetchData = async (retries = 3) => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${query}&limit=25`
        );
        setResults(response.data.data || []);
      } catch (err) {
        if (retries > 0 && err.response?.status === 429) {
          console.warn("Demasiadas solicitudes. Reintentando...");
          setTimeout(() => fetchData(retries - 1), 2000);
        } else {
          setError("Hubo un problema al obtener los resultados.");
          console.error(err);
        }
      } finally {
        setLoading(false);
      }
    };

    const delayDebounce = setTimeout(() => fetchData(), 500);
    return () => clearTimeout(delayDebounce);
  }, [query]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [results]);

  const clearInput = () => setQuery("");

  const handleSelectAnime = (anime) => {
    navigate("/Series", { state: { anime } });
  };

  return (
    <div className="flex flex-col items-center bg-gray-900 p-4 md:p-12">
      <div className="w-full max-w-4xl mt-24">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar..."
            className="w-full px-4 py-2 text-gray-300 bg-gray-900 border-none focus:outline-none placeholder-gray-500 peer text-4xl font-mono"
            aria-label="Buscar anime"
            aria-busy={loading}
          />
          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-500 peer-placeholder-shown:bg-gray-500 peer-focus:bg-orange-500 peer-focus:transition-all"></span>
          {query && (
            <button
              onClick={clearInput}
              className="absolute right-12 text-gray-400 hover:text-red-500 transition-transform transform hover:scale-110">
              <IoClose size={24} />
            </button>
          )}
        </div>
      </div>
      {error && <div className="text-red-500 mt-4">{error}</div>}
      <div className="w-full max-w-6xl mt-8" aria-live="polite">
        {loading && (
          <div className="text-gray-300 flex items-center justify-center">
            <AiOutlineLoading3Quarters className="animate-spin text-xl" />
            <span className="ml-2">Cargando resultados...</span>
          </div>
        )}
        {!loading && results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {results.map((anime) => (
              <div
                key={anime.mal_id}
                onClick={() => handleSelectAnime(anime)}
                className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition hover:bg-gray-700 cursor-pointer">
                <div className="flex justify-center">
                  <img
                    src={
                      anime.images?.jpg?.large_image_url || "/default-image.jpg"
                    }
                    alt={anime.title}
                    className="w-40 h-auto object-cover"
                  />
                </div>
                <div className="mt-3 space-y-1">
                  <h3 className="text-sm md:text-base font-bold text-white truncate">
                    {anime.title}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                    <FaRegClosedCaptioning />
                    <span>
                      {`${anime.type} | ${anime.episodes || "?"} episodios`}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                    <FaStar />
                    <span>
                      {`${anime.score || "?"} | ${
                        anime.scored_by || "?"
                      } votos`}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                    <FaClock className="text-orange-500" />
                    <span>{anime.duration || "Duración desconocida"}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
                    <FaShieldAlt className="text-red-500" />
                    <span>{anime.rating || "Sin clasificación"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
