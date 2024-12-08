import axios from "axios";

const API_BASE_URL = "https://api.jikan.moe/v4";

export const fetchNews = async (animeId) => {
  const response = await axios.get(`${API_BASE_URL}/anime/${animeId}/news`);
  return response.data.data;
};
