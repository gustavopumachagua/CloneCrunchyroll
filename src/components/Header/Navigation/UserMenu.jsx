import { useState, useRef, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import AccountMenu from "../../Account/AccountMenu";

const UserMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Deshabilitar el scroll cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Botón de Usuario */}
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
        aria-expanded={isOpen}
        aria-controls="user-menu">
        <FiUser size={22} title="Menú de la cuenta" />
      </button>

      {/* Fondo detrás del menú */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 z-40 transition-opacity duration-300"
          style={{ top: "4rem" }} // Ajusta la altura del header (ejemplo: 4rem para h-16)
          onClick={close}
          aria-hidden="true" // Indica que este fondo no es interactivo para lectores de pantalla
        ></div>
      )}

      {/* Menú desplegable */}
      {isOpen && (
        <div
          id="user-menu"
          ref={menuRef}
          className="fixed top-16 right-0  bg-gray-900 z-50 overflow-y-auto shadow-lg border border-gray-700 animate-slide-down"
          style={{
            height: "calc(100vh - 4rem)", // Resta la altura del header (por ejemplo, 4rem)
          }}>
          <AccountMenu />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
