/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const StyledLayout = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyles />

      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <StyledLayout>
        <main>{children}</main>
        <Footer />
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
