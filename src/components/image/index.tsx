/** @format */

import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useWindowSize } from '../../hooks/windowWidth'

interface IImage {
  src: any
  alt?: any
  style?: any
  width?: any
}

const Image = (props: IImage) => {
  const { windowWidth } = useWindowSize()
  const { src, alt } = props
  const width = props.width
    ? windowWidth > 768
      ? props.width[1]
      : props.width[0]
    : '100%'
  const style = { width, ...props.style }
  return (
    <React.Fragment>
      <Img fluid={src} alt={alt} style={style} />
    </React.Fragment>
  )
}
export default Image
