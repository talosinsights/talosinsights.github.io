/** @format */

import React, {FunctionComponent} from 'react'
import Helmet from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'

interface IProps {
  title: string
  description: string
  keywords: string
}

const seo: FunctionComponent<IProps> = ({title, description, keywords}) => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const siteMetadata = data.site.siteMetadata
        return (
          <Helmet
            title={`${siteMetadata.title} | ${title}`}
            meta={[
              {name: 'description', content: description || siteMetadata.description},
              {name: 'keywords', content: keywords || siteMetadata.keywords},
            ]}>
            <html lang="de" />
          </Helmet>
        )
      }}
    />
  )
}
export default seo

const detailsQuery = graphql`
  query DefaultSEOQueryy {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
