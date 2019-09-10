/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";

import Header from "./header"

import { css } from "@emotion/core"
import styled from "@emotion/styled"

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 1.5em;
`

const ContentWrapper = styled.div`
  display: flex;

  flex-flow: column wrap;
  justify-content: center;
  
  width: 900px;
  max-width: 900px;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
      file(relativePath: { eq: "icon.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    }
  `)

  return (
    <PageWrapper>
      <ContentWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        
        <div>
          <main>
            {children}
          </main>
        </div>
        
        <footer css={css`align-self: center;`}>
          <h5 css={css`margin: 1em; padding: 0;`}>© {new Date().getFullYear()} HAFIZH ADI PRASETYA</h5>
        </footer>
        <Img css={css`align-self: center; margin: 0; padding: 0;`} fixed={data.file.childImageSharp.fixed} />
      </ContentWrapper>
    </PageWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
