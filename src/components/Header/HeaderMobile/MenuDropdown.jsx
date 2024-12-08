import { useState } from "react";
import { Submenu } from "./index";

const MenuDropdown = ({ closeMenu }) => {
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => (prev === menu ? null : menu));
  };

  const handleClickOption = () => {
    closeMenu(); // Cierra el menú cuando se selecciona una opción
  };

  return (
    <nav
      className="fixed top-[0px] left-0 w-full bg-gray-800 text-white z-40 h-[calc(100vh-48px)] overflow-y-auto shadow-lg"
      role="menu">
      <ul className="space-y-4 px-4 py-6 text-sm">
        <li className="text-orange-500 font-semibold">Popular</li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={handleClickOption}>
          Novedades
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={handleClickOption}>
          Alfabético
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={handleClickOption}>
          Temporada de Simulcasts
        </li>
        {/* Submenús */}
        <Submenu
          title="Géneros"
          items={["Acción", "Aventura", "Comedia", "Drama", "Fantasía"]}
          isOpen={submenuOpen === "Géneros"}
          toggle={() => toggleSubmenu("Géneros")}
        />
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={handleClickOption}>
          Juegos
        </li>
        <Submenu
          title="Noticias"
          items={[
            "Todas las noticias",
            "Anime Awards",
            "Eventos y experiencias",
          ]}
          isOpen={submenuOpen === "Noticias"}
          toggle={() => toggleSubmenu("Noticias")}
        />
      </ul>
    </nav>
  );
};

export default MenuDropdown;
