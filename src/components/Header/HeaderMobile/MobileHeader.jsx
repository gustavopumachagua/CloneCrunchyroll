import { useState, useEffect } from "react";
import { PremiumIcon, SearchBar, UserMenu, Logo } from "../Navigation/index";
import { MenuButton, MenuDropdown } from "./index";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : ""; // Deshabilitar/Habilitar scroll
      return newState;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = ""; // Habilitar scroll
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Cerrar el menú solo si se hace clic fuera del header y menú
      if (!event.target.closest("header") && !event.target.closest("nav")) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = ""; // Restaurar scroll al desmontar
    };
  }, []);

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Barra de navegación */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Botón de menú y logo */}
        <div className="flex items-center space-x-4">
          <MenuButton toggleMenu={toggleMenu} isOpen={menuOpen} />
          <Logo showText={false} />
        </div>

        {/* Íconos adicionales */}
        <div className="flex items-center space-x-4">
          <PremiumIcon showText={false} />
          <SearchBar />
          <UserMenu />
        </div>
      </div>

      {/* Menú desplegable */}
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-gray-800 shadow-lg transform transition-transform duration-300 z-40`}>
          <MenuDropdown closeMenu={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
