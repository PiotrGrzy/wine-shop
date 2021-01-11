import React, { useState } from "react"
import ShipmentAddress from "./ShipmentAddress"
import AddressForm from "./AddressForm"
import { shippingMethods } from "consts/shippingMethods"
import SignInForm from "components/SignInForm"
import RadioGroup from "components/RadioGroup"
import Button from "components/Button"
import Checkbox from "components/Checkbox"
import { paymentMethods } from "consts/paymentMethods"
import { sendNewOrder, setLoading } from "cartContext/cartActions"
import { useCartContext } from "cartContext/CartContextProvider"
import { useUserContext } from "userContext/UserContextProvider"
import { StyledSummary } from "./styles"

const OrderSummary = () => {
  const [payment, setPayment] = useState("credit-card")
  const [shipment, setShipment] = useState("courier")
  const [useDifferentAddress, setUseDifferentAddress] = useState(false)
  const [address, setAddress] = useState(null)

  const { dispatch, cart } = useCartContext()
  const { user } = useUserContext()

  const shipmentAddress = address || user.userData

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
      <ShipmentAddress userData={shipmentAddress} />
      <Checkbox
        title="Change shipment address?"
        state={useDifferentAddress}
        onChange={() => setUseDifferentAddress(!useDifferentAddress)}
      />
      {useDifferentAddress && (
        <AddressForm
          setAddress={setAddress}
          closeForm={() => setUseDifferentAddress(!useDifferentAddress)}
        />
      )}
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
