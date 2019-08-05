import React from 'react'
import { graphql } from 'gatsby'

interface ISpotlight {
  picture: any
  header: string
  subtitle: string
  link?: { link: string; text: string }
}

interface ISpotlights {
  spotlight: ISpotlight[]
}

export default (props: ISpotlights) => (
  <React.Fragment>
    <div className="spotlights">
      {props.spotlight.map((spotlight, index) => {
        const { picture, header, subtitle, link } = spotlight
        return (
          <div className="spotlight" key={index}>
            <article>
              <a href="#" className="image fit">
                <img src={picture} alt="" />
              </a>
              <div className="content">
                <h3>{header}</h3>
                <p>{subtitle}</p>
                <ul className="actions special">
                  <li>
                    <a href="#" className="button primary">
                      Details
                    </a>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        )
      })}
    </div>
  </React.Fragment>
)
