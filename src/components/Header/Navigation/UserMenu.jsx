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

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={toggleMenu}
        className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-500"
        aria-expanded={isOpen}
        aria-controls="user-menu">
        <FiUser size={22} title="Menú de la cuenta" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/75 z-40 transition-opacity duration-300"
          style={{ top: "4rem" }}
          onClick={close}
          aria-hidden="true"></div>
      )}

      {isOpen && (
        <div
          id="user-menu"
          ref={menuRef}
          className="fixed top-16 right-0  bg-gray-900 z-50 overflow-y-auto shadow-lg border border-gray-700 animate-slide-down"
          style={{
            height: "calc(100vh - 4rem)",
          }}>
          <AccountMenu />
        </div>
      )}
    </div>
  );
};

export default UserMenu;
