import { useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../../context/AuthContext"; // Ajusta el path según tu estructura

const Bookmarks = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [isActive, setIsActive] = useState(false);

  const handleBookmarkClick = () => {
    if (isAuthenticated) {
      navigate("/mylists/FAVORITOS");
    } else {
      navigate("/acceder");
    }
  };

  return (
    <button
      onClick={() => {
        setIsActive((prev) => !prev); // Alterna el estado de marcado
        handleBookmarkClick(); // Redirige según el estado de autenticación
      }}
      className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
      aria-label="Agregar a Favoritos"
      aria-pressed={isActive}
      role="button">
      <FiBookmark size={22} title="Favoritos" />
    </button>
  );
};

export default Bookmarks;
