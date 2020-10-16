import React from "react"
import styled from "styled-components"

const StyledInput = styled.div`
  display: flex;

  input {
    flex: 1.5;
    padding: 1rem;
    text-align: center;
    font-size: inherit;
  }

  button {
    font-size: inherit;
    flex: 1;
  }
`

const SetCountInput = () => {
  return (
    <StyledInput>
      <button>+</button>
      <input type="text" placeholder="0" />
      <button>-</button>
    </StyledInput>
  )
}

export default SetCountInput
