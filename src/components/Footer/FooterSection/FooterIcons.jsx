import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterIcons = ({ type }) => {
  const icons = {
    youtube: <FaYoutube />,
    facebook: <FaFacebook />,
    twitter: <FaXTwitter />,
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
  };

  return (
    <span className="text-gray-400 hover:text-white text-lg">
      {icons[type] || null}
    </span>
  );
};

export default FooterIcons;
