import { useEffect } from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white py-20">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6 relative">
        <h1 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Dirección de email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Introduce tu email"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Introduce tu contraseña"
              required
            />
            <p className="text-xs text-gray-500 mt-1">
              Utiliza al menos 6 caracteres, sin espacios en blanco.
            </p>
          </div>

          <div className="mb-4 flex items-start">
            <input
              type="checkbox"
              id="newsletter"
              className="h-5 w-5 text-orange-500 bg-gray-800 border-gray-700 rounded focus:ring-orange-500"
            />
            <label
              htmlFor="newsletter"
              className="ml-2 text-sm text-gray-300 leading-snug">
              Quiero recibir todas las novedades de Crunchyroll, promociones y
              noticias. Todas las comunicaciones están sujetas a nuestra{" "}
              <a
                href="#"
                className="text-orange-500 underline hover:text-orange-400">
                Política de privacidad.
              </a>{" "}
              Puedes desuscribirte en cualquier momento.
            </label>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            Al crear una cuenta muestras tu conformidad con nuestras{" "}
            <a
              href="#"
              className="text-orange-500 underline hover:text-orange-400">
              Condiciones de uso
            </a>{" "}
            y nuestra{" "}
            <a
              href="#"
              className="text-orange-500 underline hover:text-orange-400">
              Política de privacidad
            </a>
            , confirmando además que tienes 16 años o más.
          </p>

          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-600 transition">
            CREAR CUENTA
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          ¿Ya tienes una cuenta?{" "}
          <Link
            to="/acceder"
            className="text-orange-500 underline hover:text-orange-400">
            ACCEDER
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
