// /pages/_app.tsx
import '../styles/tailwind.css'
import type { AppProps } from 'next/app'
import { AppProvider } from '../contexts/AppContext'
import { ProjectModal } from '../components/modals'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      {/* Modals globally */}
      <ProjectModal />
      {/* TaskModal, TeamModal */}
    </AppProvider>
  )
}

export default MyApp
