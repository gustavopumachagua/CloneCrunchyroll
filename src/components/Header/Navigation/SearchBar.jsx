import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";

const SearchBar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);

  const handleSearchClick = () => {
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
      navigate("/search"); // Navega a la ruta "/search"
    }, 200); // Simula un efecto de clic
  };

  return (
    <button
      className={`text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full ${
        isActive ? "bg-gray-700" : "hover:bg-gray-700"
      }`}
      onClick={handleSearchClick}
      aria-label="Buscar"
      title="Buscar">
      <FiSearch size={22} />
    </button>
  );
};

export default SearchBar;
