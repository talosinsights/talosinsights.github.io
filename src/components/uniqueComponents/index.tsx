/** @format */

import React from 'react'
import styled from 'styled-components'
interface IHomeScreen {
  variant: 'h1' | 'h2' | 'h3' | 'title' | 'p'
}

const HomeScreen = (props: IHomeScreen) => {
  const {variant} = props
  return (
    <React.Fragment>
      {variant === 'title' ? (
        <h1 />
      ) : variant === 'h1' ? (
        <h1 />
      ) : variant === 'h2' ? (
        <h2 />
      ) : variant === 'h3' ? (
        <h3 />
      ) : variant === 'p' ? (
        <p />
      ) : (
        <div />
      )}
    </React.Fragment>
  )
}
export default HomeScreen
