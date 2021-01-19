import React from "react"
import PropTypes from "prop-types"
import RadioInput from "./RadioInput"
import { StyledTitle } from "./styles"

const RadioGroup = ({ state, setState, title, options }) => {
  const handleChange = e => {
    setState(e.target.value)
  }

  return (
    <div>
      <StyledTitle>{title}</StyledTitle>
      {options.map(method => (
        <RadioInput
          key={method.value}
          value={method.value}
          state={state}
          onChange={handleChange}
        >
          {method.label} {method.icon}
        </RadioInput>
      ))}
    </div>
  )
}

RadioGroup.propTypes = {
  state: PropTypes.string.isRequired,
  setState: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default RadioGroup
