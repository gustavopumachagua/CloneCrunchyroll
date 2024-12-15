import { useNavigate } from "react-router-dom";
import { crunchyrollItems } from "../footerItems";
import { FooterSection } from "../FooterSection/index";

const CrunchyrollSection = () => {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    if (item === "Comienza tu Prueba Gratuita") {
      navigate("/premium");
    } else if (item === "Acerca") {
      navigate("/Acerca");
    }
    if (item === "Centro de ayuda") {
      navigate("/centroayuda");
    } else if (item === "Términos de Uso") {
      navigate("/terminouso");
    }
    if (item === "Política de Privacidad") {
      navigate("/politicaprivacidad");
    } else if (item === "Herramienta de aceptación de cookies") {
      navigate("/cookies");
    }
    if (item === "Contacto de prensa") {
      navigate("/contactoprensa");
    } else if (item === "Hazte con nuestras aplicaciones") {
      navigate("/aplicaciones");
    }
    if (item === "Canjear Tarjeta Regalo") {
      navigate("/canjeartarjeta");
    } else if (item === "Empleo") {
      navigate("/empleo");
    }
  };
  return (
    <FooterSection
      title="Crunchyroll"
      items={crunchyrollItems.map((item) => ({
        name: item,
        onClick: () => handleNavigation(item),
      }))}
    />
  );
};

export default CrunchyrollSection;
