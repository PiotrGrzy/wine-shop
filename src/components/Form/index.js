import React from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form"
import StyledForm from "./styles"

const Form = ({ children, onSubmit, grid = false }) => {
  const methods = useForm({ mode: "onBlur" })
  const { handleSubmit, errors } = methods

  return (
    <StyledForm grid={grid} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                errors,
                key: child.props.name,
              },
            })
          : child
      })}
    </StyledForm>
  )
}

Form.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func.isRequired,
  grid: PropTypes.bool,
}

export default Form
