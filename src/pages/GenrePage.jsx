import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Carousel } from "../components/HeroCards/index";
import {
  FaFire,
  FaRocket,
  FaLaugh,
  FaHeart,
  FaDragon,
  FaMusic,
  FaRunning,
  FaGhost,
  FaBook,
  FaLeaf,
  FaFilm,
  FaChevronRight,
} from "react-icons/fa";

const GenrePage = () => {
  const { genreId } = useParams();
  const navigate = useNavigate();
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const genreDetails = {
    1: {
      title: "Acción",
      description: "¡Tu dosis de explosiones diaria!",
      icon: <FaFire />,
    },
    2: {
      title: "Aventura",
      description: "¡Explora mundos increíbles!",
      icon: <FaRocket />,
    },
    4: {
      title: "Comedia",
      description: "¡Risas aseguradas en cada episodio!",
      icon: <FaLaugh />,
    },
    8: {
      title: "Drama",
      description: "Historias profundas y conmovedoras.",
      icon: <FaHeart />,
    },
    10: {
      title: "Fantasía",
      description: "¡Entra en un mundo lleno de magia!",
      icon: <FaDragon />,
    },
    24: {
      title: "Ciencia Ficción",
      description: "Explora el universo y más allá.",
      icon: <FaRocket />,
    },
    22: {
      title: "Romance",
      description: "Historias de amor inolvidables.",
      icon: <FaHeart />,
    },
    19: {
      title: "Musical",
      description: "¡Deja que la música te guíe!",
      icon: <FaMusic />,
    },
    30: {
      title: "Deportes",
      description: "¡Siente la pasión del deporte!",
      icon: <FaRunning />,
    },
    37: {
      title: "Sobrenatural",
      description: "¡Descubre lo paranormal!",
      icon: <FaGhost />,
    },
    25: {
      title: "Shoujo",
      description: "Dramas románticos y juveniles.",
      icon: <FaLeaf />,
    },
    27: {
      title: "Shounen",
      description: "¡Acción y amistad en su máxima expresión!",
      icon: <FaFire />,
    },
    36: {
      title: "Recuentos de Vida",
      description: "Relatos cotidianos y conmovedores.",
      icon: <FaBook />,
    },
    41: {
      title: "Thriller",
      description: "Historias llenas de suspenso.",
      icon: <FaFilm />,
    },
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [genreId]);

  useEffect(() => {
    const fetchAnimeByGenre = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?genres=${genreId}`
        );
        const data = await response.json();
        setAnimeList((data.data || []).slice(0, 8));
      } catch (error) {
        console.error("Error al obtener los animes:", error);
        setError("Hubo un problema al cargar los animes.");
      } finally {
        setLoading(false);
      }
    };
    fetchAnimeByGenre();
  }, [genreId]);

  if (loading) {
    return (
      <div className="text-white text-center min-h-screen">Cargando...</div>
    );
  }

  if (error) {
    return <div className="text-red-500 text-center min-h-screen">{error}</div>;
  }

  const currentGenre = genreDetails[genreId] || {
    title: "Género desconocido",
    description: "Disfruta de nuestra colección de anime.",
    icon: null,
  };

  const handleViewAllClick = () => {
    navigate(`/genre/${genreId}/all`);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-20 px-10">
      <div className="text-center mb-8">
        <div className="flex justify-center text-4xl">{currentGenre.icon}</div>
        <h1 className="text-3xl font-bold">{currentGenre.title}</h1>
        <p className="text-lg text-gray-400">{currentGenre.description}</p>
      </div>

      <div className="flex justify-end mb-4">
        <button
          onClick={handleViewAllClick}
          className="text-sm text-gray-300 hover:text-white flex items-center space-x-2">
          <span>Ver Todo</span>
          <FaChevronRight />
        </button>
      </div>

      <Carousel
        items={animeList.map((anime) => ({
          image: anime.images?.jpg?.image_url || "/default-image.jpg",
          title: anime.title || "Título desconocido",
          subtitle: `${anime.type || "Desconocido"} | ${
            anime.episodes || "?"
          } episodios`,
          animeData: anime,
        }))}
      />
    </div>
  );
};

export default GenrePage;
