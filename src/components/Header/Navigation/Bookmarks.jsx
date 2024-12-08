import { useState } from "react";
import { FiBookmark } from "react-icons/fi";

const Bookmarks = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleBookmark = () => {
    setIsActive((prev) => !prev); // Alterna el estado del botón
  };

  return (
    <button
      onClick={toggleBookmark}
      className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
      aria-label="Agregar a Favoritos"
      aria-pressed={isActive}
      role="button">
      <FiBookmark size={22} title="Favoritos" />
    </button>
  );
};

export default Bookmarks;
