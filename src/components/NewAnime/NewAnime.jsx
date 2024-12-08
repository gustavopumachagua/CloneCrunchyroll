import { useState, useEffect } from "react";
import { fetchNews } from "../../services/animeNewService";
import NewsItem from "./NewsItem";
import Pagination from "./Pagination";
import Loading from "../Shared/Loading";
import ErrorMessage from "../Shared/ErrorMessage";

const NewAnime = ({ animeId }) => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const itemsPerPage = 6;

  useEffect(() => {
    const loadNews = async () => {
      try {
        setLoading(true);
        const data = await fetchNews(animeId);
        setNews(data);
      } catch (err) {
        setError("Hubo un problema al cargar las noticias.");
      } finally {
        setLoading(false);
      }
    };
    loadNews();
  }, [animeId]);

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const paginatedNews = news.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        Noticias Recientes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginatedNews.map((item) => (
          <NewsItem key={item.mal_id} news={item} />
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
};

export default NewAnime;
