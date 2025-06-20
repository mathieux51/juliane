// hooks/useClickOutside.ts
import React from 'react'

export default function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  callback: () => void,
): void {
  const callbackRef =
    React.useRef<(evt: MouseEvent) => void | undefined>(undefined)
  callbackRef.current = callback

  const handleClick = React.useCallback(
    (evt: MouseEvent) => {
      if (ref.current && !ref.current.contains(evt.target as Node)) {
        callbackRef.current?.(evt)
      }
    },
    [ref],
  )

  React.useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return () => document.removeEventListener('click', handleClick, true)
  }, [handleClick])
}
