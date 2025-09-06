// frontend/app/app.tsx
import React, { useState, useEffect } from 'react'
import Sidebar from '../components/layout/Sidebar'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SearchModal from '../components/dashboard/SearchModal'
import DashboardPage from '../pages/dashboard'

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar كامل مطابق للينيار */}
      <Sidebar />

      <div className="flex-1 flex flex-col">
        {/* Header مع مفتاح الوضع الفاتح/الداكن */}
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />

        {/* Search Modal يظهر عند Ctrl+E */}
        <SearchModal />

        {/* Main Dashboard */}
        <main className="p-6 flex-1 overflow-auto">
          <DashboardPage />
        </main>

        {/* Footer مطابق للينيار */}
        <Footer />
      </div>
    </div>
  )
}

export default App
