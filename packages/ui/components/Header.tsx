// packages/ui/components/Header.tsx
import React, { useState, useEffect } from "react";
import QuickSearch from "./QuickSearch";
import UserDropdown from "./UserDropdown";
import { FaBell, FaEnvelope, FaMoon, FaSun } from "react-icons/fa";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  //  Ctrl + E 
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key.toLowerCase() === "e") {
        e.preventDefault();
        setShowSearchModal(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closeSearchModal = () => setShowSearchModal(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow relative">
      {/* */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Youkyouk" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-900 dark:text-white">Youkyouk</span>
      </div>

      {/*  QuickSearch */}
      <div className="flex-1 px-4 flex justify-center relative">
        {showSearchModal && (
          <div
            className="absolute inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50"
            onClick={closeSearchModal}
          >
            <div
              className="bg-white dark:bg-gray-900 p-4 rounded shadow-lg w-1/2"
              onClick={(e) => e.stopPropagation()}
            >
              <QuickSearch />
            </div>
          </div>
        )}
      </div>

      {/*  */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleDarkMode} className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaEnvelope />
        </button>
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <FaBell />
        </button>
        <UserDropdown />
      </div>
    </header>
  );
};

export default Header;
