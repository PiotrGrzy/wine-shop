import React from "react"
import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import Button from "components/Button"
import Form from "components/Form"
import Input from "components/Input"
import { signUpUser, setLoading } from "userContext/userActions"
import { useUserContext } from "userContext/UserContextProvider"
import { useMedia } from "../../hooks/useMedia"

const SignUpForm = ({ prevLocation }) => {
  const { dispatch, user } = useUserContext()
  const mediaMatch = useMedia("(max-width:530px)")
  console.log(mediaMatch)

  const onSubmit = values => {
    setLoading(dispatch)
    signUpUser(dispatch, values)
  }

  if (user.isSignedIn) {
    navigate(prevLocation)
  }

  return (
    <div>
      <Form onSubmit={onSubmit} grid={!mediaMatch}>
        <Input
          type="text"
          name="firstName"
          validation={{
            required: "First Name is required",
            minLength: 2,
          }}
          label="First Name"
        />
        <Input
          type="text"
          name="lastName"
          validation={{
            required: "Last Name is required",
            minLength: 2,
          }}
          label="Last Name"
        />
        <Input
          type="email"
          name="email"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          }}
          label="Email"
        />
        <Input
          name="country"
          validation={{
            required: "Country is required",
            minLength: 2,
          }}
          label="Country"
        />
        <Input
          name="city"
          validation={{
            required: "City is required",
            minLength: 2,
          }}
          label="City"
        />
        <Input
          name="street"
          validation={{
            required: "Street is required",
            minLength: 2,
          }}
          label="Street"
        />
        <Input
          name="home"
          validation={{
            required: "Home is required",
          }}
          label="Home/Apartment nr"
        />
        <Input
          name="zipCode"
          validation={{
            required: "ZipCode is required",
            minLength: { value: 5, message: "Zipcode too short" },
            pattern: {
              value: /[0-9]/,
              message: "Invalid zipcode number",
            },
          }}
          label="Zip/Postal code"
        />
        <Input
          name="phone"
          validation={{
            required: "Phone number is required",
            minLength: { value: 9, message: "Phone number is too short" },
            pattern: {
              value: /[0-9]/,
              message: "Invalid phone number",
            },
          }}
          label="Phone number"
        />
        <Input
          name="password"
          validation={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 char long",
            },
          }}
          label="Password"
        />

        <Button loading={user.loading} className="form-btn" type="submit">
          Register
        </Button>
        <p className="error-msg">{user.error?.register}</p>

        <Link className="form-link" to="/sign-in">
          Already got an account? Sign in here
        </Link>
      </Form>
    </div>
  )
}

SignUpForm.propTypes = {
  prevLocation: PropTypes.string,
}

export default SignUpForm
