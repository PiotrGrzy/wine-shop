import React from "react"
import styled from "styled-components"

const StyledAddress = styled.div`
  background-color: var(--white);
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1rem;
  justify-items: center;
  align-items: center;
  grid-template-areas:
    "title title"
    "name country"
    "city street"
    "home postal-code";
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--dark-purple);
  span {
    font-weight: 400;
  }
  .title {
    grid-area: title;
    font-size: 2.4rem;
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
    phone,
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

export default ShipmentAddress
