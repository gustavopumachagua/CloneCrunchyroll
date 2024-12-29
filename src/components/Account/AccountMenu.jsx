import MenuItem from "./MenuItem";
import PremiumButton from "./PremiumButton";
import { useNavigate } from "react-router-dom";

const AccountMenu = ({ closeMenu }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 max-w-sm mx-auto md:mx-0 rounded-lg shadow-lg">
      <MenuItem
        title="Crear cuenta"
        description="Suscríbete gratis o hazte Premium."
        onClick={() => {
          closeMenu();
          navigate("/register");
        }}
      />

      <MenuItem
        title="Acceder"
        description="¿Ya eres miembro de Crunchyroll? Te damos la bienvenida."
        onClick={() => {
          closeMenu();
          navigate("/acceder");
        }}
      />

      <MenuItem
        title="Tarjeta regalo"
        description="¿Tienes una tarjeta regalo? Canjéala aquí."
        onClick={() => {
          closeMenu();
          navigate("/canjeartarjeta");
        }}
      />

      <PremiumButton
        title="Premium"
        onClick={() => {
          closeMenu();
          navigate("/premium");
        }}
      />
    </div>
  );
};

export default AccountMenu;
