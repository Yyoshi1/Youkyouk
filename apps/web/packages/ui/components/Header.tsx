import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="flex justify-between items-center mb-6">
      <div className="text-xl font-semibold">{title}</div>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-2 py-1"
        />
        <button className="px-3 py-1 bg-blue-500 text-white rounded">
          New
        </button>
      </div>
    </header>
  );
};
