import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MdRemoveCircleOutline } from "react-icons/md"
import { TiPlus, TiMinus } from "react-icons/ti"
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
  font-size: 1.4rem;
  border: 1px solid var(--secondary-light);
  img {
    height: 10rem;
    width: 100%;
    object-fit: contain;
  }
  span {
    text-align: center;
  }
`
const StyledButton = styled.button`
  outline: none;
  &:focus,
  &:active {
    border: 1px solid var(--primary-light);
  }
`

const OrderItem = ({ item }) => {
  const { dispatch } = useCart()

  const {
    data: { name, price, image, id },
    count,
  } = item

  const total = (count * price).toFixed(2, 10)

  return (
    <StyledOrderItem>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <StyledButton onClick={() => decrementItem(dispatch, id)}>
        <TiMinus />
      </StyledButton>
      <span>{count}</span>
      <StyledButton
        onClick={() => addItemToCart(dispatch, { data: item.data, count: 1 })}
      >
        <TiPlus />
      </StyledButton>
      <span>{price}</span>
      <span>{total}</span>
      <StyledButton onClick={() => removeItemFromCart(dispatch, id)}>
        <MdRemoveCircleOutline color="orange" />
      </StyledButton>
    </StyledOrderItem>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default OrderItem
