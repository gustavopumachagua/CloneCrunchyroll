const HistoryTabs = ({ activeTab, onTabChange }) => {
  const tabs = ["FAVORITOS", "CRUNCHYLISTAS", "HISTORIAL"];

  return (
    <div className="flex justify-center mt-6 border-b border-gray-700">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-4 py-2 text-sm md:text-base ${
            activeTab === tab
              ? "text-orange-500 border-b-2 border-orange-500 font-bold"
              : "text-gray-400"
          } hover:text-white`}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default HistoryTabs;
