import React from "react"
import PropTypes from "prop-types"
import { StyledAddress } from "./styles"

const ShipmentAddress = ({ userData }) => {
  const {
    firstName,
    lastName,
    address: { country, street, home, zipCode, city },
  } = userData
  return (
    <StyledAddress>
      <div className="title">Shipment Address</div>
      <div className="name">
        <span>Name: </span> {firstName} {lastName}
      </div>
      <div className="country">
        <span>Country: </span>
        {country}
      </div>
      <div className="city">
        <span>City: </span>
        {city}
      </div>
      <div className="street">
        <span>Street: </span> {street}
      </div>
      <div className="home">
        <span>Home Nr: </span> {home}
      </div>
      <div className="posta-code">
        <span>Postal code: </span> {zipCode}
      </div>
    </StyledAddress>
  )
}

ShipmentAddress.propTypes = {
  userData: PropTypes.object.isRequired,
}

export default ShipmentAddress
