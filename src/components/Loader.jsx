import { FaSpinner } from "react-icons/fa";

const Loader = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
    <FaSpinner className="animate-spin text-4xl" />
    <span className="ml-4 text-lg">Cargando...</span>
  </div>
);

export default Loader;
