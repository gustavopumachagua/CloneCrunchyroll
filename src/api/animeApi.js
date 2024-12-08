import axios from "axios";

const BASE_URL = "https://api.jikan.moe/v4/anime";

export const fetchAnimeEpisodes = async (animeId) => {
  const response = await axios.get(`${BASE_URL}/${animeId}/episodes`);
  return response.data.data;
};

export const fetchAnimeDetails = async (animeId) => {
  const response = await axios.get(`${BASE_URL}/${animeId}`);
  return response.data.data;
};
