import { useCallback, useState } from 'react'

export const useToggle = (initialState: boolean = false): [boolean, any] => {
  const [state, setState] = useState<boolean>(initialState)

  const toggle = useCallback((newState: boolean = false): void => setState(newState), [])
  return [state, toggle]
}
