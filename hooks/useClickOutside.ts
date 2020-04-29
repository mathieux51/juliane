import React from 'react'

const useClickOutide = (
  ref: React.RefObject<HTMLElement>,
  callback: () => void
): void => {
  const callbackRef: React.MutableRefObject<
    ((evt: MouseEvent) => void) | undefined
  > = React.useRef()
  callbackRef.current = callback

  const handleClick = React.useCallback(
    (evt: MouseEvent) => {
      if (
        ref.current &&
        evt.target &&
        !ref.current.contains(evt.target as HTMLElement)
      ) {
        callbackRef.current && callbackRef.current(evt)
      }
    },
    [ref]
  )
  React.useEffect(() => {
    document.addEventListener('click', handleClick, true)
    return (): void => document.removeEventListener('click', handleClick, true)
  }, [handleClick])
}

export default useClickOutide
