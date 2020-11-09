import React, { useState } from "react"
import ShipmentAddress from "./ShipmentAddress"
import SignInForm from "components/SignInForm"
import RadioGroup from "components/RadioGroup"
import Button from "components/Button"
import { shippingMethods } from "consts/shippingMethods"
import { paymentMethods } from "consts/paymentMethods"
import { sendNewOrder, setLoading } from "cartContext/cartActions"
import { useCart } from "cartContext/CartContextProvider"
import { useUser } from "userContext/UserContextProvider"
import { StyledSummary } from "./styles"

const OrderSummary = () => {
  const [payment, setPayment] = useState("credit-card")
  const [shipment, setShipment] = useState("courier")
  const [address, setAddress] = useState(null)

  const { dispatch, cart } = useCart()
  const { user } = useUser()

  const handleOrderSubmit = () => {
    setLoading(dispatch)

    const Order = {
      items: cart.items,
      userId: user.userData._id,
      paymentMethod: payment,
      shipmentMethod: shipment,
      isPaid: false,
      isSent: false,
      isDelivered: false,
      shipmentAddress: address ? address : user.userData.address,
    }

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
      <Button
        loading={cart.loading}
        css="width:95%;margin:2rem auto;"
        onClick={handleOrderSubmit}
      >
        Submit Order
      </Button>
      <p className="error-msg">{cart.error?.order}</p>
    </StyledSummary>
  )
}

export default OrderSummary
