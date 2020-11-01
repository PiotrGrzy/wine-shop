import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import BottomNav from "./BottomNav"

import TopNav from "./TopNav"

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--primary-light);
  h1 {
    font-size: 2.4rem;
    color: var(--secondary-light);
  }
`

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
