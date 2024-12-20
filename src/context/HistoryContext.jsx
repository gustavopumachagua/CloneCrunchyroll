import { createContext, useContext, useState } from "react";

const HistoryContext = createContext();

export const useHistory = () => {
  return useContext(HistoryContext);
};

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  const addToHistory = (episode) => {
    setHistory((prevHistory) => [
      ...prevHistory,
      { ...episode, addedDate: new Date().toISOString() },
    ]);
  };

  const removeFromHistory = (id) => {
    setHistory((prevHistory) =>
      prevHistory.filter((item) => item.mal_id !== id)
    );
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <HistoryContext.Provider
      value={{ history, addToHistory, removeFromHistory, clearHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
