/** @format */

import React from 'react'
import {Image} from 'rebass'

interface ISvgImage {
  m?: string
  mWidth?: string | number
  dWidth?: string | number
  borderRadius?: number
  p?: string
  src: any
}

const SvgImage = (props: ISvgImage) => {
  const {mWidth, dWidth, m, borderRadius, p, src} = props
  const margin = m ? m : 'auto'
  const padding = p ? p : '0px 0px 0px 0px'
  const mobileWidth = mWidth ? mWidth : '150px'
  const desktopWidth = dWidth ? dWidth : 1
  const width = [mobileWidth, desktopWidth]
  return (
    <React.Fragment>
      <Image p={padding} m={margin} width={width} src={src} borderRadius={borderRadius ? borderRadius : 0} />
    </React.Fragment>
  )
}
export default SvgImage
