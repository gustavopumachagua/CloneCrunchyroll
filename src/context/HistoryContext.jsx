import { createContext, useContext, useState, useEffect } from "react";

const HistoryContext = createContext();

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      setLoading(true);
      const token = localStorage.getItem("token");
      try {
        const response = await fetch(
          "https://backendclonecrunchyroll.onrender.com/api/users/profile",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          setHistory(data.history);
        } else {
          console.error("Error al cargar el historial:", response.statusText);
        }
      } catch (error) {
        console.error("Error al comunicarse con el backend:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const addToHistory = async (episode) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/history",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ...episode,
            addedDate: new Date().toISOString(),
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setHistory(data.history);
      } else {
        console.error("Error al añadir al historial:", response.statusText);
      }
    } catch (error) {
      console.error("Error al comunicarse con el backend:", error);
    }
  };

  const removeFromHistory = async (id) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `https://backendclonecrunchyroll.onrender.com/api/users/history/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setHistory(data.history);
      } else {
        console.error("Error al eliminar del historial:", response.statusText);
      }
    } catch (error) {
      console.error("Error al comunicarse con el backend:", error);
    }
  };

  const clearHistory = async () => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/history",
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setHistory(data.history);
      } else {
        console.error("Error al limpiar el historial:", response.statusText);
      }
    } catch (error) {
      console.error("Error al comunicarse con el backend:", error);
    }
  };
  const refreshHistory = async () => {
    setLoading(true);
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/profile",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setHistory(data.history);
      } else {
        console.error("Error al cargar el historial:", response.statusText);
      }
    } catch (error) {
      console.error("Error al comunicarse con el backend:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HistoryContext.Provider
      value={{
        history,
        addToHistory,
        removeFromHistory,
        clearHistory,
        setHistory,
        refreshHistory,
        loading,
      }}>
      {children}
    </HistoryContext.Provider>
  );
};
