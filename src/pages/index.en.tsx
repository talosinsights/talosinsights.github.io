import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
// Components
import { Seo, Features, Profiles, Spotlights } from '../components'

import { getCurrentLangKey, getLangs, getUrlForLang } from 'ptz-i18n'

export default ({ children, location, i18nMessages }) => {
  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          site {
            siteMetadata {
              title
              languages {
                defaultLangKey
                langs
              }
            }
          }
        }
      `}
      render={data => {
        // const url = location.pathname
        // const { langs, defaultLangKey } = data.site.siteMetadata.languages
        // const langKey = getCurrentLangKey(langs, defaultLangKey, url)
        // const homeLink = `/${langKey}`.replace(`/${defaultLangKey}/`, '/')
        // const title = data.site.siteMetadata.title
        const title = data.site.siteMetadata.title
        return (
          <React.Fragment>
            <html lang="de" />
            <Seo title="Content" description="asd" keywords="asd" />
            <h1>Some {title}</h1>
          </React.Fragment>
        )
      }}
    />
  )
}
