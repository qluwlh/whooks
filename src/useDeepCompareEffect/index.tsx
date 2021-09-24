import { useEffect, useState, useRef } from 'react'
import type { EffectCallback, DependencyList } from 'react'
import isEqual from 'fast-deep-equal/react'

function useDeepCompareEffect(effect: EffectCallback, deps?: DependencyList | undefined) {
  const signal = useRef(0)
  const prevDeps = useRef(deps)
  if (!isEqual(prevDeps.current, deps)) {
    signal.current++
  }
  prevDeps.current = deps
  useEffect(effect, [signal.current])
}

export default useDeepCompareEffect
