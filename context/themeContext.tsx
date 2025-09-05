// /context/ThemeContext.tsx
import { createContext, useState, useContext, ReactNode, useEffect } from 'react'

type Theme = 'light' | 'dark'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

interface ThemeProviderProps {
  children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')

  // Load saved theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('youkyouk-theme') as Theme | null
    if (savedTheme) setTheme(savedTheme)
  }, [])

  // Update body class and localStorage on theme change
  useEffect(() => {
    document.documentElement.classList.remove(theme === 'light' ? 'dark' : 'light')
    document.documentElement.classList.add(theme)
    localStorage.setItem('youkyouk-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

// Custom hook for easy access
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
