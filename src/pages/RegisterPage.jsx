import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuth } from "../context/AuthContext";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useAuth();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 6 || /\s/.test(password)) {
      setError(
        "La contraseña debe tener al menos 6 caracteres y no contener espacios."
      );
      return;
    }

    setError("");
    setSuccess("");

    const requestBody = {
      email,
      password,
    };

    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestBody),
        }
      );

      if (response.ok) {
        const data = await response.json();

        localStorage.setItem("token", data.token);
        setIsAuthenticated(true);
        setUser(data.user);
        setSuccess("Cuenta creada exitosamente.");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Error al crear la cuenta.");
      }
    } catch (err) {
      setError("Error de red. Por favor, intenta de nuevo más tarde.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white py-20">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-6 relative">
        <h1 className="text-2xl font-bold text-center mb-6">Crear Cuenta</h1>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Dirección de email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Introduce tu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-2">
              Contraseña
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-orange-500 focus:outline-none"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
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

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          {success && <p className="text-green-500 text-sm mb-4">{success}</p>}
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
