import { navigationItems } from "../footerItems";
import { FooterSection } from "../FooterSection/index";
import { useNavigate } from "react-router-dom";

const NavigationSection = () => {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    if (item === "Explorar lo más popular") {
      navigate("/PopularAnime");
    } else if (item === "Explorar los Simulcasts") {
      navigate("/SeasonalSimulcasts");
    }
    if (item === "Calendario de lanzamientos") {
      navigate("/ReleaseCalendar");
    } else if (item === "Noticias") {
      navigate("/NewsPage");
    }
    if (item === "Juegos") {
      navigate("/AnimeGames");
    }
  };

  return (
    <FooterSection
      title="Navegación"
      items={navigationItems.map((item) => ({
        name: item,
        onClick: () => handleNavigation(item),
      }))}
    />
  );
};

export default NavigationSection;
