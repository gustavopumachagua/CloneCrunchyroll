const Loading = ({ message = "Cargando..." }) => (
  <div className="flex items-center justify-center h-40">
    <p className="text-gray-400">{message}</p>
  </div>
);

export default Loading;
