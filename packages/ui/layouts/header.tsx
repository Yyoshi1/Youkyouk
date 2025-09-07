import React, { useState } from "react";
import { useRouter } from "next/router";

export const Header: React.FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [profileOpen, setProfileOpen] = useState(false);

  const handleProfileToggle = () => setProfileOpen(!profileOpen);

  const handleSearchKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.ctrlKey && e.key === "e") {
      e.preventDefault();
      document.getElementById("searchInput")?.focus();
    }
  };

  const logout = () => {
    // 
    localStorage.removeItem("youkyouk_license");
    router.push("/license");
  };

  return (
    <header className="flex justify-between items-center p-4 bg-white dark:bg-gray-900 shadow">
      {/* */}
      <div className="relative">
        <span
          className="font-bold text-xl cursor-pointer"
          onClick={handleProfileToggle}
        >
          Youkyouk
        </span>
        {profileOpen && (
          <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 border rounded shadow w-56 z-50">
            <ul>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Settings</li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Invite / Manage Members</li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">Switch Workspaces</li>
              <li className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer" onClick={logout}>Logout</li>
            </ul>
          </div>
        )}
      </div>

      {/* */}
      <div className="flex-1 mx-4">
        <input
          id="searchInput"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleSearchKey}
          placeholder="Search..."
          className="w-full border rounded px-3 py-2 dark:bg-gray-700 dark:text-white"
        />
      </div>

      {/* */}
      <div className="flex items-center space-x-4">
        <button className="relative">
          <span className="material-icons text-gray-700 dark:text-white cursor-pointer">notifications</span>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
        </button>

        {/* */}
        <select className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white">
          <option value="en">EN</option>
          <option value="fr">FR</option>
          <option value="ar">AR</option>
        </select>

        {/* */}
        <button onClick={handleProfileToggle} className="w-8 h-8 rounded-full bg-gray-300 dark:bg-gray-700"></button>
      </div>
    </header>
  );
};
