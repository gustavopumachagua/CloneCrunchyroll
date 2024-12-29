import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  FaStar,
  FaPlus,
  FaInfoCircle,
  FaShieldAlt,
  FaRegClosedCaptioning,
} from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import AnimeEpisodes from "../components/AnimeEpisodio/AnimeEpisodes";
import { useAuth } from "../context/AuthContext";
import ModalCrunchylists from "../components/Crunchylists/ModalCrunchylists";

const Series = () => {
  const location = useLocation();
  const anime = location.state?.anime;

  const [showFullSynopsis, setShowFullSynopsis] = useState(false);
  const { user, setUser } = useAuth();
  const [isFavorite, setIsFavorite] = useState(false);
  const [isLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lists, setLists] = useState([]);

  const [selectedAnime, setSelectedAnime] = useState(null);

  const handleAddToCrunchylist = () => {
    setSelectedAnime(anime);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const fetchLists = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/crunchylists",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setLists(data);
    };

    fetchLists();
  }, []);

  const handleAddToList = async (list) => {
    const updatedList = {
      ...list,
      content: [...list.content, anime],
    };

    const token = localStorage.getItem("token");
    await fetch(
      `https://backendclonecrunchyroll.onrender.com/api/users/crunchylists/${list.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedList),
      }
    );

    setIsModalOpen(false);
  };

  const handleCreateNewList = () => {
    console.log("Crear una nueva lista");
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    setIsFavorite(
      user?.favorites?.some((fav) => fav.animeId === anime?.mal_id) || false
    );
  }, [anime?.mal_id, user?.favorites]);

  if (!anime) {
    return (
      <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
        <p className="text-gray-400">No se encontró información del anime.</p>
      </div>
    );
  }

  const toggleSynopsis = () => setShowFullSynopsis(!showFullSynopsis);
  const toggleFavorite = async () => {
    setIsFavorite((prev) => !prev);

    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/favorites/toggle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            animeId: anime.mal_id,
            title: anime.title,
            image: anime.images?.jpg?.large_image_url || anime.image,
            subtitle:
              anime.subtitle ||
              `${anime.type} | ${anime.episodes || "?"} episodios`,
            score: anime.score || null,
            scored_by: anime.scored_by || null,
            rating: anime.rating || null,
            synopsis: anime.synopsis || null,
            type: anime.type || null,
            episodes: anime.episodes || null,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setUser((prevUser) => ({
          ...prevUser,
          favorites: Array.isArray(data.favorites) ? data.favorites : [],
        }));

        setIsFavorite(
          data.favorites.some((fav) => fav.animeId === anime.mal_id)
        );
      } else {
        console.error(data.message);

        setIsFavorite((prev) => !prev);
      }
    } catch (error) {
      console.error("Error al actualizar favoritos:", error);

      setIsFavorite((prev) => !prev);
    }
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen p-6 py-20">
      <div className="flex justify-center mb-8">
        <img
          src={
            anime.images?.jpg?.large_image_url ||
            anime.image ||
            "https://via.placeholder.com/400x300?text=Imagen+no+disponible"
          }
          alt={`Imagen de ${anime.title || "Anime sin título"}`}
          className="rounded-lg shadow-2xl object-cover w-full h-[300px] sm:h-auto md:max-w-[250px] md:max-h-[auto]"
        />
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <div className="lg:w-2/3 space-y-6">
          <h1 className="text-4xl font-bold text-orange-500">
            {anime.title || "Título no disponible"}
          </h1>
          <div className="flex flex-wrap items-center space-x-4 text-sm lg:text-lg">
            <div className="flex items-center">
              <FaRegClosedCaptioning className="text-gray-400 mr-2" size={16} />
              <p>
                {anime.subtitle ||
                  `${anime.type} | ${anime.episodes || "?"} episodios`}
              </p>
            </div>
            <p className="flex items-center">
              <FaStar className="text-yellow-500 mr-2" size={16} />
              {anime.score || "No disponible"}
            </p>
            <p className="flex items-center">
              <FaInfoCircle className="text-blue-500 mr-2" size={16} />
              {anime.scored_by || 0} votos
            </p>
            <p className="flex items-center">
              <FaShieldAlt className="text-green-500 mr-2" size={16} />
              {anime.rating || "No clasificado"}
            </p>
          </div>

          <div>
            <p className="text-gray-300">
              {showFullSynopsis
                ? anime.synopsis || "Sin sinopsis disponible."
                : `${anime.synopsis?.substring(0, 250) || ""}...`}
            </p>
            {anime.synopsis && anime.synopsis.length > 250 && (
              <button
                className="text-orange-500 hover:underline mt-2"
                onClick={toggleSynopsis}>
                {showFullSynopsis ? "Ver menos" : "Ver más"}
              </button>
            )}
          </div>

          <div className="flex flex-col space-y-4 mt-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4 sm:justify-start">
            <button
              disabled={isLoading}
              className={`flex items-center justify-center px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto ${
                isFavorite
                  ? "bg-orange-500 text-gray-900"
                  : "bg-gray-700 text-white"
              } ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              onClick={toggleFavorite}>
              <FaBookmark className="mr-2" size={20} />
              <span>
                {isLoading
                  ? "Cargando..."
                  : isFavorite
                  ? "Eliminar de Favoritos"
                  : "Añadir a Favoritos"}{" "}
              </span>
            </button>

            <button
              className="flex items-center justify-center bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full shadow-md transition-transform transform hover:scale-105 w-full sm:w-auto"
              onClick={() => handleAddToCrunchylist(anime)}>
              <FaPlus className="mr-2" size={20} /> Añadir a CrunchyLista
            </button>
          </div>
        </div>
        <ModalCrunchylists
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          lists={lists}
          onSelectList={handleAddToList}
          onCreateNewList={handleCreateNewList}
          selectedAnime={selectedAnime}
        />

        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="relative group">
            {anime?.trailer?.embed_url ? (
              <iframe
                src={anime.trailer.embed_url}
                title={`Trailer de ${anime.title || "Anime sin título"}`}
                className="w-full h-64 rounded-lg shadow-lg"
                frameBorder="0"
                allow="accelerometer; play; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            ) : (
              <img
                src="https://via.placeholder.com/400x300?text=Trailer+no+disponible"
                alt="Imagen de reemplazo"
                className="rounded-lg shadow-lg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            )}
          </div>
        </div>
      </div>

      <AnimeEpisodes animeId={anime.mal_id} />
    </div>
  );
};

export default Series;
