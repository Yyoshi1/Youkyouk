import React from 'react'
import { HeartIcon } from '@heroicons/react/24/solid'

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-4 px-6 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 flex justify-center items-center">
      <span>
        Made with <HeartIcon className="w-4 h-4 text-red-500 inline-block mx-1" /> by Youkyouk Team
      </span>
    </footer>
  )
}

export default Footer
