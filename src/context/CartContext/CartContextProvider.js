import React, { createContext, useReducer, useContext } from "react"
import PropTypes from "prop-types"
import cartReducer from "./cartReducer"

const CartContext = createContext()
const initialValue = {
  items: [],
}

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialValue)
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("No context provided")
  }
  return context
}

CartContextProvider.propTypes = {
  children: PropTypes.node,
}
