import React, { useState } from "react"
import PropTypes from "prop-types"
import { BiCaretDown, BiCaretUp } from "react-icons/bi"
import { StyledDropdown, StyledToggler, Links } from "./styles"

const NavDropdown = ({ children, category, position }) => {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <StyledDropdown>
      <StyledToggler onClick={handleClick}>
        {category} {open ? <BiCaretUp /> : <BiCaretDown />}
      </StyledToggler>

      {open && (
        <Links position={position} onClick={handleClick}>
          {children}
        </Links>
      )}
    </StyledDropdown>
  )
}

NavDropdown.propTypes = {
  children: PropTypes.node,
  category: PropTypes.string,
  position: PropTypes.string,
}

export default NavDropdown
