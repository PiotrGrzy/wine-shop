import React from "react"
import styled from "styled-components"
import WineTypesList from "./WineTypesList"

const StyledNav = styled.nav`
  background-color: var(--primary);
`

const BottomNav = () => {
  return (
    <StyledNav>
      <div className="container">
        <WineTypesList />
      </div>
    </StyledNav>
  )
}

export default BottomNav
