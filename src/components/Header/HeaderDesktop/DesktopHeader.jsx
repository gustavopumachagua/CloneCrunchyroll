import { useState, useEffect } from "react";
import {
  Logo,
  Navigation,
  PremiumIcon,
  Bookmarks,
  UserMenu,
} from "../Navigation/index.js";
import { FaCaretDown } from "react-icons/fa";

import AvatarProfile from "../Navigation/AvatarProfile";
import SearchBar from "../Navigation/SearchBar";
import ProfileMenu from "../../ProfileMenu/ProfileMenu.jsx"; // Importar el menú del perfil
import { getUserData } from "../../../services/userService.js";

const DesktopHeader = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false); // Control del menú de perfil

  // Simulación de inicio de sesión
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = await getUserData();
        if (user) {
          setIsLoggedIn(true);
          setUserData(user);
        }
      } catch (error) {
        console.error("Error al obtener los datos del usuario", error);
      }
    };
    fetchUserData();
  }, []);

  // Bloquear scroll y agregar fondo cuando el menú está abierto
  useEffect(() => {
    if (isProfileMenuOpen) {
      document.body.style.overflow = "hidden"; // Bloquear scroll
    } else {
      document.body.style.overflow = ""; // Restaurar scroll
    }

    // Limpiar al desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, [isProfileMenuOpen]);

  // Función para alternar el menú de perfil
  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Fondo opaco (Overlay) */}
      {isProfileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40"
          onClick={toggleProfileMenu} // Cerrar menú al hacer clic en el fondo
        ></div>
      )}

      <header
        className="fixed top-0 left-0 w-full flex items-center justify-between bg-gray-900 px-8 md:px-20 py-4 text-white shadow-lg z-40"
        role="banner">
        <div
          className="flex justify-start items-center space-x-6 md:space-x-10"
          role="navigation"
          aria-label="Menú principal">
          <Logo />
          <Navigation />
        </div>
        <div className="flex items-center space-x-20 md:space-x-8">
          <div
            role="button"
            aria-label="Modo Premium"
            className="cursor-pointer hover:text-yellow-400 transition-colors duration-200">
            <PremiumIcon />
          </div>
          <div
            role="menu"
            aria-label="Buscar"
            className="cursor-pointer hover:text-green-400 transition-colors duration-200">
            <SearchBar />
          </div>
          <div role="button" aria-label="Marcadores" className="">
            <Bookmarks />
          </div>
          {/* Avatar y menú de perfil */}
          {isLoggedIn ? (
            <div className=" relative flex items-center space-x-1">
              <AvatarProfile user={userData} onClick={toggleProfileMenu} />
              <FaCaretDown
                className="cursor-pointer"
                onClick={toggleProfileMenu}
              />
              {isProfileMenuOpen && (
                <div className="absolute top-full right-0 mt-2 z-50">
                  <ProfileMenu />
                </div>
              )}
            </div>
          ) : (
            <UserMenu />
          )}
        </div>
      </header>
    </>
  );
};

export default DesktopHeader;
