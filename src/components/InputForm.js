import React from "react"

export default function InputForm({
  register,
  name,
  errors,
  validation,
  label,
  ...rest
}) {
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
