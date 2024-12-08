import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchAnimeEpisodes, fetchAnimeDetails } from "../../api/animeApi";
import EpisodeList from "./EpisodeList";
import Loader from "../Shared/Loader";
import Error from "../Shared/Error";

const AnimeEpisodes = ({ animeId }) => {
  const [episodes, setEpisodes] = useState([]);
  const [animeImage, setAnimeImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleEpisodes, setVisibleEpisodes] = useState(16);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const episodesData = await fetchAnimeEpisodes(animeId);
        const animeDetails = await fetchAnimeDetails(animeId);

        setEpisodes(episodesData);
        setAnimeImage(animeDetails.images.jpg.large_image_url);
      } catch (err) {
        setError("Error al cargar los datos de episodios.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (animeId) fetchData();
  }, [animeId]);

  const loadMoreEpisodes = () => {
    setVisibleEpisodes((prev) => prev + 16);
  };

  const handlePlayClick = (episode) => {
    navigate("/episode-details", {
      state: { episode, animeImage, episodes },
    });
  };

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return (
    <div className="anime-episodes bg-gray-900 text-white p-10">
      {episodes.length > 0 && (
        <h2 className="text-4xl font-extrabold text-orange-400 text-center bg-gray-800 p-4 rounded-md shadow-lg mb-8">
          Lista de Episodios
        </h2>
      )}
      <EpisodeList
        episodes={episodes}
        animeImage={animeImage}
        visibleEpisodes={visibleEpisodes}
        onPlayClick={handlePlayClick}
      />
      {visibleEpisodes < episodes.length && (
        <button
          onClick={loadMoreEpisodes}
          className="mt-6 bg-orange-500 text-white font-semibold py-3 w-full rounded-lg hover:bg-orange-600 transition-all">
          Ver más
        </button>
      )}
    </div>
  );
};

export default AnimeEpisodes;
