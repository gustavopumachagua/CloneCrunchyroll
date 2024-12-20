import { FaCog } from "react-icons/fa";
import {
  MdDelete,
  MdStar,
  MdAccessTime,
  MdOutlineVideoLibrary,
} from "react-icons/md";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const DashboardContent = ({
  setIsRenameModalOpen,
  setIsDeleteModalOpen,
  animeList,
  onRemoveAnime,
}) => {
  const [showCogMenu, setShowCogMenu] = useState(false);
  const [isCogRotating, setIsCogRotating] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = (anime) => {
    navigate("/Series", { state: { anime } });
  };

  const handleCogClick = () => {
    setIsCogRotating(true);
    setTimeout(() => setIsCogRotating(false), 300);
    setShowCogMenu((prev) => !prev);
  };

  return (
    <div className="flex-1 p-4 relative bg-gray-900 min-h-screen">
      {/* Botón FaCog con efecto */}
      <div className="sticky top-8 right-8 z-30 flex justify-end">
        <button
          onClick={handleCogClick}
          className={`text-gray-400 hover:text-white text-xl bg-gradient-to-r from-gray-700 to-gray-900 p-3 rounded-full shadow-md transition-transform ${
            isCogRotating ? "rotate-90" : ""
          }`}>
          <FaCog />
        </button>
        {showCogMenu && (
          <div className="absolute right-4 mt-12 bg-gray-800 rounded-md shadow-4xl w-48 text-sm">
            <button
              onClick={() => {
                setShowCogMenu(false);
                setIsRenameModalOpen(true);
              }}
              className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 text-sm">
              Renombrar Crunchylista
            </button>
            <button
              onClick={() => {
                setShowCogMenu(false);
                setIsDeleteModalOpen(true);
              }}
              className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-700 text-sm">
              Eliminar Crunchylista
            </button>
          </div>
        )}
      </div>

      {/* Contenedor principal con scroll */}
      <div className="space-y-4 mt-20 max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800">
        {animeList.map((anime) => (
          <div
            key={anime.mal_id}
            onClick={() => handleCardClick(anime)}
            className="flex flex-col sm:flex-row bg-gray-800 rounded-md shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer text-sm">
            {/* Imagen del anime */}
            <div className="relative">
              <img
                src={anime.images?.jpg?.large_image_url || "/default-image.jpg"}
                alt={anime.title}
                className="w-full sm:w-32 h-32 sm:h-auto object-cover"
              />
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-[10px] px-2 py-1 rounded">
                {anime.type || "Anime"}
              </span>
            </div>

            {/* Contenido del anime */}
            <div className="p-3 flex flex-col flex-1">
              {/* Título e información principal */}
              <div className="mb-2">
                <h3 className="text-base font-semibold text-white">
                  {anime.title}
                </h3>
                <div className="flex items-center text-gray-400 text-xs mt-1">
                  <MdStar className="text-yellow-400 mr-1" />
                  <span>{anime.score || "N/A"}</span>
                  <span className="ml-2 text-[10px]">
                    ({anime.scored_by?.toLocaleString() || "0"} votos)
                  </span>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  {anime.synopsis?.substring(0, 100) || "Sin descripción"}...
                </p>
                <div className="text-xs text-gray-400 mt-2 space-y-1">
                  <p className="flex items-center">
                    <MdOutlineVideoLibrary className="mr-2 text-gray-500" />
                    {`${anime.type} | ${anime.episodes || "?"} episodios`}
                  </p>
                  <p className="flex items-center">
                    <MdAccessTime className="mr-2 text-gray-500" />
                    {anime.duration || "Duración desconocida"}
                  </p>
                  <p className="flex items-center">
                    <MdStar className="mr-2 text-gray-500" />
                    {anime.rating || "Sin clasificación"}
                  </p>
                </div>
              </div>

              {/* Botón de eliminar */}
              <div className="mt-auto">
                <button
                  className="p-1 text-red-500 hover:text-red-400"
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemoveAnime(anime.mal_id);
                  }}>
                  <MdDelete className="text-lg" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mensaje informativo */}
      {animeList.length === 0 && (
        <div className="text-center mt-10">
          <p className="text-gray-400">
            Puedes añadir elementos a esta Crunchylista.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
