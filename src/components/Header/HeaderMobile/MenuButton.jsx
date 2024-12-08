const MenuButton = ({ toggleMenu, isOpen }) => {
  return (
    <button
      onClick={toggleMenu}
      className="text-gray-400 hover:text-white focus:outline-none focus:ring focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-300"
      aria-label="Abrir menú"
      aria-expanded={isOpen}
      role="button">
      <div className="flex flex-col justify-center items-center space-y-1 relative">
        {/* Línea superior */}
        <div
          className={`h-1 w-6 bg-gray-400 rounded transition-transform duration-300 ${
            isOpen ? "transform rotate-45 translate-y-2" : ""
          }`}></div>
        {/* Línea media */}
        <div
          className={`h-1 w-6 bg-gray-400 rounded transition-opacity duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}></div>
        {/* Línea inferior */}
        <div
          className={`h-1 w-6 bg-gray-400 rounded transition-transform duration-300 ${
            isOpen ? "transform -rotate-45 -translate-y-2" : ""
          }`}></div>
      </div>
    </button>
  );
};

export default MenuButton;
