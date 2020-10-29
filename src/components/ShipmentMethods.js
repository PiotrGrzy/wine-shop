import React from "react"

import { FaDhl } from "react-icons/fa"
import { BsPersonSquare } from "react-icons/Bs"
import inpostLogo from "../images/inpots-logo.png"
import mailLogo from "../images/poczta-polska_logo.png"

const Method = ({ value, shipment, onChange, children }) => {
  return (
    <>
      <input
        type="radio"
        name="shipment"
        id={value}
        value={value}
        checked={shipment === value}
        onChange={onChange}
      />
      <label htmlFor={value}>{children}</label>
    </>
  )
}

const ShipmentMethods = ({ shipment, setShipment }) => {
  const handleChange = e => {
    setShipment(e.target.value)
  }
  return (
    <div>
      <form>
        <input
          type="radio"
          name="shipment"
          id="courier"
          value="courier"
          checked={shipment === "courier"}
          onChange={handleChange}
        />
        <label htmlFor="courier">
          Courier <FaDhl />
        </label>
        <input
          type="radio"
          name="shipment"
          id="personal"
          value="personal"
          checked={shipment === "personal"}
          onChange={handleChange}
        />
        <label htmlFor="personal">
          Personal <BsPersonSquare />
        </label>
        <input
          type="radio"
          name="shipment"
          id="inpots"
          value="inpots"
          checked={shipment === "inpots"}
          onChange={handleChange}
        />
        <label htmlFor="inpots">
          Inpost <img src={inpostLogo} alt="Inpost Delivery" width="50" />
        </label>
        <input
          type="radio"
          name="shipment"
          id="mail"
          value="mail"
          checked={shipment === "mail"}
          onChange={handleChange}
        />
        <label htmlFor="mail">
          Mail Inpost <img src={mailLogo} alt="Poczta Polska" width="50" />
        </label>
        <Method value="DHL" shipment={shipment} onChange={handleChange}>
          Mail <img src={mailLogo} alt="Poczta Polska" width="50" />
        </Method>
      </form>
    </div>
  )
}

export default ShipmentMethods
