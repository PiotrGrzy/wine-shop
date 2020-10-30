import React, { useState } from "react"
import styled from "styled-components"
import { useCart } from "../context/CartContext/CartContextProvider"
import { useUser } from "../context/UserContext/UserContextProvider"
import ShipmentAddress from "./ShipmentAddress"
import SignInForm from "./SignInForm"
import RadioGroup from "./RadioGroup"
import { shippingMethods } from "../consts/shippingMethods"
import { paymentMethods } from "../consts/paymentMethods"

const StyledSummary = styled.div`
  flex: 4;
  padding: 2rem;
  background-color: var(--white);
  h5 {
    font-size: 3rem;
  }
`

const OrderSummary = () => {
  const [payment, setPayment] = useState("credit-card")
  const [shipment, setShipment] = useState("courier")

  const { cart } = useCart()
  const { user } = useUser()
  console.log("payment:", payment)
  console.log("shipment:", shipment)

  if (!user.isSignedIn) return <SignInForm />

  return (
    <StyledSummary>
      <ShipmentAddress userData={user.userData} />
      <RadioGroup
        state={shipment}
        setState={setShipment}
        title="Shipping options:"
        options={shippingMethods}
      />
      <RadioGroup
        state={payment}
        setState={setPayment}
        title="Payment options:"
        options={paymentMethods}
      />
    </StyledSummary>
  )
}

export default OrderSummary
