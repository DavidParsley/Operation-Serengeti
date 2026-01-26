import { useState, useRef, useEffect } from "react";


export default function LanguageSelector({ isSolid }){
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setOpen(!open);
  const closeDropdown = () => setOpen(false);

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    if (open) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  const handleLanguageChange = (lang) => {
    console.log("Language selected:", lang);
    closeDropdown();
    // You can also set state to track selected language
  };

  return (
    <div className="relative ml-6" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className={`flex items-center text-lg font-medium transition ${
          isSolid ? "text-gray-800" : "text-white"
        }`}
      >
        English (US)
        <svg
          className="ml-1 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.67l3.71-3.48a.75.75 0 111.04 1.08l-4.24 4a.75.75 0 01-1.04 0l-4.24-4a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg z-50">
          <ul className="py-2 text-sm text-gray-700">
            <li>
              <button
                onClick={() => handleLanguageChange("en")}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src="https://flagcdn.com/us.svg"
                  className="w-4 h-4 rounded-full mr-2"
                  alt="English"
                />
                English (US)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange("de")}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src="https://flagcdn.com/de.svg"
                  className="w-4 h-4 rounded-full mr-2"
                  alt="Deutsch"
                />
                Deutsch
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange("it")}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src="https://flagcdn.com/it.svg"
                  className="w-4 h-4 rounded-full mr-2"
                  alt="Italiano"
                />
                Italiano
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange("zh")}
                className="flex items-center w-full px-4 py-2 hover:bg-gray-100"
              >
                <img
                  src="https://flagcdn.com/cn.svg"
                  className="w-4 h-4 rounded-full mr-2"
                  alt="中文"
                />
                中文 (繁體)
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
