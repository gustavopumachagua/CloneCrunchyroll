import { useEffect, useState } from "react";
import { Carousel } from "./index";
import { fetchTopAnimes } from "../../services/animeService";

const HeroCards = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPopularAnime = async () => {
      try {
        const popularAnimes = await fetchTopAnimes(15);
        setItems(
          popularAnimes.map((anime) => ({
            image: anime.images.jpg.large_image_url || "/default-image.jpg",
            title: anime.title,
            subtitle: `${anime.type} | ${anime.episodes || "?"} episodios`,
            mal_id: anime.mal_id,
            synopsis: anime.synopsis,
            score: anime.score,
            rating: anime.rating,
            trailer: anime.trailer,
          }))
        );
      } catch (err) {
        setError("Hubo un problema al cargar los animes populares.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadPopularAnime();
  }, []);

  return (
    <div className="bg-gray-900 py-16 ">
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        {loading ? (
          <p className="text-gray-400 text-center">
            Cargando animes populares...
          </p>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <Carousel items={items} />
        )}
      </div>
    </div>
  );
};

export default HeroCards;
