import React, { useState } from "react"
import styled from "styled-components"
import { useCart } from "../context/CartContext/CartContextProvider"
import { useUser } from "../context/UserContext/UserContextProvider"
import ShipmentAddress from "./ShipmentAddress"
import SignInForm from "./SignInForm"
import PaymentMethods from "./PaymentMethods"
import ShipmentMethods from "./ShipmentMethods"

const StyledSummary = styled.div`
  flex: 1;
  padding: 2rem;
  h5 {
    font-size: 3rem;
  }
`

const OrderSummary = () => {
  const [payment, setPayment] = useState("credit-card")
  const [shipment, setShipment] = useState("courier")

  const { cart } = useCart()
  const { user } = useUser()

  if (!user.isSignedIn) return <SignInForm />

  return (
    <StyledSummary>
      <ShipmentAddress userData={user.userData} />
      <PaymentMethods payment={payment} setPayment={setPayment} />
      <ShipmentMethods shipment={shipment} setShipment={setShipment} />

      <p>Chosen payment: {payment}</p>
      <p>Chosen shipment: {shipment}</p>
    </StyledSummary>
  )
}

export default OrderSummary
