import React from "react"
import PropTypes from "prop-types"
import Button from "components/Button"
import Form from "components/Form"
import Input from "components/Input"

const AddressForm = ({ setAddress, closeForm }) => {
  const onSubmit = values => {
    const { firstName, lastName, country, street, home, zipCode, city } = values
    const newAddress = {
      firstName,
      lastName,
      address: { country, street, home, zipCode, city },
    }
    setAddress(newAddress)
    closeForm()
  }

  return (
    <div>
      <Form onSubmit={onSubmit}>
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

        <Button className="form-btn" type="submit">
          Change Address
        </Button>
      </Form>
    </div>
  )
}

AddressForm.propTypes = {
  setAddress: PropTypes.func.isRequired,
  closeForm: PropTypes.func.isRequired,
}

export default AddressForm
