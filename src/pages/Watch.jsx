import { useEffect, useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaPlay,
  FaCalendarAlt,
  FaStar,
  FaAngleRight,
} from "react-icons/fa";

const Watch = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { episode, animeImage, episodes } = location.state || {};
  const [showEpisodes, setShowEpisodes] = useState(false);

  const episodeListRef = useRef(null);
  const highlightedEpisodeRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (
      showEpisodes &&
      highlightedEpisodeRef.current &&
      episodeListRef.current
    ) {
      const container = episodeListRef.current;
      const highlighted = highlightedEpisodeRef.current;
      container.scrollTop = highlighted.offsetTop - container.offsetTop;
    }
  }, [showEpisodes]);

  const formatDate = (dateString) => {
    if (!dateString) return "Desconocido";
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  if (!episode) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex justify-center items-center">
        <p className="text-red-500">
          No se encontraron datos para este episodio.
        </p>
      </div>
    );
  }

  const handleEpisodeSelect = (selectedEpisode) => {
    setShowEpisodes(false);
    navigate("/episode-details", {
      state: { episode: selectedEpisode, animeImage, episodes },
    });
  };

  const sortedEpisodes = [...episodes].sort((a, b) => a.mal_id - b.mal_id);
  const currentIndex = episodes.findIndex((ep) => ep.mal_id === episode.mal_id);
  const nextEpisode = episodes[currentIndex + 1];

  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-5xl mx-auto p-6 ">
        <div className="flex flex-col lg:flex-row items-center bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <img
            src={animeImage}
            alt={episode.title}
            className="w-full lg:w-auto h-60 lg:h-80 object-cover"
          />
          <div className="p-6 flex flex-col gap-4 lg:w-2/3">
            <h1 className="text-2xl font-bold text-orange-400 flex items-center gap-2">
              <FaPlay className="text-green-400" />
              {`E${episode.mal_id}: ${
                episode.title || `Episodio ${episode.mal_id}`
              }`}
            </h1>
            <p className="text-gray-300 text-sm flex items-center gap-2">
              <FaCalendarAlt className="text-orange-400" />
              <strong>Emitido:</strong> {formatDate(episode.aired)}
            </p>
            <p className="text-gray-300 text-sm flex items-center gap-2">
              <FaStar className="text-yellow-400" />
              <strong>Score:</strong> {episode.score || "N/A"}
            </p>
          </div>
        </div>

        {nextEpisode && (
          <div
            onClick={() => handleEpisodeSelect(nextEpisode)}
            className="mt-6 flex items-center bg-gray-800 rounded-lg shadow-lg hover:bg-gray-700 transition cursor-pointer p-4">
            <img
              src={animeImage}
              alt={`Episodio ${nextEpisode.mal_id}`}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="text-lg font-semibold text-orange-400 flex items-center gap-2">
                <FaAngleRight className="text-orange-400" />
                {`E${nextEpisode.mal_id}: ${
                  nextEpisode.title || `Episodio ${nextEpisode.mal_id}`
                }`}
              </h3>
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <FaCalendarAlt className="text-orange-400" />
                Emitido: {formatDate(nextEpisode.aired)}
              </p>
              <p className="text-gray-300 text-sm flex items-center gap-2">
                <FaStar className="text-yellow-400" />
                Score: {nextEpisode.score || "N/A"}
              </p>
            </div>
          </div>
        )}

        <div className="mt-6">
          <button
            onClick={() => setShowEpisodes((prev) => !prev)}
            className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center justify-between w-full lg:w-1/4 mx-auto hover:bg-gray-700 transition">
            <span>Ver más episodios</span>
            <FaChevronDown />
          </button>
        </div>

        {showEpisodes && (
          <div
            ref={episodeListRef}
            className="mt-4 bg-gray-800 rounded-lg shadow-lg overflow-hidden max-h-96 overflow-y-auto">
            {sortedEpisodes.map((ep) => (
              <div
                key={ep.mal_id}
                ref={
                  ep.mal_id === episode.mal_id ? highlightedEpisodeRef : null
                }
                className={`flex items-center gap-4 px-4 py-2 cursor-pointer hover:bg-gray-700 transition ${
                  episode.mal_id === ep.mal_id ? "bg-gray-700" : ""
                }`}
                onClick={() => handleEpisodeSelect(ep)}>
                <img
                  src={animeImage}
                  alt={`Episodio ${ep.mal_id}`}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div className="flex-grow">
                  <h3 className="text-sm font-semibold text-orange-400 flex items-center gap-2">
                    <FaPlay className="text-green-400" />
                    {`E${ep.mal_id}: ${ep.title}`}
                  </h3>
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <FaCalendarAlt className="text-orange-400" />
                    Emitido: {formatDate(ep.aired)}
                  </p>
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <FaStar className="text-yellow-400" />
                    Score: {ep.score || "N/A"}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Watch;
