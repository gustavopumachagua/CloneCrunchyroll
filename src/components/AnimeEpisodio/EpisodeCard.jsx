import { FaCalendarAlt, FaStar, FaPlay } from "react-icons/fa";
import { useHistory } from "../../context/HistoryContext";

const EpisodeCard = ({ episode, animeImage, index, onPlayClick }) => {
  const { addToHistory } = useHistory();

  const formatDate = (dateString) => {
    if (!dateString) return "Desconocido";
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  const handlePlayClick = () => {
    addToHistory({ ...episode, animeImage, episodeNumber: index + 1 });
    onPlayClick(episode);
  };

  return (
    <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      {animeImage && (
        <div className="flex justify-center">
          <img
            src={animeImage}
            alt="Anime"
            className="w-40 h-auto object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-base font-semibold text-orange-500 mb-2">
          Episodio {index + 1}: {episode.title}
        </h3>
        <p className="text-gray-300 text-sm flex items-center mb-2">
          <FaCalendarAlt className="mr-2 text-orange-400" />
          Emitido: {formatDate(episode.aired)}
        </p>
        <p className="text-gray-300 text-sm flex items-center">
          <FaStar className="mr-2 text-yellow-400" />
          Score: {episode.score || "N/A"}
        </p>
        <button
          onClick={handlePlayClick}
          className="mt-4 flex items-center justify-center px-4 py-2 rounded-lg bg-orange-500 text-white hover:bg-orange-600 transition-all w-full">
          <FaPlay className="mr-2" />
          Reproducir E{index + 1}
        </button>
      </div>
    </div>
  );
};

export default EpisodeCard;
