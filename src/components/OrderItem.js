import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledOrderItem = styled.li`
  display: grid;
  grid-template-columns: 10rem 1fr repeat(5, 5rem);
  align-items: center;
  background-color: var(--white);
  font-size: 1.8rem;
  border: 1px solid var(--misty-rose);
  img {
    height: 10rem;
    width: 100%;
    object-fit: contain;
  }
`

const OrderItem = ({ item }) => {
  const {
    data: { name, price, image },
    count,
  } = item
  const total = count * price
  return (
    <StyledOrderItem>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <button>-</button>
      <span>{count}</span>
      <button>+</button>

      <span>{price}</span>
      <span className="total">{total}</span>
    </StyledOrderItem>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default OrderItem
