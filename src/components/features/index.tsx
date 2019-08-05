import React from 'react'

interface IFeature {
  header: string
  subtitle: string
  longtext: string
  link?: { link: string; text: string }
}

interface IFeatures {
  feature: IFeature[]
}

export default (props: IFeatures) => (
  <React.Fragment>
    <div className="features">
      {props.feature.map((feature, index) => {
        return (
          <div className="feature" key={index}>
            <header className="heading">
              <h2>{feature.header}</h2>
              <p>{feature.subtitle}</p>
            </header>
            <p>{feature.longtext}</p>
            {feature.link ? (
              <ul className="actions special">
                <li>
                  <a href="#" className="button primary">
                    Learn More
                  </a>
                </li>
              </ul>
            ) : (
              ''
            )}
          </div>
        )
      })}
    </div>
  </React.Fragment>
)
