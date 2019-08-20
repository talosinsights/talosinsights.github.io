/** @format */

// React and Libarys
import React from 'react'
import { Link } from 'gatsby'
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

export default class Layout extends React.Component<
  { any },
  { newurl: String }
> {
  constructor(props) {
    super(props)
    this.state = {
      newurl: ''
    }
  }

  componentDidUpdate(prevProps) {
    const url = location.pathname
    if (!url.includes('en')) {
      console.log(`/en${url}`)
      this.setState({ newurl: `/en${url}` })
    }
    // else {
    //   console.log(url.replace('/en', ''))
    //   this.setState({ newurl: url.replace('/en', '') })
    // }

    // console.log('update', prevProps)
  }

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
        <p>asdasdsssas</p>
        <Link to="/en/page2" style={{ fontFamily: 'none' }}>
          page en2
        </Link>
        <Link to="/page2" style={{ fontFamily: 'none' }}>
          page
        </Link>

        {/* <p>{this.state.newurl}</p> */}
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
