import { useEffect, useState } from "react";
import Carousel from "./Carousel";
import { fetchPopularAnimeWithEpisodes } from "../../services/api";

const Hero = () => {
  const [slides, setSlides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAnimeData = async () => {
      try {
        setLoading(true);
        const slidesData = await fetchPopularAnimeWithEpisodes();
        setSlides(slidesData);
      } catch (err) {
        setError("Hubo un problema al cargar los animes populares.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadAnimeData();
  }, []);

  return (
    <section className="relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {loading ? (
        <p className="text-gray-400 text-center py-20">Cargando...</p>
      ) : error ? (
        <p className="text-red-500 text-center py-10">{error}</p>
      ) : (
        <Carousel slides={slides} />
      )}
    </section>
  );
};

export default Hero;
