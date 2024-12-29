import { FiEdit2 } from "react-icons/fi";
import PropTypes from "prop-types";

const MAX_FILE_SIZE = 2 * 1024 * 1024;

const ProfilePicture = ({ avatar, setAvatar }) => {
  const handleProfileChange = (e) => {
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
        setAvatar(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <img
          src={avatar}
          alt="Profile"
          className="w-full h-full object-cover rounded-full border-4 border-black"
        />
        <label className="absolute bottom-1 right-1 bg-gray-900 p-2 rounded-full text-white cursor-pointer hover:bg-gray-700 transition">
          <FiEdit2 size={16} />
          <input
            type="file"
            accept="image/*"
            onChange={handleProfileChange}
            className="hidden"
          />
        </label>
      </div>
    </div>
  );
};

ProfilePicture.propTypes = {
  avatar: PropTypes.string.isRequired,
  setAvatar: PropTypes.func.isRequired,
};

export default ProfilePicture;
