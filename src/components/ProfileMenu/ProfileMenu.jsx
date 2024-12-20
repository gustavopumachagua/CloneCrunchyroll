import ProfileHeader from "./ProfileHeader";
import ProfileButton from "./ProfileButton";
import ProfileNav from "./ProfileNav";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileMenu = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // Eliminar el token del Local Storage
    localStorage.removeItem("token");

    // Redirigir al usuario a la página de inicio de sesión
    navigate("/acceder");
  };

  return (
    <div className="bg-gray-900 text-white p-6 md:p-8 md:w-96 w-full  h-auto fixed right-0 top-16 flex flex-col shadow-lg">
      <div className="flex-shrink-0">
        <ProfileHeader />
        <ProfileButton />
      </div>
      {/* Área de navegación con scroll */}
      <div className="flex-grow overflow-y-auto">
        <ProfileNav />
      </div>
      {/* Botón Desconectar */}
      <div className="flex-grow overflow-y-auto">
        {/* Botón Desconectar */}
        <li
          onClick={handleLogout}
          className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
          <FaSignOutAlt size={18} />
          <span>Desconectar</span>
        </li>
      </div>
    </div>
  );
};

export default ProfileMenu;
