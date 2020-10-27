import React from "react"
import Layout from "./src/components/Layout"
import CartContextProvider from "./src/context/CartContext/CartContextProvider"

export function wrapPageElement({ element, props }) {
  return (
    <CartContextProvider>
      <Layout {...props}>{element}</Layout>
    </CartContextProvider>
  )
}
