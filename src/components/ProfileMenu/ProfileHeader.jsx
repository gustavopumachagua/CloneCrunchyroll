import { useAuth } from "../../context/AuthContext";
import { FiEdit2 } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfileHeader = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <div className="flex items-center gap-4 mb-6">
      <img
        src={
          user?.avatar ||
          "https://via.placeholder.com/400x300?text=Imagen+no+disponible"
        }
        alt="Avatar de usuario"
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h2 className="text-lg font-bold">{user?.name || "Usuario"}</h2>
        <button
          className="text-gray-400 text-sm hover:text-white"
          onClick={() => navigate("/profiles")}>
          <FiEdit2 size={14} className="inline-block mr-1" />
          Editar perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
