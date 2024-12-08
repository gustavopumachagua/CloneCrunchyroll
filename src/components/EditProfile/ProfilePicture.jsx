import { FiEdit2 } from "react-icons/fi";

const ProfilePicture = () => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        {/* Imagen del perfil */}
        <img
          src="https://via.placeholder.com/150"
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-black"
        />
        {/* Botón de editar */}
        <button className="absolute bottom-1 right-1 bg-gray-900 p-2 rounded-full text-white hover:bg-gray-700 transition">
          <FiEdit2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default ProfilePicture;
