import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import HeroSlide from "./HeroSlide";

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 10000); // Cambio automático cada 10 segundos
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <HeroSlide
          key={slide.id}
          slide={slide}
          isActive={index === currentSlide}
        />
      ))}

      {/* Botones de navegación */}
      <button
        onClick={handlePrev}
        aria-label="Anterior"
        className="hidden md:block absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-orange-500 z-30 transition-all shadow-md focus:outline-none">
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        aria-label="Siguiente"
        className="hidden md:block absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-700 p-3 rounded-full text-white hover:bg-orange-500 z-30 transition-all shadow-md focus:outline-none">
        <FaChevronRight size={24} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-16 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3 z-30">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentSlide === index
                ? "bg-orange-500 scale-125"
                : "bg-gray-500 hover:bg-gray-400"
            }`}></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
