import { useEffect, useState } from 'react'

interface Option {}

function useHooksName(options: Option) {
  const {} = options
  const [state, setState] = useState()
  useEffect(() => {
    return () => {}
  }, [])
  return { state, setState }
}

export default useHooksName
