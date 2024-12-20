import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "../context/AuthContext"; // Importa el contexto

const AccederPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setIsAuthenticated, setUser } = useAuth(); // Obtén funciones del contexto

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita la recarga de página

    try {
      // Llama al backend con los datos del formulario
      const response = await axios.post(
        "http://localhost:5005/api/users/login",
        {
          email,
          password,
        }
      );

      // Almacena el token en localStorage
      const { token, user } = response.data;
      localStorage.setItem("token", token);

      // Actualiza el estado global del contexto
      setIsAuthenticated(true);
      setUser(user);

      // Redirige a la página principal o dashboard
      navigate("/");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Error al iniciar sesión");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center mb-6">Acceder</h1>

        {/* Muestra mensaje de error si existe */}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Dirección de email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Introduce tu email"
              required
            />
          </div>

          {/* Password con opción de mostrar/ocultar */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Introduce tu contraseña"
              required
            />
            {/* Icono de mostrar/ocultar */}
            <span
              className="absolute right-3 top-11 cursor-pointer text-gray-500 hover:text-orange-500"
              onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? (
                <AiFillEyeInvisible size={20} />
              ) : (
                <AiFillEye size={20} />
              )}
            </span>
            <p className="text-xs text-gray-500 mt-1">
              <Link
                to="/resetpassword"
                className="text-orange-500 hover:text-orange-400 underline">
                ¿Has olvidado tu contraseña?
              </Link>
            </p>
          </div>

          {/* Botón de acceder */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-600 transition">
            ACCEDER
          </button>
        </form>

        {/* Link para crear cuenta */}
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
