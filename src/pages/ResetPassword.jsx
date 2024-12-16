import { FiMail } from "react-icons/fi";
import { useEffect } from "react";

const ResetPassword = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md text-white">
        <h1 className="text-3xl font-semibold text-center mb-4">
          Reiniciar contraseña
        </h1>
        <p className="text-sm text-center text-gray-400 mb-8">
          Se enviará un correo para reiniciar tu contraseña a tu dirección de
          email. Podría almacenarse tu dirección IP por motivos de seguridad.
        </p>

        <div className="bg-gray-800 p-6 rounded-md shadow-md">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-400 mb-2">
            Dirección de email
          </label>
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              id="email"
              type="email"
              placeholder="Tu dirección de email"
              className="w-full bg-transparent border-b border-orange-500 focus:outline-none focus:border-orange-400 text-white pl-10 py-2 placeholder-gray-500"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-6 bg-orange-500 hover:bg-orange-400 text-black font-medium py-2 rounded-sm transition-colors">
            ENVIAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
