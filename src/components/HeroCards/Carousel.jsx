import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Card } from "./index";

const Carousel = ({ items }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef(null);

  const updateScrollState = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setScrollPosition(scrollLeft);
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: -width, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth;
      containerRef.current.scrollBy({ left: width, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      updateScrollState();
      containerRef.current.addEventListener("scroll", updateScrollState);
    }
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener("scroll", updateScrollState);
      }
    };
  }, []);

  return (
    <div className="relative overflow-hidden ">
      {/* Título */}
      <h2 className="text-2xl md:text-2xl font-bold text-white mb-4">
        Lo más popular
      </h2>

      {/* Gradientes laterales */}
      <div className="relative">
        {!isAtStart && (
          <div className="absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
        )}
        {!isAtEnd && (
          <div className="absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />
        )}

        {/* Carrusel */}
        <div className="relative flex items-center">
          {/* Botón izquierdo */}
          {!isAtStart && (
            <button
              className="absolute left-2 z-20 bg-black/70 p-3 rounded-full text-white hover:bg-black transition-all duration-300"
              onClick={scrollLeft}>
              <FaChevronLeft size={20} />
            </button>
          )}

          {/* Lista de tarjetas */}
          <div
            ref={containerRef}
            className="flex overflow-x-scroll scrollbar-hide scroll-smooth space-x-4 px-4 flex-nowrap">
            {items.map((item, index) => (
              <div key={index} className="flex-shrink-0">
                <Card
                  image={item.image}
                  title={item.title}
                  subtitle={item.subtitle}
                  animeData={item.animeData || item} // Prioriza item.animeData si existe
                />
              </div>
            ))}
          </div>

          {/* Botón derecho */}
          {!isAtEnd && (
            <button
              className="absolute right-2 z-20 bg-black/70 p-3 rounded-full text-white hover:bg-black transition-all duration-300"
              onClick={scrollRight}>
              <FaChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
