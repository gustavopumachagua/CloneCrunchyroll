import axios from "axios";

const API_BASE_URL = "https://api.jikan.moe/v4";

export const fetchTopAnimes = async (limit = 15, retries = 3) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/top/anime?limit=${limit}`
    );
    return response.data.data;
  } catch (error) {
    if (error.response?.status === 429 && retries > 0) {
      console.warn("Demasiadas solicitudes. Reintentando...");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Retraso de 2 segundos
      return fetchTopAnimes(limit, retries - 1); // Reintenta con menos intentos
    }
    throw error; // Si no es un error 429 o no quedan reintentos, propaga el error
  }
};