import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import Form from "components/Form"
import Input from "components/Input"
import Button from "components/Button"
import { useUserContext } from "userContext/UserContextProvider"
import { signInUser, setLoading } from "userContext/userActions"

const SignInForm = ({ prevLocation }) => {
  const { dispatch, user } = useUserContext()

  const onSubmit = values => {
    setLoading(dispatch)
    signInUser(dispatch, values)
  }

  if (user.isSignedIn) {
    navigate(prevLocation)
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

SignInForm.propTypes = {
  prevLocation: PropTypes.string,
}

export default SignInForm
