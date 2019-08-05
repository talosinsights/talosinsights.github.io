/** @format */

import React, {FunctionComponent} from 'react'
import Helmet from 'react-helmet'
import {graphql, StaticQuery} from 'gatsby'

interface IProps {
  title: string
  description: string
  keywords: string
}

export const Seo: FunctionComponent<IProps> = ({title, description, keywords}) => {
  return (
    <React.Fragment></React.Fragment>
    // <StaticQuery
    //   query={detailsQuery}
    //   render={data => {
    //     const siteMetadata = data.site.siteMetadata
    //     return (
    //       <Helmet
    //         title={`${siteMetadata.title} | ${title}`}
    //         meta={[
    //           {name: 'description', content: description || siteMetadata.description},
    //           {name: 'keywords', content: keywords || siteMetadata.keywords},
    //         ]}>
    //         <html lang="de" />
    //       </Helmet>
    //     )
    //   }}
    // />
  )
}

// const detailsQuery = graphql`
//   query DefaultSEOQueryy {
//     site {
//       siteMetadata {
//         title
//         description
//         author
//       }
//     }
//   }
// `
