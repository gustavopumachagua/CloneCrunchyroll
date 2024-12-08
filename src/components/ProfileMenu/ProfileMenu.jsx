import React from "react";
import {
  FaCrown,
  FaUser,
  FaCog,
  FaHeart,
  FaList,
  FaHistory,
  FaBell,
  FaGift,
  FaSignOutAlt,
} from "react-icons/fa";

const ProfileMenu = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen w-full max-w-xs p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <img
          src="https://via.placeholder.com/50"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-bold">GussDev</h2>
          <button className="text-gray-400 text-sm hover:text-white">
            <FaUser size={14} className="inline-block mr-1" />
            Editar perfil
          </button>
        </div>
      </div>

      {/* Botón principal */}
      <button className="w-full bg-yellow-500 text-black font-bold py-2 px-4 rounded-md mb-4 hover:bg-yellow-600">
        <FaCrown size={16} className="inline-block mr-2" />
        PRUEBA GRATUITA DE 7 DÍAS
      </button>

      {/* Menú */}
      <nav>
        <ul className="space-y-2">
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
            <FaUser size={18} />
            <span>Cambiar perfil</span>
          </li>
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
            <FaCog size={18} />
            <span>Opciones</span>
          </li>
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
            <FaHeart size={18} />
            <span>Favoritos</span>
          </li>
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
            <FaList size={18} />
            <span>Crunchylistas</span>
          </li>
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer text-orange-500">
            <FaHistory size={18} />
            <span>Historial</span>
          </li>
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
            <FaBell size={18} />
            <span>Notificaciones</span>
          </li>
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
            <FaGift size={18} />
            <span>Tarjeta regalo</span>
          </li>
          <li className="text-sm text-gray-400 px-12">
            ¿Tienes una tarjeta regalo? Canjéala aquí.
          </li>
          <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
            <FaSignOutAlt size={18} />
            <span>Desconectar</span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ProfileMenu;
