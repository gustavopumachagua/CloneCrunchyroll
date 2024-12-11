import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { crunchyrollItems } from "../footerItems";
import { FooterSection } from "../FooterSection/index";

const CrunchyrollSection = () => {
  const navigate = useNavigate();

  // Función para manejar el clic en los elementos
  const handleNavigation = (item) => {
    if (item === "Comienza tu Prueba Gratuita") {
      navigate("/premium"); // Navegar a /register
    } else if (item === "Acerca") {
      navigate("/Acerca"); // Navegar a /acceder
    }
    if (item === "Centro de ayuda") {
      navigate("/centroayuda"); // Navegar a /register
    } else if (item === "Términos de Uso") {
      navigate("/terminouso"); // Navegar a /acceder
    }

    if (item === "Política de Privacidad") {
      navigate("/politicaprivacidad"); // Navegar a /register
    } else if (item === "Herramienta de aceptación de cookies") {
      navigate("/cookies"); // Navegar a /acceder
    }
    if (item === "Contacto de prensa") {
      navigate("/contactoprensa"); // Navegar a /register
    } else if (item === "Hazte con nuestras aplicaciones") {
      navigate("/aplicaciones"); // Navegar a /acceder
    }
    if (item === "Canjear Tarjeta Regalo") {
      navigate("/canjeartarjeta"); // Navegar a /register
    } else if (item === "Empleo") {
      navigate("/empleo"); // Navegar a /acceder
    }
  };
  return (
    <FooterSection
      title="Crunchyroll"
      items={crunchyrollItems.map((item) => ({
        name: item,
        onClick: () => handleNavigation(item), // Agregar onClick para cada elemento
      }))}
    />
  );
};

export default CrunchyrollSection;
