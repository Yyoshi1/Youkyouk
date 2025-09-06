import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-4">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {/* Links */}
        <div className="flex space-x-4 text-gray-600 dark:text-gray-300 text-sm">
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <a href="#" className="hover:underline">Help</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <div className="text-gray-500 dark:text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Youkyouk. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
