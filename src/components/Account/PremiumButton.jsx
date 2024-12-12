import { FaCrown } from "react-icons/fa";

const PremiumButton = ({onClick }) => {
  return (
    <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 rounded-md flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300" onClick={onClick}>
      <FaCrown className="mr-2 text-lg" />
      PRUEBA GRATUITA DE 7 DÍAS
    </button>
  );
};

export default PremiumButton;
