import { FaCrown } from "react-icons/fa";

const ProfileButton = () => {
  return (
    <button className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-4 hover:bg-yellow-600">
      <FaCrown size={16} className="inline-block mr-2" />
      PRUEBA GRATUITA DE 7 DÍAS
    </button>
  );
};

export default ProfileButton;
