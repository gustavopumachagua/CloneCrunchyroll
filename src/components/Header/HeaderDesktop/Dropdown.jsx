import { useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

const Dropdown = ({ name, options, isActive, toggle, close }) => {
  const dropdownRef = useRef(null);

  // Bloquear/desbloquear scroll cuando el Dropdown está abierto/cerrado
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto"; // Resetea overflow al desmontar
    };
  }, [isActive]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        close(); // Cierra el Dropdown
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        close(); // Cierra el Dropdown con la tecla Esc
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [close]);

  const showCaretIcon =
    name !== "Juegos" &&
    (Array.isArray(options) || options?.type === "two-columns");

  return (
    <>
      {/* Fondo transparente (overlay) */}
      {isActive && (
        <div
          className="fixed inset-0 bg-black/75 z-40 transition-opacity duration-300"
          style={{ top: "4rem" }} // Ajusta la altura del header (ejemplo: 4rem para h-16)
          onClick={close}
          aria-hidden="true" // Indica que este fondo no es interactivo para lectores de pantalla
        ></div>
      )}

      {/* Dropdown principal */}
      <li
        className="relative z-50"
        ref={dropdownRef}
        role="menu"
        aria-haspopup="true"
        aria-expanded={isActive}>
        {/* Botón para abrir/cerrar el menú */}
        <div
          onClick={toggle}
          className="flex items-center text-white hover:text-gray-300 cursor-pointer"
          role="button"
          aria-haspopup="true"
          tabIndex={0} // Permite usar el teclado para activar el botón
        >
          {name}
          {showCaretIcon && (
            <FaCaretDown className="ml-2" title="Menú desplegable" />
          )}
        </div>

        {/* Menú desplegable */}
        {isActive && options && (
          <div
            className={`absolute left-0 mt-4 ${
              options.type === "two-columns" ? "w-[870px]" : "w-48"
            } bg-gray-700 text-white rounded shadow-lg z-50 overflow-hidden transition-transform duration-300 transform ${
              isActive ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            role="menu">
            {/* Caso para dos columnas */}
            {options.type === "two-columns" && (
              <div className="grid grid-cols-[250px_1fr] gap-x-8 p-4">
                {/* Primera columna */}
                <div
                  className="min-w-[200px] border-r border-gray-500 pr-4"
                  role="menuitem">
                  <ul className="space-y-2 text-sm">
                    {options.columns.left.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-600 transition-colors cursor-pointer"
                        tabIndex={0} // Hacer navegable por teclado
                        role="menuitem"
                        onClick={() => alert(`Seleccionaste ${option}`)} // Función de ejemplo
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Segunda columna con título */}
                <div className="min-w-[400px]">
                  <h3 className="text-sm font-semibold py-2 pb-4">GÉNEROS</h3>
                  <ul className="grid grid-cols-3 gap-x-2 gap-y-2 text-sm">
                    {options.columns.right.map((option, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-gray-600 transition-colors cursor-pointer"
                        tabIndex={0}
                        role="menuitem"
                        onClick={() => alert(`Seleccionaste ${option}`)}>
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Caso para menú simple */}
            {Array.isArray(options) && (
              <ul>
                {options.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 text-sm hover:bg-gray-600 transition-colors cursor-pointer"
                    tabIndex={0}
                    role="menuitem"
                    onClick={() => alert(`Seleccionaste ${option}`)}>
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </li>
    </>
  );
};

export default Dropdown;
