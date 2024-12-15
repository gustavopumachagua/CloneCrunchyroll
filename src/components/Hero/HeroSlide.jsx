import { FaPlay, FaShieldAlt } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const HeroSlide = ({ slide, isActive }) => {
  const navigate = useNavigate();

  const handleStartWatching = () => {
    if (slide.episodes && slide.episodes.length > 0) {
      const firstEpisode = slide.episodes[0];
      navigate("/episode-details", {
        state: {
          episode: firstEpisode,
          animeImage: slide.image,
          episodes: slide.episodes,
        },
      });
    } else {
      alert("No hay episodios disponibles para este anime.");
    }
  };

  return (
    <div
      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out transform ${
        isActive ? "opacity-100 z-30" : "hidden"
      }`}>
      <div className="container mx-auto px-4 h-full flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-10 justify-center">
        <div className="flex-1 text-white space-y-4 max-w-lg order-2 md:order-1">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-orange-400">
            {slide.title}
          </h1>
          <div className="flex items-center space-x-2 text-sm md:text-base text-gray-300">
            <FaShieldAlt className="text-gray-300" />
            <p>{slide.rating}</p>
          </div>
          <p className="text-sm md:text-base text-gray-300 leading-relaxed line-clamp-4">
            {slide.description}
          </p>
          <div className="flex space-x-4 justify-center md:justify-start">
            <button
              onClick={handleStartWatching}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-transform transform hover:scale-105 flex items-center space-x-2">
              <FaPlay />
              <span>COMENZAR A VER E1</span>
            </button>

            <div className="relative group cursor-pointer flex items-center justify-center">
              <FaBookmark
                size={28}
                className="text-white hover:text-orange-500 transition-all"
              />
              <div className="absolute top-10 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gray-800 text-sm text-white rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                Añadir a favoritos
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center order-1 md:order-2">
          <img
            src={slide.image}
            alt={slide.title}
            className="rounded-lg shadow-2xl object-cover w-[100%] h-[360px] sm:h-[480px] md:max-w-[600px] md:max-h-[500px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSlide;
