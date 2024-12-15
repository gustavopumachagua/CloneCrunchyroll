import { FaCaretDown } from "react-icons/fa";
import { useState } from "react";

const Submenu = ({ title, items, isOpen, toggle }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <li className="relative">
      <div
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggle();
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isOpen}
        className={`flex items-center justify-between hover:text-gray-300 cursor-pointer focus:outline-none ${
          isOpen ? "pb-0" : "border-b border-gray-600 pb-2"
        }`}>
        {title}
        <FaCaretDown
          className={`ml-2 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>
      <ul
        className={`pl-4 mt-2 text-gray-400 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        } border-b border-gray-600`}>
        {items.map((item, index) => (
          <li
            key={index}
            className={`hover:text-gray-300 py-1 cursor-pointer ${
              hoveredIndex === index ? "underline" : ""
            }`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Submenu;
