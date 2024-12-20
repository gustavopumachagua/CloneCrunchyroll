import { useEffect, useRef } from "react";

const RenameListModal = ({
  isOpen,
  closeModal,
  currentName,
  newListName,
  setNewListName,
  handleRename,
}) => {
  const inputRef = useRef(null);

  // Autoenfocar el input y configurar el valor inicial al abrir el modal
  useEffect(() => {
    if (isOpen) {
      inputRef.current.focus();
      setNewListName(currentName); // Inicializar con el nombre actual
    }
  }, [isOpen, currentName, setNewListName]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleRename();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4 text-center">
          Renombrar Crunchylista
        </h3>
        <input
          type="text"
          ref={inputRef}
          placeholder="Nuevo nombre"
          value={newListName}
          onChange={(e) => setNewListName(e.target.value)}
          onKeyDown={handleKeyPress}
          className="w-full px-4 py-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:border-orange-500 focus:ring-orange-500 focus:outline-none"
        />
        <div className="flex justify-between mt-6">
          <button
            onClick={handleRename}
            className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition">
            Renombrar lista
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

export default RenameListModal;
