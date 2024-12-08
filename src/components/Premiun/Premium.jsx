import { AiOutlineCrown } from "react-icons/ai";

const Premium = () => {
  return (
    <div className="relative bg-black text-white">
      {/* Fondo con imagen */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('https://via.placeholder.com/1920x1080')",
        }}></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
        {/* Texto */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Sube de nivel tu experiencia anime con Premium
          </h1>
          <p className="mt-4 text-sm md:text-base">
            Tras tu prueba gratuita de Crunchyroll Premium: Mega Fan tu cuenta
            se renovará automáticamente al precio de 19,00 PEN al mes. Puedes
            cancelar en cualquier momento.
          </p>

          {/* Botones */}
          <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-md text-sm md:text-base">
              <AiOutlineCrown className="mr-2" size={20} />
              PRUEBA MEGA FAN GRATIS DURANTE 7 DÍAS
            </button>
            <button className="text-orange-400 font-bold text-sm md:text-base hover:underline">
              COMPARA TODOS LOS PLANES ↓
            </button>
          </div>
        </div>
        {/* Imagen (opcional para desktop) */}
        <div className="hidden md:block flex-shrink-0">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Anime Posters"
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Premium;
