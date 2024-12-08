import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const PreciosPremium = () => {
  const plans = [
    {
      title: "FAN",
      price: "15,00 PEN/mes",
      description:
        "Disfruta de todo el catálogo de Crunchyroll sin anuncios y de los nuevos episodios poco después de su emisión en Japón.",
      benefits: ["Ve anime en 1 dispositivo a la vez"],
      highlight: false,
    },
    {
      title: "MEGA FAN",
      price: "19,00 PEN/mes",
      description:
        "Disfruta de todo el catálogo de Crunchyroll sin anuncios y de los nuevos episodios poco después de su emisión en Japón.",
      benefits: [
        "Ve anime en 4 dispositivos a la vez",
        "Contenido sin conexión",
        "Accede a Crunchyroll Game Vault, un catálogo de juegos gratuitos",
      ],
      highlight: true,
    },
    {
      title: "MEGA FAN",
      price: "190,00 PEN/año",
      description:
        "Disfruta de todo el catálogo de Crunchyroll sin anuncios y de los nuevos episodios poco después de su emisión en Japón.",
      benefits: [
        "Ve anime en 4 dispositivos a la vez",
        "Contenido sin conexión",
        "Accede a Crunchyroll Game Vault, un catálogo de juegos gratuitos",
        "16% de descuento sobre el plan mensual (cargo cada 12 meses)",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="bg-orange-500 min-h-screen py-12 px-4 flex items-center justify-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl w-full">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-lg ${
              plan.highlight ? "bg-yellow-400" : "bg-black"
            } text-white relative`}>
            {plan.highlight && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-black font-bold px-4 py-2 rounded-full">
                LO MÁS POPULAR
              </div>
            )}
            <h3 className="text-2xl font-bold">{plan.title}</h3>
            <p className="text-lg font-semibold mt-2">{plan.price}</p>
            <p className="text-sm text-gray-300 mt-4">{plan.description}</p>
            <button className="mt-6 bg-yellow-500 text-black py-2 px-4 rounded-full font-bold hover:bg-yellow-400 transition">
              COMENZAR PRUEBA GRATUITA DE 7 DÍAS
            </button>
            <button className="mt-2 text-yellow-400 underline">
              SALTAR LA PRUEBA GRATUITA
            </button>
            <ul className="mt-4 space-y-2">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-sm">
                  <FaCheckCircle className="text-yellow-500 mr-2" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="text-xs text-center text-white mt-6 max-w-4xl mx-auto">
        Promoción de prueba gratuita válida para nuevos suscriptores que cumplan
        los requisitos. El plan se renueva automáticamente tras el periodo de
        prueba al precio seleccionado en la comparación de planes. Puede
        cancelarse en cualquier momento. Se aplican restricciones y otras
        condiciones, incluidos cambios en los precios, descuentos, contenidos y
        características.
      </div>
    </div>
  );
};

export default PreciosPremium;
