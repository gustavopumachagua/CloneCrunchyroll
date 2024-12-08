import { MdDelete } from "react-icons/md";
import { FaPlay } from "react-icons/fa";

const HistoryItem = ({ title, date, image, show, watched }) => {
  return (
    <div className="relative bg-gray-800 rounded-lg overflow-hidden">
      {/* Imagen */}
      <img src={image} alt={title} className="w-full h-36 object-cover" />

      {/* Estado de visualización */}
      {watched && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex items-center space-x-2 bg-gray-900 px-3 py-1 rounded-full">
            <FaPlay className="text-white text-sm" />
            <span className="text-white text-xs">Visto</span>
          </div>
        </div>
      )}

      {/* Detalles */}
      <div className="p-4">
        <h3 className="text-sm font-bold">{show}</h3>
        <p className="text-xs text-gray-400 mt-1">{title}</p>
        <p className="text-xs text-gray-500 mt-2">{date}</p>
      </div>

      {/* Botón de eliminar */}
      <button className="absolute bottom-2 right-2 text-gray-400 hover:text-white">
        <MdDelete size={20} />
      </button>
    </div>
  );
};

export default HistoryItem;
