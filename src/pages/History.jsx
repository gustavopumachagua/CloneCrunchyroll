import { useHistory } from "../context/HistoryContext";
import { FaTrashAlt, FaCalendarAlt, FaRedoAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const History = () => {
  const { history, removeFromHistory, clearHistory } = useHistory();
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()} ${date
      .getHours()
      .toString()
      .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;
  };

  const handleCardClick = (item) => {
    navigate("/episode-details", {
      state: {
        episode: item,
        animeImage: item.animeImage,
        episodes: history, // Enviar el historial como una lista de episodios
      },
    });
  };

  return (
    <div className="history bg-gray-900 text-white p-6">
      {/* Encabezado */}
      <div className="flex justify-end mb-6">
        {history.length > 0 && (
          <button
            onClick={clearHistory}
            className="flex items-center bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition-all shadow-lg">
            <FaTrashAlt className="mr-2" />
            Limpiar Historial
          </button>
        )}
      </div>

      {/* Contenido */}
      {history.length === 0 ? (
        <div className="text-center mt-10">
          <h2 className="text-white text-lg">
            Aún no tienes historial disponible.
          </h2>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {history.map((item) => (
            <div
              key={item.mal_id}
              onClick={() => handleCardClick(item)}
              className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col relative p-4 cursor-pointer hover:bg-gray-700 transition">
              {/* Imagen con ícono de recarga */}
              <div className="relative">
                <img
                  src={item.animeImage || "/default-image.jpg"}
                  alt={item.title}
                  className="w-full h-40 object-cover rounded shadow-lg"
                />
                {/* Sombra oscura */}
                <div className="absolute inset-0 bg-black bg-opacity-80 rounded">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaRedoAlt className="text-white text-3xl" />
                  </div>
                </div>
                {/* Etiqueta "Visto" */}
                <div className="absolute bottom-2 right-2 bg-orange-500 text-white text-sm px-2 py-1 rounded shadow-lg">
                  Visto
                </div>
              </div>

              {/* Información del episodio */}
              <div className="mt-4 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-orange-500 mb-2">
                  Episodio {item.episodeNumber}: {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 flex items-center">
                  <FaCalendarAlt className="mr-2 text-orange-400" />
                  Agregado: {formatDate(item.addedDate)}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Evitar que el clic en el botón propague el evento al contenedor
                    removeFromHistory(item.mal_id);
                  }}
                  className="mt-auto flex items-center justify-center px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600 transition-all">
                  <FaTrashAlt className="mr-2" />
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
