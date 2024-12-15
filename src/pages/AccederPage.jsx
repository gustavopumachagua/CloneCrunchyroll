import { useEffect } from "react";
import { Link } from "react-router-dom";

const AccederPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Acceder</h1>
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
              <a
                href="#"
                className="text-orange-500 hover:text-orange-400 underline">
                ¿Has olvidado tu contraseña?
              </a>
            </p>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-600 transition">
            ACCEDER
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-6">
          ¿No tienes cuenta?{" "}
          <Link
            to="/register"
            className="text-orange-500 underline hover:text-orange-400">
            CREAR UNA
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AccederPage;
