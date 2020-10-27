import { ADD_ITEM, REMOVE_ITEM, CLEAR_CART } from "./cartActionTypes"

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.payload] }

    case REMOVE_ITEM: {
      const newItems = state.filter(item => item.id !== action.payload)
      return newItems
    }
    case CLEAR_CART:
      return []
    default:
      return state
  }
}

export default cartReducer
