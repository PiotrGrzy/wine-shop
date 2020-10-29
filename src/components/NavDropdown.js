import React, { useState } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import StyledLink from "../styles/StyledLink"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"

const StyledDropdown = styled.div`
  position: relative;
  color: var(--misty-rose);
`

const StyledToggler = styled.button`
  display: block;
  font-size: 2rem;
  color: ${({ color }) => color};
  transition: color 0.2s;
  text-transform: capitalize;
  border-bottom: 1px solid transparent;
  padding: 0.5rem 0;
  &:hover {
    color: var(--white);
  }
  &[aria-current] {
    color: var(--white);
    border-bottom: 1px solid var(--white);
  }
`

const Links = styled.div`
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
  transform: translateY(100%);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: min(80rem, 90vw);
  padding: 1rem;

  background-color: var(--misty-rose);
`

const NavDropdown = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    console.log("hover!")
    setOpen(!open)
  }
  return (
    <StyledDropdown>
      <StyledToggler onClick={handleClick}>
        Regions {open ? <BiCaretUp /> : <BiCaretDown />}
      </StyledToggler>

      {open && <Links onClick={handleClick}>{children}</Links>}
    </StyledDropdown>
  )
}

NavDropdown.propTypes = {
  children: PropTypes.node,
}

export default NavDropdown
