import { useEffect, useState } from "react";
import { FaPlusCircle, FaCheckCircle, FaEdit } from "react-icons/fa";
import fondo from "../assets/image/Fondo_Cuenta.jpg";
import LoginModal from "../components/ChangeProfile/LoginModal";
import { useAuth } from "../context/AuthContext";

const ChangeProfile = () => {
  const { user, switchProfile, logout } = useAuth();

  const [profiles, setProfiles] = useState([]);
  const [activeProfile, setActiveProfile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedProfileId, setSelectedProfileId] = useState(null);

  useEffect(() => {
    const fetchProfiles = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://backendclonecrunchyroll.onrender.com/api/users/profiles",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await response.json();

        if (response.ok) {
          setProfiles(data.profiles);
          const currentProfile = data.profiles.find(
            (profile) => profile.id === user?.profileId
          );
          setActiveProfile(currentProfile?.id || null);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error al obtener perfiles:", error);
      }
    };

    fetchProfiles();
  }, [user]);

  const handleAddProfile = () => {
    setIsModalOpen(true);
  };

  const handleLogin = async (token, newProfile) => {
    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/profiles",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newProfile),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setProfiles(data.profiles);
        const newActiveProfile = data.profiles[data.profiles.length - 1];
        setActiveProfile(newActiveProfile.id);
        setMessage(`¡Has cambiado al perfil: ${newActiveProfile.name}!`);
        setTimeout(() => setMessage(null), 3000);
        setIsModalOpen(false);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Error al guardar el perfil:", error);
    }
  };

  const handleSwitchProfile = async (id) => {
    if (id === activeProfile) return;

    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/switch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ profileId: id }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        switchProfile(data.token, data.user);
        setActiveProfile(id);
        const selectedProfile = profiles.find((p) => p.id === id);
        setMessage(`¡Has cambiado al perfil: ${selectedProfile.name}!`);
        setTimeout(() => setMessage(null), 3000);
      } else {
        console.error(data.message || "Error al cambiar de perfil");
      }
    } catch (error) {
      console.error("Error al cambiar de perfil:", error);
    }
  };

  const handleLogout = (id) => {
    setSelectedProfileId(id);
    setIsLogoutModalOpen(true);
  };

  const confirmLogout = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `https://backendclonecrunchyroll.onrender.com/api/users/profiles/${selectedProfileId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();

      if (response.ok) {
        const updatedProfiles = profiles.filter(
          (profile) => profile.id !== selectedProfileId
        );
        setProfiles(updatedProfiles);
        if (selectedProfileId === activeProfile) {
          const nextActiveProfile = updatedProfiles[0]?.id || null;
          setActiveProfile(nextActiveProfile);
        }
        setMessage("Perfil eliminado con éxito");
        setTimeout(() => setMessage(null), 3000);
        setIsLogoutModalOpen(false);
      } else {
        console.error(data.message || "Error al eliminar el perfil");
      }
    } catch (error) {
      console.error("Error al eliminar el perfil:", error);
    }
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

      {message && (
        <div className="absolute top-20 bg-yellow-400 text-black px-6 py-2 rounded-lg shadow-lg z-10 animate-fade">
          {message}
        </div>
      )}

      <div className="relative">
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

              {activeProfile !== profile.id && (
                <button
                  onClick={() => handleLogout(profile.id)}
                  className="absolute top-2 right-2 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700">
                  <FaEdit />
                </button>
              )}
            </div>
          ))}

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
        </div>
      </div>

      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 text-black">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Cerrar sesión</h2>
            <p>¿Estás seguro de que quieres cerrar sesión?</p>
            <div className="mt-4 flex justify-center gap-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => setIsLogoutModalOpen(false)}>
                Cancelar
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
                onClick={confirmLogout}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      )}

      <LoginModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onLogin={handleLogin}
      />
    </div>
  );
};

export default ChangeProfile;
