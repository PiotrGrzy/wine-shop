import React, { useState } from "react"
import OrderItem from "../components/OrderItem"
import OrderSummary from "../components/OrderSummary"
import styled from "styled-components"
import { useCart } from "../context/CartContext/CartContextProvider"

const StyledOrder = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.6);
  ol {
    padding: 2rem;
    flex: 1;
  }
`

const Order = () => {
  const { cart } = useCart()

  return (
    <div className="container">
      <StyledOrder>
        <ol>
          {cart.items.map(item => (
            <OrderItem key={item.data.id} item={item} />
          ))}
        </ol>
        <OrderSummary />
      </StyledOrder>
    </div>
  )
}

export default Order
