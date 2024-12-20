import {
  FaUser,
  FaCog,
  FaHeart,
  FaList,
  FaHistory,
  FaBell,
  FaGift,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileNav = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      icon: <FaUser size={18} />,
      label: "Cambiar perfil",
      onClick: () => navigate("/changeprofile"),
    },
    {
      icon: <FaCog size={18} />,
      label: "Opciones",
      onClick: () => navigate("/accountsettings"),
    },
    {
      icon: <FaHeart size={18} />,
      label: "Favoritos",
      onClick: () => navigate("/mylists/FAVORITOS"),
    },
    {
      icon: <FaList size={18} />,
      label: "Crunchylistas",
      onClick: () => navigate("/mylists/CRUNCHYLISTAS"),
    },
    {
      icon: <FaHistory size={18} />,
      label: "Historial",
      onClick: () => navigate("/mylists/HISTORIAL"),
    },
    {
      icon: <FaBell size={18} />,
      label: "Notificaciones",
      onClick: () => navigate("/notifications"),
    },
    {
      icon: <FaGift size={18} />,
      label: "Tarjeta regalo",
      onClick: () => navigate("/canjeartarjeta"),
    },
  ];

  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer ${
              item.className || ""
            }`}
            onClick={item.onClick}>
            {item.icon}
            <span>{item.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default ProfileNav;
