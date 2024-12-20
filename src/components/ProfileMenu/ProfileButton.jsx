import { FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileButton = () => {
  const navigate = useNavigate();
  return (
    <button
      className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-4 hover:bg-yellow-600"
      onClick={() => navigate("/premium")}>
      <FaCrown size={16} className="inline-block mr-2" />
      PRUEBA GRATUITA DE 7 DÍAS
    </button>
  );
};

export default ProfileButton;
