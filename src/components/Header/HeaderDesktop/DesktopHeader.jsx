import {
  Logo,
  Navigation,
  PremiumIcon,
  SearchBar,
  Bookmarks,
  UserMenu,
} from "../Navigation/index";

const DesktopHeader = () => {
  return (
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
      <div className="flex items-center space-x-20 md:space-x-10">
        <div
          role="button"
          aria-label="Modo Premium"
          className="cursor-pointer hover:text-yellow-400 transition-colors duration-200">
          <PremiumIcon />
        </div>
        <div
          role="search"
          className="cursor-pointer hover:text-blue-400 transition-colors duration-200">
          <SearchBar />
        </div>
        <div role="button" aria-label="Marcadores" className="">
          <Bookmarks />
        </div>
        <div
          role="menu"
          aria-label="Menú de usuario"
          className="cursor-pointer hover:text-green-400 transition-colors duration-200">
          <UserMenu />
        </div>
      </div>
    </header>
  );
};

export default DesktopHeader;
