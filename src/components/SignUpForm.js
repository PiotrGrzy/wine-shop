import React from "react"
import { Link } from "gatsby"
import Button from "./Button"
import Form from "./Form"
import Input from "./InputForm"
import { signUpUser } from "../context/UserContext/userActions"
import { useUser } from "../context/UserContext/UserContextProvider"

const SignUpForm = () => {
  const { dispatch } = useUser()

  const onSubmit = values => {
    console.log(values)
    signUpUser(dispatch)
  }

  return (
    <div>
      <Form onSubmit={onSubmit} grid={true}>
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

        <Button type="submit">Sign In</Button>
      </Form>
      <Link to="/sign-in">Already got an account? Sign in here</Link>
    </div>
  )
}

export default SignUpForm
