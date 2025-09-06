import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4 flex justify-between items-center">
      <p className="text-sm text-gray-500 dark:text-gray-400">
        © 2025 Youkyouk. All rights reserved.
      </p>

      <div className="flex space-x-4">
        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">
          Terms
        </a>
        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">
          Privacy
        </a>
        <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-sm">
          Support
        </a>
      </div>
    </footer>
  )
}

export default Footer
