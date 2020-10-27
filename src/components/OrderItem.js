import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MdRemoveCircleOutline } from "react-icons/md"
import {
  addItemToCart,
  decrementItem,
  removeItemFromCart,
} from "../context/CartContext/cartActions"
import { useCart } from "../context/CartContext/CartContextProvider"

const StyledOrderItem = styled.li`
  display: grid;
  grid-template-columns: 10rem 1fr repeat(6, 5rem);
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
  const { dispatch } = useCart()

  const {
    data: { name, price, image, id },
    count,
  } = item

  const total = count * price

  return (
    <StyledOrderItem>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <button onClick={() => decrementItem(dispatch, id)}>-</button>
      <span>{count}</span>
      <button
        onClick={() => addItemToCart(dispatch, { data: item.data, count: 1 })}
      >
        +
      </button>

      <span>{price}</span>
      <span className="total">{total}</span>
      <button onClick={() => removeItemFromCart(dispatch, id)}>
        <MdRemoveCircleOutline color="orange" />
      </button>
    </StyledOrderItem>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default OrderItem
