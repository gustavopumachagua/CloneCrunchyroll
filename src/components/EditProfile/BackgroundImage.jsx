import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";

const BackgroundImage = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://via.placeholder.com/600x200"
  );

  const handleBackgroundChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setBackgroundImage(imageUrl);
    }
  };

  return (
    <div
      className="relative bg-cover bg-center h-40 md:h-48"
      style={{ backgroundImage: `url(${backgroundImage})` }}>
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

export default BackgroundImage;
