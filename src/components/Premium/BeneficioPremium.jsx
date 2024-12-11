import { FaPlane } from "react-icons/fa";

const BeneficioPremium = ({ onExplorePlansClick }) => {
  return (
    <div className="bg-gradient-to-t from-gray-900 via-black to-gray-900 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Imagen */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg" // Reemplaza este enlace con la imagen deseada
            alt="Disfruta contenido sin conexión"
            className="rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 max-w-full"
          />
        </div>

        {/* Texto */}
        <div className="text-center lg:text-left">
          <div className="flex items-center justify-center lg:justify-start mb-6">
            <FaPlane className="text-yellow-400 text-6xl" />
          </div>
          <h2 className="text-4xl font-extrabold mb-6 leading-tight">
            Disfruta de contenido sin conexión
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Lleva tus series favoritas contigo, sin importar dónde estés.
            Desbloquea el contenido sin conexión con los planes{" "}
            <span className="text-yellow-400 font-semibold">Mega Fan</span> y{" "}
            <span className="text-yellow-400 font-semibold">Ultimate Fan</span>.
            Perfecto para viajes largos o momentos sin internet.
          </p>
          <button
            onClick={onExplorePlansClick}
            className="bg-yellow-400 text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-500 transition duration-300">
            EXPLORA PLANES PREMIUM
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeneficioPremium;
