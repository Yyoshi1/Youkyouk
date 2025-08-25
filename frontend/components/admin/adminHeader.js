import React, { useState } from "react";
import Image from "next/image";
import { FaBell, FaQuestionCircle, FaSun, FaMoon } from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const AdminHeader: React.FC = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, text: "New seller joined", read: false },
    { id: 2, text: "Order #1234 placed", read: true },
    { id: 3, text: "Payment failed for #1235", read: false },
  ]);
  const [language, setLanguage] = useState("EN");
  const [theme, setTheme] = useState("light");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [notifDropdownOpen, setNotifDropdownOpen] = useState(false);

  const toggleReadAll = () => {
    setNotifications(notifications.map(n => ({ ...n, read: true })));
  };

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md flex items-center justify-between px-6 py-3">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={120} height={40} />
      </div>

      {/* Center: Search */}
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-full rounded border px-4 py-2 focus:outline-none focus:ring focus:border-blue-300"
        />
      </div>

      {/* Right: Icons and Profile */}
      <div className="flex items-center space-x-4 relative">
        
        {/* Help Icon */}
        <button className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600">
          <FaQuestionCircle size={24} />
        </button>

        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setNotifDropdownOpen(!notifDropdownOpen)}
            className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <FaBell size={24} />
            {notifications.some(n => !n.read) && (
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full"></span>
            )}
          </button>

          {/* Notification dropdown */}
          {notifDropdownOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-gray-700 shadow-lg rounded border border-gray-200 dark:border-gray-600 overflow-hidden">
              {/* Horizontal tabs */}
              <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-600">
                <button className="px-4 py-2 whitespace-nowrap">Unread</button>
                <button className="px-4 py-2 whitespace-nowrap">Read</button>
                <button
                  className="px-4 py-2 whitespace-nowrap text-red-600"
                  onClick={toggleReadAll}
                >
                  Mark all as read
                </button>
              </div>
              {/* Vertical notifications */}
              <div className="max-h-64 overflow-y-auto">
                {notifications.map(n => (
                  <div
                    key={n.id}
                    className={`px-4 py-2 border-b border-gray-100 dark:border-gray-600 ${
                      n.read ? "bg-gray-100 dark:bg-gray-600" : "bg-white dark:bg-gray-700"
                    }`}
                  >
                    {n.text}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600"
          >
            <Image
              src="/admin-avatar.png"
              alt="Admin"
              width={32}
              height={32}
              className="rounded-full"
            />
            <MdArrowDropDown size={24} />
          </button>

          {profileDropdownOpen && (
            <div className="absolute right-0 mt-2 w-60 bg-white dark:bg-gray-700 shadow-lg rounded border border-gray-200 dark:border-gray-600 overflow-hidden">
              <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-600">
                <p className="font-semibold">Admin Name</p>
                <p className="text-sm text-gray-500">admin@example.com</p>
              </div>
              <div className="px-4 py-2">
                {/* Language Selector */}
                <div className="mb-2">
                  <label className="text-sm font-medium">Language</label>
                  <select
                    value={language}
                    onChange={e => setLanguage(e.target.value)}
                    className="w-full mt-1 rounded border px-2 py-1 focus:outline-none focus:ring"
                  >
                    <option value="EN">English</option>
                    <option value="FR">French</option>
                    <option value="AR">Arabic</option>
                  </select>
                </div>
                {/* Theme toggle */}
                <div className="mb-2 flex items-center space-x-2">
                  <span>Theme:</span>
                  <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    {theme === "light" ? <FaMoon /> : <FaSun />}
                  </button>
                </div>
                {/* Role switch */}
                <div className="mb-2">
                  <label className="text-sm font-medium">Switch Role</label>
                  <select className="w-full mt-1 rounded border px-2 py-1 focus:outline-none focus:ring">
                    <option value="marketAdmin">Market Admin</option>
                    <option value="modelAdmin">Model Admin</option>
                    <option value="seller">Seller</option>
                  </select>
                </div>
                {/* Profile link */}
                <button className="w-full text-left px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                  Profile
                </button>
                {/* Logout */}
                <button className="w-full text-left px-2 py-1 hover:bg-gray-200 dark:hover:bg-gray-600 rounded">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </header>
  );
};

export default AdminHeader;
