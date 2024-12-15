import { useState } from "react";
import { FiBookmark } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Bookmarks = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const toggleBookmark = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <button
      onClick={toggleBookmark}
      className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
      aria-label="Agregar a Favoritos"
      aria-pressed={isActive}
      role="button">
      <FiBookmark
        size={22}
        title="Favoritos"
        onClick={() => navigate("/acceder")}
      />
    </button>
  );
};

export default Bookmarks;
