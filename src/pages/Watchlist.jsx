import { useAuth } from "../context/AuthContext";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Watchlist = () => {
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const removeFavorite = async (animeId) => {
    try {
      const response = await fetch(
        "http://localhost:5005/api/users/favorites/toggle",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({ animeId }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        setUser((prevUser) => ({
          ...prevUser,
          favorites: Array.isArray(data.favorites) ? data.favorites : [],
        }));
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error al eliminar favorito:", error);
    }
  };

  const handleCardClick = async (favorite) => {
    if (!favorite.score || !favorite.synopsis) {
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime/${favorite.animeId}`
        );
        const data = await response.json();
        navigate("/series", {
          state: { anime: { ...favorite, ...data.data } },
        });
      } catch (error) {
        console.error("Error al obtener datos del anime:", error);
      }
    } else {
      navigate("/series", { state: { anime: favorite } });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 md:p-6">
      {user.favorites.map((favorite) => (
        <div
          key={favorite.animeId}
          className="bg-gray-800 text-white rounded-lg shadow-lg p-4 flex flex-col cursor-pointer"
          onClick={() => handleCardClick(favorite)} // Agrega la redirección aquí
        >
          <div className="flex justify-center">
            <img
              src={favorite.image}
              alt={favorite.title}
              className="w-40 h-auto object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-orange-500 mb-2">
            {favorite.title}
          </h3>
          <p className="text-gray-400 flex-grow">{favorite.subtitle}</p>
          <button
            className="mt-4 text-red-500 flex items-center space-x-2 hover:underline"
            onClick={(e) => {
              e.stopPropagation(); // Evita que el clic en el botón active la redirección
              removeFavorite(favorite.animeId);
            }}>
            <FaTrash className="mr-2" /> Eliminar
          </button>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;
