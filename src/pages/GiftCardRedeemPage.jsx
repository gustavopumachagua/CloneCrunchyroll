import { useEffect } from "react";
import { FaGift, FaCreditCard, FaRegCheckCircle } from "react-icons/fa";
import regalo from "../assets/image/regalo.avif";

const GiftCardRedeemPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <FaGift className="text-orange-500 text-5xl mx-auto mb-4" />
          <h1 className="text-4xl font-bold">Canjear Tarjeta Regalo</h1>
          <p className="text-gray-400 mt-2">
            Introduce el código de tu tarjeta regalo para canjear beneficios
            exclusivos.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex justify-center">
            <img
              src={regalo}
              alt="Gift Card"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Ingresa tu código</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="giftCode"
                  className="block text-sm font-medium mb-2">
                  Código de la tarjeta
                </label>
                <div className="flex items-center">
                  <FaCreditCard className="text-gray-400 text-lg mr-2" />
                  <input
                    type="text"
                    id="giftCode"
                    placeholder="Ejemplo: ABCD-1234-EFGH"
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-600 transition">
                <FaRegCheckCircle className="mr-2" /> Canjear ahora
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">
            Beneficios que puedes obtener
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <FaGift className="text-orange-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-bold">Suscripción Premium</h3>
              <p className="text-gray-400 mt-2">
                Acceso ilimitado a contenido exclusivo.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <FaCreditCard className="text-orange-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-bold">Descuentos en mercancía</h3>
              <p className="text-gray-400 mt-2">
                Compra tus productos favoritos con descuento.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
              <FaRegCheckCircle className="text-orange-500 text-3xl mx-auto mb-4" />
              <h3 className="text-lg font-bold">Acceso prioritario</h3>
              <p className="text-gray-400 mt-2">
                Sé el primero en disfrutar de nuevas series y películas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GiftCardRedeemPage;
