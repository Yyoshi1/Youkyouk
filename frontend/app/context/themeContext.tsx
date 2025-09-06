import React, { createContext, useState, useEffect, ReactNode } from 'react'

interface ThemeContextProps {
  darkMode: boolean
  toggleDarkMode: () => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  darkMode: false,
  toggleDarkMode: () => {},
})

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme) setDarkMode(savedTheme === 'true')
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
    if (darkMode) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode((prev) => !prev)

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
