import { FiEdit2 } from "react-icons/fi";
import PropTypes from "prop-types";

const BackgroundImage = ({ backgroundImage, setBackgroundImage }) => {
  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result); // Base64 string
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-40 md:h-48">
      {/* Imagen de fondo como <img> */}
      {backgroundImage && (
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-full object-cover"
        />
      )}
      <label className="absolute bottom-2 right-2 bg-gray-900 p-2 rounded-full text-white cursor-pointer hover:bg-gray-700 transition">
        <FiEdit2 size={16} />
        <input
          type="file"
          accept="image/*"
          onChange={handleBackgroundChange}
          className="hidden"
        />
      </label>
    </div>
  );
};

BackgroundImage.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  setBackgroundImage: PropTypes.func.isRequired,
};

export default BackgroundImage;
