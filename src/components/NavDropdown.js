import React, { Children, useState } from "react"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"

const StyledDropdown = styled.div`
  position: relative;
`

const Links = styled.div`
  position: absolute;
  bottom: -4rem;
`

const NavDropdown = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleHover = () => {
    console.log("hover!")
    setOpen(!open)
  }
  return (
    <StyledDropdown>
      <StyledLink onMouseEnter={handleHover} onMouseLeave={handleHover}>
        Regions{" "}
      </StyledLink>

      {open && <Links>{children}</Links>}
    </StyledDropdown>
  )
}

export default NavDropdown
