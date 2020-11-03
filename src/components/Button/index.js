import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./styles"

const Button = ({ children, ...props }) => {
  return (
    <StyledButton {...props}>
      <span>{children}</span>
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
}

export default Button
