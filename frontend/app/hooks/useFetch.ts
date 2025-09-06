import { useState, useEffect } from 'react'
import api from '../utils/api'

export const useFetch = <T = unknown>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    api.get(endpoint)
      .then((res) => {
        if (isMounted) setData(res.data)
      })
      .catch((err) => {
        if (isMounted) setError(err.message || 'Error fetching data')
      })
      .finally(() => {
        if (isMounted) setLoading(false)
      })
    return () => { isMounted = false }
  }, [endpoint])

  return { data, loading, error }
}
