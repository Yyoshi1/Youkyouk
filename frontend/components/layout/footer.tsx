import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-700 p-4 text-center text-sm text-gray-500 dark:text-gray-400">
      <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
        <span>© 2025 Youkyouk. All rights reserved.</span>
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <a href="#" className="hover:underline">
          Terms of Service
        </a>
        <a href="#" className="hover:underline">
          Contact
        </a>
      </div>
    </footer>
  )
}

export default Footer
