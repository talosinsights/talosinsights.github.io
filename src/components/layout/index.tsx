/** @format */

// React and Libarys
import React from 'react'
// import { graphql } from 'gatsby'
// import { ThemeProvider } from 'styled-components'
// import GlobalStyle from './globalStyle'

// Theme
// import theme from '../../assets/theme'
// import {darkTheme as theme} from '../../assets/theme'
// Containers

// import navItems from '../../routes/routes'

// import Logo from '../../assets/images/logo.svg'
// import LogoFooter from '../../assets/images/logo-footer.svg'

import Footer from './footer'

export default class Layout extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  render() {
    const { children } = this.props
    return (
      <React.Fragment>
        <header id="header">
          <a className="logo" href="index.html">
            TΛLΘS
          </a>
          <nav>
            <a href="#menu">Menu</a>
          </nav>
        </header>

        <nav id="menu">
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="generic.html">Generic</a>
            </li>
            <li>
              <a href="elements.html">Elements</a>
            </li>
          </ul>
        </nav>
        <main>{children}</main>
        <Footer />
        {/* <GlobalStyle />
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Header logo={Logo} navigation={<Navigation links={navItems} />} />
            <main style={{background: theme.colors.background}}>{children}</main>
            <Footer links={navItems} logo={LogoFooter} />
          </React.Fragment>
        </ThemeProvider> */}
      </React.Fragment>
    )
  }
}
