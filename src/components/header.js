import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"
import BottomNav from "./BottomNav"

import TopNav from "./TopNav"

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--primary-light);
  background: -webkit-linear-gradient(
    to right,
    var(--primary),
    var(--primary-light),
    var(--primary)
  );
  background: linear-gradient(
    to right,
    var(--primary),
    var(--primary-light),
    var(--primary)
  );
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
