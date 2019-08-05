/** @format */
// @ts-ignore
import * as module from './modules'
import('../assets/sass/main.scss')

// react and gatsby
import React from 'react'
import { graphql } from 'gatsby'

// Components
import { Seo, Features, Profiles, Spotlights } from '../components'
// import theme from '../assets/theme'

import videoBanner from '../assets/images/videos/banner.webm'

import { profile, feature, spotlight } from '../content/index/index'
import logo from '../assets/images/logo-white.svg'

export default () => {
  return (
    <React.Fragment>
      <Seo title="" description="" keywords="" />
      <div id="banner">
        <video
          autoPlay
          loop
          style={{ position: 'absolute', width: '100%', height: '100%' }}
        >
          <source src={videoBanner} type="video/webm" />
        </video>
        <div className="inner">
          <img width="30%" src={logo} />
          <ul className="actions stacked">
            <li>
              <a href="#" className="button large primary">
                KOSTENLOS AUSPROBIEREN
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Die Features */}
      <section className="wrapper">
        <div className="inner">
          <Features feature={feature} />
        </div>
      </section>

      {/* Die Lösung */}

      <section id="two" className="wrapper style1">
        <div className="inner">
          <header className="heading major">
            <h2>Die Lösung</h2>
            <p>Was wir Ihnen Anbieten</p>
          </header>
          <Spotlights spotlight={spotlight} />
        </div>
      </section>

      {/* Das Team */}
      <section id="three" className="wrapper">
        <div className="inner">
          <header className="heading major">
            <h2>Das Team</h2>
            <p>Wir möchten uns vorstellen</p>
          </header>
          <Profiles profile={profile} />
        </div>
      </section>
    </React.Fragment>
  )
}

export const indexQuery = graphql`
  query {
    aka: file(relativePath: { eq: "portrait/aka.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    sts: file(relativePath: { eq: "portrait/sts.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mh: file(relativePath: { eq: "portrait/mh.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    ps: file(relativePath: { eq: "portrait/ps.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
