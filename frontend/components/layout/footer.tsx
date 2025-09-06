// frontend/components/layout/Footer.tsx
import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 px-6 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
      <div>
        © {new Date().getFullYear()} Youkyouk. All rights reserved.
      </div>
      <div className="flex space-x-4">
        <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
          About
        </a>
        <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
          Privacy
        </a>
        <a href="#" className="hover:text-gray-700 dark:hover:text-gray-200">
          Terms
        </a>
      </div>
    </footer>
  )
}

export default Footer
