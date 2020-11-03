import React from "react"
import OrderItem from "components/OrderItem"
import OrderSummary from "components/OrderSummary"
import styled from "styled-components"
import { useCart } from "cartContext/CartContextProvider"
import SEO from "components/SEO"

const StyledOrder = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.6);

  ol {
    flex: 5;
    margin-right: 2rem;
    box-shadow: var(--box-shadow);
    background-color: var(--white);
  }
  .total {
    margin-top: 1rem;
    padding: 2rem;
    background-color: var(--white);
    text-align: right;
    font-size: 2rem;
    border: 1px solid var(--secondary-light);
  }
`

const Order = () => {
  const { cart } = useCart()

  const total = cart.items.reduce((total, item) => {
    return (total += item.count * item.data.price)
  }, 0)

  return (
    <>
      <SEO title="Order Details" />
      <div className="container">
        <StyledOrder>
          <ol>
            {cart.items.map(item => (
              <OrderItem key={item.data.id} item={item} />
            ))}
            <p className="total">
              Total with taxes: {total.toFixed(2, 10)} PLN
            </p>
          </ol>
          <OrderSummary />
        </StyledOrder>
      </div>
    </>
  )
}

export default Order
