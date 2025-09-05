// /pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/layout/Header'
import Sidebar from '../components/layout/Sidebar'
import Footer from '../components/layout/Footer'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Youkyouk Dashboard</title>
        <meta name="description" content="Youkyouk – Project Management System" />
      </Head>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">
            <h1 className="text-2xl font-bold">Welcome to Youkyouk</h1>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              This is your project management dashboard, fully compatible with Youkyouk design.
            </p>
            {/* محتوى إضافي للصفحة الرئيسية */}
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default Home
