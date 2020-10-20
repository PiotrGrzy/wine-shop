import React from "react"
import OrderItem from "../components/OrderItem"
import OrderSummary from "../components/OrderSummary"
import styled from "styled-components"

const StyledOrder = styled.div`
  display: flex;
  margin-top: 2rem;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.6);
`

const Order = () => {
  const orderItems = [
    {
      id: "sasnajasij",
      name: "Wine 1",
      price: 39.5,
      count: 2,
      thumbnail:
        "https://images.vivino.com/thumbs/2hIdJVLGS-uhFe2O-oNghg_pb_x300.png",
    },
    {
      id: "sasnaja32323sij",
      name: "Wine 2",
      price: 19.5,
      count: 1,
      thumbnail:
        "https://images.vivino.com/thumbs/2hIdJVLGS-uhFe2O-oNghg_pb_x300.png",
    },
    {
      id: "sasnajaswwwwwwwij",
      name: "Wine 3",
      price: 92,
      count: 3,
      thumbnail:
        "https://images.vivino.com/thumbs/2hIdJVLGS-uhFe2O-oNghg_pb_x300.png",
    },
  ]

  return (
    <div className="container">
      <StyledOrder>
        <ol>
          {orderItems.map(item => (
            <OrderItem key={item.id} item={item} />
          ))}
        </ol>
        <OrderSummary />
      </StyledOrder>
    </div>
  )
}

export default Order
