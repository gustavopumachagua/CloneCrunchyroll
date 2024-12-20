const DeleteListModal = ({ isOpen, closeModal, handleDelete }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-bold mb-4 text-center text-red-500">
          Eliminar Crunchylista
        </h3>
        <p className="text-center mb-6">
          ¿De verdad quieres borrar esta Crunchylista? No podrás deshacer esto.
        </p>
        <div className="flex justify-between mt-4">
          <button
            onClick={handleDelete}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-600 transition">
            Borrar Lista
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

export default DeleteListModal;
