import { useNavigate } from "react-router-dom";

const PremiumButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/premium");
  };

  return (
    <button
      onClick={handleClick}
      className="flex flex-col items-center text-[10px] font-bold text-center cursor-pointer hover:text-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 transition-all duration-300"
      role="button"
      aria-label="Probar Premium gratis">
      <p className="text-yellow-500 tracking-wide">PROBAR GRATIS</p>
      <p className="text-white">PREMIUM</p>
    </button>
  );
};

export default PremiumButton;
