import React from "react"
import PropTypes from "prop-types"

const Input = ({ register, name, errors, validation, label, ...rest }) => {
  return (
    <div className="input-container">
      <label htmlFor={name}>{label}</label>
      <input name={name} ref={register(validation)} {...rest} />
      {errors[name] && (
        <p className="validation-error">{errors[name].message}</p>
      )}
    </div>
  )
}

Input.propTypes = {
  register: PropTypes.func,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object,
  validation: PropTypes.object,
  label: PropTypes.string.isRequired,
}

export default Input
