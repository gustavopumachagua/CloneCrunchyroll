import React from "react";
import { FaUser, FaCommentDots, FaExternalLinkAlt } from "react-icons/fa";

const NewsItem = ({ news }) => {
  const defaultImage = "https://via.placeholder.com/150?text=No+Image";

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex justify-center">
        <img
          src={news.images?.jpg?.image_url || defaultImage}
          alt={news.title}
          className="w-40 h-40 object-cover rounded-lg mb-4"
        />
      </div>
      <h3 className="text-lg font-bold mb-2 truncate">{news.title}</h3>
      <p className="text-sm text-gray-400 mb-4 line-clamp-3">{news.excerpt}</p>
      <div className="text-sm text-gray-400 flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <FaUser />
          <span>{news.author_username || "Desconocido"}</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaCommentDots />
          <span>{news.comments || 0}</span>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <a
          href={news.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 hover:text-yellow-500 transition-all flex items-center">
          Leer más
          <FaExternalLinkAlt className="ml-2" />
        </a>
        {news.forum_url && (
          <a
            href={news.forum_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-500 transition-all flex items-center">
            Foro
            <FaExternalLinkAlt className="ml-2" />
          </a>
        )}
      </div>
    </div>
  );
};

export default NewsItem;
