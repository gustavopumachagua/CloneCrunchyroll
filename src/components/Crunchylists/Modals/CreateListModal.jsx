import { useEffect, useRef } from "react";

const CreateListModal = ({
  isOpen,
  closeModal,
  listName,
  setListName,
  setError,
  setShowDashboard,
  error,
}) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleCreateList = () => {
    if (listName.trim() === "") {
      setError("El nombre de la lista es obligatorio.");
      return;
    }
    setShowDashboard(true);
    closeModal();
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleCreateList();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4 text-center">
          Crear Crunchylista
        </h3>
        <input
          type="text"
          ref={inputRef}
          placeholder="Nombre de la lista"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
        />
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleCreateList}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
            Crear Lista
          </button>
          <button
            onClick={closeModal}
            className="px-5 py-2 rounded-lg border border-gray-500 text-white hover:bg-gray-700 transition">
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateListModal;
