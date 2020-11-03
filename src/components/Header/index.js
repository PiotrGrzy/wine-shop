import PropTypes from "prop-types"
import React from "react"
import BottomNav from "./BottomNav"
import TopNav from "./TopNav"
import { StyledHeader } from "./styles"

const Header = ({ siteTitle }) => {
  return (
    <>
      <StyledHeader>
        <TopNav siteTitle={siteTitle} />
        <BottomNav />
      </StyledHeader>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
