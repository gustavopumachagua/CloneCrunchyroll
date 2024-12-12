import { useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dropdown = ({ name, options, isActive, toggle, close }) => {
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  // Manejar bloqueo/desbloqueo de scroll
  useEffect(() => {
    document.body.style.overflow = isActive ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [isActive]);

  // Manejo de clics fuera del Dropdown y presionar Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        close?.();
      }
    };
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        close?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [close]);

  // Mapear géneros a IDs para redirección
  const genreMap = {
    Acción: 1,
    Aventura: 2,
    Comedia: 4,
    Drama: 8,
    Fantasía: 10,
    Musical: 19,
    Romance: 22,
    "Ciencia Ficción": 24,
    Seinen: 42,
    Shoujo: 25,
    Shounen: 27,
    "Recuentos de la Vida": 36,
    Deportes: 30,
    Sobrenatural: 37,
    Thriller: 41,
  };

  const handleOptionClick = (option) => {
    if (option === "Todas las noticias") {
      navigate("/NewsPage"); // Redirigir a la página de noticias
    } else {
      const genreId = genreMap[option];
      if (genreId) {
        navigate(`/genre/${genreId}`);
      }
      if (option === "Anime Awards") {
        navigate("/AnimeAwards"); // Redirigir a la página de noticias
      }
      if (option === "Eventos y experiencias") {
        navigate("/EventsAndExperiences"); // Redirigir a la página de noticias
      }
      if (option === "Popular") {
        navigate("/PopularAnime"); // Redirigir a la página de noticias
      }
      if (option === "Novedades") {
        navigate("/Novedades"); // Redirigir a la página de noticias
      }
      if (option === "Alfabético") {
        navigate("/Alfabetico"); // Redirigir a la página de noticias
      }
      if (option === "Temporada de Simulcats") {
        navigate("/SeasonalSimulcasts");
      }
      if (option === "Calendario de Lanzamientos") {
        navigate("/ReleaseCalendar"); // Redirigir a la página de noticias
      }
      if (option === "Videos musicales y conciertos") {
        navigate("/MusicVideos"); // Redirigir a la página de noticias
      }
      if (option === "Juegos") {
        navigate("/AnimeGames"); // Redirigir a la página de noticias
      } 
    }
    close?.(); // Cierra el Dropdown al seleccionar cualquier opción
  };

  const showCaretIcon =
    name !== "Juegos" &&
    (Array.isArray(options) || options?.type === "two-columns");

  return (
    <>
      {/* Fondo de overlay */}
      {isActive && (
        <div
          className="fixed inset-0 bg-black/75 z-40"
          style={{ top: "4rem" }}
          onClick={close}
          aria-hidden="true"></div>
      )}

      {/* Dropdown principal */}
      <li
        className="relative z-50"
        ref={dropdownRef}
        role="menu"
        aria-haspopup="true"
        aria-expanded={isActive}>
        <div
          onClick={toggle}
          className="flex items-center text-white hover:text-gray-300 cursor-pointer"
          tabIndex={0}>
          {name}
          {showCaretIcon && <FaCaretDown className="ml-2" />}
        </div>

        {isActive && options && (
          <div
            className={`absolute left-0 mt-4 ${
              options.type === "two-columns" ? "w-[870px]" : "w-48"
            } bg-gray-700 text-white rounded shadow-lg overflow-hidden`}
            role="menu">
            {/* Caso dos columnas */}
            {options.type === "two-columns" && (
              <div className="grid grid-cols-[250px_1fr] gap-x-8 p-4">
                <div
                  className="min-w-[200px] border-r border-gray-500 pr-4"
                  role="menuitem">
                  <ul className="space-y-2 text-sm">
                    {options.columns.left.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => handleOptionClick(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="min-w-[400px]">
                  <h3 className="text-sm font-semibold py-2 pb-4">GÉNEROS</h3>
                  <ul className="grid grid-cols-3 gap-2 text-sm">
                    {options.columns.right.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                        onClick={() => handleOptionClick(option)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
            {/* Menú simple */}
            {Array.isArray(options) && (
              <ul>
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-600 cursor-pointer"
                    onClick={() => handleOptionClick(option)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </li>
    </>
  );
};

export default Dropdown;
