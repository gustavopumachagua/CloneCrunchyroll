import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  AiOutlineSearch,
  AiOutlineLoading3Quarters,
  AiOutlineClose,
} from "react-icons/ai";
import { MdMovie, MdOutlineStar, MdAdd } from "react-icons/md";
import { FaTv } from "react-icons/fa";

const Sidebar = ({ listName, onAddAnime }) => {
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

    const fetchAnimes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `https://api.jikan.moe/v4/anime?q=${query}&limit=15`
        );
        setResults(response.data.data || []);
      } catch (err) {
        setError("Error al buscar animes.");
      } finally {
        setLoading(false);
      }
    };

    const debounce = setTimeout(fetchAnimes, 500);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleCardClick = (anime) => {
    navigate("/Series", { state: { anime } });
  };

  const closeSearchBar = () => {
    setQuery("");
    setResults([]);
  };

  return (
    <div className="bg-gray-800 p-4 w-full lg:w-1/3">
      <h2 className="text-2xl font-bold text-white mb-6">
        {listName || "Sin nombre"}
      </h2>
      <div className="relative">
        <input
          type="text"
          placeholder="Añadir Serie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none ${
            query
              ? "border-orange-600 focus:ring-orange-500"
              : "focus:border-gray-400"
          }`}
        />
        {query ? (
          <AiOutlineClose
            className="absolute right-10 top-2 text-gray-400 text-xl cursor-pointer hover:text-white"
            onClick={() => setQuery("")}
          />
        ) : (
          <AiOutlineSearch className="absolute right-10 top-2 text-gray-400 text-xl" />
        )}
        {loading && (
          <AiOutlineLoading3Quarters className="absolute right-3 top-2 text-orange-500 text-xl animate-spin" />
        )}
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {results.length > 0 && (
        <ul className="mt-4 h-96 overflow-y-scroll bg-gray-900 rounded-md p-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900">
          {results.map((anime, index) => (
            <li
              key={anime.mal_id}
              className={`flex items-center justify-between p-2 cursor-pointer transition-all ${
                index !== results.length - 1 ? "border-b border-gray-400" : ""
              } hover:bg-gray-700 hover:shadow-lg`}
              onClick={() => handleCardClick(anime)}>
              <div className="flex items-center">
                <img
                  src={
                    anime.images?.jpg?.large_image_url || "/default-image.jpg"
                  }
                  alt={anime.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="ml-4 text-white">
                  <h3 className="text-sm font-semibold">
                    {anime.title.length > 25
                      ? `${anime.title.substring(0, 25)}...`
                      : anime.title}
                  </h3>

                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    {anime.type === "Movie" ? (
                      <MdMovie className="mr-1" />
                    ) : (
                      <FaTv className="mr-1" />
                    )}
                    <span>{anime.type}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <span className="mr-1">📺</span>
                    <span>{`${anime.episodes || "?"} episodios`}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <MdOutlineStar className="mr-1 text-yellow-500" />
                    <span>{anime.rating || "Sin clasificación"}</span>
                  </div>
                </div>
              </div>
              <MdAdd
                className="text-orange-500 text-3xl cursor-pointer hover:text-white"
                title="Añadir"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddAnime(anime);
                  closeSearchBar();
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
