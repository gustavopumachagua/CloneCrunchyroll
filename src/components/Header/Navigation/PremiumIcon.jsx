import { useState } from "react";
import PremiumSVG from "../../../assets/icons/Premium.svg";
import PremiumButton from "./PremiumButton";

const PremiumTooltip = ({ isVisible }) => {
  return isVisible ? (
    <div
      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-gray-800 text-white text-sm rounded-lg shadow-lg z-20 p-4 transition-opacity duration-300"
      role="tooltip"
      aria-hidden={!isVisible}>
      <h3 className="font-bold text-base mb-2">Prueba Gratuita de 7 días</h3>
      <p>
        El acceso Premium incluye anime ilimitado, sin anuncios y nuevos
        episodios poco después de su emisión en Japón.{" "}
        <span className="font-semibold">¡Pruébalo ya!</span>
      </p>
    </div>
  ) : null;
};

const PremiumIcon = ({ showText = true }) => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  return (
    <div
      className="relative flex items-center space-x-2"
      onMouseEnter={() => setIsTooltipVisible(true)}
      onMouseLeave={() => setIsTooltipVisible(false)}
      tabIndex={0}>
      <img
        src={PremiumSVG}
        alt="Premium Icon"
        className="h-6 w-6 cursor-pointer"
        title="Premium"
      />
      <PremiumTooltip isVisible={isTooltipVisible} />
      {showText && <PremiumButton />}
    </div>
  );
};

export default PremiumIcon;
