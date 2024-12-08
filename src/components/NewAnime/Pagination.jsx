import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="flex justify-center items-center mt-6 space-x-4">
    <button
      onClick={() => onPageChange(currentPage - 1)}
      disabled={currentPage === 1}
      className={`px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all ${
        currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
      }`}>
      Anterior
    </button>
    <span className="text-gray-400">
      {currentPage} de {totalPages}
    </span>
    <button
      onClick={() => onPageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
      className={`px-4 py-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-all ${
        currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
      }`}>
      Siguiente
    </button>
  </div>
);

export default Pagination;
