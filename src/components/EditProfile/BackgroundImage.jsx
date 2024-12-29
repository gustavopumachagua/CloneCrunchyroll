import { FiEdit2 } from "react-icons/fi";
import PropTypes from "prop-types";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const BackgroundImage = ({ backgroundImage, setBackgroundImage }) => {
  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > MAX_FILE_SIZE) {
        alert(
          "La imagen es demasiado pesada. Por favor, selecciona una imagen menor a 2 MB."
        );
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setBackgroundImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative h-40 md:h-48">
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
