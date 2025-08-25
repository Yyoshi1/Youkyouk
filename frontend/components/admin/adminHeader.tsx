import React from "react";

interface AdminHeaderProps {
  onSearch: (query: string) => void;
  notificationsCount: number;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ onSearch, notificationsCount }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow p-4 flex justify-between items-center z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
        <span className="font-bold text-lg">Youkyouk Admin</span>
      </div>

      {/* Search */}
      <div className="flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full p-2 border rounded"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        {/* Help icon */}
        <button className="p-2 hover:bg-gray-200 rounded">?</button>

        {/* Notifications icon */}
        <div className="relative">
          <button className="p-2 hover:bg-gray-200 rounded">
            🔔
            {notificationsCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-1">
                {notificationsCount}
              </span>
            )}
          </button>
        </div>

        {/* Profile icon */}
        <div className="relative">
          <img
            src="/admin-profile.png"
            alt="Admin"
            className="h-8 w-8 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
