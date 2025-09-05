// /components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="w-full bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-4 py-3 text-center text-sm text-gray-500 dark:text-gray-400">
      &copy; {new Date().getFullYear()} Youkyouk. All rights reserved.
    </footer>
  )
}

export default Footer
