const MenuItem = ({ title, description, onClick }) => {
  return (
    <div className="mb-6 group cursor-pointer" onClick={onClick}>
      <h3 className="text-lg font-bold group-hover:text-yellow-400 transition duration-300">
        {title}
      </h3>
      <p className="text-sm text-gray-400 group-hover:text-gray-200 transition duration-300">
        {description}
      </p>
    </div>
  );
};

export default MenuItem;
