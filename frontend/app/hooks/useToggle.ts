import { useState, useCallback } from 'react'

export const useToggle = (initial: boolean = false) => {
  const [state, setState] = useState(initial)
  const toggle = useCallback(() => setState((s) => !s), [])
  return [state, toggle] as const
}
