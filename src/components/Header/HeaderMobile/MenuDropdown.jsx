import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MenuDropdown = ({ closeMenu }) => {
  const navigate = useNavigate();
  const [submenuOpen, setSubmenuOpen] = useState(null);

  const toggleSubmenu = (menu) => {
    setSubmenuOpen((prev) => (prev === menu ? null : menu));
  };

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
      navigate("/NewsPage");
    } else {
      const genreId = genreMap[option];
      if (genreId) {
        navigate(`/genre/${genreId}`);
      }
      if (option === "Anime Awards") {
        navigate("/AnimeAwards");
      }
      if (option === "Eventos y experiencias") {
        navigate("/EventsAndExperiences");
      }
      if (option === "Popular") {
        navigate("/PopularAnime");
      }
      if (option === "Novedades") {
        navigate("/Novedades");
      }
      if (option === "Alfabético") {
        navigate("/Alfabetico");
      }
      if (option === "Temporada de Simulcats") {
        navigate("/SeasonalSimulcasts");
      }
      if (option === "Calendario de Lanzamientos") {
        navigate("/ReleaseCalendar");
      }
      if (option === "Videos musicales y conciertos") {
        navigate("/MusicVideos");
      }
      if (option === "Juegos") {
        navigate("/AnimeGames");
      }
    }
    closeMenu?.();
  };

  return (
    <nav
      className="fixed top-[0px] left-0 w-full bg-gray-800 text-white z-40 h-[calc(100vh-48px)] overflow-y-auto shadow-lg"
      role="menu">
      <ul className="space-y-4 px-4 py-6 text-sm">
        <li
          className="text-orange-500 font-semibold cursor-pointer"
          onClick={() => handleOptionClick("Popular")}>
          Popular
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => handleOptionClick("Novedades")}>
          Novedades
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => handleOptionClick("Alfabético")}>
          Alfabético
        </li>
        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => handleOptionClick("Temporada de Simulcats")}>
          Temporada de Simulcasts
        </li>

        <li className="relative">
          <div
            className={`flex items-center justify-between hover:text-gray-300 cursor-pointer ${
              submenuOpen === "Géneros"
                ? "pb-0"
                : "border-b border-gray-600 pb-2"
            }`}
            onClick={() => toggleSubmenu("Géneros")}>
            Géneros
          </div>
          {submenuOpen === "Géneros" && (
            <ul className="pl-4 mt-2 text-gray-400">
              {Object.keys(genreMap).map((genre) => (
                <li
                  key={genre}
                  className="hover:text-gray-300 py-1 cursor-pointer"
                  onClick={() => handleOptionClick(genre)}>
                  {genre}
                </li>
              ))}
            </ul>
          )}
        </li>

        <li
          className="hover:text-gray-300 cursor-pointer"
          onClick={() => handleOptionClick("Juegos")}>
          Juegos
        </li>

        <li className="relative">
          <div
            className={`flex items-center justify-between hover:text-gray-300 cursor-pointer ${
              submenuOpen === "Noticias"
                ? "pb-0"
                : "border-b border-gray-600 pb-2"
            }`}
            onClick={() => toggleSubmenu("Noticias")}>
            Noticias
          </div>
          {submenuOpen === "Noticias" && (
            <ul className="pl-4 mt-2 text-gray-400">
              {[
                "Todas las noticias",
                "Anime Awards",
                "Eventos y experiencias",
              ].map((newsOption) => (
                <li
                  key={newsOption}
                  className="hover:text-gray-300 py-1 cursor-pointer"
                  onClick={() => handleOptionClick(newsOption)}>
                  {newsOption}
                </li>
              ))}
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MenuDropdown;
