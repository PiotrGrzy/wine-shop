import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const StyledAddress = styled.div`
  background-color: var(--white);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  margin-bottom: 1rem;
  justify-items: left;
  align-items: center;
  grid-template-areas:
    "title title"
    "name country"
    "city street"
    "home postal-code";
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--primary);
  border: 2px solid var(--secondary);
  border-radius: 5px;
  span {
    font-weight: 400;
  }
  .title {
    grid-area: title;
    font-size: 2.2rem;
  }
  .name {
    grid-area: name;
  }
  .country {
    grid-area: country;
  }
  .city {
    grid-area: city;
  }
  .street {
    grid-area: street;
  }
  .home {
    grid-area: home;
  }
  .postal-code {
    grid-area: postal-code;
  }
`

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
