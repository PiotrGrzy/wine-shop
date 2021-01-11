import React from "react"
import PropTypes from "prop-types"
import { MdRemoveCircleOutline } from "react-icons/md"
import { TiPlus, TiMinus } from "react-icons/ti"
import {
  addItemToCart,
  decrementItem,
  removeItemFromCart,
} from "cartContext/cartActions"
import { useCartContext } from "cartContext/CartContextProvider"
import { StyledOrderButton, StyledOrderItem } from "./style"

const OrderItem = ({ item }) => {
  const { dispatch } = useCartContext()

  const {
    data: { name, price, image, id },
    count,
  } = item

  const total = (count * price).toFixed(2, 10)

  return (
    <StyledOrderItem>
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <StyledOrderButton onClick={() => decrementItem(dispatch, id)}>
        <TiMinus />
      </StyledOrderButton>
      <span>{count}</span>
      <StyledOrderButton
        onClick={() => addItemToCart(dispatch, { data: item.data, count: 1 })}
      >
        <TiPlus />
      </StyledOrderButton>
      <span>{price}</span>
      <span>{total}</span>
      <StyledOrderButton onClick={() => removeItemFromCart(dispatch, id)}>
        <MdRemoveCircleOutline color="orange" />
      </StyledOrderButton>
    </StyledOrderItem>
  )
}

OrderItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default OrderItem
