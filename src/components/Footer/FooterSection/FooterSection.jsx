const FooterSection = ({ title, items }) => {
  return (
    <div>
      {/* Título a la izquierda en móviles y escritorio */}
      <h3 className="text-lg font-bold mb-4 text-left">{title}</h3>

      {/* Alineación para móviles */}
      <ul className="space-y-2 md:text-left text-right ">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2  justify-start text-gray-400 hover:text-white">
            {item.icon && item.icon} {/* Ícono opcional */}
            {typeof item === "string" ? item : item.name} {/* Texto del ítem */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
