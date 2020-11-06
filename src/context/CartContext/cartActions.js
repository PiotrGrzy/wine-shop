import axios from "axios"

import {
  ADD_ITEM,
  CLEAR_CART,
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

export const sendNewOrder = async (dispatch, order) => {
  const options = {
    url: `${process.env.GATSBY_API_URL}/order`,
    method: "post",
    withCredentials: true,
    data: order,
  }

  try {
    const response = await axios(options)

    console.log(response.data)
    dispatch({ type: CLEAR_CART })
  } catch (err) {
    console.log(err)
  }
}
