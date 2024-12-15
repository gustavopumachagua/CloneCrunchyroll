import {
  FaUser,
  FaCog,
  FaHeart,
  FaList,
  FaHistory,
  FaBell,
  FaGift,
  FaSignOutAlt,
} from "react-icons/fa";

const navItems = [
  { icon: <FaUser size={18} />, label: "Cambiar perfil" },
  { icon: <FaCog size={18} />, label: "Opciones" },
  { icon: <FaHeart size={18} />, label: "Favoritos" },
  { icon: <FaList size={18} />, label: "Crunchylistas" },
  {
    icon: <FaHistory size={18} />,
    label: "Historial",
    className: "text-orange-500",
  },
  { icon: <FaBell size={18} />, label: "Notificaciones" },
  { icon: <FaGift size={18} />, label: "Tarjeta regalo" },
];

const ProfileNav = () => {
  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer ${
              item.className || ""
            }`}>
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
        <li className="text-sm text-gray-400 px-12">
          ¿Tienes una tarjeta regalo? Canjéala aquí.
        </li>
        <li className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer">
          <FaSignOutAlt size={18} />
          <span>Desconectar</span>
        </li>
      </ul>
    </nav>
  );
};

export default ProfileNav;
