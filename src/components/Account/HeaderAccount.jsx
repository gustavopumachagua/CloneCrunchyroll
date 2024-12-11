import Logo from "../Header/Navigation/Logo";

const HeaderAccount = () => {
  return (
    <header
      className=" fixed top-0  w-full flex items-center justify-center bg-gray-900 px-8 md:px-20 py-4 text-white shadow-lg z-50"
      role="banner">
      <div role="navigation" aria-label="Menú principal">
        <Logo />
      </div>
    </header>
  );
};

export default HeaderAccount;
