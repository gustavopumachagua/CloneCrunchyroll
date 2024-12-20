import { useState } from "react";
import Sidebar from "../components/Crunchylists/Sidebar";
import DashboardContent from "../components/Crunchylists/DashboardContent";
import CreateListModal from "../components/Crunchylists/Modals/CreateListModal";
import RenameListModal from "../components/Crunchylists/Modals/RenameListModal";
import DeleteListModal from "../components/Crunchylists/Modals/DeleteListModal";

const Crunchylists = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [newListName, setNewListName] = useState("");
  const [error, setError] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [animeList, setAnimeList] = useState([]);

  const handleAddAnime = (anime) => {
    setAnimeList((prev) => [...prev, anime]); // Añadir nuevo anime
  };

  const handleRemoveAnime = (animeId) => {
    setAnimeList((prev) => prev.filter((anime) => anime.mal_id !== animeId)); // Eliminar anime por ID
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {!showDashboard ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold">
            Tus Crunchylists están vacías.
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition">
            Crear una nueva lista
          </button>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row lg:items-start h-screen">
          <Sidebar listName={listName} onAddAnime={handleAddAnime} />
          <DashboardContent
            animeList={animeList}
            onRemoveAnime={handleRemoveAnime}
            setShowDashboard={setShowDashboard}
            setIsRenameModalOpen={setIsRenameModalOpen}
            setIsDeleteModalOpen={setIsDeleteModalOpen}
          />
        </div>
      )}

      {/* Modales */}
      <CreateListModal
        isOpen={isModalOpen}
        closeModal={() => setIsModalOpen(false)}
        listName={listName}
        setListName={setListName}
        setError={setError}
        setShowDashboard={setShowDashboard}
        error={error}
      />
      <RenameListModal
        isOpen={isRenameModalOpen}
        closeModal={() => setIsRenameModalOpen(false)}
        currentName={listName} // Pasar el nombre actual
        setNewListName={setNewListName}
        newListName={newListName}
        handleRename={() => {
          if (newListName.trim() === "") {
            alert("El nombre de la lista no puede estar vacío.");
            return;
          }
          setListName(newListName);
          setIsRenameModalOpen(false);
        }}
      />

      <DeleteListModal
        isOpen={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
        handleDelete={() => {
          setListName(""); // Borra el nombre de la lista
          setAnimeList([]);
          setShowDashboard(false); // Regresa a la pantalla inicial
          setIsDeleteModalOpen(false); // Cierra el modal
        }}
      />
    </div>
  );
};

export default Crunchylists;
