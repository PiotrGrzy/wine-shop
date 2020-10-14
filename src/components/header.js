import { Link } from "gatsby"

import PropTypes from "prop-types"
import React from "react"
import { GiWineBottle } from "react-icons/gi"
import styled from "styled-components"
import Navbar from "./Navbar"

const StyledHeader = styled.header`
  width: 100%;
  background-color: var(--dark-byzantium);
  padding: 3rem;
  display: flex;
  /* box-shadow: 0px 2px 5px 0px var(--dark-byzantium); */
  h1 {
    font-size: 2.8rem;
    color: var(--misty-rose);
  }
`

const StyledIcon = styled(GiWineBottle)`
  color: var(--misty-rose);
`

const Header = ({ siteTitle }) => (
  <>
    <StyledHeader>
      <div className="container">
        <h1>
          <StyledIcon />
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </StyledHeader>
    <Navbar />
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
