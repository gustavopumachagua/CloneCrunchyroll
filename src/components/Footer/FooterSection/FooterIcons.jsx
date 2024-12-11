import { FaYoutube, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const FooterIcons = ({ type }) => {
  const links = {
    youtube: "https://www.youtube.com/user/crunchyrollspanish/featured",
    facebook: "https://www.facebook.com/Crunchyroll.es",
    twitter: "https://x.com/crunchyroll_es",
    instagram: "https://www.instagram.com/crunchyroll_es/",
    tiktok: "https://www.tiktok.com/@crunchyroll_la",
  };

  const icons = {
    youtube: <FaYoutube />,
    facebook: <FaFacebook />,
    twitter: <FaXTwitter />,
    instagram: <FaInstagram />,
    tiktok: <FaTiktok />,
  };

  if (!icons[type]) return null;

  return (
    <a
      href={links[type]}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white text-lg">
      {icons[type]}
    </a>
  );
};

export default FooterIcons;
