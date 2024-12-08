const Logo = ({ showText = true, size = "h-6" }) => {
  return (
    <a
      href="/"
      role="link"
      aria-label="Ir a la página principal de Crunchyroll"
      title="Logo de Crunchyroll"
      className="flex items-center text-orange-500 hover:text-white transition-colors group focus:outline-none focus:ring focus:ring-orange-500 focus:ring-offset-2">
      <svg
        className={`logo-icon ${size} fill-current group-hover:fill-white transition-colors duration-500 ease-in-out`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        role="img">
        <path d="M5.818 26.871c.01-11.65 9.466-21.086 21.117-21.073 11.153.01 20.275 8.678 21.022 19.638.028-.467.043-.94.043-1.413C48.014 10.77 37.28.013 24.024 0 10.768-.014.014 10.721 0 23.976-.014 37.23 10.721 47.987 23.976 48c.548 0 1.092-.018 1.63-.054-11.051-.676-19.8-9.856-19.788-21.076Zm32.568.312a8.2 8.2 0 0 1-8.19-8.208 8.204 8.204 0 0 1 5.424-7.71 17.923 17.923 0 0 0-8.375-2.073c-9.95-.01-18.022 8.047-18.032 17.995-.01 9.95 8.047 18.022 17.995 18.033 9.948.01 18.022-8.047 18.032-17.997 0-1.127-.103-2.23-.301-3.301a8.187 8.187 0 0 1-6.554 3.261h.001Z"></path>
      </svg>
      {showText && (
        <span className="ml-2 text-lg font-bold transition-colors duration-500 ease-in-out">
          Crunchyroll
        </span>
      )}
    </a>
  );
};

export default Logo;
