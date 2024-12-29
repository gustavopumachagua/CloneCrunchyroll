import { FiMail, FiLock, FiEye, FiEyeOff } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ResetPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState(null);
  const navigate = useNavigate();
  const { setIsAuthenticated, setUser } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVerifyEmail = async () => {
    if (!email) {
      setMessage("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/reset-password/email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setStep(2);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error al verificar el correo:", error);
      setMessage("Hubo un error al verificar el correo.");
    }
  };

  const handleResetPassword = async () => {
    if (!newPassword || !confirmPassword) {
      setMessage("Por favor, completa ambos campos de contraseña.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage("Las contraseñas no coinciden.");
      return;
    }

    try {
      const response = await fetch(
        "https://backendclonecrunchyroll.onrender.com/api/users/reset-password",
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, newPassword }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("token", data.token);

        setIsAuthenticated(true);
        setUser(data.user);

        setMessage("Contraseña cambiada con éxito. Redirigiendo...");
        navigate("/");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      setMessage("Hubo un error al cambiar la contraseña.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-md text-white">
        <h1 className="text-3xl font-semibold text-center mb-4">
          {step === 1 ? "Identificar correo" : "Cambiar contraseña"}
        </h1>

        {message && (
          <div className="bg-orange-500 text-black text-sm rounded-md p-2 mb-4 text-center">
            {message}
          </div>
        )}

        {step === 1 ? (
          <>
            <p className="text-sm text-center text-gray-400 mb-8">
              Ingresa tu correo electrónico para continuar con el proceso de
              restablecimiento de contraseña.
            </p>
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400 mb-2">
                Correo electrónico
              </label>
              <div className="relative">
                <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full bg-transparent border-b border-orange-500 focus:outline-none focus:border-orange-400 text-white pl-10 py-2 placeholder-gray-500"
                />
              </div>
              <button
                onClick={handleVerifyEmail}
                className="w-full mt-6 bg-orange-500 hover:bg-orange-400 text-black font-medium py-2 rounded-sm transition-colors">
                IDENTIFICAR CORREO
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="text-sm text-center text-gray-400 mb-8">
              Ingresa tu nueva contraseña para completar el proceso.
            </p>
            <div className="bg-gray-800 p-6 rounded-md shadow-md">
              <label
                htmlFor="newPassword"
                className="block text-sm font-medium text-gray-400 mb-2">
                Nueva contraseña
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="Tu nueva contraseña"
                  className="w-full bg-transparent border-b border-orange-500 focus:outline-none focus:border-orange-400 text-white pl-10 py-2 placeholder-gray-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>

              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-400 mt-4 mb-2">
                Repite la nueva contraseña
              </label>
              <div className="relative">
                <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  id="confirmPassword"
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Repite tu nueva contraseña"
                  className="w-full bg-transparent border-b border-orange-500 focus:outline-none focus:border-orange-400 text-white pl-10 py-2 placeholder-gray-500"
                />
              </div>

              <button
                onClick={handleResetPassword}
                className="w-full mt-6 bg-orange-500 hover:bg-orange-400 text-black font-medium py-2 rounded-sm transition-colors">
                CAMBIAR CONTRASEÑA
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
