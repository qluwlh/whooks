import { useRef } from 'react'

function useConstCallback<T extends (...args: any[]) => any>(callback: T): T {
  const ref = useRef<T>()
  if (!ref.current) {
    ref.current = callback
  }
  return ref.current
}

export default useConstCallback
