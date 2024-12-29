import {
  BackgroundImage,
  ProfilePicture,
} from "../components/EditProfile/index";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

const ProfilesPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [name, setName] = useState(user?.name || "");
  const [avatar, setAvatar] = useState(user?.avatar || "");
  const [backgroundImage, setBackgroundImage] = useState(
    user?.backgroundImage || ""
  );

  const handleSave = async () => {
    const updatedData = { name, avatar, backgroundImage };
    const result = await updateProfile(updatedData);
    if (result.success) {
      navigate("/", {
        state: { successMessage: "Perfil actualizado correctamente" },
      });
    }
  };

  return (
    <div className="bg-black text-white max-w-md mx-auto md:max-w-lg lg:max-w-2xl rounded-lg overflow-hidden">
      <div className="text-center p-6">
        <h1 className="text-2xl font-bold">Editar perfil</h1>
      </div>

      <div className="relative">
        <BackgroundImage
          backgroundImage={backgroundImage}
          setBackgroundImage={setBackgroundImage}
        />
        <ProfilePicture avatar={avatar} setAvatar={setAvatar} />
      </div>

      <div className="p-6">
        <div className="mb-6">
          <label className="block text-gray-400 text-sm mb-2">
            Nombre del perfil
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-800 text-white p-3 rounded-md border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <p className="text-sm text-gray-500 mt-1">
            Este es el nombre del grupo de tu hogar y puede cambiarse en
            cualquier momento.
          </p>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={handleSave}
            className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition">
            GUARDAR
          </button>
          <button
            className="bg-transparent text-orange-500 px-6 py-2 rounded-md border border-orange-500 hover:bg-orange-500 hover:text-black transition"
            onClick={() => navigate("/")}>
            CANCELAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
