import { useState } from "react";
import { FaEdit, FaPlusCircle, FaCheckCircle } from "react-icons/fa";
import fondo from "../assets/image/Fondo_Cuenta.jpg";

const ChangeProfile = () => {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "GussDev", avatar: "https://via.placeholder.com/100" },
  ]);
  const [activeProfile, setActiveProfile] = useState(profiles[0]?.id || null);

  const handleAddProfile = () => {
    if (profiles.length < 2) {
      const newProfile = {
        id: profiles.length + 1,
        name: `Perfil ${profiles.length + 1}`,
        avatar: "https://via.placeholder.com/100",
      };
      setProfiles([...profiles, newProfile]);
    } else {
      alert("Solo puedes tener un máximo de 2 perfiles.");
    }
  };

  const handleEditProfile = (id) => {
    const updatedProfiles = profiles.map((profile) =>
      profile.id === id
        ? {
            ...profile,
            name:
              prompt("Editar nombre del perfil:", profile.name) || profile.name,
          }
        : profile
    );
    setProfiles(updatedProfiles);
  };

  const handleSwitchProfile = (id) => {
    setActiveProfile(id);
    alert(
      `¡Has cambiado al perfil: ${profiles.find((p) => p.id === id).name}!`
    );
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center px-4 relative">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${fondo})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.4,
        }}></div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white mb-8">
          Gestionar perfiles
        </h1>
        <div className="flex flex-wrap justify-center gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className={`flex flex-col items-center bg-black bg-opacity-50 p-4 rounded-lg relative hover:scale-105 transition-transform ${
                activeProfile === profile.id ? "ring-4 ring-yellow-400" : ""
              }`}>
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-full border-4 border-yellow-400"
              />
              <p className="mt-4 text-white text-lg font-semibold">
                {profile.name}
              </p>
              <button
                onClick={() => handleEditProfile(profile.id)}
                className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                <FaEdit />
              </button>
              <button
                onClick={() => handleSwitchProfile(profile.id)}
                className={`mt-2 px-4 py-2 rounded-lg shadow ${
                  activeProfile === profile.id
                    ? "bg-yellow-400 text-black"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                }`}>
                {activeProfile === profile.id ? (
                  <>
                    <FaCheckCircle className="inline mr-2" />
                    Activo
                  </>
                ) : (
                  "Cambiar"
                )}
              </button>
            </div>
          ))}

          {profiles.length < 2 && (
            <div
              className="flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 rounded-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={handleAddProfile}>
              <div className="flex items-center justify-center w-24 h-24 rounded-full border-4 border-yellow-400 bg-gray-800">
                <FaPlusCircle className="text-yellow-400 text-4xl" />
              </div>
              <p className="mt-4 text-yellow-400 text-lg font-semibold">
                Añadir nuevo
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChangeProfile;
