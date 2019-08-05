import React from 'react'
import { graphql } from 'gatsby'

interface IProfile {
  picture: any
  name: string
  title: string
  subtitle: string
}

interface IProfiles {
  profile: IProfile[]
}

export default props => (
  <React.Fragment>
    <div className="profiles">
      {props.profile.map((profile, index) => {
        return (
          <div className="profile" key={index}>
            <div className="image">
              <img
                src={profile.picture}
                alt={profile.name}
                className="image-portrait"
                style={{ maxWidth: '160px' }}
              />
            </div>
            <header className="heading">
              <h3>{profile.name}</h3>
              <p>{profile.title}</p>
            </header>
            <p>{profile.subtitle}</p>
            <ul className="icons">
              <li>
                <a href="#" className="icon brands fa-facebook-f">
                  <span className="label">Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-twitter">
                  <span className="label">Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="icon brands fa-linkedin-in">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
        )
      })}
    </div>
  </React.Fragment>
)

export const indexQuery = graphql`
  query {
    aka: file(relativePath: { eq: "portrait/aka.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
// sts: file(relativePath: { eq: "portrait/sts.jpg" }) {
// 	childImageSharp {
// 	  fluid(maxWidth: 1920) {
// 		...GatsbyImageSharpFluid
// 	  }
// 	}
//   }
//   mh: file(relativePath: { eq: "portrait/mh.jpg" }) {
// 	childImageSharp {
// 	  fluid(maxWidth: 1920) {
// 		...GatsbyImageSharpFluid
// 	  }
// 	}
//   }
//   ps: file(relativePath: { eq: "portrait/ps.jpg" }) {
// 	childImageSharp {
// 	  fluid(maxWidth: 1920) {
// 		...GatsbyImageSharpFluid
// 	  }
// 	}
//   }
