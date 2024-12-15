import { useState, useEffect } from "react";
import { Dropdown } from "../HeaderDesktop/index";

const Navigation = () => {
  const navItems = [
    {
      name: "Explorar",
      dropdown: {
        type: "two-columns",
        columns: {
          left: [
            "Popular",
            "Novedades",
            "Alfabético",
            "Temporada de Simulcats",
            "Calendario de Lanzamientos",
            "Videos musicales y conciertos",
          ],
          right: [
            "Acción",
            "Aventura",
            "Comedia",
            "Drama",
            "Fantasía",
            "Musical",
            "Romance",
            "Ciencia Ficción",
            "Seinen",
            "Shoujo",
            "Shounen",
            "Recuentos de la Vida",
            "Deportes",
            "Sobrenatural",
            "Thriller",
          ],
        },
      },
    },
    { name: "Juegos", dropdown: ["Juegos"] },
    {
      name: "Noticias",
      dropdown: [
        "Todas las noticias",
        "Anime Awards",
        "Eventos y experiencias",
      ],
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav role="menu" className="flex flex-col md:flex-row md:space-x-8">
      {navItems.map((item, index) => (
        <li
          key={index}
          className="dropdown-container list-none relative"
          role="menuitem"
          aria-haspopup={!!item.dropdown.length}
          aria-expanded={activeDropdown === index}>
          <Dropdown
            name={item.name}
            options={item.dropdown}
            isActive={activeDropdown === index}
            toggle={() => toggleDropdown(index)}
          />
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
