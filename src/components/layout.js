import React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "../styles/GlobalStyles"
import Header from "./Header"
import Footer from "./Footer"
import styled from "styled-components"

const StyledLayout = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
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

      <StyledLayout>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
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
