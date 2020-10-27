import { ADD_ITEM } from "./cartActionTypes"

export const addItemToCart = (dispatch, cartItem) => {
  console.log(cartItem)
  dispatch({ type: ADD_ITEM, payload: cartItem })
}
