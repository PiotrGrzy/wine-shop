import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import Form from "./Form"
import Input from "./InputForm"
import Button from "./Button"
import { useUser } from "../context/UserContext/UserContextProvider"
import { signInUser } from "../context/UserContext/userActions"

const SignInForm = () => {
  const { dispatch } = useUser()

  const isWindow = window !== undefined

  const onSubmit = values => {
    console.log(values)
    signInUser(dispatch)
    if (isWindow && window.location.pathname !== "/order") {
      navigate(-1)
    }
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Input
          type="email"
          name="email"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid email address",
            },
          }}
          label="Email"
        />
        <Input
          type="password"
          name="password"
          validation={{
            required: "Password is required",
          }}
          label="Password"
        />
        <Button type="submit">Sign In</Button>
        <Link to="/sign-up">Dont have an account? Register here</Link>
      </Form>
    </>
  )
}

export default SignInForm
