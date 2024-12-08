import { FaRegClosedCaptioning } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ image, title, subtitle, animeData }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/series", { state: { anime: animeData } });
  };

  return (
    <div
      className="w-48 md:w-56 flex-shrink-0 cursor-pointer"
      onClick={handleCardClick}>
      <div className="relative h-64 md:h-72 rounded-lg overflow-hidden shadow-md">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="mt-3 space-y-1">
        <h3 className="text-sm md:text-base font-bold text-white truncate">
          {title}
        </h3>
        <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-400">
          <FaRegClosedCaptioning />
          <span>{subtitle}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
