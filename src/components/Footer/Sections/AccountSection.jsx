import { useNavigate } from "react-router-dom";
import { FooterSection } from "../FooterSection/index";
import { accountItems } from "../footerItems";

const AccountSection = () => {
  const navigate = useNavigate();
  const handleNavigation = (item) => {
    if (item === "Crear cuenta") {
      navigate("/register");
    } else if (item === "Acceder") {
      navigate("/acceder");
    }
  };

  return (
    <FooterSection
      title="Cuenta"
      items={accountItems.map((item) => ({
        name: item,
        onClick: () => handleNavigation(item),
      }))}
    />
  );
};

export default AccountSection;
