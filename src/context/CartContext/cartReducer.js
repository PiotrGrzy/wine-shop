import {
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_CART,
  DECREMENT_ITEM,
  SEND_NEW_ORDER,
} from "./cartActionTypes"

const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const itemIndex = state.items.findIndex(
        item => item.data.id === action.payload.data.id
      )
      if (itemIndex < 0) {
        return { ...state, items: [...state.items, action.payload] }
      } else {
        const newCount = state.items[itemIndex].count + action.payload.count
        const newItems = state.items.map(item => {
          return item.data.id === action.payload.data.id
            ? { ...item, count: newCount }
            : item
        })

        return { ...state, items: newItems }
      }
    }
    case DECREMENT_ITEM: {
      const item = state.items.find(item => item.data.id === action.payload)
      if (item.count - 1 < 1)
        return {
          ...state,
          items: state.items.filter(item => item.data.id !== action.payload),
        }
      else {
        const newCount = item.count - 1
        return {
          ...state,
          items: state.items.map(item => {
            return item.data.id === action.payload
              ? { ...item, count: newCount }
              : item
          }),
        }
      }
    }

    case REMOVE_ITEM: {
      const newItems = state.items.filter(
        item => item.data.id !== action.payload
      )
      return { ...state, items: newItems }
    }
    case CLEAR_CART:
      return { ...state, items: [] }
    default:
      return state
  }
}

export default cartReducer
