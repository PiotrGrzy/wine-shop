import React from "react"
import styled from "styled-components"
import Button from "./Button"
import { useUser } from "../context/UserContext/UserContextProvider"
import { signInUser } from "../context/UserContext/userActions"

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  align-items: center;
  justify-content: center;
`

const SignInForm = () => {
  const { dispatch } = useUser()
  return (
    <StyledForm>
      <label htmlFor="email">
        Email:
        <input id="email" type="email" />
      </label>
      <label htmlFor="password">
        Password:
        <input id="email" type="password" />
      </label>
      <Button onClick={() => signInUser(dispatch)}>Sign In</Button>
    </StyledForm>
  )
}

export default SignInForm
