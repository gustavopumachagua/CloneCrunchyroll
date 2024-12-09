import { FooterIcons, FooterSection } from "../FooterSection/index";
import { connectItems } from "../footerItems";

const ConnectSection = () => {
  const itemsWithIcons = connectItems.map((item) => ({
    name: item.name,
    icon: <FooterIcons type={item.iconType} />,
    url: item.url, // Añadimos la URL al objeto
  }));

  return <FooterSection title="Conecta con nosotros" items={itemsWithIcons} />;
};

export default ConnectSection;
