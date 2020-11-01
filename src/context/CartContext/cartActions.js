import {
  ADD_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM,
  SEND_NEW_ORDER,
} from "./cartActionTypes"

export const addItemToCart = (dispatch, cartItem) => {
  console.log(cartItem)
  dispatch({ type: ADD_ITEM, payload: cartItem })
}

export const decrementItem = (dispatch, itemId) => {
  dispatch({ type: DECREMENT_ITEM, payload: itemId })
}

export const removeItemFromCart = (dispatch, itemId) => {
  dispatch({ type: REMOVE_ITEM, payload: itemId })
}

export const sendNewOrder = (dispatch, order) => {
  dispatch({ type: SEND_NEW_ORDER, payload: order })
}
