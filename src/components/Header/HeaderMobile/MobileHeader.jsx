import { useState, useEffect } from "react";
import { PremiumIcon, SearchBar, UserMenu, Logo } from "../Navigation/index";
import { MenuButton, MenuDropdown } from "./index";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => {
      const newState = !prev;
      document.body.style.overflow = newState ? "hidden" : "";
      return newState;
    });
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest("header") && !event.target.closest("nav")) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-40 shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <MenuButton toggleMenu={toggleMenu} isOpen={menuOpen} />
          <Logo showText={false} />
        </div>
        <div className="flex items-center space-x-4">
          <PremiumIcon showText={false} />
          <SearchBar />
          <UserMenu />
        </div>
      </div>
      {menuOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-gray-800 shadow-lg transform transition-transform duration-300 z-40`}>
          <MenuDropdown closeMenu={closeMenu} />
        </div>
      )}
    </header>
  );
};

export default MobileHeader;
