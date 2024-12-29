import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaTimes,
  FaCheck,
} from "react-icons/fa";

const LoginModal = ({ isOpen, onClose, onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);
        onLogin(data.token, data.user);
      } else {
        alert(data.message || "Error al iniciar sesión");
      }
    } catch (error) {
      alert("Error al conectar con el servidor");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white">
          <FaTimes size={20} />
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          <FaLock className="inline-block mr-2" />
          Iniciar sesión
        </h2>

        <div className="relative mb-4">
          <FaEnvelope className="absolute left-3 top-3 text-gray-500" />
          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        <div className="relative mb-6">
          <FaLock className="absolute left-3 top-3 text-gray-500" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="pl-10 pr-10 py-2 w-full bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-500 hover:text-white">
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 flex items-center">
            <FaTimes className="mr-2" />
            Cancelar
          </button>
          <button
            onClick={handleLogin}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 flex items-center">
            <FaCheck className="mr-2" />
            Acceder
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
