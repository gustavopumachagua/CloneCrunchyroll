import television from "../assets/image/television.jpeg";

const Notifications = () => {
  return (
    <div className="bg-black min-h-screen text-white px-4 md:px-16 py-8">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-8">
        Centro de Notificaciones
      </h1>

      <div className="space-y-8">
        <div>
          <h2 className="text-lg md:text-xl font-semibold border-b border-gray-600 pb-2">
            Notificaciones Antiguas
          </h2>
        </div>

        <div className="flex flex-col md:flex-row bg-gray-800 rounded-lg overflow-hidden shadow-md">
          <div className="md:w-1/3">
            <img
              src={television}
              alt="Notificación"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="md:w-2/3 p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Tu Smart TV aprendió algo nuevo: anime sin fin
              </h3>
              <p className="text-gray-400 mb-4">
                El anime sin pausa está a solo unos clics de distancia. La
                aplicación Crunchyroll está disponible en Smart TV de VIDAA,
                Samsung y LG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
