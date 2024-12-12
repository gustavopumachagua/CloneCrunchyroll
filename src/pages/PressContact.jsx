import { useEffect } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import contacto from "../assets/image/contacto.png";

const PressContact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll hacia arriba al cargar la página
  }, []);

  const contactDetails = [
    {
      title: "Correo Electrónico",
      icon: <FaEnvelope className="text-red-500 text-4xl" />,
      details: "prensa@animeworld.com",
    },
    {
      title: "Teléfono",
      icon: <FaPhone className="text-blue-500 text-4xl" />,
      details: "+1 (555) 123-4567",
    },
    {
      title: "Dirección",
      icon: <FaMapMarkerAlt className="text-green-500 text-4xl" />,
      details: "123 Anime Street, Tokyo, Japón",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Encabezado */}
        <h1 className="text-4xl font-bold text-center mb-8">
          Contacto de Prensa
        </h1>
        <p className="text-center text-gray-400 mb-12 text-lg">
          Si eres periodista o tienes alguna consulta relacionada con la prensa,
          no dudes en contactarnos a través de los siguientes medios.
        </p>

        {/* Imagen principal */}
        <div className="mb-12">
          <img
            src={contacto}
            alt="Contacto de Prensa"
            className="rounded-lg shadow-md mx-auto w-full md:w-3/4 lg:w-1/2"
          />
        </div>

        {/* Detalles de Contacto */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactDetails.map((contact, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300">
              <div className="mb-4">{contact.icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{contact.title}</h3>
              <p className="text-gray-400">{contact.details}</p>
            </div>
          ))}
        </div>

        {/* Formulario de Contacto */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6 text-center">
            Envíanos un Mensaje
          </h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg max-w-3xl mx-auto">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-400 mb-2 font-semibold">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-400 mb-2 font-semibold">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Tu correo electrónico"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-400 mb-2 font-semibold">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="5"
                  placeholder="Escribe tu mensaje aquí"></textarea>
              </div>
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 w-full">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressContact;
