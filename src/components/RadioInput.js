import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledRadioButton = styled.label`
  display: grid;
  grid-template-columns: 1fr 7rem;
  align-items: center;
  align-content: center;
  height: 5rem;
  position: relative;
  padding: 1rem;
  padding-left: 4rem;
  margin: 1rem;
  cursor: pointer;
  font-size: 1.8rem;
  user-select: none;
  background-color: var(--white);
  border: 2px solid ${props => (props.active ? "var(--wisteria)" : "#a0a0a0")};
  border-radius: 5px;
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
  }
  .checkmark {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    height: 1.8rem;
    width: 1.8rem;
    background-color: #eee;
    border-radius: 50%;
  }
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  input:checked ~ .checkmark {
    background-color: var(--wisteria);
  }
  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
    left: 0.4rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: white;
  }
  input:checked ~ .checkmark:after {
    display: block;
  }
`

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
