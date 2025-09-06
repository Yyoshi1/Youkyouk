import { redirect } from 'next/navigation'

export default function Home() {
  // Redirect to Youkyouk dashboard by default
  redirect('/dashboard')
  return null
}
