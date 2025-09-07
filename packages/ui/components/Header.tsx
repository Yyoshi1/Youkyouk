import React from 'react';
import { QuickSearch } from './QuickSearch';
import { UserDropdown } from './UserDropdown';

export const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow">
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Youkyouk" className="h-8 w-8" />
        <span className="font-bold text-xl text-gray-900 dark:text-white">Youkyouk</span>
      </div>
      <div className="flex-1 px-4">
        <QuickSearch />
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405M19 13V6a2 2 0 00-2-2H7a2 2 0 00-2 2v7m14 0l-1.405 1.405M5 17h5" />
          </svg>
        </button>
        <UserDropdown />
      </div>
    </header>
  );
};
