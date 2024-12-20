import axios from "axios";

export const getUserData = async () => {
  const token = localStorage.getItem("token"); // Obtén el token de sesión
  if (!token) return null;

  try {
    const response = await axios.get("/api/users/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("No se pudo obtener el perfil del usuario", error);
    return null;
  }
};
