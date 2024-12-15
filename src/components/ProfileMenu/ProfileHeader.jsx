import { FiEdit2 } from "react-icons/fi";

const ProfileHeader = () => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <img
        src="https://via.placeholder.com/50"
        alt="Profile"
        className="w-12 h-12 rounded-full"
      />
      <div>
        <h2 className="text-lg font-bold">GussDev</h2>
        <button className="text-gray-400 text-sm hover:text-white">
          <FiEdit2 size={14} className="inline-block mr-1" />
          Editar perfil
        </button>
      </div>
    </div>
  );
};

export default ProfileHeader;
