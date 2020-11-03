import React, { useState } from "react"
import PropTypes from "prop-types"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import { StyledDropdown, StyledToggler, Links } from "./styles"

const NavDropdown = ({ children }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
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
