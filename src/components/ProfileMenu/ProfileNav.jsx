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

const ProfileNav = ({ closeProfileMenu }) => {
  const navigate = useNavigate();

  const navItems = [
    {
      icon: <FaUser size={18} />,
      label: "Cambiar perfil",
      onClick: () => {
        navigate("/changeprofile");
        closeProfileMenu();
      },
    },
    {
      icon: <FaCog size={18} />,
      label: "Opciones",
      onClick: () => {
        navigate("/accountsettings");
        closeProfileMenu();
      },
    },
    {
      icon: <FaHeart size={18} />,
      label: "Favoritos",
      onClick: () => {
        navigate("/mylists/FAVORITOS");
        closeProfileMenu();
      },
    },
    {
      icon: <FaList size={18} />,
      label: "Crunchylistas",
      onClick: () => {
        navigate("/mylists/CRUNCHYLISTAS");
        closeProfileMenu();
      },
    },
    {
      icon: <FaHistory size={18} />,
      label: "Historial",
      onClick: () => {
        navigate("/mylists/HISTORIAL");
        closeProfileMenu();
      },
    },
    {
      icon: <FaBell size={18} />,
      label: "Notificaciones",
      onClick: () => {
        navigate("/notifications");
        closeProfileMenu();
      },
    },
    {
      icon: <FaGift size={18} />,
      label: "Tarjeta regalo",
      onClick: () => {
        navigate("/canjeartarjeta");
        closeProfileMenu();
      },
    },
  ];

  return (
    <nav>
      <ul className="space-y-2">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-4 py-2 px-4 rounded-md hover:bg-gray-800 cursor-pointer"
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
