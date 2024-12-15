const FooterSection = ({ title, items }) => {
  return (
    <div className="footer-section">
      <h3 className="footer-title text-xl font-bold mb-4">{title}</h3>
      <ul className="footer-list">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2  justify-start text-gray-400 hover:text-white">
                {item.icon && item.icon}
                {item.name}
              </a>
            ) : (
              <button
                onClick={item.onClick}
                className="flex items-center gap-2  justify-start text-gray-400 hover:text-white">
                {item.icon && item.icon}
                {typeof item === "string" ? item : item.name}
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;
