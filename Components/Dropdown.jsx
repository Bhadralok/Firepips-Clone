import { useEffect, useRef, useState } from "react";

export default function Dropdown({
  isOpen,
  onClose,
  items,
  position = "right-2",
  style,
  icon,
}) {
  const [activeIndex, setActiveIndex] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  const baseStyle = `${position} absolute  bg-white text-secondary-black rounded-[20px] shadow-lg`;
  return (
    <div className={` ${style} ${baseStyle}`} ref={dropdownRef}>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className={`px-4 py-2 whitespace-nowrap cursor-pointer font-medium flex gap-4 justify-between items-center hover:bg-gray-100 ${
              item.className || ""
            }`}
            onClick={() => {
              setActiveIndex(index);
              if (item.onClick) item.onClick();
              onClose(item);
            }}
          >
            {item.icon && (
              <img src={item.icon} alt="" className="inline mr-2" />
            )}
            {item.label}
            {activeIndex === index && icon && <span>{icon}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}
