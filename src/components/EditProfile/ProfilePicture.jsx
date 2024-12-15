import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const ProfilePicture = () => {
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfileImage(imageUrl);
    }
  };

  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-12">
      <div className="relative w-24 h-24 md:w-28 md:h-28">
        <img
          src={profileImage}
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

export default ProfilePicture;
