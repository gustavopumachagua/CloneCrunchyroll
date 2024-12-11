import { FaCheckCircle } from "react-icons/fa";

const PreciosPremium = () => {
  const plans = [
    {
      title: "FAN",
      price: "15,00 PEN/mes",
      description: "Accede a todo el catálogo sin interrupciones.",
      benefits: ["Ve anime en 1 dispositivo a la vez"],
      highlight: false,
    },
    {
      title: "MEGA FAN",
      price: "19,00 PEN/mes",
      description:
        "Ideal para compartir y disfrutar en múltiples dispositivos.",
      benefits: ["Ve anime en 4 dispositivos", "Contenido sin conexión"],
      highlight: true,
    },
    {
      title: "MEGA FAN ANUAL",
      price: "190,00 PEN/año",
      description: "Ahorra 16% con el plan anual.",
      benefits: ["Ve anime en 4 dispositivos", "Accede a Game Vault"],
      highlight: false,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-orange-600 via-orange-500 to-orange-400 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">Planes Premium</h2>
        <p className="text-lg mb-12">
          Elige el plan que mejor se adapte a tu estilo de vida y comienza a
          disfrutar del mejor contenido anime.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-lg transition-transform duration-300 ${
              plan.highlight
                ? "bg-yellow-800 text-black transform scale-105"
                : "bg-black text-white"
            }`}>
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-xl font-semibold mb-4">{plan.price}</p>
            <p className="text-gray-300 text-sm mb-6">{plan.description}</p>
            <ul className="space-y-3">
              {plan.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center text-base">
                  <FaCheckCircle className="mr-3 text-yellow-500" />
                  {benefit}
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-3 rounded-md font-bold text-sm ${
                plan.highlight
                  ? "bg-black text-yellow-400 hover:bg-gray-800"
                  : "bg-orange-500 hover:bg-orange-600"
              } transition duration-300`}>
              SELECCIONAR PLAN
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PreciosPremium;
