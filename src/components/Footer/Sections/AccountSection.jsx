import { useNavigate } from "react-router-dom"; // Importar useNavigate
import { FooterSection } from "../FooterSection/index";
import { accountItems } from "../footerItems";

const AccountSection = () => {
  const navigate = useNavigate();

  // Función para manejar el clic en los elementos
  const handleNavigation = (item) => {
    if (item === "Crear cuenta") {
      navigate("/register"); // Navegar a /register
    } else if (item === "Acceder") {
      navigate("/acceder"); // Navegar a /acceder
    }
  };

  return (
    <FooterSection
      title="Cuenta"
      items={accountItems.map((item) => ({
        name: item,
        onClick: () => handleNavigation(item), // Agregar onClick para cada elemento
      }))}
    />
  );
};

export default AccountSection;
