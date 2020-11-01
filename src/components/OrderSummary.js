import React, { useState } from "react"
import styled, { css } from "styled-components"
import { useCart } from "../context/CartContext/CartContextProvider"
import { useUser } from "../context/UserContext/UserContextProvider"
import ShipmentAddress from "./ShipmentAddress"
import SignInForm from "./SignInForm"
import RadioGroup from "./RadioGroup"
import Button from "./Button"
import { shippingMethods } from "../consts/shippingMethods"
import { paymentMethods } from "../consts/paymentMethods"
import { sendNewOrder } from "../context/CartContext/cartActions"

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
  const [address, setAddress] = useState(null)

  const { dispatch, cart } = useCart()
  const { user } = useUser()

  const handleOrderSubmit = () => {
    const Order = {
      items: cart.items,
      user: user.userData,
      payment,
      shipment,
      isPaid: false,
      isSent: false,
      isDelivered: false,
      shipmentAddress: address ? address : user.userData.address,
    }
    console.log(Order)
    sendNewOrder(dispatch, Order)
  }

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
      <Button css="width:95%;margin:2rem auto;" onClick={handleOrderSubmit}>
        Submit Order
      </Button>
    </StyledSummary>
  )
}

export default OrderSummary
