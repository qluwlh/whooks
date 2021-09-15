import React, { useCallback, useState } from 'react'

function useModal<T = undefined, O = undefined>() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<T | undefined>(undefined)
  const [options, setOptions] = useState<O | undefined>(undefined)
  const open = useCallback(
    (item?: T, opt?: O) => {
      setIsOpen(true)
      item && setCurrentItem(item)
      opt && setOptions(opt)
    },
    [setIsOpen, setCurrentItem, setOptions]
  )
  const close = useCallback(() => {
    setIsOpen(false)
    setCurrentItem(undefined)
    setOptions(undefined)
  }, [setIsOpen, setCurrentItem, setOptions])
  return { isOpen, open, close, currentItem, options }
}

export default useModal
