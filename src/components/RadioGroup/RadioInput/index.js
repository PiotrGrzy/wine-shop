import React from "react"
import PropTypes from "prop-types"
import { StyledRadioButton } from "./styles"

const RadioInput = ({ value, state, onChange, children }) => {
  return (
    <>
      <StyledRadioButton htmlFor={value} active={state === value}>
        <input
          type="radio"
          name={state}
          id={value}
          value={value}
          checked={state === value}
          onChange={onChange}
        />

        {children}
        <span className="checkmark"></span>
      </StyledRadioButton>
    </>
  )
}

RadioInput.propTypes = {
  value: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default RadioInput
