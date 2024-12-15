import { useState } from "react";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserAlt,
  FaKey,
} from "react-icons/fa";

const AccountSettings = () => {
  const [activeSection, setActiveSection] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const handleUpdateEmail = () => {
    if (!validateEmail(newEmail)) {
      setEmailError("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    setEmailError("");
    alert("Correo actualizado correctamente.");
  };

  const handleUpdatePassword = () => {
    if (newPassword.length < 8) {
      setPasswordError("La contraseña debe tener al menos 8 caracteres.");
      return;
    }
    if (newPassword !== confirmPassword) {
      setPasswordError("Las contraseñas no coinciden.");
      return;
    }
    setPasswordError("");
    alert("Contraseña actualizada correctamente.");
  };

  return (
    <div className="flex flex-col md:flex-row bg-gray-900 min-h-screen text-gray-100">
      <div className="w-full md:w-1/4 bg-gray-800 py-10 px-6">
        <h1 className="text-2xl font-bold mb-6 flex items-center">
          <FaUserAlt className="mr-2 text-blue-400" /> Cuenta
        </h1>
        <ul className="space-y-6">
          <li
            className={`cursor-pointer flex items-center ${
              activeSection === "email" ? "text-blue-400 font-semibold" : ""
            }`}
            onClick={() => setActiveSection("email")}>
            <FaEnvelope className="mr-3" /> Cambiar Email
          </li>
          <li
            className={`cursor-pointer flex items-center ${
              activeSection === "password" ? "text-blue-400 font-semibold" : ""
            }`}
            onClick={() => setActiveSection("password")}>
            <FaKey className="mr-3" /> Cambiar Contraseña
          </li>
        </ul>
      </div>
      <div className="flex-1 py-10 px-6">
        {!activeSection && (
          <p className="text-gray-400 text-lg">
            Selecciona una opción en el menú para comenzar.
          </p>
        )}

        {activeSection === "email" && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">
              Cambiar Correo Electrónico
            </h2>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 mb-4 bg-gray-900">
              <FaEnvelope className="text-gray-400 mr-3" />
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="Nuevo correo electrónico"
                className="w-full bg-transparent text-gray-100 focus:outline-none"
              />
            </div>
            {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
            <button
              onClick={handleUpdateEmail}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Actualizar Correo
            </button>
          </div>
        )}

        {activeSection === "password" && (
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Cambiar Contraseña</h2>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 mb-4 bg-gray-900">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Nueva contraseña"
                className="w-full bg-transparent text-gray-100 focus:outline-none"
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                className="ml-2 text-gray-400 hover:text-gray-200">
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div className="flex items-center border border-gray-700 rounded px-3 py-2 mb-4 bg-gray-900">
              <FaLock className="text-gray-400 mr-3" />
              <input
                type={showPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirmar contraseña"
                className="w-full bg-transparent text-gray-100 focus:outline-none"
              />
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm">{passwordError}</p>
            )}
            <button
              onClick={handleUpdatePassword}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
              Actualizar Contraseña
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AccountSettings;
