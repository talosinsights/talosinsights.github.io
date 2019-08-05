/** @format */

// /** @format */

import React from 'react'
import { graphql } from 'gatsby'
// import VierNullVier from '../assets/images/illustrations/404.svg'

// Containers

export default props => (
  <React.Fragment>
    404
    {/* <Container height={[700]}>
      <Content
        titleAlign={'center'}
        title={'Falsche Seite'}
        image={{
          src: (
            <SvgImage
              src={props.data.VierNullVier.childImageSharp.fluid}
              dWidth={700}
            />
          ),

          // src: <SvgImage src={VierNullVier} dWidth={700} />,
          type: 'svg'
        }}
      />
    </Container> */}
  </React.Fragment>
)
export const indexQuery = graphql`
  query {
    VierNullVier: file(relativePath: { eq: "illustrations/404.svg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
