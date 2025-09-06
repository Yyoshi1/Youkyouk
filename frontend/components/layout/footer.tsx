import React from 'react'
import { ChatBubbleLeftEllipsisIcon, GlobeAltIcon } from '@heroicons/react/24/outline'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 p-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left section: copyright */}
        <div className="text-gray-600 dark:text-gray-300 text-sm">
          © {currentYear} Youkyouk. All rights reserved.
        </div>

        {/* Middle section: quick links */}
        <div className="flex space-x-4 text-gray-600 dark:text-gray-300 text-sm">
          <a href="#" className="hover:text-blue-500">Home</a>
          <a href="#" className="hover:text-blue-500">About</a>
          <a href="#" className="hover:text-blue-500">Contact</a>
          <a href="#" className="hover:text-blue-500">Privacy</a>
        </div>

        {/* Right section: icons */}
        <div className="flex space-x-4">
          <button>
            <ChatBubbleLeftEllipsisIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <button>
            <GlobeAltIcon className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
