import React from "react"
import { Link } from "gatsby"
import { navigate } from "@reach/router"
import Form from "components/Form"
import Input from "components/Input"
import Button from "components/Button"
import { useUser } from "userContext/UserContextProvider"
import { signInUser, setLoading } from "userContext/userActions"

const SignInForm = () => {
  const { dispatch, user } = useUser()

  const isWindow = window !== undefined

  const onSubmit = values => {
    setLoading(dispatch)
    signInUser(dispatch, values)
    // if (
    //   isWindow &&
    //   window.location.pathname !== "/order" &&
    //   !user.error?.login
    // ) {
    //   navigate(-1)
    // }
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
        <Button type="submit" loading={user.loading}>
          Sign In
        </Button>
        {user.error?.login ? (
          <p className="validation-error">{user.error.login}</p>
        ) : (
          <p></p>
        )}
        <Link to="/sign-up">Dont have an account? Register here</Link>
      </Form>
    </>
  )
}

export default SignInForm
