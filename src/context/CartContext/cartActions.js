import { api } from "../../api"

import {
  ADD_ITEM,
  CLEAR_CART,
  DECREMENT_ITEM,
  REMOVE_ITEM,
  SEND_NEW_ORDER_FAIL,
  SEND_NEW_ORDER_SUCCESS,
  SET_LOADING,
} from "./cartActionTypes"

export const setLoading = dispatch => {
  dispatch({ type: SET_LOADING })
}

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
  try {
    const response = await api.post("/order", order)
    console.log(response.data)
    dispatch({ type: SEND_NEW_ORDER_SUCCESS, payload: response.data })
  } catch (err) {
    const errMsg = err.response ? err.response.data.msg : "Order sent failed"
    dispatch({ type: SEND_NEW_ORDER_FAIL, payload: errMsg })
  }
}
