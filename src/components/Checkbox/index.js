import React from "react"
import PropTypes from "prop-types"
import { FaCheck } from "react-icons/fa"

import { StyledCheckboxWrapper, StyledCheckbox, HiddenCheckbox } from "./styles"

const Checkbox = ({ title, state, ...rest }) => {
  return (
    <StyledCheckboxWrapper>
      <label htmlFor="alt-address">
        <HiddenCheckbox id="alt-address" checked={state} {...rest} />
        <span>{title}</span>
        <StyledCheckbox checked={state}>
          {state && <FaCheck color="var(--secondary)" />}
        </StyledCheckbox>
      </label>
    </StyledCheckboxWrapper>
  )
}

Checkbox.propTypes = {
  title: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
}

export default Checkbox
