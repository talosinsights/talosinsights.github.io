/** @format */
import React from 'react'

let defaultHeight
let defaultWidth

if (typeof window !== `undefined`) {
  defaultHeight = window.innerHeight
  defaultWidth = window.innerWidth
}

export const useWindowSize = () => {
  const [dimensions, setDimensions] = React.useState({
    windowHeight: defaultHeight,
    windowWidth: defaultWidth,
  })

  React.useEffect(() => {
    const handler = () =>
      setDimensions({
        windowHeight: window.innerHeight,
        windowWidth: window.innerWidth,
      })

    window.addEventListener(`resize`, handler)
    return () => window.removeEventListener(`resize`, handler)
  }, [])

  return dimensions
}
