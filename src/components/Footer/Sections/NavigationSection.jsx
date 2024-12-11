import { navigationItems } from "../footerItems";
import { FooterSection } from "../FooterSection/index";
import { useNavigate } from "react-router-dom"; // Importar useNavigate

const NavigationSection = () => {
  const navigate = useNavigate();

  // Función para manejar el clic en los elementos
  const handleNavigation = (item) => {
    if (item === "Explorar lo más popular") {
      navigate("/PopularAnime"); // Navegar a /register
    } else if (item === "Explorar los Simulcasts") {
      navigate("/SeasonalSimulcasts"); // Navegar a /acceder
    }
    if (item === "Calendario de lanzamientos") {
      navigate("/ReleaseCalendar"); // Navegar a /register
    } else if (item === "Noticias") {
      navigate("/NewsPage"); // Navegar a /acceder
    }
    if (item === "Juegos") {
      navigate("/AnimeGames"); // Navegar a /register
    }
  };

  return (
    <FooterSection
      title="Navegación"
      items={navigationItems.map((item) => ({
        name: item,
        onClick: () => handleNavigation(item), // Agregar onClick para cada elemento
      }))}
    />
  );
};

export default NavigationSection;
