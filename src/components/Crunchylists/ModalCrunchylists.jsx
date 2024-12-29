import { useEffect } from "react";
import { FaPlus, FaTimes } from "react-icons/fa";

const ModalCrunchylists = ({
  isOpen,
  onClose,
  lists,
  onSelectList,
  onCreateNewList,
  selectedAnime,
}) => {
  useEffect(() => {
    if (isOpen) {
      // Desactiva el scroll
      document.body.style.overflow = "hidden";
    } else {
      // Reactiva el scroll
      document.body.style.overflow = "";
    }

    // Limpieza para garantizar que el scroll se restaure al desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleAddAnimeToList = (list) => {
    if (!selectedAnime) return;

    const updatedList = {
      ...list,
      content: [...list.content, selectedAnime],
    };
    onSelectList(updatedList);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6">
        <div className="flex justify-center items-center mb-4 relative">
          <h2 className="text-xl text-white">Añadir a Crunchylista</h2>
          <button
            onClick={onClose}
            className="absolute right-0 text-gray-400 hover:text-white">
            <FaTimes />
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex justify-center">
            <button
              onClick={onCreateNewList}
              className="w-2/3 bg-orange-500 text-white py-2 rounded-md text-lg hover:bg-orange-600 transition text-center">
              Crear una nueva lista
            </button>
          </div>

          <ul className="space-y-2">
            {lists.map((list) => (
              <li
                key={list.id}
                className="flex items-center justify-between p-3 bg-gray-700 rounded shadow cursor-pointer hover:bg-gray-600">
                <div onClick={() => onSelectList(list)}>
                  <h3 className="text-lg font-semibold text-white">
                    {list.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {list.content.length} elemento(s)
                  </p>
                </div>
                <FaPlus
                  className="text-white hover:text-gray-300 transition cursor-pointer"
                  onClick={() => handleAddAnimeToList(list)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ModalCrunchylists;
