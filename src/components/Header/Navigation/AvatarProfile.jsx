import { useAuth } from "../../../context/AuthContext";

const AvatarProfile = ({ onClick }) => {
  const { user } = useAuth();

  return (
    <img
      src={
        user?.avatar ||
        "https://via.placeholder.com/400x300?text=Imagen+no+disponible"
      }
      alt="Avatar de usuario"
      className="w-10 h-10 rounded-full cursor-pointer hover:opacity-80 transition duration-200"
      title={user?.email || "Usuario"}
      onClick={onClick}
    />
  );
};

export default AvatarProfile;
