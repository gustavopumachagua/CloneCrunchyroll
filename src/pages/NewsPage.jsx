import { useState, useEffect } from "react";
import {
  FaRegComments,
  FaLink,
  FaExternalLinkAlt,
  FaUserAlt,
  FaCalendarAlt,
} from "react-icons/fa";

const NewsPage = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    try {
      const response = await fetch("https://api.jikan.moe/v4/anime/1/news");
      if (!response.ok) {
        throw new Error(
          "Error al cargar las noticias. Por favor, inténtalo más tarde."
        );
      }
      const data = await response.json();
      setNews(data.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Cargando noticias...</div>
      </div>
    );
  if (error)
    return (
      <div className="flex flex-col justify-center items-center h-screen text-center">
        <p className="text-red-500 font-semibold mb-4">{error}</p>
        <button
          onClick={fetchNews}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Reintentar
        </button>
      </div>
    );

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/150?text=No+Image"; // Imagen predeterminada
  };

  const defaultImage = "https://via.placeholder.com/150?text=No+Image";

  return (
    <div className="max-w-7xl mx-auto py-20">
      <h1 className="text-3xl font-bold text-center mb-8 text-white">
        Últimas Noticias
      </h1>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {news.map((article) => (
          <div
            key={article.mal_id}
            className="bg-gray-800 shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4">
            <div className="flex justify-center">
              <img
                src={
                  article.images &&
                  article.images.jpg &&
                  article.images.jpg.image_url
                    ? article.images.jpg.image_url
                    : defaultImage
                }
                alt={article.title || "Noticia sin título"}
                className="w-40 h-40 object-cover rounded-lg mb-4"
                onError={handleImageError}
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-white">
                {article.title || "Título no disponible"}
              </h2>
              <p className="text-sm text-gray-300 mb-4">
                {article.excerpt || "Descripción no disponible."}
              </p>
              <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                <span className="flex items-center gap-2">
                  <FaUserAlt />{" "}
                  <a
                    href={article.author_url}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer">
                    {article.author_username || "Desconocido"}
                  </a>
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt />
                  {article.date
                    ? new Date(article.date).toLocaleDateString()
                    : "Fecha no disponible"}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 flex items-center gap-2 hover:underline">
                  Leer más <FaExternalLinkAlt />
                </a>
                <a
                  href={article.forum_url || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 ${
                    article.forum_url
                      ? "text-gray-400 hover:text-blue-500"
                      : "text-gray-300 cursor-not-allowed"
                  }`}>
                  Foro <FaLink />
                </a>
              </div>
              <div className="mt-4 flex items-center text-sm text-gray-400">
                <FaRegComments className="mr-2" />
                {article.comments || 0} comentarios
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
