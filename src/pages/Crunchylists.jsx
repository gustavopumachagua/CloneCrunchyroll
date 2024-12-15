import { useState } from "react";
const Crunchylists = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [error, setError] = useState("");

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setListName("");
    setError("");
  };

  const handleCreateList = () => {
    if (listName.trim() === "") {
      setError("El nombre de la lista es obligatorio.");
      return;
    }
    console.log("Lista creada:", listName);
    closeModal();
  };

  return (
    <div className="text-center mt-10">
      <h2 className="text-white text-lg">Tus Crunchylists están vacías.</h2>
      <button
        onClick={openModal}
        className="mt-4 bg-orange-500 text-white px-6 py-2 rounded-md hover:bg-orange-600 transition">
        Crear una nueva lista
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-md w-96 relative">
            <h3 className="text-lg font-bold mb-4 text-center">
              Crear Crunchylista
            </h3>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-lg">
              ✖
            </button>
            <div className="mb-4">
              <label htmlFor="listName" className="block text-sm mb-2">
                Nombre de la Lista
              </label>
              <input
                id="listName"
                type="text"
                value={listName}
                onChange={(e) => setListName(e.target.value)}
                className="w-full px-4 py-2 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-orange-500 focus:ring-orange-500"
              />
              {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={handleCreateList}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
                Crear Lista
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 rounded-md border border-gray-500 text-white hover:bg-gray-700 transition">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Crunchylists;
