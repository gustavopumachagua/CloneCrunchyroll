import { useState, useEffect } from "react";
import { PremiumIcon, Logo, UserMenu, SearchBar } from "../Navigation/index";
import { MenuButton, MenuDropdown } from "./index";
import { getUserData } from "../../../services/userService";
import { useAuth } from "../../../context/AuthContext";
import ProfileMenu from "../../ProfileMenu/ProfileMenu";
import { FaCaretDown } from "react-icons/fa";
import AvatarProfile from "../Navigation/AvatarProfile";

const MobileHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      if (isAuthenticated) {
        try {
          const user = await getUserData();
          if (user) {
            setUserData(user);
          }
        } catch (error) {
          console.error("Error al obtener los datos del usuario", error);
        }
      }
    };

    fetchUserData();
  }, [isAuthenticated]);

  useEffect(() => {
    if (isProfileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isProfileMenuOpen]);

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

  const toggleProfileMenu = () => {
    setIsProfileMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      {isProfileMenuOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40"
          onClick={() => setIsProfileMenuOpen(false)}></div>
      )}

      <header className="bg-gray-900 text-white fixed top-0 left-0 w-full z-40 shadow-lg">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-4">
            <MenuButton toggleMenu={toggleMenu} isOpen={menuOpen} />
            <Logo showText={false} />
          </div>
          <div className="flex items-center space-x-6">
            <PremiumIcon showText={false} />
            <SearchBar />
            {isAuthenticated && userData ? (
              <div className="relative flex items-center space-x-1">
                <AvatarProfile user={userData} onClick={toggleProfileMenu} />
                <FaCaretDown
                  className="cursor-pointer"
                  onClick={toggleProfileMenu}
                />
                {isProfileMenuOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 z-50 bg-gray-800 rounded-lg shadow-lg">
                    <ProfileMenu
                      closeProfileMenu={() => setIsProfileMenuOpen(false)}
                    />
                  </div>
                )}
              </div>
            ) : (
              <UserMenu />
            )}
          </div>
        </div>
        {menuOpen && (
          <div
            className={`absolute top-full left-0 w-full bg-gray-800 shadow-lg transform transition-transform duration-300 z-40`}>
            <MenuDropdown closeMenu={closeMenu} />
          </div>
        )}
      </header>
    </>
  );
};

export default MobileHeader;
