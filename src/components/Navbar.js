import React from "react"
import styled from "styled-components"
import CountryList from "./ContryList"
import WineTypesList from "./WineTypesList"

const StyledNav = styled.nav`
  width: 100%;
  div {
    width: 100%;
    padding: 0.5rem;
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
      <div className="types">
        <div className="container">
          <WineTypesList />
        </div>
      </div>
      <div className="countries">
        <div className="container">
          <CountryList />
        </div>
      </div>
    </StyledNav>
  )
}

export default Navbar
