import { useState, useEffect } from "react";
import Sidebar from "../components/Crunchylists/Sidebar";
import DashboardContent from "../components/Crunchylists/DashboardContent";
import CreateListModal from "../components/Crunchylists/Modals/CreateListModal";
import RenameListModal from "../components/Crunchylists/Modals/RenameListModal";
import DeleteListModal from "../components/Crunchylists/Modals/DeleteListModal";
import { v4 as uuidv4 } from "uuid";

const Crunchylists = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [listName, setListName] = useState("");
  const [newListName, setNewListName] = useState("");
  const [error, setError] = useState("");
  const [showDashboard, setShowDashboard] = useState(false);
  const [animeList, setAnimeList] = useState([]);
  const [savedLists, setSavedLists] = useState([]);
  const [currentListId, setCurrentListId] = useState(null);
  const [showMenu, setShowMenu] = useState(null);

  const handleAddAnime = (anime) => {
    setAnimeList((prev) => [...prev, anime]);
  };

  const handleRemoveAnime = (animeId) => {
    setAnimeList((prev) => prev.filter((anime) => anime.mal_id !== animeId));
  };
  useEffect(() => {
    const handleClickOutside = () => {
      setShowMenu(null);
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleSaveList = async () => {
    if (listName.trim() !== "") {
      const updatedList = {
        id: currentListId || uuidv4(),
        name: listName,
        content: animeList,
        createdAt: new Date().toISOString(),
      };

      const token = localStorage.getItem("token");
      await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/crunchylists",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedList),
        }
      );

      setSavedLists((prev) => [
        ...prev.filter((list) => list.id !== updatedList.id),
        updatedList,
      ]);
      setShowDashboard(false);
      setListName("");
      setAnimeList([]);
      setCurrentListId(null);
    }
  };

  const openList = (list) => {
    setListName(list.name);
    setAnimeList(list.content);
    setCurrentListId(list.id);
    setShowDashboard(true);
  };

  useEffect(() => {
    const fetchLists = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/crunchylists",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      setSavedLists(data);
    };

    fetchLists();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {!showDashboard ? (
        <div className="text-center mt-10">
          <h2 className="text-2xl font-semibold">Añadir a Crunchylista</h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-md text-lg hover:bg-orange-600 transition">
            Crear una nueva lista
          </button>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedLists.map((list, index) => (
              <li
                key={index}
                className="relative bg-gray-800 p-4 rounded shadow cursor-pointer hover:bg-gray-700">
                <div onClick={() => openList(list)}>
                  <h3 className="text-lg font-semibold">{list.name}</h3>
                  <p className="text-sm text-gray-400">
                    {list.content.length} elemento(s)
                  </p>
                  <p className="text-xs text-gray-500">
                    Creado el: {new Date(list.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div className="absolute top-4 right-4">
                  <button
                    className="text-gray-400 hover:text-white text-2xl"
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentListId(list.id);
                      setShowMenu((prev) =>
                        prev === list.id ? null : list.id
                      );
                    }}>
                    &#x22EE;
                  </button>
                  {showMenu === list.id && (
                    <div className="absolute right-0 mt-2 bg-gray-700 rounded-md shadow-md w-48 z-30">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsRenameModalOpen(true);
                        }}
                        className="block w-full text-left px-4 py-2 text-white hover:bg-gray-800 text-sm">
                        Renombrar Crunchylista
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsDeleteModalOpen(true);
                        }}
                        className="block w-full text-left px-4 py-2 text-red-500 hover:bg-gray-800 text-sm">
                        Eliminar Crunchylista
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
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
            onSaveList={handleSaveList}
          />
        </div>
      )}

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
        currentName={listName}
        setNewListName={setNewListName}
        newListName={newListName}
        handleRename={() => {
          if (newListName.trim() === "") {
            alert("El nombre de la lista no puede estar vacío.");
            return;
          }

          const updatedLists = savedLists.map((list) =>
            list.id === currentListId ? { ...list, name: newListName } : list
          );

          setSavedLists(updatedLists);
          setListName(newListName);
          setIsRenameModalOpen(false);
        }}
      />
      <DeleteListModal
        isOpen={isDeleteModalOpen}
        closeModal={() => setIsDeleteModalOpen(false)}
        handleDelete={async () => {
          const token = localStorage.getItem("token");
          try {
            await fetch(
              `https://backendclonecrunchyroll.onrender.com/api/users/crunchylists/${currentListId}`,
              {
                method: "DELETE",
                headers: { Authorization: `Bearer ${token}` },
              }
            );

            setSavedLists((prev) =>
              prev.filter((list) => list.id !== currentListId)
            );
            setListName("");
            setAnimeList([]);
            setShowDashboard(false);
            setIsDeleteModalOpen(false);
            setCurrentListId(null);
          } catch (error) {
            console.error("Error al eliminar la lista:", error);
          }
        }}
      />
    </div>
  );
};

export default Crunchylists;
