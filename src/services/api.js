import axios from "axios";

const API_BASE_URL = "https://api.jikan.moe/v4";

export const fetchPopularAnimeWithEpisodes = async (retries = 3) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/top/anime?filter=bypopularity`
    );
    const popularAnimes = response.data.data.slice(0, 6);

    const slidesWithEpisodes = await Promise.all(
      popularAnimes.map(async (anime) => {
        try {
          const episodesResponse = await axios.get(
            `${API_BASE_URL}/anime/${anime.mal_id}/episodes`
          );
          const episodes = episodesResponse.data.data;

          return {
            id: anime.mal_id,
            title: anime.title,
            rating: anime.rating,
            description: anime.synopsis || "Sin descripción disponible.",
            image: anime.images.webp.large_image_url || "/default-image.jpg",
            episodes,
          };
        } catch {
          return {
            id: anime.mal_id,
            title: anime.title,
            rating: anime.rating,
            description: anime.synopsis || "Sin descripción disponible.",
            image: anime.images.webp.large_image_url || "/default-image.jpg",
            episodes: [],
          };
        }
      })
    );

    return slidesWithEpisodes;
  } catch (err) {
    if (retries > 0 && err.response?.status === 429) {
      console.warn("Demasiadas solicitudes. Reintentando...");
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Retraso de 2 segundos
      return fetchPopularAnimeWithEpisodes(retries - 1);
    }
    throw err;
  }
};
