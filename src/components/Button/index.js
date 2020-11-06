import React from "react"
import PropTypes from "prop-types"
import { StyledButton } from "./styles"

const Button = ({ children, loading, ...props }) => {
  return (
    <StyledButton {...props} disabled={loading}>
      {loading ? <div className="spinner"></div> : <>{children}</>}
    </StyledButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  loading: PropTypes.bool,
}

export default Button
