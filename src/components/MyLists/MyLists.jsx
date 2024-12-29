import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa";
import { MdFavorite, MdHistory, MdListAlt } from "react-icons/md";
import Favoritos from "../../pages/Watchlist";
import Crunchylistas from "../../pages/Crunchylists";
import Historial from "../../pages/History";

const MyLists = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  const location = useLocation();
  const activeTab =
    location.pathname.split("/")[2]?.toUpperCase() || "FAVORITOS";

  const renderContent = () => {
    switch (activeTab) {
      case "FAVORITOS":
        return <Favoritos />;
      case "CRUNCHYLISTAS":
        return <Crunchylistas />;
      case "HISTORIAL":
        return <Historial />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black text-white px-4 py-20 min-h-screen">
      <div className="text-center">
        <h1 className="font-bold flex justify-center items-center space-x-2">
          <FaRegBookmark className="text-2xl" />
          <span className="text-3xl">Mis Listas</span>
        </h1>
      </div>
      <div className="flex justify-center mt-6 border-b border-gray-700">
        {[
          { name: "FAVORITOS", icon: MdFavorite },
          { name: "CRUNCHYLISTAS", icon: MdListAlt },
          { name: "HISTORIAL", icon: MdHistory },
        ].map((tab) => (
          <button
            key={tab.name}
            onClick={() => navigate(`/mylists/${tab.name}`)}
            className={`px-4 py-2 flex items-center text-sm md:text-base ${
              activeTab === tab.name
                ? "text-orange-500 border-b-2 border-orange-500 font-bold"
                : "text-gray-400"
            } hover:text-white`}>
            <tab.icon className="mr-2" />
            {tab.name}
          </button>
        ))}
      </div>

      <div className="mt-6">{renderContent()}</div>
    </div>
  );
};

export default MyLists;
