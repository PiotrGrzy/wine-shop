import React from "react"
import PropTypes from "prop-types"
import "normalize.css"
import { useStaticQuery, graphql } from "gatsby"
import GlobalStyles from "styles/GlobalStyles"
import Header from "components/Header"
import Footer from "./Footer"
import { StyledLayout } from "./styles"

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
