import { useState } from "react";
import HistoryTabs from "./HistoryTabs";
import HistoryItem from "./HistoryItem";
import { MdOutlineClear } from "react-icons/md";

const History = () => {
  const [activeTab, setActiveTab] = useState("HISTORIAL");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Datos de ejemplo
  const historyData = [
    {
      id: 1,
      title: "S14 E1122 - ¡La última lección! El Impact heredado",
      date: "27/11/2024",
      image: "https://via.placeholder.com/150",
      show: "ONE PIECE",
      watched: true,
    },
    {
      id: 2,
      title:
        "S14 E1121 - Garp y Kuzan. Chocan las creencias de maestro y pupilo",
      date: "27/11/2024",
      image: "https://via.placeholder.com/150",
      show: "ONE PIECE",
      watched: true,
    },
    {
      id: 3,
      title:
        "S14 E1120 - ¡Se agita el mundo! El juicio y los actos de los Cinco Ancianos",
      date: "26/11/2024",
      image: "https://via.placeholder.com/150",
      show: "ONE PIECE",
      watched: true,
    },
    {
      id: 4,
      title:
        "S14 E1119 - ¡El mensaje transmitido! La determinación del rey Cobra",
      date: "26/11/2024",
      image: "https://via.placeholder.com/150",
      show: "ONE PIECE",
      watched: true,
    },
  ];

  return (
    <div className="bg-black text-white px-4 py-6">
      {/* Título */}
      <div className="text-center">
        <h1 className="text-2xl font-bold">📑 Mis Listas</h1>
      </div>

      {/* Tabs */}
      <HistoryTabs activeTab={activeTab} onTabChange={handleTabChange} />

      {/* Contenido */}
      {activeTab === "HISTORIAL" && (
        <div>
          <div className="flex items-center justify-between mt-6">
            <h2 className="text-lg font-bold">Más Reciente</h2>
            <button className="text-orange-500 flex items-center hover:underline">
              LIMPIAR HISTORIAL
              <MdOutlineClear className="ml-1" />
            </button>
          </div>

          {/* Lista de elementos del historial */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {historyData.map((item) => (
              <HistoryItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default History;
