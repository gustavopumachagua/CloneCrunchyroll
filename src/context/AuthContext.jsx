import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); // Verifica si existe un token

    if (token) {
      // Opcional: cargar los datos del usuario desde el backend
      fetch("https://backendclonecrunchyroll.onrender.com/api/users/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setUser(data); // Asegúrate de que el backend retorne toda la información del usuario
        })
        .catch(() => {
          setIsAuthenticated(false);
          setUser(null);
        });
    }
  }, []);
  const updateProfile = async (updatedData) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedData),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setUser(data.user); // Actualiza el estado del usuario
        return { success: true, message: "Perfil actualizado exitosamente" };
      } else {
        const errorData = await response.json();
        return { success: false, message: errorData.message };
      }
    } catch (error) {
      return { success: false, message: "Error al actualizar el perfil" };
    }
  };
  const switchProfile = (newToken, newUser) => {
    localStorage.setItem("token", newToken);
    setIsAuthenticated(true);
    setUser(newUser);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        updateProfile,
        switchProfile,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
