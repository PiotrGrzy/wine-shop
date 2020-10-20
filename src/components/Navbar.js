import React from "react"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"
import CountryList from "./ContryList"
import WineTypesList from "./WineTypesList"

const StyledNav = styled.nav`
  div {
    width: 100%;
    padding: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .types {
    background-color: var(--dark-purple);
  }
  .countries {
    background-color: var(--misty-rose);
  }
`

const Navbar = () => {
  return (
    <StyledNav>
      <div className="container types">
        <WineTypesList />
      </div>
      <div className="container countries">
        <CountryList />
      </div>
    </StyledNav>
  )
}

export default Navbar
