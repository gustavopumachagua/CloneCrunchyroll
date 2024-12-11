import MenuItem from "./MenuItem";
import PremiumButton from "./PremiumButton";
import { useNavigate } from "react-router-dom";

const AccountMenu = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 max-w-sm mx-auto md:mx-0 rounded-lg shadow-lg">
      {/* Crear cuenta */}
      <MenuItem
        title="Crear cuenta"
        description="Suscríbete gratis o hazte Premium."
        onClick={() => navigate("/register")} // Redirige al hacer clic
      />

      {/* Acceder */}
      <MenuItem
        title="Acceder"
        description="¿Ya eres miembro de Crunchyroll? Te damos la bienvenida."
        onClick={() => navigate("/acceder")}
      />

      {/* Tarjeta regalo */}
      <MenuItem
        title="Tarjeta regalo"
        description="¿Tienes una tarjeta regalo? Canjéala aquí."
      />

      {/* Botón de prueba gratuita */}
      <PremiumButton />
    </div>
  );
};

export default AccountMenu;
